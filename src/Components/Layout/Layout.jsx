import styled from "styled-components";

const Layout = ({children}) => { 
 const LayoutContainer = styled.div`
   display: grid;
   grid-gap: 10px;
   margin: 0 10px;
   grid-template-columns: 1fr;
   @media (min-width: 700px) {
     grid-template-columns: 3fr 6fr 3fr;
   }
 `;

 const PageTitle = styled.div`
   background-color: white;
   padding: 1rem 1.25rem;
   border-bottom: 1px solid #e5e5e5;
   font-weight: 500;
   font-size: 20px;
   line-height: 18px;
 `;

 return (
   <div>
     <PageTitle>
       <p>People</p>
     </PageTitle>
     <LayoutContainer>
       {children}
     </LayoutContainer>
   </div>
 );
}

function LeftColumn({ children }){
  const LeftColumn = styled.div`
    order: 2;
    @media (min-width: 700px) {
      order: 1;
    }
  `;
  return <LeftColumn>{children}</LeftColumn>;
};

function RightColumn({ children }){
  const RightColumn = styled.div`
    order: 3;
    @media (min-width: 700px) {
      order: 3;
    }
  `;
  return <RightColumn>{children}</RightColumn>;
};

function CenterColumn({ children }){
  const CenterColumn = styled.div`
    border: 1px solid #e5e5e5;
    background-color: #fff;
    margin-top: 10px;
    order: 1;
    @media (min-width: 700px) {
      order: 2;
    }
  `;
  return <CenterColumn>{children}</CenterColumn>;
};

Layout.LeftColumn = LeftColumn;
Layout.RightColumn = RightColumn;
Layout.CenterColumn = CenterColumn;



export default Layout;