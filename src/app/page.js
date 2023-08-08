"use client"; // This is a client component
import React, { useMemo } from "react";
import Image from "next/image";
import HeroCarousel from "@/components/HeroCarousel";
import { client } from "@/lib/contentful/client";
import ProductsCategoryPage from "./products/[category]/page";
import { useEffect, useState } from "react";
import { getApiRoot, projectKey } from "@/lib/commerceTools";

export default function Home() {
  const [heroCarouselList, setHeroCarouselList] = useState([]);

  const [cartIndexKey, setcartIndexKey] = useState([]);

  const getCarousel = async () => {
    const response = await client.getEntries({ content_type: "heroBanner" });
    const responseData = response.items;
    setHeroCarouselList(responseData);
    console.log("heroBanner", responseData);
  };

  const getCartIndexKey = async () => {
    try {
      const project = await getApiRoot()
        .withProjectKey({ projectKey })
        .carts()
        //.productTypes()
        //.categories()
        //.customers()
        .get()
        .execute();
      // .get()
      // .execute();

      setcartIndexKey(project.body);
    } catch (e) {
      console.log(e);
    }
  };

  const getCartCreateKey = async () => {
    try {
      const project = await getApiRoot()
        .withProjectKey({ projectKey })
        .carts() //.productTypes()
        // .withId({ ID: shoppingId })
        //.categories()
        //.customers()
        .post({
          body: {
            // version,
            currency: "INR",
          },
        })
        .execute();
      // .get()
      // .execute();

      // localStorage.setItem("cartId", project.body.id);
      console.log("project.body", project.body.id);
    } catch (e) {
      console.log(e);
    }
  };
  // const CartVarID = localStorage.getItem("cartId");
  const cartIndexList = useMemo(() => cartIndexKey.results, [cartIndexKey]);

  // const cartIndexNumber = cartIndexList?.length;
  console.log("cartIndexKey", cartIndexKey);

  useEffect(() => {
    getCarousel();
    getCartIndexKey();
    const cartIndexNumber = cartIndexList?.length;
    console.log("cartIndexNumber", cartIndexNumber);
    if (cartIndexNumber === 0) {
      getCartCreateKey();
    } else {
      console.log("error");
    }
  }, []);

  useEffect(() => {
    const cartIndexNumber = cartIndexList?.length;
    console.log("cartIndexNumber", cartIndexNumber);
    if (cartIndexNumber === 0) {
      getCartCreateKey();
    } else {
      console.log("error");
    }
  }, [cartIndexList]);

  // const cartIndexList = cartIndexKey.results;

  return (
    <div>
      <HeroCarousel contentData={heroCarouselList}></HeroCarousel>
      <ProductsCategoryPage></ProductsCategoryPage>
    </div>
  );
}
