import BannerSection from '../layouts/bannerSection'
import Categories from '../layouts/categories'
import Products from '../layouts/products'
import Customer from '../layouts/client'
import Contact from '../layouts/contact'
import Laptop from '../layouts/laptop'
import Header from '../layouts/header'
import FAQ from '../layouts/faq'

export default function Home(){
    return(
        <>
            <Header />
            <BannerSection />
            <Categories />
            <Products />
            <Laptop />
            <Customer />
            <FAQ />
            <Contact />
        </>
    )
}