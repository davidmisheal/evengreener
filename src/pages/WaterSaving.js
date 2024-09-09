import React from 'react'
import { PageTemplate } from '../components/PageTemplate'
import { CategoryCard } from "../components/CategoryCard";
import { ShopCollection } from "../components/ShopCollection";
import { Item } from "../components/Item";

export const WaterSaving = () => {
    return (
        <PageTemplate>
            <div className="home--category">
                <CategoryCard category='Bestsellers' img='bestseller.jpeg' />
                <CategoryCard category='Accessories' img='accessories.jpeg' />
                <CategoryCard category='Water Tanks' img='watertanks.webp' />
                <CategoryCard category='Decorative Water Butts' img='waterbutt.webp' />
            </div>
            <div className="home--composting">
                <h2>Water Saving</h2>
                <p>Saving water comes with a long list of benefits, for you, your garden and our planet. By collecting the rain water that falls on your roof, you can hydrate your garden with mineral dense water that will help it flourish. This benefits your plants and reduces your water bill, whilst also reliving pressure off local water supply chains and increasing your households self-sufficiency in the case of water shortages.</p>
            </div>
            <ShopCollection title='Bestselling Water Butts' desc='Our flagship brands are bestsellers for a reason-made in the UK, from recycled plastic and accompanied by a 5 year guarantee.' img='shopbutts.webp' />
            <div className="hotcomposters--items">
                <Item viewFull={true} name='Harcostar 350 Litre Magnum Water Butt Kit' price='£150.00' reviews='0 review' capacity='450L | 750L' img='HarcostarMagnum5.webp' />
                <Item viewFull={true} name='Harcostar 1,050 Litre Magnum Water Butt Triple Kit' price='£340.00' reviews='4 reviews' capacity='1050 Litre' img='MagnumWaterButt.webp' />
                <Item viewFull={true} name='Cloudburst 200 Litre Water Butt Kit' price='£79.99' reviews='143 reviews' capacity='200 Litre' img='Cloudburst.webp' />
                <Item viewFull={false} />
            </div>
            <ShopCollection title='Water Butt Accessories' desc="Tailor your domestic water saving system with our extensive range of accessories." img='waterbutts access.webp' />
            <div className="hotcomposters--items">
                <Item viewFull={true} name='10 Litre Red Watering Can' price='£22.00' reviews='0 reviews' capacity='' img='w3021.webp' />
                <Item viewFull={true} name='Extension Hose For Rainsaver Diverter' price='£7.99' reviews='19 reviews' capacity='' img='ExtensionHose.webp' />
                <Item viewFull={false} />
            </div>
        </PageTemplate>
    )
}
