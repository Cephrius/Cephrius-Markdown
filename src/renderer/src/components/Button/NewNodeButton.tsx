/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { ActionButton } from '@/components'
import { LuFileSignature } from 'react-icons/lu'
import { ActionButtonProps } from './ActionButton'
import { useSetAtom } from 'jotai'
import { createEmptyNoteAtom } from '@renderer/store'

export const NewNoteButton = ({ ...props }: ActionButtonProps) => {
  const createEmptyNote = useSetAtom(createEmptyNoteAtom)

  const handleCreation = async () => {
    await createEmptyNote()
  }

  return (
    <ActionButton onClick={handleCreation} {...props}>
      <LuFileSignature className="w-4 h-4 text-zinc-700 dark:text-zinc-400" />
    </ActionButton>
  )
}
