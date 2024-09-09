import React from 'react'
import { PageTemplate } from '../components/PageTemplate'
import { CategoryCard } from "../components/CategoryCard";
import { ShopCollection } from "../components/ShopCollection";
import { Item } from "../components/Item";

export const Composting = () => {
    return (
        <PageTemplate>
            <div className="home--category">
                <CategoryCard category='Bakashi' img='Shopify_Products_BokashiBins4.webp' />
                <CategoryCard category='Accessories' img='Shopify_Products_GreenJohanna_440x440.webp' />
                <CategoryCard category='Food Waste' img='Untitled-design-(7).png' />
                <CategoryCard category='Large Composters' img='download (1).jpeg' />
            </div>
            <div className="home--composting">
                <h2>Composting</h2>
                <p>Want to learn how to start composting? You've come to the right place. At EvenGreener, we pride ourselves in being compost experts. Have a browse of our wide range of products, and find the right one for your garden. Check out our composting guides which are packed with information to help you get started on your composting journey!</p>
            </div>
            <ShopCollection title='Hot Composters' desc='Want to know how to produce rich, nutrient dense compost in 1-3 months? Hot composting is the way forward.' img='Shopify_CAT_subcategory_banner_Hot_composters_850x360.progressive.jpg' />
            <div className="hotcomposters--items">
                <Item viewFull={true} size='large' name='Green Johanna 330 Litre Compost Bin' price='$144.99' reviews='3 reviews' capacity='330 Litre' img='grnjod_1_680x_crop_center.webp' />
                <Item viewFull={true} size='large' name='Green Johanna 330 Litre Compost Bin with Insulating Jacket' price='£199.99' reviews='1 review' capacity='330 Litre' img='grnjojacketd_2_e41530ad-8edd-475d-9a8a-dc217e2f87af_680x_crop_center.webp' />
                <Item viewFull={true} size='large' name='HOTBIN Mini 100 Litre Compost Bin' price='£190.00' reviews='3 reviews' capacity='110 Litre | 200 Litre' img='HotBinMini_680x_crop_center.webp' />
                <Item viewFull={false} />
            </div>
            <ShopCollection title='Food Waste Caddies and Liners' desc="Compact, easy to use and available in a variety of colours...what's not to love about our kitchen caddies and liners?" img='Shopify_CAT_subcategory_banner_Kitchen_Caddies_850x360.progressive.webp' />
            <div className="hotcomposters--items">
                <Item viewFull={true} name='Caddy Liners Small x 1 Roll' price='£6.00' reviews='10 reviews' capacity='' img='Shopify_Products_CaddyLinersS_680x_crop_center.webp' />
                <Item viewFull={true} name='Caddy Liners Large x 1 Roll' price='£9.99' reviews='0 review' capacity='5L | 23L' img='Shopify_Products_CaddyLinersL3.webp' />
                <Item viewFull={false} />
            </div>
        </PageTemplate>
    )
}
