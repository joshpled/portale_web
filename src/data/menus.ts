// Menu + gallery content, ported verbatim from the Portale Mobile design.
// Kept as plain data so the Menus component stays presentational.

export type MenuId = 'dinner' | 'lunch' | 'brunch' | 'happy'

export interface MenuItem {
  name: string
  desc: string
  /** Optional per-item price (most items are priceless on the prix-fixe menus). */
  price?: string
}

export interface MenuSection {
  heading: string
  items: MenuItem[]
}

export interface Menu {
  note: string
  sections: MenuSection[]
}

export interface MenuTab {
  id: MenuId
  label: string
}

export const MENU_TABS: MenuTab[] = [
  { id: 'dinner', label: 'Dinner' },
  { id: 'lunch', label: 'Lunch' },
  { id: 'brunch', label: 'Brunch' },
  { id: 'happy', label: 'Happy Hour' },
]

export const MENUS: Record<MenuId, Menu> = {
  dinner: {
    note: 'Served nightly · à la carte',
    sections: [
      {
        heading: 'Antipasti',
        items: [
          { name: 'Focaccia', desc: 'castelvetrano olives, rosemary, whipped ricotta, olio verde' },
          { name: 'Zuppa di Funghi', desc: 'white mushroom soup, asparagus custard, pickled pearl onions' },
          { name: 'Insalata di Cesare', desc: 'baby gem lettuce, toasted breadcrumbs, parmigiano, caesar dressing' },
          { name: 'Insalata di Cavolo Nero', desc: 'baby kale, quinoa, black currants, marcona almonds, pecorino toscano' },
          { name: 'Burrata', desc: 'prosciutto di parma, strawberries, poached rhubarb, balsamic, saba' },
          { name: 'Crudo di Tonno', desc: 'yellowfin tuna tartare, cucumber, radish, calabrian chili, citrus emulsion' },
          { name: 'Frutti di Mare', desc: 'chilled lobster, scallop, octopus, squid, shrimp, avocado, lemon' },
          { name: 'Polpo', desc: 'grilled octopus, sungold tomatoes, gigante beans, smoked paprika aioli' },
          { name: 'Polpette', desc: 'ricotta meatballs, pomodoro, fonduta parmigiano, grilled bread' },
        ],
      },
      {
        heading: 'Primi',
        items: [
          { name: 'Risotto', desc: 'montauk red shrimp, english peas, lemon, mint' },
          { name: 'Cavatelli', desc: 'ricotta, arrabbiata, cilantro pesto' },
          { name: 'Agnolotti', desc: "sheep's milk ricotta, wild mushrooms, english peas, chicken brodo, parmigiano" },
          { name: 'Bucatini', desc: 'manila clams, guanciale, pancetta pomodoro' },
          { name: 'Mafaldine', desc: 'maine lobster, calabrian chili, breadcrumbs, lemon-basil butter' },
          { name: 'Lumache', desc: 'bolognese bianco, black truffle, parmigiano' },
        ],
      },
      {
        heading: 'Secondi',
        items: [
          { name: 'Salmone', desc: 'faroe islands salmon, baby artichokes, black olive, fennel piperade' },
          { name: 'Branzino', desc: 'broccoli rabe, confit cherry tomatoes, eggplant purée, taggiasca olives' },
          { name: 'Ippoglosso', desc: 'halibut, morel mushrooms, baby leeks, fava beans, green asparagus' },
          { name: 'Pollo Saltimbocca', desc: 'amish chicken, prosciutto, soft polenta, spring onion, braised trevisano, jus' },
          { name: 'Maiale', desc: 'country-rib pork chop, polenta cake, baby peppers, roasted apricots' },
          { name: 'Anatra', desc: 'roasted duck breast, wild rice, farro, champagne mango, hakurei turnips' },
        ],
      },
      {
        heading: 'Contorni',
        items: [
          { name: 'Patate', desc: 'roasted crushed potatoes, parmigiano' },
          { name: 'Verdura', desc: 'braised swiss chard, spinach, roasted garlic, chili flake' },
          { name: 'Carote', desc: 'rainbow carrots, golden raisin purée, crispy capers, cumin vinaigrette' },
        ],
      },
    ],
  },
  lunch: {
    note: '2-Course Prix Fixe · $45 — Wed–Fri, 11:30 AM–2:30 PM. Sides & dessert à la carte.',
    sections: [
      {
        heading: 'Antipasti',
        items: [
          { name: 'Zuppa di Funghi', desc: 'white mushroom soup, asparagus custard, pickled pearl onions' },
          { name: 'Insalata di Cesare', desc: 'baby gem lettuce, toasted breadcrumbs, parmigiano, caesar dressing' },
          { name: 'Insalata di Cavolo Nero', desc: 'baby kale, quinoa, black currants, marcona almonds, pecorino' },
          { name: 'Insalata di Carote', desc: 'roasted heirloom carrots, blood orange, feta, citrus dressing' },
          { name: 'Crudo di Platessa', desc: 'fluke, mango, avocado purée, serrano pepper, red onion, cilantro' },
          { name: 'Polpette', desc: 'ricotta meatballs, pomodoro, fonduta parmigiano, grilled bread' },
        ],
      },
      {
        heading: 'Secondi',
        items: [
          { name: 'Agnolotti', desc: "sheep's milk ricotta, wild mushrooms, english peas, chicken brodo, parmigiano" },
          { name: 'Linguine alla Vongole', desc: 'manila clams, pepperoncini, garlic confit' },
          { name: 'Salmone', desc: 'faroe island salmon, escarole, braised cherry tomatoes, castelvetrano olives' },
          { name: 'Pollo alla Milanese', desc: 'chicken milanese, arugula, radicchio, pecorino, lemon vinaigrette' },
          { name: 'Alba Burger', desc: 'moliterno al tartufo, nueske bacon, onion conserva' },
          { name: 'Bistecca', price: 'supp. $15', desc: 'marinated hanger steak, truffled french fries, bordelaise' },
        ],
      },
      {
        heading: 'À la Carte · Sides',
        items: [
          { name: 'Patate Fritti', desc: 'truffle-parmigiano fries' },
          { name: 'Verdura', desc: 'sautéed endive, roasted garlic, chili flakes' },
          { name: 'Asparagi', desc: 'asparagus, lemon, evoo' },
          { name: 'Polenta', desc: 'soft polenta, cremini mushrooms, parmigiano' },
        ],
      },
      {
        heading: 'À la Carte · Dessert',
        items: [
          { name: 'Torta di Olio', desc: 'olive oil cake, meyer lemon, citrus curd, candied almonds, vanilla gelato' },
          { name: 'Cannoli', desc: 'ricotta, candied orange peel, pistachio' },
          { name: 'Amaro Affogato', desc: 'sweet cream gelato, meletti amaro, espresso shot, pizzelle' },
        ],
      },
    ],
  },
  brunch: {
    note: 'À la carte · Sat–Sun, 11:30 AM–3:00 PM',
    sections: [
      {
        heading: 'Antipasti',
        items: [
          { name: 'Cinnamon Roll', desc: 'olive oil icing' },
          { name: 'Zuppa di Funghi', desc: 'white mushroom soup, asparagus custard, pickled pearl onions' },
          { name: 'Insalata di Cesare', desc: 'baby gem lettuce, toasted breadcrumbs, parmigiano, caesar dressing' },
          { name: 'Insalata di Cicoria', desc: 'chicory, sunny side farm egg, pancetta, croutons, mustard vinaigrette' },
          { name: 'Burrata', desc: 'prosciutto di parma, strawberries, poached rhubarb, balsamic, saba' },
          { name: 'Frutti di Mare', desc: 'chilled lobster, scallop, octopus, squid, shrimp, avocado, lemon aioli' },
          { name: 'Cocktail di Gamberetti', desc: 'wild caught shrimp, cocktail sauce, lemon' },
          { name: 'Polpette', desc: 'ricotta meatballs, pomodoro, fonduta parmigiano, grilled bread' },
        ],
      },
      {
        heading: 'Secondi',
        items: [
          { name: 'Omelet', desc: 'baby spinach, cremini mushrooms, goat cheese' },
          { name: 'Eggs Benedict', desc: 'poached farm eggs, pancetta, hollandaise' },
          { name: 'Spaghetti', desc: 'san marzano tomatoes, fresh basil, parmigiano' },
          { name: 'Mafaldine', desc: 'maine lobster, calabrian chili, breadcrumbs, lemon-basil butter' },
          { name: 'Pollo alla Milanese', desc: 'chicken milanese, arugula, radicchio, pecorino, lemon vinaigrette' },
          { name: 'Alba Burger', desc: 'moliterno al tartufo, nueske bacon, onion conserva' },
        ],
      },
      {
        heading: 'Dolci',
        items: [
          { name: 'Bombolini', desc: 'warm sugared doughnuts, chocolate and caramel dipping sauce' },
          { name: 'Cannoli', desc: 'ricotta, candied orange peel, pistachio' },
          { name: 'Amaro Affogato', desc: 'sweet cream gelato, meletti amaro, espresso shot, pizzelle' },
        ],
      },
    ],
  },
  happy: {
    note: 'Mon–Fri, 5:00–6:30 PM · exclusively at the bar',
    sections: [
      {
        heading: 'Small Bites',
        items: [
          { name: 'Marcona Almonds', price: '$8', desc: '' },
          { name: 'Castelvetrano Olives', price: '$9', desc: 'lemon, calabrian chili' },
          { name: 'Patate Fritti', price: '$8', desc: 'truffle-parmigiano fries' },
          { name: 'Arancini', price: '$14', desc: 'wild mushrooms, black truffle aioli' },
          { name: 'Cacio e Pepe Fritti', price: '$12', desc: 'cheddar, pecorino pepato, black pepper, fontina fonduta' },
          { name: 'Vongole', price: '$14', desc: 'baked little neck clams, pancetta, panko, garlic, lemon' },
          { name: 'Calamari', price: '$22', desc: 'fried calamari, pepperoncini aioli' },
          { name: 'Salumi Misti', price: '$24', desc: 'prosciutto di parma, finocchiona, olives, pecorino toscano' },
          { name: 'Ali di Pollo', price: '$16', desc: 'chicken wings, calabrian chili-honey, blue cheese' },
          { name: 'Alba Sliders', price: '$18', desc: 'fontina, bacon jam, caramelized onions, truffle aioli' },
        ],
      },
      {
        heading: 'From the Bar',
        items: [
          { name: 'Cocktails', price: '$14', desc: 'all happy hour cocktails' },
          { name: 'Wines by the Glass', price: '$12', desc: 'all happy hour wines by the glass' },
        ],
      },
    ],
  },
}

export interface GalleryTile {
  label: string
  tall: boolean
}

export const GALLERY_TILES: GalleryTile[] = [
  { label: '[ dining room ]', tall: true },
  { label: '[ pasta plate ]', tall: false },
  { label: '[ bar detail ]', tall: false },
  { label: '[ brunch table ]', tall: true },
]
