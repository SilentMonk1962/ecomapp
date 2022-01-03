import { createSelector } from "reselect";


const selectShop=state =>state.shop;

export const selectShopCategories=createSelector(
    [selectShop],
    shop => shop.Categories);

export const selectCollection =collectionUrlParam =>
createSelector(
    [selectShopCategories],
    collections => {
        return collections.find (
            collection => {
                return collection.routeName === collectionUrlParam
            }
        )
    });

export const selectCollectionsForPreview = createSelector(
    [selectShopCategories],
    collections => Object.values(collections)
)