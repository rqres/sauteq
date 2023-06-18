"use client"

import { Bookmark, RefreshCcw, Share } from "lucide-react"

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar"

export default function RecipeMenubar(/*{ recipeId }: { recipeId: string }*/) {
  const regenerateRecipe = () => {
    console.log("regenerated")
    // revalidate()
    // clear recipeText, recipeImageURL, and title
    // await clearRecipeRecord(recipeId)
    // TODO: change this dirty hack
    // router.refresh()
    window.location.reload()
  }

  return (
    <Menubar className="mr-4 mt-6 justify-end">
      <MenubarMenu>
        <MenubarTrigger>
          <Share />
        </MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger disabled={true} onClick={regenerateRecipe}>
          <RefreshCcw />
        </MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>
          <Bookmark />
        </MenubarTrigger>
      </MenubarMenu>
    </Menubar>
  )
}
