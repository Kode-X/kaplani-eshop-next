import * as React from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MainSection from '@/components/MainSection';
import MainHeader from '@/components/MainHeader';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <MainHeader />
      <MainSection />
      <Footer />
    </div>
  );
};

export default App;
