import { WageComponente, FoodComponente, TransportComponente, MedicineComponente, GroceryComponente, HousingComponente, GiftComponente, SavingsComponente, EntertainmentComponente, OthersComponente } from "@/assets/images/SvgComponent"

export function icons(category_id: number) {
    if (category_id === 1) return <WageComponente width={30} height={30} />
    if (category_id === 2) return <FoodComponente width={30} height={30} />
    if (category_id === 3) return <TransportComponente width={30} height={30} />
    if (category_id === 4) return <MedicineComponente width={30} height={30} />
    if (category_id === 5) return <GroceryComponente width={30} height={30} />
    if (category_id === 6) return <HousingComponente width={30} height={30} />
    if (category_id === 7) return <GiftComponente width={30} height={30} />
    if (category_id === 8) return <SavingsComponente width={30} height={30} />
    if (category_id === 9) return <EntertainmentComponente width={30} height={30} />
    if (category_id === 0) return <OthersComponente width={30} height={30} />
}