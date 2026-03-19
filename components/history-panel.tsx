"use client"

import { useState, useEffect } from "react"
import { getHistory, deleteBio, deleteStarter, type SavedItem } from "@/lib/api"
import { NotebookIcon } from "@/components/icons/notebook-icon"
import { SpeechBubbleIcon } from "@/components/icons/speech-bubble-icon"
import { Trash2, ChevronDown, ChevronUp, Loader2 } from "lucide-react"
import { toast } from "sonner"

export function HistoryPanel() {
  const [savedBios, setSavedBios] = useState<SavedItem[]>([])
  const [savedStarters, setSavedStarters] = useState<SavedItem[]>([])
  const [loading, setLoading] = useState(true)
  const [biosOpen, setBiosOpen] = useState(true)
  const [startersOpen, setStartersOpen] = useState(true)

  useEffect(() => {
    getHistory()
      .then(h => { setSavedBios(h.savedBios); setSavedStarters(h.savedStarters) })
      .catch(() => {})
      .finally(() => setLoading(false))
  }, [])

  const handleDeleteBio = async (id: string) => {
    try {
      await deleteBio(id)
      setSavedBios(prev => prev.filter(b => b.id !== id))
      toast.success('Bio deleted')
    } catch {
      toast.error('Failed to delete bio')
    }
  }

  const handleDeleteStarter = async (id: string) => {
    try {
      await deleteStarter(id)
      setSavedStarters(prev => prev.filter(s => s.id !== id))
      toast.success('Starter deleted')
    } catch {
      toast.error('Failed to delete starter')
    }
  }

  if (loading) return (
    <div className="flex justify-center mt-20">
      <Loader2 className="w-8 h-8 text-blush animate-spin" />
    </div>
  )

  return (
    <div className="max-w-2xl mx-auto fade-in-up space-y-6">
      {/* Saved Bios */}
      <section>
        <button onClick={() => setBiosOpen(o => !o)} className="flex items-center gap-2 w-full mb-3">
          <NotebookIcon className="w-5 h-5 text-pencil" />
          <h2 className="font-serif text-2xl text-pencil">Saved Bios</h2>
          <span className="font-mono text-xs text-muted-text ml-1">({savedBios.length})</span>
          <span className="ml-auto text-pencil/40">
            {biosOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </span>
        </button>
        {biosOpen && (
          savedBios.length === 0 ? (
            <p className="font-sans text-sm text-muted-text italic px-2">
              No saved bios yet — generate and save one from the Glow-Up tab!
            </p>
          ) : (
            <div className="space-y-3">
              {savedBios.map(bio => (
                <div key={bio.id} className="bg-warm-white border border-dashed border-pencil/30 rounded-lg p-4 flex gap-3">
                  <p className="font-sans text-sm text-pencil leading-relaxed flex-1">{bio.content}</p>
                  <button
                    onClick={() => handleDeleteBio(bio.id)}
                    className="flex-shrink-0 text-pencil/30 hover:text-blush transition-colors"
                    aria-label="Delete saved bio"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          )
        )}
      </section>

      <div className="border-t border-dashed border-pencil/15" />

      {/* Saved Starters */}
      <section>
        <button onClick={() => setStartersOpen(o => !o)} className="flex items-center gap-2 w-full mb-3">
          <SpeechBubbleIcon className="w-5 h-5 text-pencil" />
          <h2 className="font-serif text-2xl text-pencil">Saved Starters</h2>
          <span className="font-mono text-xs text-muted-text ml-1">({savedStarters.length})</span>
          <span className="ml-auto text-pencil/40">
            {startersOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </span>
        </button>
        {startersOpen && (
          savedStarters.length === 0 ? (
            <p className="font-sans text-sm text-muted-text italic px-2">
              No saved starters yet — generate and save one from the Starters tab!
            </p>
          ) : (
            <div className="space-y-3">
              {savedStarters.map(starter => (
                <div key={starter.id} className="bg-[#E8F5ED] border border-dashed border-pencil/30 rounded-lg p-4 flex gap-3">
                  <p className="font-sans text-sm text-pencil leading-relaxed flex-1">{starter.content}</p>
                  <button
                    onClick={() => handleDeleteStarter(starter.id)}
                    className="flex-shrink-0 text-pencil/30 hover:text-blush transition-colors"
                    aria-label="Delete saved starter"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          )
        )}
      </section>
    </div>
  )
}
