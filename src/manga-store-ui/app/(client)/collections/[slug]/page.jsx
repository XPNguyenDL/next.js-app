import Breadcrumb from '@/src/components/Breadcrumb/Breadcrumb'
import CollectionSection from '@/src/components/Collection/CollectionSection'
import React from 'react'

export default function page({ params }) {

  return (
    <div className="mt-16">
      <Breadcrumb prePlace={"Cửa hàng"} href={"/collection"} currentPlace={params.slug}/>
      <CollectionSection cateSlug={params.slug} />
    </div>
  )
}
