import { describe, it, expect } from 'vitest'
import { MENUS, MENU_TABS, GALLERY_TILES, type MenuId } from './menus'

describe('menu data', () => {
  it('has a menu for every tab', () => {
    const ids = MENU_TABS.map((t) => t.id)
    expect(ids).toEqual(['dinner', 'lunch', 'brunch', 'happy'])
    ids.forEach((id) => expect(MENUS[id]).toBeDefined())
  })

  it('every menu has a note and non-empty sections of named items', () => {
    ;(Object.keys(MENUS) as MenuId[]).forEach((id) => {
      const menu = MENUS[id]
      expect(menu.note).toBeTruthy()
      expect(menu.sections.length).toBeGreaterThan(0)
      menu.sections.forEach((section) => {
        expect(section.heading).toBeTruthy()
        expect(section.items.length).toBeGreaterThan(0)
        section.items.forEach((item) => expect(item.name).toBeTruthy())
      })
    })
  })

  it('happy hour items all carry a price', () => {
    MENUS.happy.sections.forEach((s) => s.items.forEach((i) => expect(i.price).toBeTruthy()))
  })

  it('has four gallery tiles', () => {
    expect(GALLERY_TILES).toHaveLength(4)
  })

  it('every gallery tile with a photo has alt text', () => {
    for (const tile of GALLERY_TILES) {
      if (tile.src) expect(tile.alt, `${tile.src} missing alt`).toBeTruthy()
    }
  })
})
