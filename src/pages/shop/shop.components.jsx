import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import CollectionPage from '../collection/collection.component';
import './shop.styles.scss';
import CollectionsOverview from '../../components/collection-overview/collection-overview.component';
const ShopPage =()=> {

        return (
            <div className='shop-page'>
              <Routes>
              <Route 
              path="/"
              element ={<CollectionsOverview/>}/>
              <Route
              path =":collectionId" 
              element={<CollectionPage/>}/>
              </Routes>
            </div>
        )
    };


export default ShopPage;