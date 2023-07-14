import React, { lazy , Suspense} from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';



import { Layout } from './Layout/Layout';
const WorkingNumbers = lazy(() =>
  import('../pages/WorkingNumbers/WorkingNumbers')
);





export const App = () => {

  return (
    <>
      <Layout>
        <Suspense fallback={<p>Loading...</p>}>
          <Routes>
            <Route path="/" element={<WorkingNumbers />} />
            <Route path="*" element={<Navigate to="" />} />
          </Routes>
        </Suspense>
      </Layout>
    </>
  );
  
  
};


