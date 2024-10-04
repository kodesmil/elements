import { FileUploader, StorageImage } from '@aws-amplify/ui-react-storage'
import {
  Button,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  LoadingSpinner,
  Small,
} from '@covision/elements/atoms'
import { remove } from 'aws-amplify/storage'
import { clsx } from 'clsx'
import { useFormContext } from 'react-hook-form'

export type KsPictureFieldProps = {
  formField: string
  formLabel?: string
  formDescription?: string
  className?: string
  pictureStoragePath?: string
}

export const KsPictureField = ({
  formLabel,
  formField,
  formDescription,
  className,
  pictureStoragePath = 'media/blog-posts-pictures',
}: KsPictureFieldProps) => {
  const form = useFormContext()
  return (
    <div className={className}>
      <FormField
        control={form.control}
        name={formField}
        render={({ field }) => {
          const defaultFile = field.value
          return (
            <FormItem>
              {formLabel && <FormLabel>{formLabel}</FormLabel>}
              <FileUploader
                acceptedFileTypes={['image/*']}
                path={({ identityId }) =>
                  `${pictureStoragePath}/${identityId}/`
                }
                defaultFiles={
                  defaultFile && defaultFile.length > 0
                    ? [
                        {
                          key: defaultFile,
                        },
                      ]
                    : []
                }
                maxFileCount={1}
                processFile={async ({ file }) => {
                  const fileExtension = file.name.split('.').pop()
                  return file
                    .arrayBuffer()
                    .then((buffer: ArrayBuffer) =>
                      window.crypto.subtle.digest('SHA-1', buffer)
                    )
                    .then((buffer: ArrayBuffer) => {
                      const hashArray = Array.from(new Uint8Array(buffer))
                      const hashHex = hashArray
                        .map((a) => a.toString(16).padStart(2, '0'))
                        .join('')
                      return { file, key: `${hashHex}.${fileExtension}` }
                    })
                }}
                onFileRemove={async (key) => {
                  form.setValue(formField, '')
                  try {
                    await remove({
                      path: ({ identityId }) =>
                        `${pictureStoragePath}/${identityId}/${key.key}`,
                    })
                  } catch (_error) {}
                }}
                showThumbnails={true}
                onUploadSuccess={(key) => {
                  if (key?.key) {
                    form.setValue(formField, key.key)
                  }
                }}
                components={{
                  Container({ children }) {
                    return <div>{children}</div>
                  },
                  FileListHeader() {
                    return <div />
                  },
                  DropZone({ children, displayText, inDropZone, ...rest }) {
                    return (
                      <div
                        className={clsx(
                          'flex flex-col items-center gap-4 rounded border-4 border-input-border border-dotted p-8 align-middle',
                          inDropZone ?? 'bg-gray-200'
                        )}
                        {...rest}
                      >
                        <Small>Drop files here</Small>
                        {children}
                      </div>
                    )
                  },
                  FilePicker({ onClick }) {
                    return (
                      <Button
                        type={'button'}
                        variant={'secondary'}
                        onClick={onClick}
                      >
                        Browse Files
                      </Button>
                    )
                  },
                  FileList({ files, onCancelUpload, onDeleteUpload }) {
                    return (
                      <div className={'flex flex-col gap-2 py-3'}>
                        {files.map((file) => {
                          return (
                            <div
                              key={file.key}
                              className={
                                'flex flex-row items-center justify-between rounded border border-input-border p-3 align-middle'
                              }
                            >
                              <div
                                className={
                                  'flex flex-row items-center justify-center gap-4 align-middle'
                                }
                              >
                                <div className={'h-[3em] object-fill'}>
                                  {file.status === 'uploaded' ? (
                                    <StorageImage
                                      path={file.key}
                                      width="16"
                                      height={'16'}
                                      alt="Picture"
                                    />
                                  ) : (
                                    <LoadingSpinner />
                                  )}
                                </div>
                              </div>
                              <div>
                                <Button
                                  onClick={() =>
                                    onDeleteUpload({ id: file.id })
                                  }
                                  variant={'secondary'}
                                  type={'button'}
                                >
                                  Delete
                                </Button>
                              </div>
                            </div>
                          )
                        })}
                      </div>
                    )
                  },
                }}
              />
              {formDescription && (
                <FormDescription>{formDescription}</FormDescription>
              )}
              <FormMessage />
            </FormItem>
          )
        }}
      />
    </div>
  )
}
