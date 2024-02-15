/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { NotePreview } from '@/components/NotePreview'
import { useNotesList } from '@/hooks/useNotesList'
import { ComponentProps } from 'react'
import { isEmpty } from 'lodash'
import { twMerge } from 'tailwind-merge'

export type NotePreviewListProps = ComponentProps<'ul'> & {
  onSelect?: () => void
}

export const NotePreviewList = ({ onSelect, className, ...props }: NotePreviewListProps) => {
  const { notes, selectedNoteIndex, handleNoteSelect } = useNotesList({ onSelect })

  if (!notes) return null

  if (isEmpty(notes)) {
    return (
      <ul className={twMerge('text-center pt-5', className)} {...props}>
        <span>No notes yet.</span>
      </ul>
    )
  }
  return (
    <ul className={className} {...props}>
      {notes.map((note, index) => {
        return (
          <NotePreview
            key={note.title + note.lastEditTime}
            {...note}
            isActive={selectedNoteIndex === index}
            onClick={handleNoteSelect(index)}
          />
        )
      })}
    </ul>
  )
}
