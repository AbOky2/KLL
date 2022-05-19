import Head from 'next/head'
import Image from 'next/image'
import React from 'react';

export default function Home() {
  return (
    <>

      Deroulement
      <div className="flex flex-col space-x-3 items-start justify-center p-4 bg-white border rounded-xl border-blue-500 w-96">
          <div className="flex justify-center items-start x-_388 h-_808 relative gap-3 p-4 rounded-xl bg-white ">
              <p className="flex-grow w-_259 text-sm font-bold text-left text-_aPropos">
                2 pièces (3 logements disponibles)
              </p>
              <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
                preserveAspectRatio="none"
            >
              <path
                d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
                stroke="#3679FF"
                strokeWidth={2}
                strokeMiterlimi={10}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8 12H16"
                stroke="#3679FF"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <svg
        width={311}
        height={1}
        viewBox="0 0 311 1"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className='mb-8'
      >
        <line x1="-4.37114e-8" y1="0.5" x2={311} y2="0.499973" stroke="#CDD2D8" />
      </svg>
    
    <div className='flex'>
    <p className="w-44 h-5 text-xs font-medium">Prix TVA 20%</p>
    <p className="w-44 h-5 text-xs font-medium">271 000€</p>
    </div>
    <div className='flex'>
    <p className="w-44 h-5 text-xs font-medium">Surface</p>
    <p className="w-44 h-5 text-xs font-medium">63m2</p>
    </div>
    <div className='flex'>
    <p className="w-44 h-5 text-xs font-medium">Étage</p>
    <p className="w-44 h-5 text-xs font-medium">RDC</p>
    </div>
    <div className='flex'>
    <p className="w-44 h-5 text-xs font-medium">Orientation</p>
    <p className="w-44 h-5 text-xs font-medium">Sud</p>
    
    </div>
    <div className='flex'>
    <p className="w-44 h-5 text-xs font-medium">Parking</p>
    <p className="w-44 h-5 text-xs font-medium">2 inclus</p>
    </div>
    <div className='flex'>
    <p className="w-44 h-5 text-xs font-medium">Les +</p>
    <p className="w-44 h-5 text-xs font-medium">-</p></div>
    
    
    <div
        className="flex justify-center items-center w-_344 relative gap-2.5 px-32 py-4 rounded-xl mb-10 mt-8"
        style={{ background: "linear-gradient(to bottom, #81a3f9 -0.06%, #3462d8 108.09%)" }}
      >
        <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-white">
          Télécharger le plan en 2D
        </p>
      </div>
    
    </div>
    Deroulement Studea
    <div className="flex flex-col space-x-3 items-start justify-center p-4 bg-white border rounded-xl border-_rougeStudea w-96">
        <div className="flex justify-center items-start x-_388 h-_808 relative gap-3 p-4 rounded-xl bg-white ">
            <p className="flex-grow w-_259 text-sm font-bold text-left text-_rougeStudea">
              2 pièces (3 logements disponibles)
            </p>
            <svg
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
              preserveAspectRatio="none"
            >
              <path
                d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
                stroke="#C23D3B"
                strokeWidth={2}
                strokeMiterlimi={10}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8 12H16"
                stroke="#C23D3B"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <svg
        width={311}
        height={1}
        viewBox="0 0 311 1"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className='mb-8'
      >
        <line x1="-4.37114e-8" y1="0.5" x2={311} y2="0.499973" stroke="#CDD2D8" />
      </svg>
    
    <div className='flex'>
    <p className="w-44 h-5 text-xs font-medium">Loyer Mensuel</p>
    <p className="w-44 h-5 text-xs font-medium">754€</p>
    </div>
    <div className='flex'>
    <p className="w-44 h-5 text-xs font-medium">Surface</p>
    <p className="w-44 h-5 text-xs font-medium">17m2</p>
    </div>
    <div className='flex'>
    <p className="w-44 h-5 text-xs font-medium">Étage</p>
    <p className="w-44 h-5 text-xs font-medium">RDC</p>
    </div>
    <div className='flex'>
    <p className="w-44 h-5 text-xs font-medium">Orientation</p>
    <p className="w-44 h-5 text-xs font-medium">Sud</p>
    </div>
    <div className='flex'>
    <p className="w-44 h-5 text-xs font-medium">Parking</p>
    <p className="w-44 h-5 text-xs font-medium">2 inclus</p>
    </div>
    <div className='flex'>
    <p className="w-44 h-5 text-xs font-medium">Les +</p>
    <p className="w-44 h-5 text-xs font-medium">-</p></div>
    <div className="flex justify-center items-center w-_344 relative gap-2.5 px-32 py-4 rounded-xl mb-10 mt-8 bg-_rougeStudea" >
        <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-white">
          Réserver
        </p>
      </div>
    
    </div>
    Bien Desktop
    <div>
   


      <div className="flex flex-col justify-start items-start w-96 relative gap-2 p-6 rounded-xl bg-white border border-_bordureBleu_ mb-4">
      <p className="flex-grow-0 flex-shrink-0 w-72 text-lg font-bold text-left text-_aPropos">
          À propos de cette résidence
        </p>
        <p className="self-stretch flex-grow-0 flex-shrink-0 w-72 text-sm font-semibold text-left text-_gris">
          Démarrage travaux imminent ! Votre appartement à partir de 205 000 euros. Dans un équilibre
          parfait entre “Vivre au vert et vivre ensemble “, découvrez notre programme GAIA
        </p>
      </div>



      <div className="flex flex-col justify-start items-start w-96 relative gap-2 p-6 rounded-xl bg-white border border-_bordureBleu mb-4">
        <p className="flex-grow-0 flex-shrink-0 w-72 text-lg font-bold text-left text-_pieces">
          La Banque Postale peut sûrement financer ton projet !
        </p>
        <p className="self-stretch flex-grow-0 flex-shrink-0 w-72 text-sm font-medium text-left text-gray-500">
          Kit le nid et La Banque Postale s’unissent pour t’aider à voler de tes propres ailes.
        </p>
        <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2.5 px-10 py-3 rounded-xl border border-_aPropos">
          <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-_aPropos">
            Découvrir
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center w-_344 relative gap-2 p-6 rounded-xl bg-white border border-_bordureBleu">
        <p className="flex-grow-0 flex-shrink-0 w-_295 text-lg font-bold text-center text-_aPropos">
          Transports à proximités
        </p>
        <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-3">
          <div className="flex-grow-0 flex-shrink-0 w-6 h-6 relative">
            <img src="image-95.png" className="w-6 h-6 absolute -left-0.5 -top-0.5 object-cover" />
          </div>
          <div className="flex-grow-0 flex-shrink-0 w-6 h-6 relative">
            <img src="image-93.png" className="w-6 h-6 absolute -left-0.5 -top-0.5 object-cover" />
          </div>
          <div className="flex-grow-0 flex-shrink-0 w-6 h-6 relative">
            <img src="image-92.png" className="w-6 h-6 absolute -left-0.5 -top-0.5 object-cover" />
          </div>
          <div className="flex-grow-0 flex-shrink-0 w-6 h-6 relative">
            <img src="image-94.png" className="w-6 h-6 absolute -left-0.5 -top-0.5 object-cover" />
          </div>
        </div>
      </div>
      
    </div>

     Bien
     
    <div className=''>
     <p className="text-[48px] text-left text-_aPropos font-bold text-3xl"
     style={{color:"linear-gradient(180deg, #81A3F9 -0.06%, #3462D8 108.09%)"}}
     >Résidence Bienvivre</p>
     
     <p className="text-sm font-medium text-left text-_gris">Buzenval - 92500 Rueil-Malmaison</p>
     
     <div className='m-2 border-4 border-r-0 border-t-0 border-b-0 border-_aPropos mt-9'>
     <p className="text-lg font-medium text-left text-_pieces mx-4">du 3 à 4 pièces</p>
     <p className="text-lg font-medium text-left text-_pieces mx-4">de 61 m² à 75 m²</p>
     <p className="w-[200px] h-[23px] text-lg font-medium text-left text-_aPropos mx-4">
       à partir de 271 000€
     </p>
     <p className="w-[200px] h-[23px] text-lg font-medium text-left text-_aPropos mx-4">
       soit 700€ / mois
     </p>
     </div>
     <div className="flex flex-col justify-start items-start relative gap-2 p-6 rounded-xl bg-white border border-_bordureBleu mb-4 mt-4">
       <p className="flex-grow-0 flex-shrink-0 w-_295 text-lg font-bold text-left text-_pieces">
         La Banque Postale peut sûrement financer ton projet !
       </p>
       <p className="self-stretch flex-grow-0 flex-shrink-0 w-_295 text-sm font-medium text-left text-_gris">
         Kit le nid et La Banque Postale s’unissent pour t’aider à voler de tes propres ailes.
       </p>
       <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2.5 px-10 py-3 rounded-xl border border-_aPropos">
         <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-_aPropos">
           Découvrir
         </p>
       </div>
     </div>
     <div className="flex flex-col justify-center items-center relative gap-2 p-6 rounded-xl bg-white border border-_bordureBleu mt-4 mb-4">
       <p className="flex-grow-0 flex-shrink-0 w-_95 text-2xl font-medium text-center text-blue-600">
         Transports à proximités
       </p>
       <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-3">
         <div className="flex-grow-0 flex-shrink-0 w-6 h-6 relative">
           <img src="image-95.png" className="w-6 h-6 absolute left-[-1px] top-[-1px] object-cover" />
         </div>
         <div className="flex-grow-0 flex-shrink-0 w-6 h-6 relative">
           <img src="image-93.png" className="w-6 h-6 absolute left-[-1px] top-[-1px] object-cover" />
         </div>
         <div className="flex-grow-0 flex-shrink-0 w-6 h-6 relative">
           <img src="image-92.png" className="w-6 h-6 absolute left-[-1px] top-[-1px] object-cover" />
         </div>
         <div className="flex-grow-0 flex-shrink-0 w-6 h-6 relative">
           <img src="image-94.png" className="w-6 h-6 absolute left-[-1px] top-[-1px] object-cover" />
         </div>
       </div>
     </div>
     <div className="flex justify-end items-center w-[343px] relative gap-3 p-4 rounded-xl bg-white border border-_aPropos mb-4">
       <p className="flex-grow w-[275px] text-sm font-bold text-left text-_aPropos">
         2 pièces (3 logements disponibles)
       </p>
       <svg
         width={24}
         height={24}
         viewBox="0 0 24 24"
         fill="none"
         xmlns="http://www.w3.org/2000/svg"
         className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
         preserveAspectRatio="none"
       >
         <path
           d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
           stroke="#3679FF"
           strokeWidth={2}
           strokeMiterlimi={10}
           strokeLinecap="round"
           strokeLinejoin="round"
         />
         <path
           d="M8 12H16"
           stroke="#3679FF"
           strokeWidth={2}
           strokeLinecap="round"
           strokeLinejoin="round"
         />
         <path
           d="M12 16L12 8"
           stroke="#3679FF"
           strokeWidth={2}
           strokeLinecap="round"
           strokeLinejoin="round"
         />
       </svg>
     </div>
     <div
       className="flex flex-col justify-start items-start relative gap-2 p-6 rounded-xl mb-4 py-"
       style={{ background: "linear-gradient(219.21deg, #c399db -0.85%, #5882f7 106.68%)" }}
     >
       <svg
         width={12}
         height={20}
         viewBox="0 0 12 20"
         fill="none"
         xmlns="http://www.w3.org/2000/svg"
         className="flex-grow-0 flex-shrink-0 w-3 h-5 relative"
         preserveAspectRatio="none"
       >
         <path
           fillRule="evenodd"
           clipRule="evenodd"
           d="M8.30933 13.2255L8.30672 13.2299C7.9347 13.864 7.81395 14.3314 7.81395 14.659C7.81395 15.0235 7.91119 15.3112 8.09532 15.5637C8.35747 15.9055 8.61345 16.1273 8.85311 16.2662C9.2786 16.5015 9.67042 16.7317 10.0274 16.9571C10.2306 17.0775 10.4454 17.2241 10.6245 17.4022C10.7801 17.5568 11.093 17.9159 11.093 18.4509C11.093 18.9671 10.8425 19.4492 10.3709 19.7339C9.99305 19.9619 9.5759 20 9.27907 20C8.14884 20 7.06772 19.391 6.0768 18.5393L6.07307 18.5361L6.06938 18.5329C5.63861 18.1563 5.27477 17.7451 4.99272 17.3005C4.40913 18.029 3.97055 18.556 3.68243 18.8728C3.4477 19.139 3.21223 19.3787 2.9822 19.5617C2.86566 19.6544 2.72569 19.7526 2.56653 19.8317C2.41577 19.9067 2.17747 20 1.88372 20C1.10385 20 0.625845 19.4682 0.386049 19.0867L0.363945 19.0515L0.344433 19.0149C0.133984 18.6197 0 18.1807 0 17.711C0 17.5215 0.0389596 17.3098 0.0688206 17.1605C0.104856 16.9802 0.156173 16.7588 0.220252 16.502C0.348744 15.987 0.538657 15.2894 0.787816 14.4146C1.27369 12.6935 1.76322 10.6195 2.25542 8.18809C2.74016 5.79344 2.97674 3.65967 2.97674 1.78035C2.97674 1.61642 2.98644 1.43563 3.02054 1.25767C3.04885 1.10986 3.11288 0.857371 3.29024 0.61714C3.68253 0.0679559 4.29786 0 4.60465 0C5.07895 0 5.43947 0.221439 5.66945 0.431036C5.88445 0.626979 6.04539 0.863692 6.16846 1.08381C6.46932 1.57753 6.62791 2.12462 6.62791 2.7052C6.62791 4.91233 6.24412 7.59665 5.49476 10.7446C6.41344 9.55732 7.22252 8.59259 7.9207 7.85507L7.9235 7.85211L7.92633 7.84916C8.26465 7.49678 8.57072 7.20248 8.83526 6.98817C8.96627 6.88204 9.11339 6.7739 9.26881 6.68673C9.39168 6.61782 9.66892 6.47399 10.0233 6.47399C10.6186 6.47399 11.0901 6.75658 11.4206 7.10709C11.6608 7.34987 12 7.77969 12 8.36994C12 8.6902 11.8756 8.93682 11.8246 9.0328C11.7569 9.16029 11.6756 9.27671 11.6016 9.37392C11.4519 9.57065 11.2521 9.79204 11.0226 10.0284C10.5875 10.4764 10.106 10.9706 9.57823 11.5107C9.12882 11.9707 8.70492 12.5372 8.31191 13.221L8.30933 13.2255ZM9.346 17.6843C9.346 17.6843 9.34302 17.685 9.33625 17.6857C9.34248 17.6845 9.346 17.6843 9.346 17.6843Z"
           fill="white"
         />
       </svg>
       <p className="flex-grow-0 flex-shrink-0 w-[295px] text-lg font-bold text-left text-white">
         Le mot de Kit le nid.
       </p>
       <p className="flex-grow-0 flex-shrink-0 w-[295px] text-sm font-medium text-left text-white">
         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lobortis felis eu posuere
         semper. Proin egestas eros at odio porttitor efficitur. Quisque id enim orci.
       </p>
     </div>
     <div className="flex justify-end items-center w-[343px] relative gap-3 p-4 rounded-xl bg-white border border-_aPropos">
       <p className="flex-grow w-[275px] text-sm font-bold text-left text-_aPropos">
         3 pièces (28 logements disponibles)
       </p>
       <svg
         width={24}
         height={24}
         viewBox="0 0 24 24"
         fill="none"
         xmlns="http://www.w3.org/2000/svg"
         className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
         preserveAspectRatio="none"
       >
         <path
           d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
           stroke="#3679FF"
           strokeWidth={2}
           strokeMiterlimi={10}
           strokeLinecap="round"
           strokeLinejoin="round"
         />
         <path
           d="M8 12H16"
           stroke="#3679FF"
           strokeWidth={2}
           strokeLinecap="round"
           strokeLinejoin="round"
         />
         <path
           d="M12 16L12 8"
           stroke="#3679FF"
           strokeWidth={2}
           strokeLinecap="round"
           strokeLinejoin="round"
         />
       </svg>
     </div>
    </div>
     
    
    
    Bien Studea
    
    <div className=''>
     <p className="text-[48px] text-left text-_rougeStudea font-bold text-3xl font-_spaceGrotesk">
       Studea Joinville Centre</p>
     
     <p className="text-sm font-medium text-left text-_gris">40 rue de Paris, 94340 Joinville-le-Pont, France</p>
     
     <div className='m-2 border-4 border-r-0 border-t-0 border-b-0 border-_rougeStudea mt-9'>
     <p className="text-lg font-medium text-left text-_pieces mx-4">du 3 à 4 pièces</p>
     <p className="text-lg font-medium text-left text-_pieces mx-4">de 61 m² à 75 m²</p>
     <p className="w-[200px] h-[23px] text-lg font-medium text-left text-_rougeStudea mx-4">
       à partir de 700€ CC /mois
     </p>
     
     </div>
     
     <div className="flex justify-center items-center w-[343px] relative gap-2.5 px-[120px] py-4 rounded-xl bg-_rougeStudea">
       <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-white font-_spaceGrotesk">
         Déposer mon dossier
       </p>
     
     </div>
    
     
     <div className="flex flex-col justify-start items-start  gap-2 p-6 rounded-xl bg-white border border-_bordureBleu mt-9 mb-5">
       <p className="flex-grow-0 flex-shrink-0 w-[295px] font-medium text-left  text-_rougeStudea text-2xl">
         À propos de cette résidence
       </p>
       <p className="self-stretch flex-grow-0 flex-shrink-0 w-[295px] text-sm font-normal text-left  text-_gris">
         Démarrage travaux imminent ! Votre appartement à partir de 205 000 euros. Dans un équilibre
         parfait entre “Vivre au vert et vivre ensemble “, découvrez notre programme GAIA
       </p>
     </div>
     
    
     <div className="flex flex-col justify-center items-center relative gap-2 p-6 rounded-xl bg-white border border-_bordureBleu mt-4 mb-4">
       <p className="flex-grow-0 flex-shrink-0 w-[295px] text-2xl font-medium text-center text-_rougeStudea">
         Transports à proximités
       </p>
       <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-3">
         <div className="flex-grow-0 flex-shrink-0 w-6 h-6 relative">
           <img src="image-95.png" className="w-6 h-6 absolute left-[-1px] top-[-1px] object-cover" />
         </div>
         <div className="flex-grow-0 flex-shrink-0 w-6 h-6 relative">
           <img src="image-93.png" className="w-6 h-6 absolute left-[-1px] top-[-1px] object-cover" />
         </div>
         <div className="flex-grow-0 flex-shrink-0 w-6 h-6 relative">
           <img src="image-92.png" className="w-6 h-6 absolute left-[-1px] top-[-1px] object-cover" />
         </div>
         <div className="flex-grow-0 flex-shrink-0 w-6 h-6 relative">
           <img src="image-94.png" className="w-6 h-6 absolute left-[-1px] top-[-1px] object-cover" />
         </div>
       </div>
     </div>
     
     <div className="flex flex-col justify-start items-start  gap-2 p-6 rounded-xl bg-white border border-_#EAEFFA mt-9 mb-5">
       <p className="flex-grow-0 flex-shrink-0 w-[295px] font-medium text-left  text-_rougeStudea text-2xl">
         Les petits plus:
       </p>
       <p className="self-stretch flex-grow-0 flex-shrink-0 w-[295px] text-sm font-normal text-left  text-_gris">
         Démarrage travaux imminent ! Votre appartement à partir de 205 000 euros. Dans un équilibre
         parfait entre “Vivre au vert et vivre ensemble “, découvrez notre programme GAIA
       </p>
     </div>
    
     <div className="flex flex-col justify-start items-start  gap-2 p-6 rounded-xl bg-white border border-_bordureBleu mt-9 mb-5">
       <p className="flex-grow-0 flex-shrink-0 w-[295px] font-medium text-left text-_rougeStudea text-2xl">
         Frais à prevoir:
       </p>
       <p className="self-stretch flex-grow-0 flex-shrink-0 w-[295px] text-sm font-normal text-left stext-_gris">
          Il s’agit de frais uniques, à débourser une seule et unique fois.
    
        <br/>Honoraires d’organisation de la visite + Constitution du dossier + Rédaction du bail à la charge du locataire : <strong className=' text-_rougeStudea font-normal'>502€ TTC</strong>
    
        <br/>Honoraires de réalisation d’état des lieux à la charge du locataire :<strong className=' text-_rougeStudea font-normal'>188€ TTC</strong>
    
       <br/>  <strong className=' text-_rougeStudea font-normal'>Total des frais : 1284€ TTC</strong>
         </p>
     </div>
    </div>
    
       
      
  
  Landing Page mobile


  <div className='mb-8'>
  <div 
  className=' px-40 md:px-80'
  >
</div>
  <div className='my-8 mx-4'>
  

  <p className="w-_341 text-xl font-light text-_titre">
  Etudiants, Jeunes Actifs. 
  </p>
  <p className=' font-semibold text-_titre text-2xl'>
  La première Offre Jeune pour devenir propriétaire 
  </p>
  
  <p className=" w-_312 text-base text-center text-indigo-300">
    Réalisez votre premier achat immobilier pour seulement 700€ par moisdd!*
  </p></div>

  <div className='flex flex-col mx-4 '>
    <div className='flex items-center border-2 rounded-3xl py-2 shadow-sm bg-white absolute w-96'>
          <input type='text' placeholder='Recherche'
          className='pl-5 bg-transparent outline-none flex-grow'/>
          <svg
                width="23"
                height="23"
                viewBox="0 0 23 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className=" w-8 h-8 p-2 cursor-pointer inline-flex mx-2"
                style={{background:"linear-gradient(180deg, #81A3F9 -0.06%, #3462D8 108.09%)", borderRadius:"42px"}}
                preserveAspectRatio="xMidYMid meet">
                  <path
                    d="M9.58333 16.2917C13.2882 16.2917 16.2917 13.2882 16.2917 9.58333C16.2917 5.87842 13.2882 2.875 9.58333 2.875C5.87842 2.875 2.875 5.87842 2.875 9.58333C2.875 13.2882 5.87842 16.2917 9.58333 16.2917Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                   strokeLinejoin="round"
                 ></path>
                 <path
                   d="M14.375 14.375L20.125 20.125"
                   stroke="white"
                   strokeWidth="2"
                   strokeLinecap="round"
                   strokeLinejoin="round"
                 ></path>
           </svg>
       </div>
    <div className=' my-10  '>
      <img src="static/img/icons/House1.svg" className="w-_344 h-_175 rounded-xl object-cover " />
    </div>
</div>
<div className='flex flex-row-reverse items-start mx-8 mb-4'
>
  <div className=' mx-4 '>
  <p className="text-_bleuMarine font-_spaceGrotesk text-xl font-bold">
      Des logements dans toute la France  la taille est de 
  </p>
  <p className=" text-_grisBleu font-_spaceGrotesk mt-1">
  Accéder à notre carte avec plus de 2 500 logements neufs disponibles.  </p>
  </div>
 <div>
  <svg
    width={53}
    height={53}
    viewBox="0 0 53 53"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-_53 h-_53 relative"
    preserveAspectRatio="none"
  >
    <circle cx="26.5" cy="26.5" r="26.5" fill="#DCE6FF" />
    <path
      d="M33.6585 24.7013L26.6585 18.5763C26.2815 18.2464 25.7185 18.2464 25.3415 18.5763L18.3415 24.7013C18.1245 24.8912 18 25.1655 18 25.4539V34.0001C18 34.5524 18.4477 35.0001 19 35.0001H23C23.5523 35.0001 24 34.5524 24 34.0001V30.0001C24 29.4478 24.4477 29.0001 25 29.0001H27C27.5523 29.0001 28 29.4478 28 30.0001V34.0001C28 34.5524 28.4477 35.0001 29 35.0001H33C33.5523 35.0001 34 34.5524 34 34.0001V25.4539C34 25.1655 33.8755 24.8912 33.6585 24.7013Z"
      stroke="#6A7CA8"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg></div>

  </div>

  <div className='flex flex-row-reverse items-start mx-8 mb-4'>
  <div className='mx-4'>
  <p className=" text-_bleuMarine font-_spaceGrotesk text-xl font-bold">Accès libre aux</p>
  <p className=" text-_grisBleu font-_spaceGrotesk  mt-1">
  Télécharger gratuitement les plans des appartements et les plaquettes de présentation de nos résidences.  </p></div>
  <div>
  <svg
    width={53}
    height={53}
    viewBox="0 0 53 53"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-_53 h-_53 relative"
    preserveAspectRatio="none"
  >
    <circle cx="26.5" cy="26.5" r="26.5" fill="#FEF2D5" />
    <path
      d="M30 18H22C21.4477 18 21 18.4477 21 19V35C21 35.5523 21.4477 36 22 36H30C30.5523 36 31 35.5523 31 35V19C31 18.4477 30.5523 18 30 18Z"
      stroke="#DCC07E"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M26 33H26.002V33.002H26V33Z"
      stroke="#DCC07E"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg></div>
</div>

<div className='flex flex-row-reverse items-start mx-8 mb-4'>
  <div className='mx-4'>
  <p className=" text-_bleuMarine font-_spaceGrotesk text-xl font-bold">Un unique conseiller dédié</p>
  <p className=" text-_grisBleu font-_spaceGrotesk  mt-1">
  Une même personne pour vous accompagner, de la recherche de votre appartement jusqu’à votre emménagement. 
  </p></div>
  <div>
  <svg
    width={53}
    height={53}
    viewBox="0 0 53 53"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-[53px] h-[53px] relative"
    preserveAspectRatio="none"
  >
    <circle cx="26.5" cy="26.5" r="26.5" fill="#F5EAF9" />
    <path
      d="M21 35C21 33.3431 23.2386 32 26 32C28.7614 32 31 33.3431 31 35"
      stroke="#B985CC"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M32 29.2495C33.7659 29.7124 35 30.7697 35 31.9999"
      stroke="#B985CC"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M20 29.2495C18.2341 29.7124 17 30.7697 17 31.9999"
      stroke="#B985CC"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M26 29C27.6569 29 29 27.6569 29 26C29 24.3431 27.6569 23 26 23C24.3431 23 23 24.3431 23 26C23 27.6569 24.3431 29 26 29Z"
      stroke="#B985CC"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M32 25.2361C32.6137 24.6868 33 23.8885 33 23C33 21.3431 31.6569 20 30 20C29.2316 20 28.5308 20.2889 28 20.7639"
      stroke="#B985CC"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M20 25.2361C19.3863 24.6868 19 23.8885 19 23C19 21.3431 20.3431 20 22 20C22.7684 20 23.4692 20.2889 24 20.7639"
      stroke="#B985CC"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg></div>
  </div>


  <div className='flex flex-row-reverse items-start mx-8 mb-12'>
    <div className='mx-4'>
  <p className=" text-_bleuMarine font-_spaceGrotesk text-xl font-bold">Des aides pour votre premier achat </p>
  <p className="text-_grisBleu font-_spaceGrotesk mt-1">
  Prêt à Taux Zéro - TVA 5,5 %
Des remises(2) sur 100% des logements Nexity.  </p></div>
  <div>
  <svg
    width={53}
    height={53}
    viewBox="0 0 53 53"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className=" w-_53 h-_53 relative"
    preserveAspectRatio="none"
  >
    <circle cx="26.5" cy="26.5" r="26.5" fill="#EDF8F0" />
    <path
      d="M29 21L35 18V33L29 36V21Z"
      stroke="#93C8A2"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M23 33L29 36V21L23 18V33Z"
      stroke="#93C8A2"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M17 21L23 18V33L17 36V21Z"
      stroke="#93C8A2"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg></div>
</div>

<p className=" text-2xl font-semibold text-_bleuMarine mx-8">Nos services partenaires pour les étudiants</p>
<div className="text-md text-_grisBleu p-3 mx-4">Kit le nid vous propose un ensemble d’offres avantageuses pour mieux répondre à vos besoins lors de vos études :
<ul>
  <li>
  une location en résidence étudiante
  </li>
  <li>
  une mutuelle santé 
  </li>
  <li>
  un garant solide pour vous
  </li>
</ul>
 </div>

<div className="relative" style={{height: "487.03px"}}>
    <div className="w-40 h-40 absolute bg-indigo-50  rounded-xl" style={{left: "110.90px", top: "260.36px"}}/>
    <div className="w-40 h-40 absolute bg-indigo-50  rounded-xl" style={{left: "200.66px", top: "48.79px"}}/>
    <div className="w-20 h-20 absolute bg-green-50  rounded-xl" style={{left: "382.59px", top: "311.62px"}}/>
    <div className="w-20 h-20 absolute bg-yellow-100  rounded-xl" style={{left: "370.76px" ,top: "0px"}}/>
    <div className="w-20 h-20 absolute bg-purple-100  rounded-xl border-purple-100 border-opacity-10" style={{left: "0px", top: "201.83px"}}/>
    <div className="w-40 h-40 absolute" style={{left: "180.76px" ,top: "320.68px"}}>
        <div className="flex items-center justify-center flex-1 h-full px-4 py-14 bg-white rounded-xl">
            <div className="inline-flex flex-col space-y-2 items-center justify-end flex-1 h-full">
                <img className="w-28 h-4" src="static/img/LogoCautioneo.svg"/>
                <div className="w-full h-8">
                    <div className="flex items-center justify-center flex-1 h-full pl-3 pr-3.5 pt-1.5 pb-1 bg-indigo-600 bg-opacity-10 rounded-lg">
                        <p className="flex-1 h-full text-sm font-bold text-center text-indigo-600">3 mois offerts</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="w-40 h-40 absolute" style={{left: "130.59px", top: "90.90px"}}>
        <div className="flex items-center justify-center flex-1 h-full px-5 py-10 bg-white rounded-xl">
            <div className="inline-flex flex-col space-y-0.5 items-center justify-end flex-1 h-full">
                <img className="w-full h-1/2" src="static/img/LogoHeyme.svg"/>
                <div className="w-3/4 h-10">
                    <div className="flex items-center justify-center flex-1 h-full px-5 py-1.5 bg-red-500 bg-opacity-10 rounded-xl">
                        <p className="flex-1 h-full text-base font-bold text-center text-red-500">-15%</p>
                    </div> 
                </div>
            </div>
        </div>
    </div>
</div>
<div className="flex flex-col justify-start items-start relative gap-2 p-6 rounded-xl bg-white border border-_bordureBleu mt-5 mb-5 mx-4">
    <p className="flex-grow-0 flex-shrink-0 w-72 text-lg font-bold text-left text-_titre">
      Découverz notre guide du premier achat.
    </p>
    <p className="self-stretch flex-grow-0 flex-shrink-0 w-72 text-sm font-medium text-left text-_grisBleu">
      Kit le nid et La Banque Postale s’unissent pour t’aider à voler de tes propres ailes.
    </p>
    <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2.5 px-10 py-3 rounded-xl border border-_aPropos">
      <a className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-_aPropos cursor-pointer" href="assets/files/Guideachat.pdf">
        Télécharger notre guide
      </a>
    </div>
  </div>
<div className=' text-_grisBleu font-thin text-sm mt-8'>
(1) Mensualités données à titre indicatif uniquement et non contractuelles, pour l’achat d’un appartement de 187.000 €, sur une base de durée de 25 ans, à un taux d’intérêt fixe moyen constaté sur le marché de 1.4%, hors frais, hors assurance et avec un apport personnel de 7.500€. 
Pour être éligible au PTZ : il doit s’agir de votre premier achat en résidence principale et votre revenu fiscal de référence sur l’année 2 ans avant la réservation de l’appartement doit être inférieur à 37 000 €
</div>
</div>

connexion/inscriptions

<div className="w-[1480px] h-[1024px] relative overflow-hidden bg-[#f9fbff] mt-16">
  <div className="w-[447px] h-[141px] absolute left-[29px] top-[1081px]">
    <div className="w-[447px] h-[141px] absolute left-[-1.5px] top-[-1.5px] rounded-xl bg-white border-2 border-[#eff4ff]" />
    <p className="w-[179px] absolute left-[133px] top-[78px] text-xs font-medium text-left text-[#1a2e6c]">
      de 1 à 3 pièces
    </p>
    <p className="w-[161px] h-[18px] absolute left-[133px] top-4 text-lg font-bold text-left text-[#3679ff]">
      Titre du bien
    </p>
    <p className="w-[161px] absolute left-[133px] top-[37px] text-xs font-medium text-left text-[#6976a0]">
      <span className="w-[161px] text-xs font-medium text-left text-[#6976a0]">
        92500 Rueil-Malmaison
      </span>
      <br />
      <span className="w-[161px] text-xs font-medium text-left text-[#6976a0]">Buzenval</span>
    </p>
    <p className="w-[61px] absolute left-[133px] top-[94px] text-xs font-medium text-left text-[#6976a0]">
      à partir de
    </p>
    <p className="w-[117px] absolute left-[196px] top-[94px] text-xs font-medium text-left text-[#1a2e6c]">
      230 000€
    </p>
    <p className="absolute left-[133px] top-[110px] text-xs font-medium text-left text-[#6976a0]">
      soit
    </p>
    <p className="w-[68px] absolute left-[158px] top-[110px] text-xs font-medium text-left text-[#1a2e6c]">
      700€ / mois
    </p>
    <div className="w-[109px] h-[109px]">
      <div className="w-[109px] h-[109px] absolute left-[15.58px] top-[15.58px] rounded-[10px] bg-[#c4c4c4]" />
      <img
        src="static/img/icons/House1.svg"
        className="w-[217.44px] h-[198.04px] absolute left-[-8.2px] top-[-8.42px] rounded-[10px] object-cover"
      />
    </div>
    <div className="w-6 h-6 absolute left-[414px] top-[108px]" />
  </div>
  <svg
    width={137}
    height={50}
    viewBox="0 0 137 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="absolute left-[23.24px] top-[31.24px]"
    preserveAspectRatio="none"
  >
    <path
     fillRule="evenodd"
     clipRule="evenodd"
      d="M20.8258 33.0636L20.8193 33.0748C19.8869 34.6599 19.5843 35.8286 19.5843 36.6474C19.5843 37.5588 19.828 38.278 20.2895 38.9091C20.9465 39.7637 21.5881 40.3184 22.1887 40.6656C23.2551 41.2537 24.2372 41.8293 25.1319 42.3927C25.6412 42.6939 26.1796 43.0603 26.6285 43.5055C27.0183 43.8921 27.8027 44.7898 27.8027 46.1272C27.8027 47.4178 27.1748 48.623 25.9928 49.3346C25.0458 49.9049 24.0003 50 23.2563 50C20.4236 50 17.714 48.4774 15.2304 46.3484L15.2211 46.3404L15.2118 46.3323C14.1322 45.3908 13.2203 44.3628 12.5133 43.2512C11.0507 45.0725 9.95147 46.3901 9.22935 47.1821C8.64104 47.8476 8.05086 48.4469 7.47436 48.9042C7.18227 49.136 6.83145 49.3815 6.43254 49.5793C6.05468 49.7666 5.45745 50 4.72121 50C2.76659 50 1.56857 48.6704 0.967561 47.7168L0.912163 47.6289L0.863258 47.5372C0.335807 46.5492 0 45.4518 0 44.2775C0 43.8037 0.0976452 43.2746 0.172486 42.9012C0.262804 42.4505 0.391418 41.8971 0.552021 41.255C0.874064 39.9675 1.35005 38.2235 1.97452 36.0365C3.19228 31.7338 4.41919 26.5489 5.65279 20.4702C6.86771 14.4836 7.46067 9.14916 7.46067 4.45087C7.46067 4.04104 7.48498 3.58906 7.57043 3.14419C7.6414 2.77466 7.80188 2.14343 8.2464 1.54285C9.22959 0.16989 10.7718 0 11.5407 0C12.7295 0 13.633 0.553598 14.2094 1.07759C14.7483 1.56745 15.1517 2.15923 15.4601 2.70953C16.2142 3.94383 16.6117 5.31154 16.6117 6.76301C16.6117 12.2808 15.6498 18.9916 13.7716 26.8616C16.0741 23.8933 18.1019 21.4815 19.8518 19.6377L19.8588 19.6303L19.8659 19.6229C20.7138 18.742 21.481 18.0062 22.144 17.4704C22.4723 17.2051 22.8411 16.9347 23.2306 16.7168C23.5385 16.5446 24.2334 16.185 25.1215 16.185C26.6135 16.185 27.7953 16.8915 28.6237 17.7677C29.2257 18.3747 30.0758 19.4492 30.0758 20.9249C30.0758 21.7255 29.7642 22.342 29.6363 22.582C29.4665 22.9007 29.2629 23.1918 29.0774 23.4348C28.7021 23.9266 28.2014 24.4801 27.6261 25.0711C26.5356 26.1911 25.3289 27.4264 24.0061 28.7768C22.8797 29.9267 21.8173 31.3429 20.8323 33.0524L20.8258 33.0636ZM26.5204 19.7688C26.0929 19.3064 25.6266 19.0751 25.1215 19.0751C24.6552 19.0751 23.606 19.9229 21.974 21.6185C19.317 24.4182 15.9306 28.6547 11.8149 34.3282C10.7849 35.748 9.70924 37.2578 8.58791 38.8576C7.89911 39.8403 7.19307 40.8569 6.4698 41.9075C6.546 41.6711 6.6216 41.4354 6.6966 41.2006C7.60102 38.3685 8.41781 35.6541 9.14697 33.0575C12.1805 22.2547 13.6973 13.4899 13.6973 6.76301C13.6973 6.08344 13.561 5.43509 13.2882 4.81794C13.2528 4.73774 13.215 4.65806 13.175 4.57891C13.1533 4.53607 13.131 4.49339 13.1079 4.45087C13.0554 4.35372 12.9992 4.25738 12.9396 4.16185C12.4733 3.31407 12.007 2.89017 11.5407 2.89017C11.0744 2.89017 10.7636 3.00578 10.6081 3.237C10.4527 3.42967 10.375 3.8343 10.375 4.45087C10.375 4.77028 10.3724 5.0922 10.3672 5.41662C10.3666 5.45026 10.3661 5.48393 10.3655 5.51762C10.283 10.1769 9.6644 15.3512 8.50983 21.0405C7.26638 27.1676 6.02294 32.4277 4.77949 36.8208C3.53605 41.1753 2.91432 43.6609 2.91432 44.2775C2.91432 44.894 3.08918 45.5299 3.4389 46.185C3.82748 46.8015 4.25491 47.1098 4.72121 47.1098C5.1875 47.1098 5.96465 46.4933 7.05267 45.2601C7.44497 44.8308 7.97149 44.217 8.63223 43.4188C8.64054 43.4087 8.64887 43.3987 8.65723 43.3886C8.82034 43.1914 8.99155 42.983 9.17086 42.7636C9.21582 42.7086 9.26128 42.6528 9.30726 42.5964C9.79157 42.002 10.3324 41.33 10.9296 40.5804C11.0134 40.4753 11.0982 40.3687 11.1841 40.2606C11.8156 39.4661 12.507 38.5892 13.2582 37.6301C13.4212 37.422 13.587 37.21 13.7556 36.9942V37.6301C13.7556 38.7282 13.9937 39.7816 14.4698 40.7902C15.0296 41.976 15.9184 43.0999 17.1362 44.1618C18.4862 45.3191 19.7486 46.1357 20.9235 46.6115C21.3378 46.7793 21.7413 46.9047 22.1339 46.9878C22.1646 46.9943 22.1952 47.0005 22.2258 47.0065C22.2554 47.0123 22.285 47.0178 22.3144 47.0231C22.6358 47.0809 22.9498 47.1098 23.2563 47.1098C24.3443 47.1098 24.8883 46.7823 24.8883 46.1272C24.8883 45.7803 24.4609 45.3565 23.606 44.8555C23.4912 44.783 23.3746 44.7102 23.2563 44.6371C23.1438 44.5675 23.0297 44.4976 22.914 44.4274C22.6834 44.2875 22.4465 44.1464 22.2034 44.0039C21.7416 43.7335 21.2571 43.4586 20.75 43.1792C19.7397 42.6012 18.8071 41.7534 17.9522 40.6358C17.0974 39.4798 16.6699 38.1503 16.6699 36.6474C16.6699 35.1445 17.2139 33.4682 18.302 31.6185C19.39 29.7303 20.5946 28.1118 21.9157 26.763C23.2369 25.4143 24.4415 24.1811 25.5295 23.0636C26.6175 21.946 27.1615 21.2331 27.1615 20.9249C27.1615 20.578 26.9478 20.1927 26.5204 19.7688ZM23.4241 44.2108C23.4241 44.2108 23.4166 44.2126 23.3996 44.2142C23.4152 44.2113 23.4241 44.2108 23.4241 44.2108Z"
      fill="url(#paint0_linear_548_5695)"
    />
    <path
      d="M35.3696 46.0576C34.7708 46.0576 34.2718 45.8927 33.8726 45.5628C33.4956 45.2109 33.3071 44.716 33.3071 44.0782V31.3442C33.3071 30.7064 33.4956 30.2225 33.8726 29.8926C34.2718 29.5627 34.7708 29.3978 35.3696 29.3978C35.9683 29.3978 36.4673 29.5627 36.8665 29.8926C37.2657 30.2225 37.4653 30.7064 37.4653 31.3442V44.0782C37.4653 44.716 37.2657 45.2109 36.8665 45.5628C36.4673 45.8927 35.9683 46.0576 35.3696 46.0576ZM35.3696 26.4617C34.6155 26.4617 34.0168 26.2637 33.5732 25.8678C33.1297 25.45 32.9079 24.9111 32.9079 24.2513C32.9079 23.5915 33.1297 23.0637 33.5732 22.6678C34.0168 22.2719 34.6155 22.074 35.3696 22.074C36.1014 22.074 36.6891 22.2719 37.1326 22.6678C37.5983 23.0637 37.8312 23.5915 37.8312 24.2513C37.8312 24.9111 37.6094 25.45 37.1659 25.8678C36.7223 26.2637 36.1236 26.4617 35.3696 26.4617Z"
      fill="url(#paint1_linear_548_5695)"
    />
    <path
      d="M50.3911 42.9896C51.5 43.0556 52.0544 43.5504 52.0544 44.4741C52.0544 45.002 51.8326 45.4088 51.3891 45.6947C50.9677 45.9587 50.3579 46.0686 49.5595 46.0246L48.6613 45.9587C44.9356 45.6947 43.0727 43.7154 43.0727 40.0205V32.8287H41.4094C40.8107 32.8287 40.3449 32.6967 40.0123 32.4328C39.7018 32.1689 39.5466 31.784 39.5466 31.2782C39.5466 30.7723 39.7018 30.3874 40.0123 30.1235C40.3449 29.8596 40.8107 29.7277 41.4094 29.7277H43.0727V26.6926C43.0727 26.0988 43.2612 25.6259 43.6382 25.274C44.0152 24.9221 44.5253 24.7462 45.1684 24.7462C45.7894 24.7462 46.2884 24.9221 46.6654 25.274C47.0424 25.6259 47.2309 26.0988 47.2309 26.6926V29.7277H50.0585C50.6573 29.7277 51.1119 29.8596 51.4224 30.1235C51.755 30.3874 51.9214 30.7723 51.9214 31.2782C51.9214 31.784 51.755 32.1689 51.4224 32.4328C51.1119 32.6967 50.6573 32.8287 50.0585 32.8287H47.2309V40.3174C47.2309 41.9449 47.9849 42.8136 49.493 42.9236L50.3911 42.9896Z"
      fill="url(#paint2_linear_548_5695)"
    />
    <path
      d="M64.7885 46.0576C64.1897 46.0576 63.6907 45.8927 63.2915 45.5628C62.9145 45.2109 62.726 44.716 62.726 44.0782V24.3833C62.726 23.7455 62.9145 23.2616 63.2915 22.9317C63.6907 22.6018 64.1897 22.4369 64.7885 22.4369C65.3873 22.4369 65.8862 22.6018 66.2854 22.9317C66.6846 23.2616 66.8842 23.7455 66.8842 24.3833V44.0782C66.8842 44.716 66.6846 45.2109 66.2854 45.5628C65.8862 45.8927 65.3873 46.0576 64.7885 46.0576Z"
      fill="url(#paint3_linear_548_5695)"
    />
    <path
      d="M83.2565 41.4391C83.6335 41.4391 83.9329 41.582 84.1547 41.8679C84.3986 42.1538 84.5206 42.5387 84.5206 43.0226C84.5206 43.7044 84.1103 44.2762 83.2897 44.738C82.5357 45.1559 81.6819 45.4968 80.7283 45.7607C79.7747 46.0026 78.8654 46.1236 78.0005 46.1236C75.3836 46.1236 73.3101 45.3758 71.7799 43.8803C70.2497 42.3848 69.4845 40.3394 69.4845 37.7442C69.4845 36.0947 69.8172 34.6321 70.4825 33.3565C71.1478 32.0809 72.0793 31.0912 73.2768 30.3874C74.4966 29.6837 75.8715 29.3318 77.4017 29.3318C78.8654 29.3318 80.1406 29.6507 81.2273 30.2885C82.314 30.9263 83.1567 31.828 83.7555 32.9936C84.3542 34.1593 84.6536 35.5339 84.6536 37.1174C84.6536 38.0631 84.2323 38.5359 83.3895 38.5359H73.5762C73.7093 40.0535 74.1417 41.1751 74.8736 41.9009C75.6054 42.6047 76.6699 42.9566 78.0671 42.9566C78.7767 42.9566 79.3977 42.8686 79.9299 42.6927C80.4843 42.5167 81.1053 42.2748 81.7928 41.9669C82.4581 41.615 82.946 41.4391 83.2565 41.4391ZM77.5015 32.2349C76.3705 32.2349 75.4613 32.5868 74.7738 33.2906C74.1085 33.9943 73.7093 35.006 73.5762 36.3256H81.0942C81.0499 34.984 80.7172 33.9723 80.0963 33.2906C79.4753 32.5868 78.6104 32.2349 77.5015 32.2349Z"
      fill="url(#paint4_linear_548_5695)"
    />
    <path
      d="M104.683 29.3318C106.635 29.3318 108.087 29.8816 109.041 30.9813C109.995 32.0809 110.471 33.7414 110.471 35.9627V44.0782C110.471 44.6941 110.283 45.1779 109.906 45.5298C109.551 45.8817 109.052 46.0576 108.409 46.0576C107.766 46.0576 107.256 45.8817 106.879 45.5298C106.502 45.1779 106.313 44.6941 106.313 44.0782V36.1937C106.313 34.94 106.069 34.0273 105.581 33.4555C105.116 32.8837 104.373 32.5978 103.353 32.5978C102.155 32.5978 101.19 32.9717 100.458 33.7194C99.7488 34.4672 99.3939 35.4679 99.3939 36.7215V44.0782C99.3939 44.6941 99.2054 45.1779 98.8284 45.5298C98.4514 45.8817 97.9414 46.0576 97.2982 46.0576C96.6551 46.0576 96.145 45.8817 95.768 45.5298C95.4132 45.1779 95.2357 44.6941 95.2357 44.0782V31.3112C95.2357 30.7393 95.4243 30.2775 95.8013 29.9256C96.1783 29.5737 96.6883 29.3978 97.3315 29.3978C97.9081 29.3978 98.3738 29.5737 98.7286 29.9256C99.1056 30.2555 99.2941 30.6954 99.2941 31.2452V32.1359C99.8486 31.2342 100.592 30.5414 101.523 30.0576C102.454 29.5737 103.508 29.3318 104.683 29.3318Z"
      fill="url(#paint5_linear_548_5695)"
    />
    <path
      d="M115.441 46.0576C114.842 46.0576 114.343 45.8927 113.944 45.5628C113.567 45.2109 113.379 44.716 113.379 44.0782V31.3442C113.379 30.7064 113.567 30.2225 113.944 29.8926C114.343 29.5627 114.842 29.3978 115.441 29.3978C116.04 29.3978 116.539 29.5627 116.938 29.8926C117.337 30.2225 117.537 30.7064 117.537 31.3442V44.0782C117.537 44.716 117.337 45.2109 116.938 45.5628C116.539 45.8927 116.04 46.0576 115.441 46.0576ZM115.441 26.4617C114.687 26.4617 114.088 26.2637 113.645 25.8678C113.201 25.45 112.98 24.9111 112.98 24.2513C112.98 23.5915 113.201 23.0637 113.645 22.6678C114.088 22.2719 114.687 22.074 115.441 22.074C116.173 22.074 116.761 22.2719 117.204 22.6678C117.67 23.0637 117.903 23.5915 117.903 24.2513C117.903 24.9111 117.681 25.45 117.238 25.8678C116.794 26.2637 116.195 26.4617 115.441 26.4617Z"
      fill="url(#paint6_linear_548_5695)"
    />
    <path
      d="M134.871 22.4369C135.492 22.4369 136.002 22.6128 136.401 22.9647C136.8 23.3166 137 23.7785 137 24.3503V44.0782C137 44.672 136.811 45.1449 136.434 45.4968C136.057 45.8487 135.559 46.0246 134.938 46.0246C134.317 46.0246 133.818 45.8487 133.441 45.4968C133.064 45.1449 132.875 44.672 132.875 44.0782V43.2535C132.387 44.1552 131.678 44.859 130.746 45.3648C129.837 45.8707 128.794 46.1236 127.619 46.1236C126.222 46.1236 124.969 45.7717 123.86 45.0679C122.773 44.3641 121.92 43.3744 121.299 42.0988C120.7 40.8012 120.4 39.3167 120.4 37.6452C120.4 35.9737 120.7 34.5112 121.299 33.2575C121.92 32.0039 122.773 31.0362 123.86 30.3544C124.947 29.6726 126.2 29.3317 127.619 29.3317C128.794 29.3317 129.837 29.5737 130.746 30.0575C131.655 30.5414 132.354 31.2232 132.842 32.1029V24.2843C132.842 23.7345 133.019 23.2946 133.374 22.9647C133.751 22.6128 134.25 22.4369 134.871 22.4369ZM128.717 42.9236C130.048 42.9236 131.068 42.4727 131.777 41.571C132.509 40.6693 132.875 39.3827 132.875 37.7112C132.875 36.0397 132.509 34.7641 131.777 33.8844C131.068 32.9826 130.059 32.5318 128.75 32.5318C127.42 32.5318 126.388 32.9716 125.656 33.8514C124.925 34.7311 124.559 35.9957 124.559 37.6452C124.559 39.3167 124.925 40.6143 125.656 41.538C126.388 42.4617 127.408 42.9236 128.717 42.9236Z"
      fill="url(#paint7_linear_548_5695)"
    />
    <defs>
      <lineargradient
        id="paint0_linear_548_5695"
        x1="0.193638"
        y1="12.5024"
        x2="53.7329"
        y2="64.9948"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#CC95DF" />
        <stop offset={1} stopColor="#4F80FF" />
      </lineargradient>
      <lineargradient
        id="paint1_linear_548_5695"
        x1="0.193638"
        y1="12.5024"
        x2="53.7329"
        y2="64.9948"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#CC95DF" />
        <stop offset={1} stopColor="#4F80FF" />
      </lineargradient>
      <lineargradient
        id="paint2_linear_548_5695"
        x1="0.193638"
        y1="12.5024"
        x2="53.7329"
        y2="64.9948"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#CC95DF" />
        <stop offset={1} stopColor="#4F80FF" />
      </lineargradient>
      <lineargradient
        id="paint3_linear_548_5695"
        x1="0.193638"
        y1="12.5024"
        x2="53.7329"
        y2="64.9948"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#CC95DF" />
        <stop offset={1} stopColor="#4F80FF" />
      </lineargradient>
      <lineargradient
        id="paint4_linear_548_5695"
        x1="0.193638"
        y1="12.5024"
        x2="53.7329"
        y2="64.9948"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#CC95DF" />
        <stop offset={1} stopColor="#4F80FF" />
      </lineargradient>
      <lineargradient
        id="paint5_linear_548_5695"
        x1="0.193638"
        y1="12.5024"
        x2="53.7329"
        y2="64.9948"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#CC95DF" />
        <stop offset={1} stopColor="#4F80FF" />
      </lineargradient>
      <lineargradient
        id="paint6_linear_548_5695"
        x1="0.193638"
        y1="12.5024"
        x2="53.7329"
        y2="64.9948"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#CC95DF" />
        <stop offset={1} stopColor="#4F80FF" />
      </lineargradient>
      <lineargradient
        id="paint7_linear_548_5695"
        x1="0.193638"
        y1="12.5024"
        x2="53.7329"
        y2="64.9948"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#CC95DF" />
        <stop offset={1} stopColor="#4F80FF" />
      </lineargradient>
    </defs>
  </svg>
  <div className="w-[344px] h-[46px]">
    <div className="w-[163.32px] h-[46px]">
      <div className="w-[163.32px] h-[46px] absolute left-[1111px] top-[41px] rounded-[55px] bg-white border-2 border-[#4f80ff]" />
      <p className="w-[115.69px] h-[23.7px] absolute left-[1135.48px] top-[53.5px] text-base font-bold text-center text-[#4f80ff]">
        Se connecter
      </p>
    </div>
    <div className="w-[162.3px] h-[46px]">
      <div
        className="w-[162.3px] h-[46px] absolute left-[1293.2px] top-[41.5px] rounded-[55px] bg-[#4f80ff]"
        style={{ boxShadow: "0px 10px 44px -5px rgba(14,108,218,0.35)" }}
      />
      <p className="w-[74.52px] h-[23px] absolute left-[1337.59px] top-[53.5px] text-base font-bold text-center text-white">
        S’inscrire
      </p>
    </div>
  </div>
  <img
    src="static/img/icons/House1.svg"
    className="w-[516px] h-[460px] absolute left-[852px] top-[165px] rounded-[30px] object-none"
  />
  <p className="absolute left-[111px] top-[289px] text-[34px] font-bold text-left">
    <span className="text-[34px] font-bold text-left text-[#113eb6]">
      Devenir propriétaire devient plus{" "}
    </span>
    <span className="text-[34px] font-bold text-left text-[#4f80ff]">accessible.</span>
  </p>
  <p className="w-[733px] absolute left-[111px] top-[355px] text-xl font-bold text-left text-[#849cd9]">
    Réalisez votre premier achat immobilier pour seulement 700€ par mois !*
  </p>
  <div className="w-[936px] h-[97px]">
    <div className="w-[936px] h-[97px] absolute left-[110px] top-[399px] rounded-[100px] bg-white" />
    <svg
      width={18}
      height={10}
      viewBox="0 0 18 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute left-[684.5px] top-[457px]"
      preserveAspectRatio="xMidYMid meet"
    >
      <path
        d="M2.06191 1.81222e-08L0.5 1.52528L9.23611 10L17.9722 1.51671L16.4103 1.84601e-07L9.23611 6.96658L2.06191 1.81222e-08Z"
        fill="#8C97B6"
      />
    </svg>
    <div className="w-[149px] h-12">
      <p className="absolute left-[155px] top-[451px] text-base font-semibold text-left text-[#8c97b6]">
        Où cherchez-vous ?
      </p>
      <p className="absolute left-[155px] top-[425px] text-base font-bold text-left text-[#4f80ff]">
        Localisation
      </p>
    </div>
    <div className="w-[270px] h-12">
      <p className="absolute left-[368px] top-[451px] text-base font-semibold text-left text-[#8c97b6]">
        Combien de pièce souhaitez-vous ?
      </p>
      <p className="absolute left-[368px] top-[425px] text-base font-bold text-left text-[#4f80ff]">
        Nombre de pièce{" "}
      </p>
    </div>
    <div className="w-[179px] h-12">
      <p className="absolute left-[738px] top-[451px] text-base font-semibold text-left text-[#8c97b6]">
        Quel est votre budget ?
      </p>
      <p className="absolute left-[738px] top-[425px] text-base font-bold text-left text-[#4f80ff]">
        Budget
      </p>
    </div>
    <svg
      width={86}
      height={86}
      viewBox="0 0 86 86"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-[50px] h-[50px]"
      preserveAspectRatio="xMidYMid meet"
    >
      <g filter="url(#filter0_di_548_5724)">
        <rect x={18} y={13} width={50} height={50} rx={25} fill="#4F80FF" />
      </g>
      <path
       fillRule="evenodd"
       clipRule="evenodd"
        d="M41.4664 29C39.1741 29 37.0318 30.0005 35.5964 31.7515C33.4326 34.3779 33.4755 38.3175 35.6821 40.9231C37.1175 42.6115 39.2384 43.5703 41.4664 43.5703C42.8804 43.5703 44.2729 43.1743 45.4726 42.4447L45.6012 42.3613L50.6785 47.3432C51.2355 47.906 52.2424 47.906 52.7994 47.3432C53.0994 47.0514 53.2708 46.6762 53.2708 46.2801C53.2708 45.8841 53.1208 45.5297 52.8423 45.2379L47.7435 40.2769L47.8292 40.1518C49.693 37.2544 49.2431 33.565 46.7794 31.147C45.3655 29.7504 43.4802 29 41.4664 29ZM45.237 39.9642C44.2301 40.9439 42.8804 41.4859 41.4664 41.4859C40.0311 41.4859 38.7028 40.9439 37.6959 39.9642C36.689 38.9845 36.132 37.6713 36.132 36.2956C36.132 34.899 36.689 33.6066 37.6959 32.6269C38.7028 31.6473 40.0525 31.1053 41.4664 31.1053C42.9018 31.1053 44.2301 31.6473 45.237 32.6269C46.2439 33.6066 46.8009 34.9198 46.8009 36.2956C46.8009 37.6713 46.2439 38.9845 45.237 39.9642Z"
        fill="white"
      />
      <defs>
        <filter
          id="filter0_di_548_5724"
          x="0.5"
          y="0.5"
          width={85}
          height={85}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feflood floodOpacity={0} result="BackgroundImageFix" />
          <fecolormatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feoffset dy={5} />
          <fegaussianblur stdDeviation="8.75" />
          <fecolormatrix
            type="matrix"
            values="0 0 0 0 0.0533854 0 0 0 0 0.421745 0 0 0 0 0.854167 0 0 0 0.35 0"
          />
          <feblend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_548_5724" />
          <feblend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_548_5724"
            result="shape"
          />
          <fecolormatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feoffset />
          <fegaussianblur stdDeviation="3.75" />
          <fecomposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <fecolormatrix
            type="matrix"
            values="0 0 0 0 0.0958333 0 0 0 0 0.282599 0 0 0 0 0.766667 0 0 0 0.6 0"
          />
          <feblend mode="normal" in2="shape" result="effect2_innerShadow_548_5724" />
        </filter>
      </defs>
    </svg>
    <svg
      width={1}
      height={49}
      viewBox="0 0 1 49"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute left-[335.5px] top-[423.5px]"
      preserveAspectRatio="xMidYMid meet"
    >
      <line x1="0.5" y1="2.18557e-8" x2="0.499998" y2={49} stroke="url(#paint0_linear_548_5729)" />
      <defs>
        <lineargradient
          id="paint0_linear_548_5729"
          x1="-0.00000107093"
          y1="24.5"
          x2={-1}
          y2="24.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#3563DC" />
          <stop offset="0.0434107" stopColor="#3E6FEF" />
          <stop offset="0.940497" stopColor="#3062E3" />
          <stop offset={1} stopColor="#154AD2" />
        </lineargradient>
      </defs>
    </svg>
    <svg
      width={1}
      height={49}
      viewBox="0 0 1 49"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute left-[714.5px] top-[423.5px]"
      preserveAspectRatio="xMidYMid meet"
    >
      <line x1="0.5" y1="2.18557e-8" x2="0.499998" y2={49} stroke="url(#paint0_linear_548_5730)" />
      <defs>
        <lineargradient
          id="paint0_linear_548_5730"
          x1="-0.00000107093"
          y1="24.5"
          x2={-1}
          y2="24.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#3563DC" />
          <stop offset="0.0434107" stopColor="#3E6FEF" />
          <stop offset="0.940497" stopColor="#3062E3" />
          <stop offset={1} stopColor="#154AD2" />
        </lineargradient>
      </defs>
    </svg>
  </div>
  <div className="w-[544px] h-[37px]">
    <p className="absolute left-[468px] top-[47px] text-xl font-bold text-center text-[#113eb6]">
      Accueil
    </p>
    <p className="absolute left-[968px] top-[47px] text-xl font-bold text-center text-[#113eb6]">
      Blog
    </p>
    <p className="absolute left-[748px] top-[47px] text-xl font-bold text-center text-[#113eb6]">
      Qui sommes-nous ?
    </p>
    <p className="absolute left-[566px] top-[47px] text-xl font-bold text-center text-[#113eb6]">
      Acheter / Louer
    </p>
    <svg
      width={30}
      height={3}
      viewBox="0 0 30 3"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute left-[487.5px] top-[82.5px]"
      preserveAspectRatio="xMidYMid meet"
    >
      <line y1="1.5" x2={30} y2="1.5" stroke="#113EB6" strokeWidth={3} />
    </svg>
  </div>
  <div className="w-[1480px] h-[1024px] absolute left-[-1px] top-[-1px] opacity-30 bg-[#051f52]" />
  <div className="w-[343px] h-[573px] absolute left-[568px] top-56 rounded-xl bg-white border border-[#eaeffa]">
    <div className="flex justify-center items-start absolute left-[29.5px] top-[23px] gap-3">
      <p className="flex-grow-0 flex-shrink-0 w-[263px] h-[33px] text-lg font-bold text-center text-black">
        Connexion ou inscription
      </p>
      <svg
        width={25}
        height={24}
        viewBox="0 0 25 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
        preserveAspectRatio="xMidYMid meet"
      >
        <path
          d="M18.5 18L6.5 6"
          stroke="#14181F"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18.5 6L6.49997 18"
          stroke="#14181F"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
    <div className="w-[295px] h-20 absolute left-[23px] top-[104px]">
      <p className="absolute left-0 top-0 text-base font-bold text-left text-[#0e215c]">
        Adresse e-mail
      </p>
      <div className="w-[295px] h-[52px] absolute left-[-1.5px] top-[26.5px] rounded-xl bg-white border-2 border-[#eff4ff]" />
      <p className="w-[264.74px] absolute left-[15.13px] top-11 text-base font-bold text-left text-[#6976a0]">
        Votre e-mail
      </p>
    </div>
    <div
      className="flex justify-center items-center w-[295px] absolute left-[23px] top-[200px] gap-2.5 px-[120px] py-4 rounded-xl"
      style={{ background: "linear-gradient(to bottom, #81a3f9 -0.06%, #3462d8 108.09%)" }}
    >
      <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-white">
        Connexion / Inscription
      </p>
    </div>
    <div className="flex justify-start items-center w-[295px] h-[50px] absolute left-[22.5px] top-[299.5px] gap-10 p-6 rounded-xl bg-white border-2 border-[#eff4ff]">
      <svg
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
        preserveAspectRatio="none"
      >
        <path
          d="M23 12C23 5.92486 18.0751 1 12 1C5.92486 1 1 5.92486 1 12C1 17.4903 5.02252 22.0412 10.2812 22.8664V15.1797H7.48828V12H10.2812V9.57656C10.2812 6.81969 11.9235 5.29688 14.4361 5.29688C15.6392 5.29688 16.8984 5.51172 16.8984 5.51172V8.21875H15.5114C14.145 8.21875 13.7188 9.06674 13.7188 9.9375V12H16.7695L16.2818 15.1797H13.7188V22.8664C18.9775 22.0412 23 17.4903 23 12Z"
          fill="#3679FF"
        />
        <path
          d="M16.2818 15.1797L16.7695 12H13.7188V9.9375C13.7188 9.0676 14.145 8.21875 15.5114 8.21875H16.8984V5.51172C16.8984 5.51172 15.6397 5.29688 14.4361 5.29688C11.9235 5.29688 10.2812 6.81969 10.2812 9.57656V12H7.48828V15.1797H10.2812V22.8664C11.4202 23.0445 12.5798 23.0445 13.7188 22.8664V15.1797H16.2818Z"
          fill="white"
        />
      </svg>
      <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-center text-[#272832]">
        continuer avec Facebook
      </p>
    </div>
    <div className="flex justify-start items-center w-[295px] h-[50px] absolute left-[22.5px] top-[365.5px] gap-10 p-6 rounded-xl bg-white border-2 border-[#eff4ff]">
      <svg
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
        preserveAspectRatio="none"
      >
        <rect x="1.5" y="1.5" width={21} height={21} rx={6} fill="url(#paint0_radial_1654_4074)" />
        <rect x="1.5" y="1.5" width={21} height={21} rx={6} fill="url(#paint1_radial_1654_4074)" />
        <rect x="1.5" y="1.5" width={21} height={21} rx={6} fill="url(#paint2_radial_1654_4074)" />
        <path
          d="M17.25 7.875C17.25 8.49632 16.7463 9 16.125 9C15.5037 9 15 8.49632 15 7.875C15 7.25368 15.5037 6.75 16.125 6.75C16.7463 6.75 17.25 7.25368 17.25 7.875Z"
          fill="white"
        />
        <path
         fillRule="evenodd"
         clipRule="evenodd"
          d="M12 15.75C14.0711 15.75 15.75 14.0711 15.75 12C15.75 9.92893 14.0711 8.25 12 8.25C9.92893 8.25 8.25 9.92893 8.25 12C8.25 14.0711 9.92893 15.75 12 15.75ZM12 14.25C13.2426 14.25 14.25 13.2426 14.25 12C14.25 10.7574 13.2426 9.75 12 9.75C10.7574 9.75 9.75 10.7574 9.75 12C9.75 13.2426 10.7574 14.25 12 14.25Z"
          fill="white"
        />
        <path
         fillRule="evenodd"
         clipRule="evenodd"
          d="M4.5 11.7C4.5 9.17976 4.5 7.91965 4.99047 6.95704C5.4219 6.11031 6.11031 5.4219 6.95704 4.99047C7.91965 4.5 9.17976 4.5 11.7 4.5H12.3C14.8202 4.5 16.0804 4.5 17.043 4.99047C17.8897 5.4219 18.5781 6.11031 19.0095 6.95704C19.5 7.91965 19.5 9.17976 19.5 11.7V12.3C19.5 14.8202 19.5 16.0804 19.0095 17.043C18.5781 17.8897 17.8897 18.5781 17.043 19.0095C16.0804 19.5 14.8202 19.5 12.3 19.5H11.7C9.17976 19.5 7.91965 19.5 6.95704 19.0095C6.11031 18.5781 5.4219 17.8897 4.99047 17.043C4.5 16.0804 4.5 14.8202 4.5 12.3V11.7ZM11.7 6H12.3C13.5849 6 14.4583 6.00117 15.1334 6.05633C15.7911 6.11006 16.1274 6.20745 16.362 6.32698C16.9265 6.6146 17.3854 7.07354 17.673 7.63803C17.7926 7.87263 17.8899 8.20893 17.9437 8.86656C17.9988 9.54169 18 10.4151 18 11.7V12.3C18 13.5849 17.9988 14.4583 17.9437 15.1334C17.8899 15.7911 17.7926 16.1274 17.673 16.362C17.3854 16.9265 16.9265 17.3854 16.362 17.673C16.1274 17.7926 15.7911 17.8899 15.1334 17.9437C14.4583 17.9988 13.5849 18 12.3 18H11.7C10.4151 18 9.54169 17.9988 8.86656 17.9437C8.20893 17.8899 7.87263 17.7926 7.63803 17.673C7.07354 17.3854 6.6146 16.9265 6.32698 16.362C6.20745 16.1274 6.11006 15.7911 6.05633 15.1334C6.00117 14.4583 6 13.5849 6 12.3V11.7C6 10.4151 6.00117 9.54169 6.05633 8.86656C6.11006 8.20893 6.20745 7.87263 6.32698 7.63803C6.6146 7.07354 7.07354 6.6146 7.63803 6.32698C7.87263 6.20745 8.20893 6.11006 8.86656 6.05633C9.54169 6.00117 10.4151 6 11.7 6Z"
          fill="white"
        />
        <defs>
          <radialgradient
            id="paint0_radial_1654_4074"
            cx={0}
            cy={0}
            r={1}
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(9 17.25) rotate(-55.3758) scale(19.1397)"
          >
            <stop stopColor="#B13589" />
            <stop offset="0.79309" stopColor="#C62F94" />
            <stop offset={1} stopColor="#8A3AC8" />
          </radialgradient>
          <radialgradient
            id="paint1_radial_1654_4074"
            cx={0}
            cy={0}
            r={1}
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(8.25 23.25) rotate(-65.1363) scale(16.9457)"
          >
            <stop stopColor="#E0E8B7" />
            <stop offset="0.444662" stopColor="#FB8A2E" />
            <stop offset="0.71474" stopColor="#E2425C" />
            <stop offset={1} stopColor="#E2425C" stopOpacity={0} />
          </radialgradient>
          <radialgradient
            id="paint2_radial_1654_4074"
            cx={0}
            cy={0}
            r={1}
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(0.375001 2.25) rotate(-8.1301) scale(29.1682 6.23877)"
          >
            <stop offset="0.156701" stopColor="#406ADC" />
            <stop offset="0.467799" stopColor="#6A45BE" />
            <stop offset={1} stopColor="#6A45BE" stopOpacity={0} />
          </radialgradient>
        </defs>
      </svg>
      <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-center text-[#272832]">
        continuer avec Instagram
      </p>
    </div>
    <div className="flex justify-start items-center w-[295px] h-[50px] absolute left-[22.5px] top-[431.5px] gap-10 p-6 rounded-xl bg-white border-2 border-[#eff4ff]">
      <svg
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
        preserveAspectRatio="none"
      >
        <g clipPath="url(#clip0_1654_4082)">
          <path
            d="M22.7855 12.2537C22.7855 11.506 22.7249 10.7542 22.5956 10.0186H12.22V14.2545H18.1616C17.915 15.6206 17.1228 16.8291 15.9628 17.5971V20.3456H19.5075C21.5891 18.4297 22.7855 15.6004 22.7855 12.2537Z"
            fill="#4285F4"
          />
          <path
            d="M12.22 23.0005C15.1867 23.0005 17.6887 22.0265 19.5116 20.345L15.9668 17.5965C14.9806 18.2675 13.7074 18.6474 12.224 18.6474C9.3543 18.6474 6.92108 16.7114 6.04803 14.1084H2.39012V16.9418C4.25747 20.6563 8.06089 23.0005 12.22 23.0005Z"
            fill="#34A853"
          />
          <path
            d="M6.044 14.1085C5.58322 12.7423 5.58322 11.263 6.044 9.89684V7.06348H2.39013C0.829959 10.1717 0.829959 13.8336 2.39013 16.9418L6.044 14.1085Z"
            fill="#FBBC04"
          />
          <path
            d="M12.22 5.35386C13.7882 5.3296 15.304 5.91972 16.4397 7.00295L19.5803 3.8624C17.5917 1.99505 14.9523 0.968406 12.22 1.00074C8.06089 1.00074 4.25747 3.34504 2.39012 7.06357L6.04399 9.89694C6.913 7.28992 9.35026 5.35386 12.22 5.35386Z"
            fill="#EA4335"
          />
        </g>
        <defs>
          <clippath id="clip0_1654_4082">
            <rect width={22} height={22} fill="white" transform="translate(1 1)" />
          </clippath>
        </defs>
      </svg>
      <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-center text-[#272832]">
        continuer avec Google
      </p>
    </div>
    <div className="flex justify-start items-center w-[295px] h-[50px] absolute left-[22.5px] top-[497.5px] gap-10 p-6 rounded-xl bg-white border-2 border-[#eff4ff]">
      <svg
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
        preserveAspectRatio="none"
      >
        <g clipPath="url(#clip0_1654_4090)">
          <path
            d="M20.976 18.1447C20.6433 18.9133 20.2494 19.6208 19.7932 20.2713C19.1712 21.158 18.662 21.7719 18.2695 22.1127C17.6611 22.6722 17.0093 22.9587 16.3113 22.975C15.8102 22.975 15.2059 22.8324 14.5025 22.5432C13.7967 22.2553 13.1481 22.1127 12.5551 22.1127C11.9332 22.1127 11.2661 22.2553 10.5526 22.5432C9.83807 22.8324 9.26242 22.9832 8.8223 22.9981C8.15295 23.0266 7.48577 22.732 6.81982 22.1127C6.39477 21.742 5.86312 21.1064 5.22623 20.2061C4.54289 19.2446 3.98109 18.1297 3.54097 16.8587C3.06962 15.4857 2.83333 14.1563 2.83333 12.8692C2.83333 11.3948 3.15191 10.1232 3.79003 9.0576C4.29153 8.20166 4.9587 7.52647 5.79373 7.03081C6.62875 6.53514 7.53099 6.28256 8.50263 6.2664C9.03428 6.2664 9.73147 6.43085 10.5979 6.75405C11.4618 7.07834 12.0165 7.24279 12.2598 7.24279C12.4416 7.24279 13.0578 7.0505 14.1025 6.66714C15.0905 6.31162 15.9243 6.16441 16.6073 6.2224C18.4583 6.37178 19.8488 7.10142 20.7736 8.41595C19.1182 9.41896 18.2994 10.8238 18.3157 12.626C18.3306 14.0297 18.8399 15.1979 19.8407 16.1254C20.2943 16.5558 20.8008 16.8885 21.3643 17.1248C21.2421 17.4793 21.1131 17.8188 20.976 18.1447ZM16.7309 1.44013C16.7309 2.54038 16.3289 3.56768 15.5277 4.51854C14.5609 5.64892 13.3914 6.30211 12.1231 6.19904C12.107 6.06705 12.0976 5.92813 12.0976 5.78214C12.0976 4.7259 12.5574 3.59552 13.374 2.67127C13.7816 2.20331 14.3001 1.81421 14.9289 1.50381C15.5563 1.19805 16.1497 1.02896 16.7078 1C16.7241 1.14709 16.7309 1.29418 16.7309 1.44011V1.44013Z"
            fill="black"
          />
        </g>
        <defs>
          <clippath id="clip0_1654_4090">
            <rect width={22} height={22} fill="white" transform="translate(1 1)" />
          </clippath>
        </defs>
      </svg>
      <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-center text-[#272832]">
        continuer avec Apple
      </p>
    </div>
    <svg
      width={135}
      height={2}
      viewBox="0 0 135 2"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute left-[-1.5px] top-[274.5px]"
      preserveAspectRatio="xMidYMid meet"
    >
      <line x1="8.74228e-8" y1={1} x2={135} y2="1.00001" stroke="#EFF4FF" strokeWidth={2} />
    </svg>
    <svg
      width={135}
      height={2}
      viewBox="0 0 135 2"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute left-[206.5px] top-[274.5px]"
      preserveAspectRatio="xMidYMid meet"
    >
      <line x1="8.74228e-8" y1={1} x2={135} y2="1.00001" stroke="#EFF4FF" strokeWidth={2} />
    </svg>
    <p className="absolute left-[161px] top-[267px] text-sm font-bold text-center text-black">Ou</p>
    <svg
      width={343}
      height={2}
      viewBox="0 0 343 2"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute left-[-1.5px] top-[79.5px]"
      preserveAspectRatio="xMidYMid meet"
    >
      <line x1="8.74228e-8" y1={1} x2={343} y2="1.00003" stroke="#EFF4FF" strokeWidth={2} />
    </svg>
  </div>
</div>






Page connecter
<div className="w-[1480px] h-[1024px] relative overflow-hidden bg-[#f9fbff]">
  <div className="w-[447px] h-[141px] absolute left-[29px] top-[1081px]">
    <div className="w-[447px] h-[141px] absolute left-[-1.5px] top-[-1.5px] rounded-xl bg-white border-2 border-[#eff4ff]" />
    <p className="w-[179px] absolute left-[133px] top-[78px] text-xs font-medium text-left text-[#1a2e6c]">
      de 1 à 3 pièces
    </p>
    <p className="w-[161px] h-[18px] absolute left-[133px] top-4 text-lg font-bold text-left text-[#3679ff]">
      Titre du bien
    </p>
    <p className="w-[161px] absolute left-[133px] top-[37px] text-xs font-medium text-left text-[#6976a0]">
      <span className="w-[161px] text-xs font-medium text-left text-[#6976a0]">
        92500 Rueil-Malmaison
      </span>
      <br />
      <span className="w-[161px] text-xs font-medium text-left text-[#6976a0]">Buzenval</span>
    </p>
    <p className="w-[61px] absolute left-[133px] top-[94px] text-xs font-medium text-left text-[#6976a0]">
      à partir de
    </p>
    <p className="w-[117px] absolute left-[196px] top-[94px] text-xs font-medium text-left text-[#1a2e6c]">
      230 000€
    </p>
    <p className="absolute left-[133px] top-[110px] text-xs font-medium text-left text-[#6976a0]">
      soit
    </p>
    <p className="w-[68px] absolute left-[158px] top-[110px] text-xs font-medium text-left text-[#1a2e6c]">
      700€ / mois
    </p>
    <div className="w-[109px] h-[109px]">
      <div className="w-[109px] h-[109px] absolute left-[15.58px] top-[15.58px] rounded-[10px] bg-[#c4c4c4]" />
      
    </div>
    <div className="w-6 h-6 absolute left-[414px] top-[108px]" />
  </div>
  <svg
    width={137}
    height={50}
    viewBox="0 0 137 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="absolute left-[23.24px] top-[31.24px]"
    preserveAspectRatio="none"
  >
    <path
     fillRule="evenodd"
     clipRule="evenodd"
      d="M20.8258 33.0636L20.8193 33.0748C19.8869 34.6599 19.5843 35.8286 19.5843 36.6474C19.5843 37.5588 19.828 38.278 20.2895 38.9091C20.9465 39.7637 21.5881 40.3184 22.1887 40.6656C23.2551 41.2537 24.2372 41.8293 25.1319 42.3927C25.6412 42.6939 26.1796 43.0603 26.6285 43.5055C27.0183 43.8921 27.8027 44.7898 27.8027 46.1272C27.8027 47.4178 27.1748 48.623 25.9928 49.3346C25.0458 49.9049 24.0003 50 23.2563 50C20.4236 50 17.714 48.4774 15.2304 46.3484L15.2211 46.3404L15.2118 46.3323C14.1322 45.3908 13.2203 44.3628 12.5133 43.2512C11.0507 45.0725 9.95147 46.3901 9.22935 47.1821C8.64104 47.8476 8.05086 48.4469 7.47436 48.9042C7.18227 49.136 6.83145 49.3815 6.43254 49.5793C6.05468 49.7666 5.45745 50 4.72121 50C2.76659 50 1.56857 48.6704 0.967561 47.7168L0.912163 47.6289L0.863258 47.5372C0.335807 46.5492 0 45.4518 0 44.2775C0 43.8037 0.0976452 43.2746 0.172486 42.9012C0.262804 42.4505 0.391418 41.8971 0.552021 41.255C0.874064 39.9675 1.35005 38.2235 1.97452 36.0365C3.19228 31.7338 4.41919 26.5489 5.65279 20.4702C6.86771 14.4836 7.46067 9.14916 7.46067 4.45087C7.46067 4.04104 7.48498 3.58906 7.57043 3.14419C7.6414 2.77466 7.80188 2.14343 8.2464 1.54285C9.22959 0.16989 10.7718 0 11.5407 0C12.7295 0 13.633 0.553598 14.2094 1.07759C14.7483 1.56745 15.1517 2.15923 15.4601 2.70953C16.2142 3.94383 16.6117 5.31154 16.6117 6.76301C16.6117 12.2808 15.6498 18.9916 13.7716 26.8616C16.0741 23.8933 18.1019 21.4815 19.8518 19.6377L19.8588 19.6303L19.8659 19.6229C20.7138 18.742 21.481 18.0062 22.144 17.4704C22.4723 17.2051 22.8411 16.9347 23.2306 16.7168C23.5385 16.5446 24.2334 16.185 25.1215 16.185C26.6135 16.185 27.7953 16.8915 28.6237 17.7677C29.2257 18.3747 30.0758 19.4492 30.0758 20.9249C30.0758 21.7255 29.7642 22.342 29.6363 22.582C29.4665 22.9007 29.2629 23.1918 29.0774 23.4348C28.7021 23.9266 28.2014 24.4801 27.6261 25.0711C26.5356 26.1911 25.3289 27.4264 24.0061 28.7768C22.8797 29.9267 21.8173 31.3429 20.8323 33.0524L20.8258 33.0636ZM26.5204 19.7688C26.0929 19.3064 25.6266 19.0751 25.1215 19.0751C24.6552 19.0751 23.606 19.9229 21.974 21.6185C19.317 24.4182 15.9306 28.6547 11.8149 34.3282C10.7849 35.748 9.70924 37.2578 8.58791 38.8576C7.89911 39.8403 7.19307 40.8569 6.4698 41.9075C6.546 41.6711 6.6216 41.4354 6.6966 41.2006C7.60102 38.3685 8.41781 35.6541 9.14697 33.0575C12.1805 22.2547 13.6973 13.4899 13.6973 6.76301C13.6973 6.08344 13.561 5.43509 13.2882 4.81794C13.2528 4.73774 13.215 4.65806 13.175 4.57891C13.1533 4.53607 13.131 4.49339 13.1079 4.45087C13.0554 4.35372 12.9992 4.25738 12.9396 4.16185C12.4733 3.31407 12.007 2.89017 11.5407 2.89017C11.0744 2.89017 10.7636 3.00578 10.6081 3.237C10.4527 3.42967 10.375 3.8343 10.375 4.45087C10.375 4.77028 10.3724 5.0922 10.3672 5.41662C10.3666 5.45026 10.3661 5.48393 10.3655 5.51762C10.283 10.1769 9.6644 15.3512 8.50983 21.0405C7.26638 27.1676 6.02294 32.4277 4.77949 36.8208C3.53605 41.1753 2.91432 43.6609 2.91432 44.2775C2.91432 44.894 3.08918 45.5299 3.4389 46.185C3.82748 46.8015 4.25491 47.1098 4.72121 47.1098C5.1875 47.1098 5.96465 46.4933 7.05267 45.2601C7.44497 44.8308 7.97149 44.217 8.63223 43.4188C8.64054 43.4087 8.64887 43.3987 8.65723 43.3886C8.82034 43.1914 8.99155 42.983 9.17086 42.7636C9.21582 42.7086 9.26128 42.6528 9.30726 42.5964C9.79157 42.002 10.3324 41.33 10.9296 40.5804C11.0134 40.4753 11.0982 40.3687 11.1841 40.2606C11.8156 39.4661 12.507 38.5892 13.2582 37.6301C13.4212 37.422 13.587 37.21 13.7556 36.9942V37.6301C13.7556 38.7282 13.9937 39.7816 14.4698 40.7902C15.0296 41.976 15.9184 43.0999 17.1362 44.1618C18.4862 45.3191 19.7486 46.1357 20.9235 46.6115C21.3378 46.7793 21.7413 46.9047 22.1339 46.9878C22.1646 46.9943 22.1952 47.0005 22.2258 47.0065C22.2554 47.0123 22.285 47.0178 22.3144 47.0231C22.6358 47.0809 22.9498 47.1098 23.2563 47.1098C24.3443 47.1098 24.8883 46.7823 24.8883 46.1272C24.8883 45.7803 24.4609 45.3565 23.606 44.8555C23.4912 44.783 23.3746 44.7102 23.2563 44.6371C23.1438 44.5675 23.0297 44.4976 22.914 44.4274C22.6834 44.2875 22.4465 44.1464 22.2034 44.0039C21.7416 43.7335 21.2571 43.4586 20.75 43.1792C19.7397 42.6012 18.8071 41.7534 17.9522 40.6358C17.0974 39.4798 16.6699 38.1503 16.6699 36.6474C16.6699 35.1445 17.2139 33.4682 18.302 31.6185C19.39 29.7303 20.5946 28.1118 21.9157 26.763C23.2369 25.4143 24.4415 24.1811 25.5295 23.0636C26.6175 21.946 27.1615 21.2331 27.1615 20.9249C27.1615 20.578 26.9478 20.1927 26.5204 19.7688ZM23.4241 44.2108C23.4241 44.2108 23.4166 44.2126 23.3996 44.2142C23.4152 44.2113 23.4241 44.2108 23.4241 44.2108Z"
      fill="url(#paint0_linear_548_5790)"
    />
    <path
      d="M35.3696 46.0576C34.7708 46.0576 34.2718 45.8927 33.8726 45.5628C33.4956 45.2109 33.3071 44.716 33.3071 44.0782V31.3442C33.3071 30.7064 33.4956 30.2225 33.8726 29.8926C34.2718 29.5627 34.7708 29.3978 35.3696 29.3978C35.9683 29.3978 36.4673 29.5627 36.8665 29.8926C37.2657 30.2225 37.4653 30.7064 37.4653 31.3442V44.0782C37.4653 44.716 37.2657 45.2109 36.8665 45.5628C36.4673 45.8927 35.9683 46.0576 35.3696 46.0576ZM35.3696 26.4617C34.6155 26.4617 34.0168 26.2637 33.5732 25.8678C33.1297 25.45 32.9079 24.9111 32.9079 24.2513C32.9079 23.5915 33.1297 23.0637 33.5732 22.6678C34.0168 22.2719 34.6155 22.074 35.3696 22.074C36.1014 22.074 36.6891 22.2719 37.1326 22.6678C37.5983 23.0637 37.8312 23.5915 37.8312 24.2513C37.8312 24.9111 37.6094 25.45 37.1659 25.8678C36.7223 26.2637 36.1236 26.4617 35.3696 26.4617Z"
      fill="url(#paint1_linear_548_5790)"
    />
    <path
      d="M50.3911 42.9896C51.5 43.0556 52.0544 43.5504 52.0544 44.4741C52.0544 45.002 51.8326 45.4088 51.3891 45.6947C50.9677 45.9587 50.3579 46.0686 49.5595 46.0246L48.6613 45.9587C44.9356 45.6947 43.0727 43.7154 43.0727 40.0205V32.8287H41.4094C40.8107 32.8287 40.3449 32.6967 40.0123 32.4328C39.7018 32.1689 39.5466 31.784 39.5466 31.2782C39.5466 30.7723 39.7018 30.3874 40.0123 30.1235C40.3449 29.8596 40.8107 29.7277 41.4094 29.7277H43.0727V26.6926C43.0727 26.0988 43.2612 25.6259 43.6382 25.274C44.0152 24.9221 44.5253 24.7462 45.1684 24.7462C45.7894 24.7462 46.2884 24.9221 46.6654 25.274C47.0424 25.6259 47.2309 26.0988 47.2309 26.6926V29.7277H50.0585C50.6573 29.7277 51.1119 29.8596 51.4224 30.1235C51.755 30.3874 51.9214 30.7723 51.9214 31.2782C51.9214 31.784 51.755 32.1689 51.4224 32.4328C51.1119 32.6967 50.6573 32.8287 50.0585 32.8287H47.2309V40.3174C47.2309 41.9449 47.9849 42.8136 49.493 42.9236L50.3911 42.9896Z"
      fill="url(#paint2_linear_548_5790)"
    />
    <path
      d="M64.7885 46.0576C64.1897 46.0576 63.6907 45.8927 63.2915 45.5628C62.9145 45.2109 62.726 44.716 62.726 44.0782V24.3833C62.726 23.7455 62.9145 23.2616 63.2915 22.9317C63.6907 22.6018 64.1897 22.4369 64.7885 22.4369C65.3873 22.4369 65.8862 22.6018 66.2854 22.9317C66.6846 23.2616 66.8842 23.7455 66.8842 24.3833V44.0782C66.8842 44.716 66.6846 45.2109 66.2854 45.5628C65.8862 45.8927 65.3873 46.0576 64.7885 46.0576Z"
      fill="url(#paint3_linear_548_5790)"
    />
    <path
      d="M83.2565 41.4391C83.6335 41.4391 83.9329 41.582 84.1547 41.8679C84.3986 42.1538 84.5206 42.5387 84.5206 43.0226C84.5206 43.7044 84.1103 44.2762 83.2897 44.738C82.5357 45.1559 81.6819 45.4968 80.7283 45.7607C79.7747 46.0026 78.8654 46.1236 78.0005 46.1236C75.3836 46.1236 73.3101 45.3758 71.7799 43.8803C70.2497 42.3848 69.4845 40.3394 69.4845 37.7442C69.4845 36.0947 69.8172 34.6321 70.4825 33.3565C71.1478 32.0809 72.0793 31.0912 73.2768 30.3874C74.4966 29.6837 75.8715 29.3318 77.4017 29.3318C78.8654 29.3318 80.1406 29.6507 81.2273 30.2885C82.314 30.9263 83.1567 31.828 83.7555 32.9936C84.3542 34.1593 84.6536 35.5339 84.6536 37.1174C84.6536 38.0631 84.2323 38.5359 83.3895 38.5359H73.5762C73.7093 40.0535 74.1417 41.1751 74.8736 41.9009C75.6054 42.6047 76.6699 42.9566 78.0671 42.9566C78.7767 42.9566 79.3977 42.8686 79.9299 42.6927C80.4843 42.5167 81.1053 42.2748 81.7928 41.9669C82.4581 41.615 82.946 41.4391 83.2565 41.4391ZM77.5015 32.2349C76.3705 32.2349 75.4613 32.5868 74.7738 33.2906C74.1085 33.9943 73.7093 35.006 73.5762 36.3256H81.0942C81.0499 34.984 80.7172 33.9723 80.0963 33.2906C79.4753 32.5868 78.6104 32.2349 77.5015 32.2349Z"
      fill="url(#paint4_linear_548_5790)"
    />
    <path
      d="M104.683 29.3318C106.635 29.3318 108.087 29.8816 109.041 30.9813C109.995 32.0809 110.471 33.7414 110.471 35.9627V44.0782C110.471 44.6941 110.283 45.1779 109.906 45.5298C109.551 45.8817 109.052 46.0576 108.409 46.0576C107.766 46.0576 107.256 45.8817 106.879 45.5298C106.502 45.1779 106.313 44.6941 106.313 44.0782V36.1937C106.313 34.94 106.069 34.0273 105.581 33.4555C105.116 32.8837 104.373 32.5978 103.353 32.5978C102.155 32.5978 101.19 32.9717 100.458 33.7194C99.7488 34.4672 99.3939 35.4679 99.3939 36.7215V44.0782C99.3939 44.6941 99.2054 45.1779 98.8284 45.5298C98.4514 45.8817 97.9414 46.0576 97.2982 46.0576C96.6551 46.0576 96.145 45.8817 95.768 45.5298C95.4132 45.1779 95.2357 44.6941 95.2357 44.0782V31.3112C95.2357 30.7393 95.4243 30.2775 95.8013 29.9256C96.1783 29.5737 96.6883 29.3978 97.3315 29.3978C97.9081 29.3978 98.3738 29.5737 98.7286 29.9256C99.1056 30.2555 99.2941 30.6954 99.2941 31.2452V32.1359C99.8486 31.2342 100.592 30.5414 101.523 30.0576C102.454 29.5737 103.508 29.3318 104.683 29.3318Z"
      fill="url(#paint5_linear_548_5790)"
    />
    <path
      d="M115.441 46.0576C114.842 46.0576 114.343 45.8927 113.944 45.5628C113.567 45.2109 113.379 44.716 113.379 44.0782V31.3442C113.379 30.7064 113.567 30.2225 113.944 29.8926C114.343 29.5627 114.842 29.3978 115.441 29.3978C116.04 29.3978 116.539 29.5627 116.938 29.8926C117.337 30.2225 117.537 30.7064 117.537 31.3442V44.0782C117.537 44.716 117.337 45.2109 116.938 45.5628C116.539 45.8927 116.04 46.0576 115.441 46.0576ZM115.441 26.4617C114.687 26.4617 114.088 26.2637 113.645 25.8678C113.201 25.45 112.98 24.9111 112.98 24.2513C112.98 23.5915 113.201 23.0637 113.645 22.6678C114.088 22.2719 114.687 22.074 115.441 22.074C116.173 22.074 116.761 22.2719 117.204 22.6678C117.67 23.0637 117.903 23.5915 117.903 24.2513C117.903 24.9111 117.681 25.45 117.238 25.8678C116.794 26.2637 116.195 26.4617 115.441 26.4617Z"
      fill="url(#paint6_linear_548_5790)"
    />
    <path
      d="M134.871 22.4369C135.492 22.4369 136.002 22.6128 136.401 22.9647C136.8 23.3166 137 23.7785 137 24.3503V44.0782C137 44.672 136.811 45.1449 136.434 45.4968C136.057 45.8487 135.559 46.0246 134.938 46.0246C134.317 46.0246 133.818 45.8487 133.441 45.4968C133.064 45.1449 132.875 44.672 132.875 44.0782V43.2535C132.387 44.1552 131.678 44.859 130.746 45.3648C129.837 45.8707 128.794 46.1236 127.619 46.1236C126.222 46.1236 124.969 45.7717 123.86 45.0679C122.773 44.3641 121.92 43.3744 121.299 42.0988C120.7 40.8012 120.4 39.3167 120.4 37.6452C120.4 35.9737 120.7 34.5112 121.299 33.2575C121.92 32.0039 122.773 31.0362 123.86 30.3544C124.947 29.6726 126.2 29.3317 127.619 29.3317C128.794 29.3317 129.837 29.5737 130.746 30.0575C131.655 30.5414 132.354 31.2232 132.842 32.1029V24.2843C132.842 23.7345 133.019 23.2946 133.374 22.9647C133.751 22.6128 134.25 22.4369 134.871 22.4369ZM128.717 42.9236C130.048 42.9236 131.068 42.4727 131.777 41.571C132.509 40.6693 132.875 39.3827 132.875 37.7112C132.875 36.0397 132.509 34.7641 131.777 33.8844C131.068 32.9826 130.059 32.5318 128.75 32.5318C127.42 32.5318 126.388 32.9716 125.656 33.8514C124.925 34.7311 124.559 35.9957 124.559 37.6452C124.559 39.3167 124.925 40.6143 125.656 41.538C126.388 42.4617 127.408 42.9236 128.717 42.9236Z"
      fill="url(#paint7_linear_548_5790)"
    />
    <defs>
      <lineargradient
        id="paint0_linear_548_5790"
        x1="0.193638"
        y1="12.5024"
        x2="53.7329"
        y2="64.9948"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#CC95DF" />
        <stop offset={1} stopColor="#4F80FF" />
      </lineargradient>
      <lineargradient
        id="paint1_linear_548_5790"
        x1="0.193638"
        y1="12.5024"
        x2="53.7329"
        y2="64.9948"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#CC95DF" />
        <stop offset={1} stopColor="#4F80FF" />
      </lineargradient>
      <lineargradient
        id="paint2_linear_548_5790"
        x1="0.193638"
        y1="12.5024"
        x2="53.7329"
        y2="64.9948"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#CC95DF" />
        <stop offset={1} stopColor="#4F80FF" />
      </lineargradient>
      <lineargradient
        id="paint3_linear_548_5790"
        x1="0.193638"
        y1="12.5024"
        x2="53.7329"
        y2="64.9948"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#CC95DF" />
        <stop offset={1} stopColor="#4F80FF" />
      </lineargradient>
      <lineargradient
        id="paint4_linear_548_5790"
        x1="0.193638"
        y1="12.5024"
        x2="53.7329"
        y2="64.9948"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#CC95DF" />
        <stop offset={1} stopColor="#4F80FF" />
      </lineargradient>
      <lineargradient
        id="paint5_linear_548_5790"
        x1="0.193638"
        y1="12.5024"
        x2="53.7329"
        y2="64.9948"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#CC95DF" />
        <stop offset={1} stopColor="#4F80FF" />
      </lineargradient>
      <lineargradient
        id="paint6_linear_548_5790"
        x1="0.193638"
        y1="12.5024"
        x2="53.7329"
        y2="64.9948"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#CC95DF" />
        <stop offset={1} stopColor="#4F80FF" />
      </lineargradient>
      <lineargradient
        id="paint7_linear_548_5790"
        x1="0.193638"
        y1="12.5024"
        x2="53.7329"
        y2="64.9948"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#CC95DF" />
        <stop offset={1} stopColor="#4F80FF" />
      </lineargradient>
    </defs>
  </svg>
  <div className="w-[344px] h-[46px]">
    <div className="w-[163.32px] h-[46px]">
      <div className="w-[163.32px] h-[46px] absolute left-[1111px] top-[41px] rounded-[55px] bg-white border-2 border-[#4f80ff]" />
      <p className="w-[115.69px] h-[23.7px] absolute left-[1135.48px] top-[53.5px] text-base font-bold text-center text-[#4f80ff]">
        Se connecter
      </p>
    </div>
    <div className="w-[162.3px] h-[46px]">
      <div
        className="w-[162.3px] h-[46px] absolute left-[1293.2px] top-[41.5px] rounded-[55px] bg-[#4f80ff]"
        style={{ boxShadow: "0px 10px 44px -5px rgba(14,108,218,0.35)" }}
      />
      <p className="w-[74.52px] h-[23px] absolute left-[1337.59px] top-[53.5px] text-base font-bold text-center text-white">
        S’inscrire
      </p>
    </div>
  </div>
  <img
    src="static/img/icons/House1.svg"
    className="w-[516px] h-[460px] absolute left-[852px] top-[165px] rounded-[30px] object-none"
  />
  <p className="absolute left-[111px] top-[289px] text-[34px] font-bold text-left">
    <span className="text-[34px] font-bold text-left text-[#113eb6]">
      Devenir propriétaire devient plus{" "}
    </span>
    <span className="text-[34px] font-bold text-left text-[#4f80ff]">accessible.</span>
  </p>
  <p className="w-[733px] absolute left-[111px] top-[355px] text-xl font-bold text-left text-[#849cd9]">
    Réalisez votre premier achat immobilier pour seulement 700€ par mois !*
  </p>
  <div className="w-[936px] h-[97px]">
    <div className="w-[936px] h-[97px] absolute left-[110px] top-[399px] rounded-[100px] bg-white" />
    <svg
      width={18}
      height={10}
      viewBox="0 0 18 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute left-[684.5px] top-[457px]"
      preserveAspectRatio="xMidYMid meet"
    >
      <path
        d="M2.06191 1.81222e-08L0.5 1.52528L9.23611 10L17.9722 1.51671L16.4103 1.84601e-07L9.23611 6.96658L2.06191 1.81222e-08Z"
        fill="#8C97B6"
      />
    </svg>
    <div className="w-[149px] h-12">
      <p className="absolute left-[155px] top-[451px] text-base font-semibold text-left text-[#8c97b6]">
        Où cherchez-vous ?
      </p>
      <p className="absolute left-[155px] top-[425px] text-base font-bold text-left text-[#4f80ff]">
        Localisation
      </p>
    </div>
    <div className="w-[270px] h-12">
      <p className="absolute left-[368px] top-[451px] text-base font-semibold text-left text-[#8c97b6]">
        Combien de pièce souhaitez-vous ?
      </p>
      <p className="absolute left-[368px] top-[425px] text-base font-bold text-left text-[#4f80ff]">
        Nombre de pièce{" "}
      </p>
    </div>
    <div className="w-[179px] h-12">
      <p className="absolute left-[738px] top-[451px] text-base font-semibold text-left text-[#8c97b6]">
        Quel est votre budget ?
      </p>
      <p className="absolute left-[738px] top-[425px] text-base font-bold text-left text-[#4f80ff]">
        Budget
      </p>
    </div>
    <svg
      width={86}
      height={86}
      viewBox="0 0 86 86"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-[50px] h-[50px]"
      preserveAspectRatio="xMidYMid meet"
    >
      <g filter="url(#filter0_di_548_5819)">
        <rect x={18} y={13} width={50} height={50} rx={25} fill="#4F80FF" />
      </g>
      <path
       fillRule="evenodd"
       clipRule="evenodd"
        d="M41.4664 29C39.1741 29 37.0318 30.0005 35.5964 31.7515C33.4326 34.3779 33.4755 38.3175 35.6821 40.9231C37.1175 42.6115 39.2384 43.5703 41.4664 43.5703C42.8804 43.5703 44.2729 43.1743 45.4726 42.4447L45.6012 42.3613L50.6785 47.3432C51.2355 47.906 52.2424 47.906 52.7994 47.3432C53.0994 47.0514 53.2708 46.6762 53.2708 46.2801C53.2708 45.8841 53.1208 45.5297 52.8423 45.2379L47.7435 40.2769L47.8292 40.1518C49.693 37.2544 49.2431 33.565 46.7794 31.147C45.3655 29.7504 43.4802 29 41.4664 29ZM45.237 39.9642C44.2301 40.9439 42.8804 41.4859 41.4664 41.4859C40.0311 41.4859 38.7028 40.9439 37.6959 39.9642C36.689 38.9845 36.132 37.6713 36.132 36.2956C36.132 34.899 36.689 33.6066 37.6959 32.6269C38.7028 31.6473 40.0525 31.1053 41.4664 31.1053C42.9018 31.1053 44.2301 31.6473 45.237 32.6269C46.2439 33.6066 46.8009 34.9198 46.8009 36.2956C46.8009 37.6713 46.2439 38.9845 45.237 39.9642Z"
        fill="white"
      />
      <defs>
        <filter
          id="filter0_di_548_5819"
          x="0.5"
          y="0.5"
          width={85}
          height={85}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feflood floodOpacity={0} result="BackgroundImageFix" />
          <fecolormatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feoffset dy={5} />
          <fegaussianblur stdDeviation="8.75" />
          <fecolormatrix
            type="matrix"
            values="0 0 0 0 0.0533854 0 0 0 0 0.421745 0 0 0 0 0.854167 0 0 0 0.35 0"
          />
          <feblend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_548_5819" />
          <feblend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_548_5819"
            result="shape"
          />
          <fecolormatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feoffset />
          <fegaussianblur stdDeviation="3.75" />
          <fecomposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <fecolormatrix
            type="matrix"
            values="0 0 0 0 0.0958333 0 0 0 0 0.282599 0 0 0 0 0.766667 0 0 0 0.6 0"
          />
          <feblend mode="normal" in2="shape" result="effect2_innerShadow_548_5819" />
        </filter>
      </defs>
    </svg>
    <svg
      width={1}
      height={49}
      viewBox="0 0 1 49"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute left-[335.5px] top-[423.5px]"
      preserveAspectRatio="xMidYMid meet"
    >
      <line x1="0.5" y1="2.18557e-8" x2="0.499998" y2={49} stroke="url(#paint0_linear_548_5824)" />
      <defs>
        <lineargradient
          id="paint0_linear_548_5824"
          x1="-0.00000107093"
          y1="24.5"
          x2={-1}
          y2="24.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#3563DC" />
          <stop offset="0.0434107" stopColor="#3E6FEF" />
          <stop offset="0.940497" stopColor="#3062E3" />
          <stop offset={1} stopColor="#154AD2" />
        </lineargradient>
      </defs>
    </svg>
    <svg
      width={1}
      height={49}
      viewBox="0 0 1 49"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute left-[714.5px] top-[423.5px]"
      preserveAspectRatio="xMidYMid meet"
    >
      <line x1="0.5" y1="2.18557e-8" x2="0.499998" y2={49} stroke="url(#paint0_linear_548_5825)" />
      <defs>
        <lineargradient
          id="paint0_linear_548_5825"
          x1="-0.00000107093"
          y1="24.5"
          x2={-1}
          y2="24.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#3563DC" />
          <stop offset="0.0434107" stopColor="#3E6FEF" />
          <stop offset="0.940497" stopColor="#3062E3" />
          <stop offset={1} stopColor="#154AD2" />
        </lineargradient>
      </defs>
    </svg>
  </div>
  <div className="w-[544px] h-[37px]">
    <p className="absolute left-[468px] top-[47px] text-xl font-bold text-center text-[#113eb6]">
      Accueil
    </p>
    <p className="absolute left-[968px] top-[47px] text-xl font-bold text-center text-[#113eb6]">
      Blog
    </p>
    <p className="absolute left-[748px] top-[47px] text-xl font-bold text-center text-[#113eb6]">
      Qui sommes-nous ?
    </p>
    <p className="absolute left-[566px] top-[47px] text-xl font-bold text-center text-[#113eb6]">
      Acheter / Louer
    </p>
    <svg
      width={30}
      height={3}
      viewBox="0 0 30 3"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute left-[487.5px] top-[82.5px]"
      preserveAspectRatio="xMidYMid meet"
    >
      <line y1="1.5" x2={30} y2="1.5" stroke="#113EB6" strokeWidth={3} />
    </svg>
  </div>
  <div className="w-[1480px] h-[1024px] absolute left-[-1px] top-[-1px] opacity-30 bg-[#051f52]" />
  <div className="w-[343px] h-[382px] absolute left-[568px] top-80 rounded-xl bg-white border border-[#eaeffa]">
    <div className="flex justify-center items-start absolute left-[29.5px] top-[23px] gap-3">
      <p className="flex-grow-0 flex-shrink-0 w-[263px] h-[33px] text-lg font-bold text-center text-black">
        Connexion
      </p>
      <svg
        width={25}
        height={24}
        viewBox="0 0 25 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
        preserveAspectRatio="xMidYMid meet"
      >
        <path
          d="M18.5 18L6.5 6"
          stroke="#14181F"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18.5 6L6.5 18"
          stroke="#14181F"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
    <div className="w-[295px] h-20 absolute left-[23px] top-[211px]">
      <p className="absolute left-0 top-0 text-base font-bold text-left text-[#0e215c]">
        Mot de passe
      </p>
      <div className="w-[295px] h-[52px] absolute left-[-1.5px] top-[26.5px] rounded-xl bg-white border-2 border-[#eff4ff]" />
      <p className="w-[264.74px] absolute left-[15.13px] top-11 text-base font-bold text-left text-[#6976a0]">
        Votre mot de passe
      </p>
    </div>
    <div
      className="flex justify-center items-center w-[295px] absolute left-[23px] top-[307px] gap-2.5 px-[120px] py-4 rounded-xl"
      style={{ background: "linear-gradient(to bottom, #81a3f9 -0.06%, #3462d8 108.09%)" }}
    >
      <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-white">Connexion</p>
    </div>
    <svg
      width={360}
      height={2}
      viewBox="0 0 360 2"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute left-[-1.5px] top-[78.5px]"
      preserveAspectRatio="xMidYMid meet"
    >
      <line x1="8.74228e-8" y1={1} x2={360} y2="1.00003" stroke="#EFF4FF" strokeWidth={2} />
    </svg>
    <p className="absolute left-[92px] top-[104px] text-[22px] font-bold text-center">
      <span className="text-[22px] font-bold text-center text-[#1a2e6c]">Bonjour </span>
      <span className="text-[22px] font-bold text-center text-[#3679ff]">Anaïs !</span>
    </p>
    <p className="w-[311px] absolute left-4 top-[140px] text-base text-center text-[#6976a0]">
      <span className="w-[311px] text-base text-center text-[#6976a0]">
        Saisissez votre mot de passe pour{" "}
      </span>
      <br />
      <span className="w-[311px] text-base text-center text-[#6976a0]">vous connecter.</span>
    </p>
  </div>
</div>






Profil




<div className="w-[1480px] h-[1024px] relative overflow-hidden bg-[#f9fbff]">
  <svg
    width={137}
    height={50}
    viewBox="0 0 137 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="absolute left-[23.24px] top-[31.24px]"
    preserveAspectRatio="none"
  >
    <path
     fillRule="evenodd"
     clipRule="evenodd"
      d="M20.8258 33.0636L20.8193 33.0748C19.8869 34.6599 19.5843 35.8286 19.5843 36.6474C19.5843 37.5588 19.828 38.278 20.2895 38.9091C20.9465 39.7637 21.5881 40.3184 22.1887 40.6656C23.2551 41.2537 24.2372 41.8293 25.1319 42.3927C25.6412 42.6939 26.1796 43.0603 26.6285 43.5055C27.0183 43.8921 27.8027 44.7898 27.8027 46.1272C27.8027 47.4178 27.1748 48.623 25.9928 49.3346C25.0458 49.9049 24.0003 50 23.2563 50C20.4236 50 17.714 48.4774 15.2304 46.3484L15.2211 46.3404L15.2118 46.3323C14.1322 45.3908 13.2203 44.3628 12.5133 43.2512C11.0507 45.0725 9.95147 46.3901 9.22935 47.1821C8.64104 47.8476 8.05086 48.4469 7.47436 48.9042C7.18227 49.136 6.83145 49.3815 6.43254 49.5793C6.05468 49.7666 5.45745 50 4.72121 50C2.76659 50 1.56857 48.6704 0.967561 47.7168L0.912163 47.6289L0.863258 47.5372C0.335807 46.5492 0 45.4518 0 44.2775C0 43.8037 0.0976452 43.2746 0.172486 42.9012C0.262804 42.4505 0.391418 41.8971 0.552021 41.255C0.874064 39.9675 1.35005 38.2235 1.97452 36.0365C3.19228 31.7338 4.41919 26.5489 5.65279 20.4702C6.86771 14.4836 7.46067 9.14916 7.46067 4.45087C7.46067 4.04104 7.48498 3.58906 7.57043 3.14419C7.6414 2.77466 7.80188 2.14343 8.2464 1.54285C9.22959 0.16989 10.7718 0 11.5407 0C12.7295 0 13.633 0.553598 14.2094 1.07759C14.7483 1.56745 15.1517 2.15923 15.4601 2.70953C16.2142 3.94383 16.6117 5.31154 16.6117 6.76301C16.6117 12.2808 15.6498 18.9916 13.7716 26.8616C16.0741 23.8933 18.1019 21.4815 19.8518 19.6377L19.8588 19.6303L19.8659 19.6229C20.7138 18.742 21.481 18.0062 22.144 17.4704C22.4723 17.2051 22.8411 16.9347 23.2306 16.7168C23.5385 16.5446 24.2334 16.185 25.1215 16.185C26.6135 16.185 27.7953 16.8915 28.6237 17.7677C29.2257 18.3747 30.0758 19.4492 30.0758 20.9249C30.0758 21.7255 29.7642 22.342 29.6363 22.582C29.4665 22.9007 29.2629 23.1918 29.0774 23.4348C28.7021 23.9266 28.2014 24.4801 27.6261 25.0711C26.5356 26.1911 25.3289 27.4264 24.0061 28.7768C22.8797 29.9267 21.8173 31.3429 20.8323 33.0524L20.8258 33.0636ZM26.5204 19.7688C26.0929 19.3064 25.6266 19.0751 25.1215 19.0751C24.6552 19.0751 23.606 19.9229 21.974 21.6185C19.317 24.4182 15.9306 28.6547 11.8149 34.3282C10.7849 35.748 9.70924 37.2578 8.58791 38.8576C7.89911 39.8403 7.19307 40.8569 6.4698 41.9075C6.546 41.6711 6.6216 41.4354 6.6966 41.2006C7.60102 38.3685 8.41781 35.6541 9.14697 33.0575C12.1805 22.2547 13.6973 13.4899 13.6973 6.76301C13.6973 6.08344 13.561 5.43509 13.2882 4.81794C13.2528 4.73774 13.215 4.65806 13.175 4.57891C13.1533 4.53607 13.131 4.49339 13.1079 4.45087C13.0554 4.35372 12.9992 4.25738 12.9396 4.16185C12.4733 3.31407 12.007 2.89017 11.5407 2.89017C11.0744 2.89017 10.7636 3.00578 10.6081 3.237C10.4527 3.42967 10.375 3.8343 10.375 4.45087C10.375 4.77028 10.3724 5.0922 10.3672 5.41662C10.3666 5.45026 10.3661 5.48393 10.3655 5.51762C10.283 10.1769 9.6644 15.3512 8.50983 21.0405C7.26638 27.1676 6.02294 32.4277 4.77949 36.8208C3.53605 41.1753 2.91432 43.6609 2.91432 44.2775C2.91432 44.894 3.08918 45.5299 3.4389 46.185C3.82748 46.8015 4.25491 47.1098 4.72121 47.1098C5.1875 47.1098 5.96465 46.4933 7.05267 45.2601C7.44497 44.8308 7.97149 44.217 8.63223 43.4188C8.64054 43.4087 8.64887 43.3987 8.65723 43.3886C8.82034 43.1914 8.99155 42.983 9.17086 42.7636C9.21582 42.7086 9.26128 42.6528 9.30726 42.5964C9.79157 42.002 10.3324 41.33 10.9296 40.5804C11.0134 40.4753 11.0982 40.3687 11.1841 40.2606C11.8156 39.4661 12.507 38.5892 13.2582 37.6301C13.4212 37.422 13.587 37.21 13.7556 36.9942V37.6301C13.7556 38.7282 13.9937 39.7816 14.4698 40.7902C15.0296 41.976 15.9184 43.0999 17.1362 44.1618C18.4862 45.3191 19.7486 46.1357 20.9235 46.6115C21.3378 46.7793 21.7413 46.9047 22.1339 46.9878C22.1646 46.9943 22.1952 47.0005 22.2258 47.0065C22.2554 47.0123 22.285 47.0178 22.3144 47.0231C22.6358 47.0809 22.9498 47.1098 23.2563 47.1098C24.3443 47.1098 24.8883 46.7823 24.8883 46.1272C24.8883 45.7803 24.4609 45.3565 23.606 44.8555C23.4912 44.783 23.3746 44.7102 23.2563 44.6371C23.1438 44.5675 23.0297 44.4976 22.914 44.4274C22.6834 44.2875 22.4465 44.1464 22.2034 44.0039C21.7416 43.7335 21.2571 43.4586 20.75 43.1792C19.7397 42.6012 18.8071 41.7534 17.9522 40.6358C17.0974 39.4798 16.6699 38.1503 16.6699 36.6474C16.6699 35.1445 17.2139 33.4682 18.302 31.6185C19.39 29.7303 20.5946 28.1118 21.9157 26.763C23.2369 25.4143 24.4415 24.1811 25.5295 23.0636C26.6175 21.946 27.1615 21.2331 27.1615 20.9249C27.1615 20.578 26.9478 20.1927 26.5204 19.7688ZM23.4241 44.2108C23.4241 44.2108 23.4166 44.2126 23.3996 44.2142C23.4152 44.2113 23.4241 44.2108 23.4241 44.2108Z"
      fill="url(#paint0_linear_555_5681)"
    />
    <path
      d="M35.3696 46.0576C34.7708 46.0576 34.2718 45.8927 33.8726 45.5628C33.4956 45.2109 33.3071 44.716 33.3071 44.0782V31.3442C33.3071 30.7064 33.4956 30.2225 33.8726 29.8926C34.2718 29.5627 34.7708 29.3978 35.3696 29.3978C35.9683 29.3978 36.4673 29.5627 36.8665 29.8926C37.2657 30.2225 37.4653 30.7064 37.4653 31.3442V44.0782C37.4653 44.716 37.2657 45.2109 36.8665 45.5628C36.4673 45.8927 35.9683 46.0576 35.3696 46.0576ZM35.3696 26.4617C34.6155 26.4617 34.0168 26.2637 33.5732 25.8678C33.1297 25.45 32.9079 24.9111 32.9079 24.2513C32.9079 23.5915 33.1297 23.0637 33.5732 22.6678C34.0168 22.2719 34.6155 22.074 35.3696 22.074C36.1014 22.074 36.6891 22.2719 37.1326 22.6678C37.5983 23.0637 37.8312 23.5915 37.8312 24.2513C37.8312 24.9111 37.6094 25.45 37.1659 25.8678C36.7223 26.2637 36.1236 26.4617 35.3696 26.4617Z"
      fill="url(#paint1_linear_555_5681)"
    />
    <path
      d="M50.3911 42.9896C51.5 43.0556 52.0544 43.5504 52.0544 44.4741C52.0544 45.002 51.8326 45.4088 51.3891 45.6947C50.9677 45.9587 50.3579 46.0686 49.5595 46.0246L48.6613 45.9587C44.9356 45.6947 43.0727 43.7154 43.0727 40.0205V32.8287H41.4094C40.8107 32.8287 40.3449 32.6967 40.0123 32.4328C39.7018 32.1689 39.5466 31.784 39.5466 31.2782C39.5466 30.7723 39.7018 30.3874 40.0123 30.1235C40.3449 29.8596 40.8107 29.7277 41.4094 29.7277H43.0727V26.6926C43.0727 26.0988 43.2612 25.6259 43.6382 25.274C44.0152 24.9221 44.5253 24.7462 45.1684 24.7462C45.7894 24.7462 46.2884 24.9221 46.6654 25.274C47.0424 25.6259 47.2309 26.0988 47.2309 26.6926V29.7277H50.0585C50.6573 29.7277 51.1119 29.8596 51.4224 30.1235C51.755 30.3874 51.9214 30.7723 51.9214 31.2782C51.9214 31.784 51.755 32.1689 51.4224 32.4328C51.1119 32.6967 50.6573 32.8287 50.0585 32.8287H47.2309V40.3174C47.2309 41.9449 47.9849 42.8136 49.493 42.9236L50.3911 42.9896Z"
      fill="url(#paint2_linear_555_5681)"
    />
    <path
      d="M64.7885 46.0576C64.1897 46.0576 63.6907 45.8927 63.2915 45.5628C62.9145 45.2109 62.726 44.716 62.726 44.0782V24.3833C62.726 23.7455 62.9145 23.2616 63.2915 22.9317C63.6907 22.6018 64.1897 22.4369 64.7885 22.4369C65.3873 22.4369 65.8862 22.6018 66.2854 22.9317C66.6846 23.2616 66.8842 23.7455 66.8842 24.3833V44.0782C66.8842 44.716 66.6846 45.2109 66.2854 45.5628C65.8862 45.8927 65.3873 46.0576 64.7885 46.0576Z"
      fill="url(#paint3_linear_555_5681)"
    />
    <path
      d="M83.2565 41.4391C83.6335 41.4391 83.9329 41.582 84.1547 41.8679C84.3986 42.1538 84.5206 42.5387 84.5206 43.0226C84.5206 43.7044 84.1103 44.2762 83.2897 44.738C82.5357 45.1559 81.6819 45.4968 80.7283 45.7607C79.7747 46.0026 78.8654 46.1236 78.0005 46.1236C75.3836 46.1236 73.3101 45.3758 71.7799 43.8803C70.2497 42.3848 69.4845 40.3394 69.4845 37.7442C69.4845 36.0947 69.8172 34.6321 70.4825 33.3565C71.1478 32.0809 72.0793 31.0912 73.2768 30.3874C74.4966 29.6837 75.8715 29.3318 77.4017 29.3318C78.8654 29.3318 80.1406 29.6507 81.2273 30.2885C82.314 30.9263 83.1567 31.828 83.7555 32.9936C84.3542 34.1593 84.6536 35.5339 84.6536 37.1174C84.6536 38.0631 84.2323 38.5359 83.3895 38.5359H73.5762C73.7093 40.0535 74.1417 41.1751 74.8736 41.9009C75.6054 42.6047 76.6699 42.9566 78.0671 42.9566C78.7767 42.9566 79.3977 42.8686 79.9299 42.6927C80.4843 42.5167 81.1053 42.2748 81.7928 41.9669C82.4581 41.615 82.946 41.4391 83.2565 41.4391ZM77.5015 32.2349C76.3705 32.2349 75.4613 32.5868 74.7738 33.2906C74.1085 33.9943 73.7093 35.006 73.5762 36.3256H81.0942C81.0499 34.984 80.7172 33.9723 80.0963 33.2906C79.4753 32.5868 78.6104 32.2349 77.5015 32.2349Z"
      fill="url(#paint4_linear_555_5681)"
    />
    <path
      d="M104.683 29.3318C106.635 29.3318 108.087 29.8816 109.041 30.9813C109.995 32.0809 110.471 33.7414 110.471 35.9627V44.0782C110.471 44.6941 110.283 45.1779 109.906 45.5298C109.551 45.8817 109.052 46.0576 108.409 46.0576C107.766 46.0576 107.256 45.8817 106.879 45.5298C106.502 45.1779 106.313 44.6941 106.313 44.0782V36.1937C106.313 34.94 106.069 34.0273 105.581 33.4555C105.116 32.8837 104.373 32.5978 103.353 32.5978C102.155 32.5978 101.19 32.9717 100.458 33.7194C99.7488 34.4672 99.3939 35.4679 99.3939 36.7215V44.0782C99.3939 44.6941 99.2054 45.1779 98.8284 45.5298C98.4514 45.8817 97.9414 46.0576 97.2982 46.0576C96.6551 46.0576 96.145 45.8817 95.768 45.5298C95.4132 45.1779 95.2357 44.6941 95.2357 44.0782V31.3112C95.2357 30.7393 95.4243 30.2775 95.8013 29.9256C96.1783 29.5737 96.6883 29.3978 97.3315 29.3978C97.9081 29.3978 98.3738 29.5737 98.7286 29.9256C99.1056 30.2555 99.2941 30.6954 99.2941 31.2452V32.1359C99.8486 31.2342 100.592 30.5414 101.523 30.0576C102.454 29.5737 103.508 29.3318 104.683 29.3318Z"
      fill="url(#paint5_linear_555_5681)"
    />
    <path
      d="M115.441 46.0576C114.842 46.0576 114.343 45.8927 113.944 45.5628C113.567 45.2109 113.379 44.716 113.379 44.0782V31.3442C113.379 30.7064 113.567 30.2225 113.944 29.8926C114.343 29.5627 114.842 29.3978 115.441 29.3978C116.04 29.3978 116.539 29.5627 116.938 29.8926C117.337 30.2225 117.537 30.7064 117.537 31.3442V44.0782C117.537 44.716 117.337 45.2109 116.938 45.5628C116.539 45.8927 116.04 46.0576 115.441 46.0576ZM115.441 26.4617C114.687 26.4617 114.088 26.2637 113.645 25.8678C113.201 25.45 112.98 24.9111 112.98 24.2513C112.98 23.5915 113.201 23.0637 113.645 22.6678C114.088 22.2719 114.687 22.074 115.441 22.074C116.173 22.074 116.761 22.2719 117.204 22.6678C117.67 23.0637 117.903 23.5915 117.903 24.2513C117.903 24.9111 117.681 25.45 117.238 25.8678C116.794 26.2637 116.195 26.4617 115.441 26.4617Z"
      fill="url(#paint6_linear_555_5681)"
    />
    <path
      d="M134.871 22.4369C135.492 22.4369 136.002 22.6128 136.401 22.9647C136.8 23.3166 137 23.7785 137 24.3503V44.0782C137 44.672 136.811 45.1449 136.434 45.4968C136.057 45.8487 135.559 46.0246 134.938 46.0246C134.317 46.0246 133.818 45.8487 133.441 45.4968C133.064 45.1449 132.875 44.672 132.875 44.0782V43.2535C132.387 44.1552 131.678 44.859 130.746 45.3648C129.837 45.8707 128.794 46.1236 127.619 46.1236C126.222 46.1236 124.969 45.7717 123.86 45.0679C122.773 44.3641 121.92 43.3744 121.299 42.0988C120.7 40.8012 120.4 39.3167 120.4 37.6452C120.4 35.9737 120.7 34.5112 121.299 33.2575C121.92 32.0039 122.773 31.0362 123.86 30.3544C124.947 29.6726 126.2 29.3317 127.619 29.3317C128.794 29.3317 129.837 29.5737 130.746 30.0575C131.655 30.5414 132.354 31.2232 132.842 32.1029V24.2843C132.842 23.7345 133.019 23.2946 133.374 22.9647C133.751 22.6128 134.25 22.4369 134.871 22.4369ZM128.717 42.9236C130.048 42.9236 131.068 42.4727 131.777 41.571C132.509 40.6693 132.875 39.3827 132.875 37.7112C132.875 36.0397 132.509 34.7641 131.777 33.8844C131.068 32.9826 130.059 32.5318 128.75 32.5318C127.42 32.5318 126.388 32.9716 125.656 33.8514C124.925 34.7311 124.559 35.9957 124.559 37.6452C124.559 39.3167 124.925 40.6143 125.656 41.538C126.388 42.4617 127.408 42.9236 128.717 42.9236Z"
      fill="url(#paint7_linear_555_5681)"
    />
    <defs>
      <lineargradient
        id="paint0_linear_555_5681"
        x1="0.193638"
        y1="12.5024"
        x2="53.7329"
        y2="64.9948"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#CC95DF" />
        <stop offset={1} stopColor="#4F80FF" />
      </lineargradient>
      <lineargradient
        id="paint1_linear_555_5681"
        x1="0.193638"
        y1="12.5024"
        x2="53.7329"
        y2="64.9948"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#CC95DF" />
        <stop offset={1} stopColor="#4F80FF" />
      </lineargradient>
      <lineargradient
        id="paint2_linear_555_5681"
        x1="0.193638"
        y1="12.5024"
        x2="53.7329"
        y2="64.9948"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#CC95DF" />
        <stop offset={1} stopColor="#4F80FF" />
      </lineargradient>
      <lineargradient
        id="paint3_linear_555_5681"
        x1="0.193638"
        y1="12.5024"
        x2="53.7329"
        y2="64.9948"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#CC95DF" />
        <stop offset={1} stopColor="#4F80FF" />
      </lineargradient>
      <lineargradient
        id="paint4_linear_555_5681"
        x1="0.193638"
        y1="12.5024"
        x2="53.7329"
        y2="64.9948"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#CC95DF" />
        <stop offset={1} stopColor="#4F80FF" />
      </lineargradient>
      <lineargradient
        id="paint5_linear_555_5681"
        x1="0.193638"
        y1="12.5024"
        x2="53.7329"
        y2="64.9948"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#CC95DF" />
        <stop offset={1} stopColor="#4F80FF" />
      </lineargradient>
      <lineargradient
        id="paint6_linear_555_5681"
        x1="0.193638"
        y1="12.5024"
        x2="53.7329"
        y2="64.9948"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#CC95DF" />
        <stop offset={1} stopColor="#4F80FF" />
      </lineargradient>
      <lineargradient
        id="paint7_linear_555_5681"
        x1="0.193638"
        y1="12.5024"
        x2="53.7329"
        y2="64.9948"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#CC95DF" />
        <stop offset={1} stopColor="#4F80FF" />
      </lineargradient>
    </defs>
  </svg>
  <div className="w-[544px] h-[37px]">
    <p className="absolute left-[468px] top-[47px] text-xl font-bold text-center text-[#113eb6]">
      Accueil
    </p>
    <p className="absolute left-[968px] top-[47px] text-xl font-bold text-center text-[#113eb6]">
      Blog
    </p>
    <p className="absolute left-[748px] top-[47px] text-xl font-bold text-center text-[#113eb6]">
      Qui sommes-nous ?
    </p>
    <p className="absolute left-[566px] top-[47px] text-xl font-bold text-center text-[#113eb6]">
      Acheter / Louer
    </p>
    <svg
      width={30}
      height={3}
      viewBox="0 0 30 3"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute left-[487.5px] top-[82.5px]"
      preserveAspectRatio="xMidYMid meet"
    >
      <line y1="1.5" x2={30} y2="1.5" stroke="#113EB6" strokeWidth={3} />
    </svg>
  </div>
  <div className="flex justify-center items-center w-[98px] absolute left-[1270px] top-[31px] gap-4 p-4 rounded-xl border border-[#3679ff]">
    <img className="flex-grow-0 flex-shrink-0" src="ellipse-48.png" />
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
      preserveAspectRatio="none"
    >
      <path
        d="M3 17H21"
        stroke="#3679FF"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 12H21"
        stroke="#3679FF"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 7H21"
        stroke="#3679FF"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </div>
  <p className="absolute left-44 top-[130px] text-[34px] font-bold text-left">Mon profil</p>
  <p className="w-[327px] h-[27px] absolute left-44 top-[210px] text-lg font-bold text-left text-[#272832]">
    Mon conseiller
  </p>
  <p className="w-[327px] h-[27px] absolute left-44 top-[357px] text-lg font-bold text-left text-[#272832]">
    Mes informations
  </p>
  <img className="absolute left-[175px] top-[252px]" src="ellipse-49.png" />
  <p className="w-[219px] h-4 absolute left-[272px] top-[262px] text-lg font-bold text-left text-[#3679ff]">
    Quentin Venteuneblague
  </p>
  <p className="w-[219px] h-4 absolute left-[272px] top-[286px] text-sm font-medium text-left text-[#43434a]">
    quentin@gmail.com
  </p>
  <p className="w-[219px] h-4 absolute left-[272px] top-[306px] text-sm font-medium text-left text-[#43434a]">
    0768574526
  </p>
  <div className="w-[728px] h-[50px] absolute left-[175px] top-[401px] rounded-[10px] bg-white border border-[#eaeffa]" />
  <div className="w-[728px] h-[50px] absolute left-[175px] top-[459px] rounded-[10px] bg-white border border-[#eaeffa]" />
  <div className="w-[728px] h-[50px] absolute left-[175px] top-[517px] rounded-[10px] bg-white border border-[#eaeffa]" />
  <div className="w-[728px] h-[50px] absolute left-[175px] top-[575px] rounded-[10px] bg-white border border-[#eaeffa]" />
  <p className="absolute left-48 top-[418px] text-sm font-medium text-left text-[#3679ff]">
    Jean-Louis Vitre
  </p>
  <p className="absolute left-48 top-[476px] text-sm font-medium text-left text-[#43434a]">
    jeanlouisthebest@gmail.com
  </p>
  <p className="absolute left-48 top-[534px] text-sm font-medium text-left text-[#43434a]">
    0798986754
  </p>
  <p className="absolute left-48 top-[592px] text-sm font-medium text-left text-[#43434a]">
    5 rue des chaussettes, 75011 Paris
  </p>
  <div className="w-[728px] h-[50px] absolute left-[175px] top-[633px] rounded-[10px] bg-white border border-[#eaeffa]" />
  <p className="absolute left-48 top-[650px] text-sm font-medium text-left text-[#43434a]">CDD</p>
  <div className="flex justify-between items-center w-[167px] absolute left-[735.5px] top-[356.5px] px-[47px] py-2 rounded-xl bg-white border-2 border-[#eff4ff]">
    <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-[#43434a]">Modifier</p>
  </div>
  <div className="w-[267px] h-[605px]">
    <img
      src="capture-d’écran-2022-02-24-à-16.27.png"
      className="w-[267px] h-[338.86px] absolute left-[989.5px] top-[161.5px] object-cover"
    />
    <img
      src="capture-d’écran-2022-02-24-à-16.27-2.png"
      className="w-[251.12px] h-[266.14px] absolute left-[998.88px] top-[500.36px] object-cover"
    />
  </div>
</div>

partenaires


<div className="w-[1480px] h-[1024px] relative overflow-hidden bg-[#f9fbff]">
  <svg
    width={137}
    height={50}
    viewBox="0 0 137 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="absolute left-[23.24px] top-[31.24px]"
    preserveAspectRatio="none"
  >
    <path
     fillRule="evenodd"
     clipRule="evenodd"
      d="M20.8258 33.0636L20.8193 33.0748C19.8869 34.6599 19.5843 35.8286 19.5843 36.6474C19.5843 37.5588 19.828 38.278 20.2895 38.9091C20.9465 39.7637 21.5881 40.3184 22.1887 40.6656C23.2551 41.2537 24.2372 41.8293 25.1319 42.3927C25.6412 42.6939 26.1796 43.0603 26.6285 43.5055C27.0183 43.8921 27.8027 44.7898 27.8027 46.1272C27.8027 47.4178 27.1748 48.623 25.9928 49.3346C25.0458 49.9049 24.0003 50 23.2563 50C20.4236 50 17.714 48.4774 15.2304 46.3484L15.2211 46.3404L15.2118 46.3323C14.1322 45.3908 13.2203 44.3628 12.5133 43.2512C11.0507 45.0725 9.95147 46.3901 9.22935 47.1821C8.64104 47.8476 8.05086 48.4469 7.47436 48.9042C7.18227 49.136 6.83145 49.3815 6.43254 49.5793C6.05468 49.7666 5.45745 50 4.72121 50C2.76659 50 1.56857 48.6704 0.967561 47.7168L0.912163 47.6289L0.863258 47.5372C0.335807 46.5492 0 45.4518 0 44.2775C0 43.8037 0.0976452 43.2746 0.172486 42.9012C0.262804 42.4505 0.391418 41.8971 0.552021 41.255C0.874064 39.9675 1.35005 38.2235 1.97452 36.0365C3.19228 31.7338 4.41919 26.5489 5.65279 20.4702C6.86771 14.4836 7.46067 9.14916 7.46067 4.45087C7.46067 4.04104 7.48498 3.58906 7.57043 3.14419C7.6414 2.77466 7.80188 2.14343 8.2464 1.54285C9.22959 0.16989 10.7718 0 11.5407 0C12.7295 0 13.633 0.553598 14.2094 1.07759C14.7483 1.56745 15.1517 2.15923 15.4601 2.70953C16.2142 3.94383 16.6117 5.31154 16.6117 6.76301C16.6117 12.2808 15.6498 18.9916 13.7716 26.8616C16.0741 23.8933 18.1019 21.4815 19.8518 19.6377L19.8588 19.6303L19.8659 19.6229C20.7138 18.742 21.481 18.0062 22.144 17.4704C22.4723 17.2051 22.8411 16.9347 23.2306 16.7168C23.5385 16.5446 24.2334 16.185 25.1215 16.185C26.6135 16.185 27.7953 16.8915 28.6237 17.7677C29.2257 18.3747 30.0758 19.4492 30.0758 20.9249C30.0758 21.7255 29.7642 22.342 29.6363 22.582C29.4665 22.9007 29.2629 23.1918 29.0774 23.4348C28.7021 23.9266 28.2014 24.4801 27.6261 25.0711C26.5356 26.1911 25.3289 27.4264 24.0061 28.7768C22.8797 29.9267 21.8173 31.3429 20.8323 33.0524L20.8258 33.0636ZM26.5204 19.7688C26.0929 19.3064 25.6266 19.0751 25.1215 19.0751C24.6552 19.0751 23.606 19.9229 21.974 21.6185C19.317 24.4182 15.9306 28.6547 11.8149 34.3282C10.7849 35.748 9.70924 37.2578 8.58791 38.8576C7.89911 39.8403 7.19307 40.8569 6.4698 41.9075C6.546 41.6711 6.6216 41.4354 6.6966 41.2006C7.60102 38.3685 8.41781 35.6541 9.14697 33.0575C12.1805 22.2547 13.6973 13.4899 13.6973 6.76301C13.6973 6.08344 13.561 5.43509 13.2882 4.81794C13.2528 4.73774 13.215 4.65806 13.175 4.57891C13.1533 4.53607 13.131 4.49339 13.1079 4.45087C13.0554 4.35372 12.9992 4.25738 12.9396 4.16185C12.4733 3.31407 12.007 2.89017 11.5407 2.89017C11.0744 2.89017 10.7636 3.00578 10.6081 3.237C10.4527 3.42967 10.375 3.8343 10.375 4.45087C10.375 4.77028 10.3724 5.0922 10.3672 5.41662C10.3666 5.45026 10.3661 5.48393 10.3655 5.51762C10.283 10.1769 9.6644 15.3512 8.50983 21.0405C7.26638 27.1676 6.02294 32.4277 4.77949 36.8208C3.53605 41.1753 2.91432 43.6609 2.91432 44.2775C2.91432 44.894 3.08918 45.5299 3.4389 46.185C3.82748 46.8015 4.25491 47.1098 4.72121 47.1098C5.1875 47.1098 5.96465 46.4933 7.05267 45.2601C7.44497 44.8308 7.97149 44.217 8.63223 43.4188C8.64054 43.4087 8.64887 43.3987 8.65723 43.3886C8.82034 43.1914 8.99155 42.983 9.17086 42.7636C9.21582 42.7086 9.26128 42.6528 9.30726 42.5964C9.79157 42.002 10.3324 41.33 10.9296 40.5804C11.0134 40.4753 11.0982 40.3687 11.1841 40.2606C11.8156 39.4661 12.507 38.5892 13.2582 37.6301C13.4212 37.422 13.587 37.21 13.7556 36.9942V37.6301C13.7556 38.7282 13.9937 39.7816 14.4698 40.7902C15.0296 41.976 15.9184 43.0999 17.1362 44.1618C18.4862 45.3191 19.7486 46.1357 20.9235 46.6115C21.3378 46.7793 21.7413 46.9047 22.1339 46.9878C22.1646 46.9943 22.1952 47.0005 22.2258 47.0065C22.2554 47.0123 22.285 47.0178 22.3144 47.0231C22.6358 47.0809 22.9498 47.1098 23.2563 47.1098C24.3443 47.1098 24.8883 46.7823 24.8883 46.1272C24.8883 45.7803 24.4609 45.3565 23.606 44.8555C23.4912 44.783 23.3746 44.7102 23.2563 44.6371C23.1438 44.5675 23.0297 44.4976 22.914 44.4274C22.6834 44.2875 22.4465 44.1464 22.2034 44.0039C21.7416 43.7335 21.2571 43.4586 20.75 43.1792C19.7397 42.6012 18.8071 41.7534 17.9522 40.6358C17.0974 39.4798 16.6699 38.1503 16.6699 36.6474C16.6699 35.1445 17.2139 33.4682 18.302 31.6185C19.39 29.7303 20.5946 28.1118 21.9157 26.763C23.2369 25.4143 24.4415 24.1811 25.5295 23.0636C26.6175 21.946 27.1615 21.2331 27.1615 20.9249C27.1615 20.578 26.9478 20.1927 26.5204 19.7688ZM23.4241 44.2108C23.4241 44.2108 23.4166 44.2126 23.3996 44.2142C23.4152 44.2113 23.4241 44.2108 23.4241 44.2108Z"
      fill="url(#paint0_linear_555_5860)"
    />
    <path
      d="M35.3696 46.0576C34.7708 46.0576 34.2718 45.8927 33.8726 45.5628C33.4956 45.2109 33.3071 44.716 33.3071 44.0782V31.3442C33.3071 30.7064 33.4956 30.2225 33.8726 29.8926C34.2718 29.5627 34.7708 29.3978 35.3696 29.3978C35.9683 29.3978 36.4673 29.5627 36.8665 29.8926C37.2657 30.2225 37.4653 30.7064 37.4653 31.3442V44.0782C37.4653 44.716 37.2657 45.2109 36.8665 45.5628C36.4673 45.8927 35.9683 46.0576 35.3696 46.0576ZM35.3696 26.4617C34.6155 26.4617 34.0168 26.2637 33.5732 25.8678C33.1297 25.45 32.9079 24.9111 32.9079 24.2513C32.9079 23.5915 33.1297 23.0637 33.5732 22.6678C34.0168 22.2719 34.6155 22.074 35.3696 22.074C36.1014 22.074 36.6891 22.2719 37.1326 22.6678C37.5983 23.0637 37.8312 23.5915 37.8312 24.2513C37.8312 24.9111 37.6094 25.45 37.1659 25.8678C36.7223 26.2637 36.1236 26.4617 35.3696 26.4617Z"
      fill="url(#paint1_linear_555_5860)"
    />
    <path
      d="M50.3911 42.9896C51.5 43.0556 52.0544 43.5504 52.0544 44.4741C52.0544 45.002 51.8326 45.4088 51.3891 45.6947C50.9677 45.9587 50.3579 46.0686 49.5595 46.0246L48.6613 45.9587C44.9356 45.6947 43.0727 43.7154 43.0727 40.0205V32.8287H41.4094C40.8107 32.8287 40.3449 32.6967 40.0123 32.4328C39.7018 32.1689 39.5466 31.784 39.5466 31.2782C39.5466 30.7723 39.7018 30.3874 40.0123 30.1235C40.3449 29.8596 40.8107 29.7277 41.4094 29.7277H43.0727V26.6926C43.0727 26.0988 43.2612 25.6259 43.6382 25.274C44.0152 24.9221 44.5253 24.7462 45.1684 24.7462C45.7894 24.7462 46.2884 24.9221 46.6654 25.274C47.0424 25.6259 47.2309 26.0988 47.2309 26.6926V29.7277H50.0585C50.6573 29.7277 51.1119 29.8596 51.4224 30.1235C51.755 30.3874 51.9214 30.7723 51.9214 31.2782C51.9214 31.784 51.755 32.1689 51.4224 32.4328C51.1119 32.6967 50.6573 32.8287 50.0585 32.8287H47.2309V40.3174C47.2309 41.9449 47.9849 42.8136 49.493 42.9236L50.3911 42.9896Z"
      fill="url(#paint2_linear_555_5860)"
    />
    <path
      d="M64.7885 46.0576C64.1897 46.0576 63.6907 45.8927 63.2915 45.5628C62.9145 45.2109 62.726 44.716 62.726 44.0782V24.3833C62.726 23.7455 62.9145 23.2616 63.2915 22.9317C63.6907 22.6018 64.1897 22.4369 64.7885 22.4369C65.3873 22.4369 65.8862 22.6018 66.2854 22.9317C66.6846 23.2616 66.8842 23.7455 66.8842 24.3833V44.0782C66.8842 44.716 66.6846 45.2109 66.2854 45.5628C65.8862 45.8927 65.3873 46.0576 64.7885 46.0576Z"
      fill="url(#paint3_linear_555_5860)"
    />
    <path
      d="M83.2565 41.4391C83.6335 41.4391 83.9329 41.582 84.1547 41.8679C84.3986 42.1538 84.5206 42.5387 84.5206 43.0226C84.5206 43.7044 84.1103 44.2762 83.2897 44.738C82.5357 45.1559 81.6819 45.4968 80.7283 45.7607C79.7747 46.0026 78.8654 46.1236 78.0005 46.1236C75.3836 46.1236 73.3101 45.3758 71.7799 43.8803C70.2497 42.3848 69.4845 40.3394 69.4845 37.7442C69.4845 36.0947 69.8172 34.6321 70.4825 33.3565C71.1478 32.0809 72.0793 31.0912 73.2768 30.3874C74.4966 29.6837 75.8715 29.3318 77.4017 29.3318C78.8654 29.3318 80.1406 29.6507 81.2273 30.2885C82.314 30.9263 83.1567 31.828 83.7555 32.9936C84.3542 34.1593 84.6536 35.5339 84.6536 37.1174C84.6536 38.0631 84.2323 38.5359 83.3895 38.5359H73.5762C73.7093 40.0535 74.1417 41.1751 74.8736 41.9009C75.6054 42.6047 76.6699 42.9566 78.0671 42.9566C78.7767 42.9566 79.3977 42.8686 79.9299 42.6927C80.4843 42.5167 81.1053 42.2748 81.7928 41.9669C82.4581 41.615 82.946 41.4391 83.2565 41.4391ZM77.5015 32.2349C76.3705 32.2349 75.4613 32.5868 74.7738 33.2906C74.1085 33.9943 73.7093 35.006 73.5762 36.3256H81.0942C81.0499 34.984 80.7172 33.9723 80.0963 33.2906C79.4753 32.5868 78.6104 32.2349 77.5015 32.2349Z"
      fill="url(#paint4_linear_555_5860)"
    />
    <path
      d="M104.683 29.3318C106.635 29.3318 108.087 29.8816 109.041 30.9813C109.995 32.0809 110.471 33.7414 110.471 35.9627V44.0782C110.471 44.6941 110.283 45.1779 109.906 45.5298C109.551 45.8817 109.052 46.0576 108.409 46.0576C107.766 46.0576 107.256 45.8817 106.879 45.5298C106.502 45.1779 106.313 44.6941 106.313 44.0782V36.1937C106.313 34.94 106.069 34.0273 105.581 33.4555C105.116 32.8837 104.373 32.5978 103.353 32.5978C102.155 32.5978 101.19 32.9717 100.458 33.7194C99.7488 34.4672 99.3939 35.4679 99.3939 36.7215V44.0782C99.3939 44.6941 99.2054 45.1779 98.8284 45.5298C98.4514 45.8817 97.9414 46.0576 97.2982 46.0576C96.6551 46.0576 96.145 45.8817 95.768 45.5298C95.4132 45.1779 95.2357 44.6941 95.2357 44.0782V31.3112C95.2357 30.7393 95.4243 30.2775 95.8013 29.9256C96.1783 29.5737 96.6883 29.3978 97.3315 29.3978C97.9081 29.3978 98.3738 29.5737 98.7286 29.9256C99.1056 30.2555 99.2941 30.6954 99.2941 31.2452V32.1359C99.8486 31.2342 100.592 30.5414 101.523 30.0576C102.454 29.5737 103.508 29.3318 104.683 29.3318Z"
      fill="url(#paint5_linear_555_5860)"
    />
    <path
      d="M115.441 46.0576C114.842 46.0576 114.343 45.8927 113.944 45.5628C113.567 45.2109 113.379 44.716 113.379 44.0782V31.3442C113.379 30.7064 113.567 30.2225 113.944 29.8926C114.343 29.5627 114.842 29.3978 115.441 29.3978C116.04 29.3978 116.539 29.5627 116.938 29.8926C117.337 30.2225 117.537 30.7064 117.537 31.3442V44.0782C117.537 44.716 117.337 45.2109 116.938 45.5628C116.539 45.8927 116.04 46.0576 115.441 46.0576ZM115.441 26.4617C114.687 26.4617 114.088 26.2637 113.645 25.8678C113.201 25.45 112.98 24.9111 112.98 24.2513C112.98 23.5915 113.201 23.0637 113.645 22.6678C114.088 22.2719 114.687 22.074 115.441 22.074C116.173 22.074 116.761 22.2719 117.204 22.6678C117.67 23.0637 117.903 23.5915 117.903 24.2513C117.903 24.9111 117.681 25.45 117.238 25.8678C116.794 26.2637 116.195 26.4617 115.441 26.4617Z"
      fill="url(#paint6_linear_555_5860)"
    />
    <path
      d="M134.871 22.4369C135.492 22.4369 136.002 22.6128 136.401 22.9647C136.8 23.3166 137 23.7785 137 24.3503V44.0782C137 44.672 136.811 45.1449 136.434 45.4968C136.057 45.8487 135.559 46.0246 134.938 46.0246C134.317 46.0246 133.818 45.8487 133.441 45.4968C133.064 45.1449 132.875 44.672 132.875 44.0782V43.2535C132.387 44.1552 131.678 44.859 130.746 45.3648C129.837 45.8707 128.794 46.1236 127.619 46.1236C126.222 46.1236 124.969 45.7717 123.86 45.0679C122.773 44.3641 121.92 43.3744 121.299 42.0988C120.7 40.8012 120.4 39.3167 120.4 37.6452C120.4 35.9737 120.7 34.5112 121.299 33.2575C121.92 32.0039 122.773 31.0362 123.86 30.3544C124.947 29.6726 126.2 29.3317 127.619 29.3317C128.794 29.3317 129.837 29.5737 130.746 30.0575C131.655 30.5414 132.354 31.2232 132.842 32.1029V24.2843C132.842 23.7345 133.019 23.2946 133.374 22.9647C133.751 22.6128 134.25 22.4369 134.871 22.4369ZM128.717 42.9236C130.048 42.9236 131.068 42.4727 131.777 41.571C132.509 40.6693 132.875 39.3827 132.875 37.7112C132.875 36.0397 132.509 34.7641 131.777 33.8844C131.068 32.9826 130.059 32.5318 128.75 32.5318C127.42 32.5318 126.388 32.9716 125.656 33.8514C124.925 34.7311 124.559 35.9957 124.559 37.6452C124.559 39.3167 124.925 40.6143 125.656 41.538C126.388 42.4617 127.408 42.9236 128.717 42.9236Z"
      fill="url(#paint7_linear_555_5860)"
    />
    <defs>
      <lineargradient
        id="paint0_linear_555_5860"
        x1="0.193638"
        y1="12.5024"
        x2="53.7329"
        y2="64.9948"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#CC95DF" />
        <stop offset={1} stopColor="#4F80FF" />
      </lineargradient>
      <lineargradient
        id="paint1_linear_555_5860"
        x1="0.193638"
        y1="12.5024"
        x2="53.7329"
        y2="64.9948"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#CC95DF" />
        <stop offset={1} stopColor="#4F80FF" />
      </lineargradient>
      <lineargradient
        id="paint2_linear_555_5860"
        x1="0.193638"
        y1="12.5024"
        x2="53.7329"
        y2="64.9948"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#CC95DF" />
        <stop offset={1} stopColor="#4F80FF" />
      </lineargradient>
      <lineargradient
        id="paint3_linear_555_5860"
        x1="0.193638"
        y1="12.5024"
        x2="53.7329"
        y2="64.9948"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#CC95DF" />
        <stop offset={1} stopColor="#4F80FF" />
      </lineargradient>
      <lineargradient
        id="paint4_linear_555_5860"
        x1="0.193638"
        y1="12.5024"
        x2="53.7329"
        y2="64.9948"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#CC95DF" />
        <stop offset={1} stopColor="#4F80FF" />
      </lineargradient>
      <lineargradient
        id="paint5_linear_555_5860"
        x1="0.193638"
        y1="12.5024"
        x2="53.7329"
        y2="64.9948"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#CC95DF" />
        <stop offset={1} stopColor="#4F80FF" />
      </lineargradient>
      <lineargradient
        id="paint6_linear_555_5860"
        x1="0.193638"
        y1="12.5024"
        x2="53.7329"
        y2="64.9948"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#CC95DF" />
        <stop offset={1} stopColor="#4F80FF" />
      </lineargradient>
      <lineargradient
        id="paint7_linear_555_5860"
        x1="0.193638"
        y1="12.5024"
        x2="53.7329"
        y2="64.9948"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#CC95DF" />
        <stop offset={1} stopColor="#4F80FF" />
      </lineargradient>
    </defs>
  </svg>
  <div className="w-[544px] h-[37px]">
    <p className="absolute left-[468px] top-[47px] text-xl font-bold text-center text-[#113eb6]">
      Accueil
    </p>
    <p className="absolute left-[968px] top-[47px] text-xl font-bold text-center text-[#113eb6]">
      Blog
    </p>
    <p className="absolute left-[748px] top-[47px] text-xl font-bold text-center text-[#113eb6]">
      Qui sommes-nous ?
    </p>
    <p className="absolute left-[566px] top-[47px] text-xl font-bold text-center text-[#113eb6]">
      Acheter / Louer
    </p>
    <svg
      width={30}
      height={3}
      viewBox="0 0 30 3"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute left-[487.5px] top-[82.5px]"
      preserveAspectRatio="xMidYMid meet"
    >
      <line y1="1.5" x2={30} y2="1.5" stroke="#113EB6" strokeWidth={3} />
    </svg>
  </div>
  <div className="flex justify-center items-center w-[98px] absolute left-[1270px] top-[31px] gap-4 p-4 rounded-xl border border-[#3679ff]">
    <img className="flex-grow-0 flex-shrink-0" src="ellipse-48.png" />
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
      preserveAspectRatio="none"
    >
      <path
        d="M3 17H21"
        stroke="#3679FF"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 12H21"
        stroke="#3679FF"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 7H21"
        stroke="#3679FF"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </div>
  <p className="w-[186px] h-[53px] absolute left-44 top-[130px] text-[34px] font-bold text-left">
    Partenaires
  </p>
  <p className="w-[1061px] absolute left-44 top-[194px] text-lg font-medium text-left text-[#6976a0]">
    Kit le nid vous propose un ensembles d’offres avantageuses pour mieux répondre à vos besoins
    lors de vos études.
  </p>
  <div className="w-[343px] h-[147px] absolute left-[175px] top-[248px]">
    <div className="w-[343px] h-[147px] absolute left-[-1px] top-[-1px] rounded-xl bg-white border border-[#eaeffa]" />
    <p className="w-[183px] absolute left-36 top-[43px] text-xs font-medium text-left text-[#6976a0]">
      Heyme vous offre l’accès à une mutuelle santé à prix réduit.
    </p>
    <p className="w-[183px] absolute left-36 top-4 text-lg font-bold text-left text-[#3679ff]">
      Mutuelle santé
    </p>
    <img
      src="static/img/LogoHeyme.svg"
      className="w-28 h-[117px] absolute left-[15px] top-[15px] rounded-xl object-none border border-[#eaeffa]"
    />
    <div
      className="flex justify-center items-center w-[183px] absolute left-[143px] top-[88px] gap-2.5 px-10 py-3 rounded-xl"
      style={{ background: "linear-gradient(to bottom, #81a3f9 -0.06%, #3462d8 108.09%)" }}
    >
      <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-white">
        Découvrir Heyme
      </p>
    </div>
  </div>
  <div className="w-[343px] h-[147px] absolute left-[534px] top-[249px]">
    <div className="w-[343px] h-[147px] absolute left-[-1px] top-[-1px] rounded-xl bg-white border border-[#eaeffa]" />
    <p className="w-[183px] absolute left-36 top-[43px] text-xs font-medium text-left text-[#6976a0]">
      Cautioneo vous offre un garant solide pour votre location.
    </p>
    <p className="w-[183px] absolute left-36 top-4 text-lg font-bold text-left text-[#3679ff]">
      Mutuelle santé
    </p>
    <img
      src="static/img/LogoCautioneo.svg"
      className="w-28 h-[117px] absolute left-[15px] top-[15px] rounded-xl object-none border border-[#eaeffa]"
    />
    <div
      className="flex justify-center items-center w-[183px] absolute left-[143px] top-[88px] gap-2.5 px-10 py-3 rounded-xl"
      style={{ background: "linear-gradient(to bottom, #81a3f9 -0.06%, #3462d8 108.09%)" }}
    >
      <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-white">
        Découvrir Cautioneo
      </p>
    </div>
  </div>
  <div className="w-[343px] h-[147px] absolute left-[893px] top-[250px]">
    <div className="w-[343px] h-[147px] absolute left-[-1px] top-[-1px] rounded-xl bg-white border border-[#eaeffa]" />
    <p className="w-[183px] absolute left-36 top-[43px] text-xs font-medium text-left text-[#6976a0]">
      Studéa vous offre accès à des résidences étudiantes.
    </p>
    <p className="w-[183px] absolute left-36 top-4 text-lg font-bold text-left text-[#3679ff]">
      Mutuelle santé
    </p>
    <div className="w-28 h-[117px] absolute left-[15px] top-[15px] rounded-xl border border-[#eaeffa]" />
    <div
      className="flex justify-center items-center w-[183px] absolute left-[143px] top-[88px] gap-2.5 px-10 py-3 rounded-xl"
      style={{ background: "linear-gradient(to bottom, #81a3f9 -0.06%, #3462d8 108.09%)" }}
    >
      <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-white">
        Découvrir Studéa
      </p>
    </div>
  </div>
  <div className="w-[88px] h-6 absolute left-[921px] top-[312px]">
    <img
      src="static/img/studea.svg"
      className="w-[88px] h-6 absolute left-[-1px] top-[-1px] object-contain"
    />
  </div>
</div>







Bien Studea






<div className="w-[1480px] h-[1999px] relative overflow-hidden bg-[#f9fbff] mb-8 mt-8">
  <svg
    width={137}
    height={50}
    viewBox="0 0 137 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="absolute left-[23.24px] top-[31.24px]"
    preserveAspectRatio="none"
  >
    <path
     fillRule="evenodd"
     clipRule="evenodd"
      d="M20.8258 33.0636L20.8193 33.0748C19.8869 34.6599 19.5843 35.8286 19.5843 36.6474C19.5843 37.5588 19.828 38.278 20.2895 38.9091C20.9465 39.7637 21.5881 40.3184 22.1887 40.6656C23.2551 41.2537 24.2372 41.8293 25.1319 42.3927C25.6412 42.6939 26.1796 43.0603 26.6285 43.5055C27.0183 43.8921 27.8027 44.7898 27.8027 46.1272C27.8027 47.4178 27.1748 48.623 25.9928 49.3346C25.0458 49.9049 24.0003 50 23.2563 50C20.4236 50 17.714 48.4774 15.2304 46.3484L15.2211 46.3404L15.2118 46.3323C14.1322 45.3908 13.2203 44.3628 12.5133 43.2512C11.0507 45.0725 9.95147 46.3901 9.22935 47.1821C8.64104 47.8476 8.05086 48.4469 7.47436 48.9042C7.18227 49.136 6.83145 49.3815 6.43254 49.5793C6.05468 49.7666 5.45745 50 4.72121 50C2.76659 50 1.56857 48.6704 0.967561 47.7168L0.912163 47.6289L0.863258 47.5372C0.335807 46.5492 0 45.4518 0 44.2775C0 43.8037 0.0976452 43.2746 0.172486 42.9012C0.262804 42.4505 0.391418 41.8971 0.552021 41.255C0.874064 39.9675 1.35005 38.2235 1.97452 36.0365C3.19228 31.7338 4.41919 26.5489 5.65279 20.4702C6.86771 14.4836 7.46067 9.14916 7.46067 4.45087C7.46067 4.04104 7.48498 3.58906 7.57043 3.14419C7.6414 2.77466 7.80188 2.14343 8.2464 1.54285C9.22959 0.16989 10.7718 0 11.5407 0C12.7295 0 13.633 0.553598 14.2094 1.07759C14.7483 1.56745 15.1517 2.15923 15.4601 2.70953C16.2142 3.94383 16.6117 5.31154 16.6117 6.76301C16.6117 12.2808 15.6498 18.9916 13.7716 26.8616C16.0741 23.8933 18.1019 21.4815 19.8518 19.6377L19.8588 19.6303L19.8659 19.6229C20.7138 18.742 21.481 18.0062 22.144 17.4704C22.4723 17.2051 22.8411 16.9347 23.2306 16.7168C23.5385 16.5446 24.2334 16.185 25.1215 16.185C26.6135 16.185 27.7953 16.8915 28.6237 17.7677C29.2257 18.3747 30.0758 19.4492 30.0758 20.9249C30.0758 21.7255 29.7642 22.342 29.6363 22.582C29.4665 22.9007 29.2629 23.1918 29.0774 23.4348C28.7021 23.9266 28.2014 24.4801 27.6261 25.0711C26.5356 26.1911 25.3289 27.4264 24.0061 28.7768C22.8797 29.9267 21.8173 31.3429 20.8323 33.0524L20.8258 33.0636ZM26.5204 19.7688C26.0929 19.3064 25.6266 19.0751 25.1215 19.0751C24.6552 19.0751 23.606 19.9229 21.974 21.6185C19.317 24.4182 15.9306 28.6547 11.8149 34.3282C10.7849 35.748 9.70924 37.2578 8.58791 38.8576C7.89911 39.8403 7.19307 40.8569 6.4698 41.9075C6.546 41.6711 6.6216 41.4354 6.6966 41.2006C7.60102 38.3685 8.41781 35.6541 9.14697 33.0575C12.1805 22.2547 13.6973 13.4899 13.6973 6.76301C13.6973 6.08344 13.561 5.43509 13.2882 4.81794C13.2528 4.73774 13.215 4.65806 13.175 4.57891C13.1533 4.53607 13.131 4.49339 13.1079 4.45087C13.0554 4.35372 12.9992 4.25738 12.9396 4.16185C12.4733 3.31407 12.007 2.89017 11.5407 2.89017C11.0744 2.89017 10.7636 3.00578 10.6081 3.237C10.4527 3.42967 10.375 3.8343 10.375 4.45087C10.375 4.77028 10.3724 5.0922 10.3672 5.41662C10.3666 5.45026 10.3661 5.48393 10.3655 5.51762C10.283 10.1769 9.6644 15.3512 8.50983 21.0405C7.26638 27.1676 6.02294 32.4277 4.77949 36.8208C3.53605 41.1753 2.91432 43.6609 2.91432 44.2775C2.91432 44.894 3.08918 45.5299 3.4389 46.185C3.82748 46.8015 4.25491 47.1098 4.72121 47.1098C5.1875 47.1098 5.96465 46.4933 7.05267 45.2601C7.44497 44.8308 7.97149 44.217 8.63223 43.4188C8.64054 43.4087 8.64887 43.3987 8.65723 43.3886C8.82034 43.1914 8.99155 42.983 9.17086 42.7636C9.21582 42.7086 9.26128 42.6528 9.30726 42.5964C9.79157 42.002 10.3324 41.33 10.9296 40.5804C11.0134 40.4753 11.0982 40.3687 11.1841 40.2606C11.8156 39.4661 12.507 38.5892 13.2582 37.6301C13.4212 37.422 13.587 37.21 13.7556 36.9942V37.6301C13.7556 38.7282 13.9937 39.7816 14.4698 40.7902C15.0296 41.976 15.9184 43.0999 17.1362 44.1618C18.4862 45.3191 19.7486 46.1357 20.9235 46.6115C21.3378 46.7793 21.7413 46.9047 22.1339 46.9878C22.1646 46.9943 22.1952 47.0005 22.2258 47.0065C22.2554 47.0123 22.285 47.0178 22.3144 47.0231C22.6358 47.0809 22.9498 47.1098 23.2563 47.1098C24.3443 47.1098 24.8883 46.7823 24.8883 46.1272C24.8883 45.7803 24.4609 45.3565 23.606 44.8555C23.4912 44.783 23.3746 44.7102 23.2563 44.6371C23.1438 44.5675 23.0297 44.4976 22.914 44.4274C22.6834 44.2875 22.4465 44.1464 22.2034 44.0039C21.7416 43.7335 21.2571 43.4586 20.75 43.1792C19.7397 42.6012 18.8071 41.7534 17.9522 40.6358C17.0974 39.4798 16.6699 38.1503 16.6699 36.6474C16.6699 35.1445 17.2139 33.4682 18.302 31.6185C19.39 29.7303 20.5946 28.1118 21.9157 26.763C23.2369 25.4143 24.4415 24.1811 25.5295 23.0636C26.6175 21.946 27.1615 21.2331 27.1615 20.9249C27.1615 20.578 26.9478 20.1927 26.5204 19.7688ZM23.4241 44.2108C23.4241 44.2108 23.4166 44.2126 23.3996 44.2142C23.4152 44.2113 23.4241 44.2108 23.4241 44.2108Z"
      fill="url(#paint0_linear_581_5203)"
    />
    <path
      d="M35.3696 46.0576C34.7708 46.0576 34.2718 45.8927 33.8726 45.5628C33.4956 45.2109 33.3071 44.716 33.3071 44.0782V31.3442C33.3071 30.7064 33.4956 30.2225 33.8726 29.8926C34.2718 29.5627 34.7708 29.3978 35.3696 29.3978C35.9683 29.3978 36.4673 29.5627 36.8665 29.8926C37.2657 30.2225 37.4653 30.7064 37.4653 31.3442V44.0782C37.4653 44.716 37.2657 45.2109 36.8665 45.5628C36.4673 45.8927 35.9683 46.0576 35.3696 46.0576ZM35.3696 26.4617C34.6155 26.4617 34.0168 26.2637 33.5732 25.8678C33.1297 25.45 32.9079 24.9111 32.9079 24.2513C32.9079 23.5915 33.1297 23.0637 33.5732 22.6678C34.0168 22.2719 34.6155 22.074 35.3696 22.074C36.1014 22.074 36.6891 22.2719 37.1326 22.6678C37.5983 23.0637 37.8312 23.5915 37.8312 24.2513C37.8312 24.9111 37.6094 25.45 37.1659 25.8678C36.7223 26.2637 36.1236 26.4617 35.3696 26.4617Z"
      fill="url(#paint1_linear_581_5203)"
    />
    <path
      d="M50.3911 42.9896C51.5 43.0556 52.0544 43.5504 52.0544 44.4741C52.0544 45.002 51.8326 45.4088 51.3891 45.6947C50.9677 45.9587 50.3579 46.0686 49.5595 46.0246L48.6613 45.9587C44.9356 45.6947 43.0727 43.7154 43.0727 40.0205V32.8287H41.4094C40.8107 32.8287 40.3449 32.6967 40.0123 32.4328C39.7018 32.1689 39.5466 31.784 39.5466 31.2782C39.5466 30.7723 39.7018 30.3874 40.0123 30.1235C40.3449 29.8596 40.8107 29.7277 41.4094 29.7277H43.0727V26.6926C43.0727 26.0988 43.2612 25.6259 43.6382 25.274C44.0152 24.9221 44.5253 24.7462 45.1684 24.7462C45.7894 24.7462 46.2884 24.9221 46.6654 25.274C47.0424 25.6259 47.2309 26.0988 47.2309 26.6926V29.7277H50.0585C50.6573 29.7277 51.1119 29.8596 51.4224 30.1235C51.755 30.3874 51.9214 30.7723 51.9214 31.2782C51.9214 31.784 51.755 32.1689 51.4224 32.4328C51.1119 32.6967 50.6573 32.8287 50.0585 32.8287H47.2309V40.3174C47.2309 41.9449 47.9849 42.8136 49.493 42.9236L50.3911 42.9896Z"
      fill="url(#paint2_linear_581_5203)"
    />
    <path
      d="M64.7885 46.0576C64.1897 46.0576 63.6907 45.8927 63.2915 45.5628C62.9145 45.2109 62.726 44.716 62.726 44.0782V24.3833C62.726 23.7455 62.9145 23.2616 63.2915 22.9317C63.6907 22.6018 64.1897 22.4369 64.7885 22.4369C65.3873 22.4369 65.8862 22.6018 66.2854 22.9317C66.6846 23.2616 66.8842 23.7455 66.8842 24.3833V44.0782C66.8842 44.716 66.6846 45.2109 66.2854 45.5628C65.8862 45.8927 65.3873 46.0576 64.7885 46.0576Z"
      fill="url(#paint3_linear_581_5203)"
    />
    <path
      d="M83.2565 41.4391C83.6335 41.4391 83.9329 41.582 84.1547 41.8679C84.3986 42.1538 84.5206 42.5387 84.5206 43.0226C84.5206 43.7044 84.1103 44.2762 83.2897 44.738C82.5357 45.1559 81.6819 45.4968 80.7283 45.7607C79.7747 46.0026 78.8654 46.1236 78.0005 46.1236C75.3836 46.1236 73.3101 45.3758 71.7799 43.8803C70.2497 42.3848 69.4845 40.3394 69.4845 37.7442C69.4845 36.0947 69.8172 34.6321 70.4825 33.3565C71.1478 32.0809 72.0793 31.0912 73.2768 30.3874C74.4966 29.6837 75.8715 29.3318 77.4017 29.3318C78.8654 29.3318 80.1406 29.6507 81.2273 30.2885C82.314 30.9263 83.1567 31.828 83.7555 32.9936C84.3542 34.1593 84.6536 35.5339 84.6536 37.1174C84.6536 38.0631 84.2323 38.5359 83.3895 38.5359H73.5762C73.7093 40.0535 74.1417 41.1751 74.8736 41.9009C75.6054 42.6047 76.6699 42.9566 78.0671 42.9566C78.7767 42.9566 79.3977 42.8686 79.9299 42.6927C80.4843 42.5167 81.1053 42.2748 81.7928 41.9669C82.4581 41.615 82.946 41.4391 83.2565 41.4391ZM77.5015 32.2349C76.3705 32.2349 75.4613 32.5868 74.7738 33.2906C74.1085 33.9943 73.7093 35.006 73.5762 36.3256H81.0942C81.0499 34.984 80.7172 33.9723 80.0963 33.2906C79.4753 32.5868 78.6104 32.2349 77.5015 32.2349Z"
      fill="url(#paint4_linear_581_5203)"
    />
    <path
      d="M104.683 29.3318C106.635 29.3318 108.087 29.8816 109.041 30.9813C109.995 32.0809 110.471 33.7414 110.471 35.9627V44.0782C110.471 44.6941 110.283 45.1779 109.906 45.5298C109.551 45.8817 109.052 46.0576 108.409 46.0576C107.766 46.0576 107.256 45.8817 106.879 45.5298C106.502 45.1779 106.313 44.6941 106.313 44.0782V36.1937C106.313 34.94 106.069 34.0273 105.581 33.4555C105.116 32.8837 104.373 32.5978 103.353 32.5978C102.155 32.5978 101.19 32.9717 100.458 33.7194C99.7488 34.4672 99.3939 35.4679 99.3939 36.7215V44.0782C99.3939 44.6941 99.2054 45.1779 98.8284 45.5298C98.4514 45.8817 97.9414 46.0576 97.2982 46.0576C96.6551 46.0576 96.145 45.8817 95.768 45.5298C95.4132 45.1779 95.2357 44.6941 95.2357 44.0782V31.3112C95.2357 30.7393 95.4243 30.2775 95.8013 29.9256C96.1783 29.5737 96.6883 29.3978 97.3315 29.3978C97.9081 29.3978 98.3738 29.5737 98.7286 29.9256C99.1056 30.2555 99.2941 30.6954 99.2941 31.2452V32.1359C99.8486 31.2342 100.592 30.5414 101.523 30.0576C102.454 29.5737 103.508 29.3318 104.683 29.3318Z"
      fill="url(#paint5_linear_581_5203)"
    />
    <path
      d="M115.441 46.0576C114.842 46.0576 114.343 45.8927 113.944 45.5628C113.567 45.2109 113.379 44.716 113.379 44.0782V31.3442C113.379 30.7064 113.567 30.2225 113.944 29.8926C114.343 29.5627 114.842 29.3978 115.441 29.3978C116.04 29.3978 116.539 29.5627 116.938 29.8926C117.337 30.2225 117.537 30.7064 117.537 31.3442V44.0782C117.537 44.716 117.337 45.2109 116.938 45.5628C116.539 45.8927 116.04 46.0576 115.441 46.0576ZM115.441 26.4617C114.687 26.4617 114.088 26.2637 113.645 25.8678C113.201 25.45 112.98 24.9111 112.98 24.2513C112.98 23.5915 113.201 23.0637 113.645 22.6678C114.088 22.2719 114.687 22.074 115.441 22.074C116.173 22.074 116.761 22.2719 117.204 22.6678C117.67 23.0637 117.903 23.5915 117.903 24.2513C117.903 24.9111 117.681 25.45 117.238 25.8678C116.794 26.2637 116.195 26.4617 115.441 26.4617Z"
      fill="url(#paint6_linear_581_5203)"
    />
    <path
      d="M134.871 22.4369C135.492 22.4369 136.002 22.6128 136.401 22.9647C136.8 23.3166 137 23.7785 137 24.3503V44.0782C137 44.672 136.811 45.1449 136.434 45.4968C136.057 45.8487 135.559 46.0246 134.938 46.0246C134.317 46.0246 133.818 45.8487 133.441 45.4968C133.064 45.1449 132.875 44.672 132.875 44.0782V43.2535C132.387 44.1552 131.678 44.859 130.746 45.3648C129.837 45.8707 128.794 46.1236 127.619 46.1236C126.222 46.1236 124.969 45.7717 123.86 45.0679C122.773 44.3641 121.92 43.3744 121.299 42.0988C120.7 40.8012 120.4 39.3167 120.4 37.6452C120.4 35.9737 120.7 34.5112 121.299 33.2575C121.92 32.0039 122.773 31.0362 123.86 30.3544C124.947 29.6726 126.2 29.3317 127.619 29.3317C128.794 29.3317 129.837 29.5737 130.746 30.0575C131.655 30.5414 132.354 31.2232 132.842 32.1029V24.2843C132.842 23.7345 133.019 23.2946 133.374 22.9647C133.751 22.6128 134.25 22.4369 134.871 22.4369ZM128.717 42.9236C130.048 42.9236 131.068 42.4727 131.777 41.571C132.509 40.6693 132.875 39.3827 132.875 37.7112C132.875 36.0397 132.509 34.7641 131.777 33.8844C131.068 32.9826 130.059 32.5318 128.75 32.5318C127.42 32.5318 126.388 32.9716 125.656 33.8514C124.925 34.7311 124.559 35.9957 124.559 37.6452C124.559 39.3167 124.925 40.6143 125.656 41.538C126.388 42.4617 127.408 42.9236 128.717 42.9236Z"
      fill="url(#paint7_linear_581_5203)"
    />
    <defs>
      <lineargradient
        id="paint0_linear_581_5203"
        x1="0.193638"
        y1="12.5024"
        x2="53.7329"
        y2="64.9948"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#CC95DF" />
        <stop offset={1} stopColor="#4F80FF" />
      </lineargradient>
      <lineargradient
        id="paint1_linear_581_5203"
        x1="0.193638"
        y1="12.5024"
        x2="53.7329"
        y2="64.9948"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#CC95DF" />
        <stop offset={1} stopColor="#4F80FF" />
      </lineargradient>
      <lineargradient
        id="paint2_linear_581_5203"
        x1="0.193638"
        y1="12.5024"
        x2="53.7329"
        y2="64.9948"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#CC95DF" />
        <stop offset={1} stopColor="#4F80FF" />
      </lineargradient>
      <lineargradient
        id="paint3_linear_581_5203"
        x1="0.193638"
        y1="12.5024"
        x2="53.7329"
        y2="64.9948"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#CC95DF" />
        <stop offset={1} stopColor="#4F80FF" />
      </lineargradient>
      <lineargradient
        id="paint4_linear_581_5203"
        x1="0.193638"
        y1="12.5024"
        x2="53.7329"
        y2="64.9948"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#CC95DF" />
        <stop offset={1} stopColor="#4F80FF" />
      </lineargradient>
      <lineargradient
        id="paint5_linear_581_5203"
        x1="0.193638"
        y1="12.5024"
        x2="53.7329"
        y2="64.9948"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#CC95DF" />
        <stop offset={1} stopColor="#4F80FF" />
      </lineargradient>
      <lineargradient
        id="paint6_linear_581_5203"
        x1="0.193638"
        y1="12.5024"
        x2="53.7329"
        y2="64.9948"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#CC95DF" />
        <stop offset={1} stopColor="#4F80FF" />
      </lineargradient>
      <lineargradient
        id="paint7_linear_581_5203"
        x1="0.193638"
        y1="12.5024"
        x2="53.7329"
        y2="64.9948"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#CC95DF" />
        <stop offset={1} stopColor="#4F80FF" />
      </lineargradient>
    </defs>
  </svg>
  <div className="w-[544px] h-[37px]">
    <p className="absolute left-[468px] top-[47px] text-xl font-bold text-center text-[#113eb6]">
      Accueil
    </p>
    <p className="absolute left-[968px] top-[47px] text-xl font-bold text-center text-[#113eb6]">
      Blog
    </p>
    <p className="absolute left-[748px] top-[47px] text-xl font-bold text-center text-[#113eb6]">
      Qui sommes-nous ?
    </p>
    <p className="absolute left-[566px] top-[47px] text-xl font-bold text-center text-[#113eb6]">
      Acheter / Louer
    </p>
    <svg
      width={30}
      height={3}
      viewBox="0 0 30 3"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute left-[487.5px] top-[82.5px]"
      preserveAspectRatio="xMidYMid meet"
    >
      <line y1="1.5" x2={30} y2="1.5" stroke="#113EB6" strokeWidth={3} />
    </svg>
  </div>
  <div className="flex justify-center items-center w-[98px] absolute left-[1270px] top-[31px] gap-4 p-4 rounded-xl border border-[#3679ff]">
    <img className="flex-grow-0 flex-shrink-0" src="" />
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
      preserveAspectRatio="none"
    >
      <path
        d="M3 17H21"
        stroke="#3679FF"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 12H21"
        stroke="#3679FF"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 7H21"
        stroke="#3679FF"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </div>
  <p className="w-[186px] h-[53px] absolute left-44 top-[130px] text-[34px] font-bold text-left">
    Partenaires
  </p>
  <p className="w-[1061px] absolute left-44 top-[194px] text-lg font-medium text-left text-[#6976a0]">
    Kit le nid vous propose un ensembles d’offres avantageuses pour mieux répondre à vos besoins
    lors de vos études.
  </p>
  <div className="w-[343px] h-[147px] absolute left-[175px] top-[248px]">
    <div className="w-[343px] h-[147px] absolute left-[-1px] top-[-1px] rounded-xl bg-white border border-[#eaeffa]" />
    <p className="w-[183px] absolute left-36 top-[43px] text-xs font-medium text-left text-[#6976a0]">
      Heyme vous offre l’accès à une mutuelle santé à prix réduit.
    </p>
    <p className="w-[183px] absolute left-36 top-4 text-lg font-bold text-left text-[#3679ff]">
      Mutuelle santé
    </p>
    <img
      src="static/img/studea.svg"
      className="w-28 h-[117px] absolute left-[15px] top-[15px] rounded-xl object-none border border-[#eaeffa]"
    />
    <div
      className="flex justify-center items-center w-[183px] absolute left-[143px] top-[88px] gap-2.5 px-10 py-3 rounded-xl"
      style={{ background: "linear-gradient(to bottom, #81a3f9 -0.06%, #3462d8 108.09%)" }}
    >
      <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-white">
        Découvrir Heyme
      </p>
    </div>
  </div>
  <div className="w-[343px] h-[147px] absolute left-[534px] top-[249px]">
    <div className="w-[343px] h-[147px] absolute left-[-1px] top-[-1px] rounded-xl bg-white border border-[#eaeffa]" />
    <p className="w-[183px] absolute left-36 top-[43px] text-xs font-medium text-left text-[#6976a0]">
      Cautioneo vous offre un garant solide pour votre location.
    </p>
    <p className="w-[183px] absolute left-36 top-4 text-lg font-bold text-left text-[#3679ff]">
      Mutuelle santé
    </p>
    <img
      src="image-88-2.png"
      className="w-28 h-[117px] absolute left-[15px] top-[15px] rounded-xl object-none border border-[#eaeffa]"
    />
    <div
      className="flex justify-center items-center w-[183px] absolute left-[143px] top-[88px] gap-2.5 px-10 py-3 rounded-xl"
      style={{ background: "linear-gradient(to bottom, #81a3f9 -0.06%, #3462d8 108.09%)" }}
    >
      <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-white">
        Découvrir Cautioneo
      </p>
    </div>
  </div>
  <div className="w-[343px] h-[147px] absolute left-[893px] top-[250px]">
    <div className="w-[343px] h-[147px] absolute left-[-1px] top-[-1px] rounded-xl bg-white border border-[#eaeffa]" />
    <p className="w-[183px] absolute left-36 top-[43px] text-xs font-medium text-left text-[#6976a0]">
      Studéa vous offre accès à des résidences étudiantes.
    </p>
    <p className="w-[183px] absolute left-36 top-4 text-lg font-bold text-left text-[#3679ff]">
      Mutuelle santé
    </p>
    <div className="w-28 h-[117px] absolute left-[15px] top-[15px] rounded-xl border border-[#eaeffa]" />
    <div
      className="flex justify-center items-center w-[183px] absolute left-[143px] top-[88px] gap-2.5 px-10 py-3 rounded-xl"
      style={{ background: "linear-gradient(to bottom, #81a3f9 -0.06%, #3462d8 108.09%)" }}
    >
      <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-white">
        Découvrir Studéa
      </p>
    </div>
  </div>
  <div className="w-[88px] h-6 absolute left-[921px] top-[312px]">
    <img
      src="static/img/studea.svg"
      className="w-[88px] h-6 absolute left-[-1px] top-[-1px] object-contain"
    />
  </div>
  <div className="w-[1480px] h-[2293px] absolute left-[-1px] top-[-1px] opacity-30 bg-[#051f52]" />
  <div className="w-[1376px] h-[1817px] absolute left-[51px] top-[181px] rounded-xl bg-white" />
  <div className="flex justify-center items-center w-[712px] absolute left-[533px] top-[1476px] gap-2.5 px-[120px] py-4 rounded-xl bg-[#c23d3b]">
    <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-white">
      Déposer mon dossier
    </p>
  </div>
  <div className="flex flex-col justify-start items-start w-[344px] absolute left-[170px] top-[1468px] gap-2 p-6 rounded-xl bg-white border border-[#eaeffa]">
    <p className="flex-grow-0 flex-shrink-0 w-[295px] text-lg font-bold text-left text-[#c23d3b]">
      Frais à prévoir :
    </p>
    <p className="self-stretch flex-grow-0 flex-shrink-0 w-[296px] text-sm font-medium text-left">
      <span className="self-stretch flex-grow-0 flex-shrink-0 w-[296px] text-sm font-medium text-left text-[#6976a0]">
        Il s’agit de frais uniques, à débourser une seule et unique fois.
      </span>
      <br />
      <br />
      <span className="self-stretch flex-grow-0 flex-shrink-0 w-[296px] text-sm font-medium text-left text-[#6976a0]">
        Honoraires d’organisation de la visite + Constitution du dossier + Rédaction du bail à la
        charge du locataire :{" "}
      </span>
      <span className="self-stretch flex-grow-0 flex-shrink-0 w-[296px] text-sm font-medium text-left text-[#c23d3b]">
        502€ TTC
      </span>
      <br />
      <br />
      <span className="self-stretch flex-grow-0 flex-shrink-0 w-[296px] text-sm font-medium text-left text-[#6976a0]">
        Honoraires de réalisation d’état des lieux à la charge du locataire :{" "}
      </span>
      <span className="self-stretch flex-grow-0 flex-shrink-0 w-[296px] text-sm font-medium text-left text-[#c23d3b]">
        188€ TTC
      </span>
      <br />
      <br />
      <span className="self-stretch flex-grow-0 flex-shrink-0 w-[296px] text-sm font-medium text-left text-[#c23d3b]">
        Total des frais : 1284€ TTC
      </span>
    </p>
  </div>
  <div className="flex flex-col justify-start items-start w-[344px] absolute left-[170px] top-[1283px] gap-2 p-6 rounded-xl bg-white border border-[#eaeffa]">
    <p className="flex-grow-0 flex-shrink-0 w-[295px] text-lg font-bold text-left text-[#c23d3b]">
      Les petits plus :
    </p>
    <p className="self-stretch flex-grow-0 flex-shrink-0 w-[296px] text-sm font-medium text-left text-[#6976a0]">
      <span className="self-stretch flex-grow-0 flex-shrink-0 w-[296px] text-sm font-medium text-left text-[#6976a0]">
        Laverie
      </span>
      <br />
      <span className="self-stretch flex-grow-0 flex-shrink-0 w-[296px] text-sm font-medium text-left text-[#6976a0]">
        Cafétéria linge
      </span>
      <br />
      <span className="self-stretch flex-grow-0 flex-shrink-0 w-[296px] text-sm font-medium text-left text-[#6976a0]">
        Intendant
      </span>
      <br />
      <span className="self-stretch flex-grow-0 flex-shrink-0 w-[296px] text-sm font-medium text-left text-[#6976a0]">
        ALS
      </span>
      <br />
      <span className="self-stretch flex-grow-0 flex-shrink-0 w-[296px] text-sm font-medium text-left text-[#6976a0]">
        Déjeuner
      </span>
    </p>
  </div>
  <div className="w-[712px] h-[402px]">
    <div
      className="w-[712px] h-[402px] absolute left-[533.5px] top-[1542.5px] rounded-[25px] bg-white"
      style={{ boxShadow: "0px 4px 20px 0 rgba(24,55,50,0.04)" }}
    />
    <img
      src="static/map"
      className="w-[1020.43px] h-[601px] absolute left-[401.76px] top-[1402.5px] object-cover"
    />
  </div>
  <p className="w-[215px] h-[19px] absolute left-[197px] top-[273px] text-lg font-bold text-left text-[#c23d3b]">
    Retourner à la recherche
  </p>
  <div className="flex flex-col justify-start items-start w-[344px] absolute left-[170px] top-[1098px] gap-2 p-6 rounded-xl bg-white border border-[#eaeffa]">
    <p className="flex-grow-0 flex-shrink-0 w-[295px] text-lg font-bold text-left text-[#c23d3b]">
      À propos de cette résidence
    </p>
    <p className="self-stretch flex-grow-0 flex-shrink-0 w-[296px] text-sm font-medium text-left text-[#6976a0]">
      Démarrage travaux imminent ! Votre appartement à partir de 205 000 euros. Dans un équilibre
      parfait entre “Vivre au vert et vivre ensemble “, découvrez notre programme GAIA
    </p>
  </div>
  <div className="flex flex-col justify-center items-center w-[344px] absolute left-[171px] top-[1761px] gap-2 p-6 rounded-xl bg-white border border-[#eaeffa]">
    <p className="flex-grow-0 flex-shrink-0 w-[295px] text-lg font-bold text-center text-[#c23d3b]">
      Transports à proximités
    </p>
    <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-3">
      <div className="flex-grow-0 flex-shrink-0 w-6 h-6 relative">
        <img src="image-95.png" className="w-6 h-6 absolute left-[-1px] top-[-1px] object-cover" />
      </div>
      <div className="flex-grow-0 flex-shrink-0 w-6 h-6 relative">
        <img src="image-93.png" className="w-6 h-6 absolute left-[-1px] top-[-1px] object-cover" />
      </div>
      <div className="flex-grow-0 flex-shrink-0 w-6 h-6 relative">
        <img src="image-92.png" className="w-6 h-6 absolute left-[-1px] top-[-1px] object-cover" />
      </div>
      <div className="flex-grow-0 flex-shrink-0 w-6 h-6 relative">
        <img src="image-94.png" className="w-6 h-6 absolute left-[-1px] top-[-1px] object-cover" />
      </div>
    </div>
  </div>
  <div className="w-[712px] h-[362px]">
    <div
      className="w-[712px] h-[362px] absolute left-[533.5px] top-[1098.5px] rounded-xl bg-white"
      style={{
        boxShadow: "0px 4px 6px -4px rgba(24,39,75,0.12), 0px 8px 8px -4px rgba(24,39,75,0.08)",
      }}
    />
    <div className="w-[388px] h-[50px]">
      <div className="flex justify-center items-center w-[388px] absolute left-[695.5px] top-[1386.5px] gap-2.5 px-[120px] py-4 rounded-xl bg-[#c23d3b]">
        <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-white">Réserver</p>
      </div>
    </div>
    <div className="flex justify-end items-center w-[664px] absolute left-[557.5px] top-[1122.5px] gap-3 p-4 rounded-xl bg-white border border-[#c23d3b]">
      <p className="flex-grow w-[596px] text-sm font-bold text-left text-[#c23d3b]">
        4 logements disponibles
      </p>
      <svg
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
        preserveAspectRatio="none"
      >
        <path
          d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
          stroke="#C23D3B"
          strokeWidth={2}
          strokeMiterlimit={10}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8 12H16"
          stroke="#C23D3B"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
    <div className="w-[85px] h-[153px]">
      <p className="absolute left-[578px] top-[1235px] text-sm text-center text-[#43434a]">
        Studio
      </p>
      <p className="absolute left-[578px] top-[1269px] text-sm text-center text-[#43434a]">
        Studio
      </p>
      <p className="absolute left-[578px] top-[1303px] text-sm text-center text-[#43434a]">
        Studio
      </p>
      <p className="absolute left-[578px] top-[1337px] text-sm text-center text-[#43434a]">
        Studio
      </p>
      <p className="absolute left-[558px] top-[1202px] text-xs font-bold text-center text-[#c23d3b]">
        Loyer mensuel
      </p>
    </div>
    <div className="w-[67px] h-[153px]">
      <p className="absolute left-[675px] top-[1235px] text-sm text-center text-[#43434a]">
        230 000€
      </p>
      <p className="absolute left-[675px] top-[1269px] text-sm text-center text-[#43434a]">
        260 000€
      </p>
      <p className="absolute left-[675px] top-[1303px] text-sm text-center text-[#43434a]">
        280 000€
      </p>
      <p className="absolute left-[675px] top-[1337px] text-sm text-center text-[#43434a]">
        290 000€
      </p>
      <p className="absolute left-[685px] top-[1202px] text-xs font-bold text-center text-[#c23d3b]">
        Surface
      </p>
    </div>
    <div className="w-9 h-[154px]">
      <p className="absolute left-[775px] top-[1236px] text-sm text-center text-[#43434a]">26m²</p>
      <p className="absolute left-[775px] top-[1270px] text-sm text-center text-[#43434a]">28m²</p>
      <p className="absolute left-[775px] top-[1304px] text-sm text-center text-[#43434a]">29m²</p>
      <p className="absolute left-[775px] top-[1338px] text-sm text-center text-[#43434a]">30m²</p>
      <p className="absolute left-[774px] top-[1202px] text-xs font-bold text-left text-[#c23d3b]">
        Étage
      </p>
    </div>
    <div className="w-[81px] h-[153px]">
      <div className="w-[81px] h-[120px]">
        <p className="absolute left-[869px] top-[1235px] text-sm text-center text-[#43434a]">RDC</p>
        <p className="absolute left-[851px] top-[1269px] text-sm text-center text-[#43434a]">
          1er étage
        </p>
        <p className="absolute left-[851px] top-[1303px] text-sm text-center text-[#43434a]">
          1er étage
        </p>
        <p className="absolute left-[842px] top-[1337px] text-sm text-center text-[#43434a]">
          2ème étage
        </p>
      </div>
      <p className="absolute left-[846px] top-[1202px] text-xs font-bold text-left text-[#c23d3b]">
        Disponibilité
      </p>
    </div>
    <svg
      width={1}
      height={153}
      viewBox="0 0 1 153"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute left-[658.5px] top-[1201.5px]"
      preserveAspectRatio="xMidYMid meet"
    >
      <line x1="0.5" y1="2.18557e-8" x2="0.499993" y2={153} stroke="#EFF4FF" />
    </svg>
    <svg
      width={1}
      height={153}
      viewBox="0 0 1 153"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute left-[757.5px] top-[1201.5px]"
      preserveAspectRatio="xMidYMid meet"
    >
      <line x1="0.5" y1="2.18557e-8" x2="0.499993" y2={153} stroke="#EFF4FF" />
    </svg>
    <svg
      width={1}
      height={153}
      viewBox="0 0 1 153"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute left-[825.5px] top-[1201.5px]"
      preserveAspectRatio="xMidYMid meet"
    >
      <line x1="0.5" y1="2.18557e-8" x2="0.499993" y2={153} stroke="#EFF4FF" />
    </svg>
  </div>
  <div className="w-[534px] h-[175px]">
    <p className="absolute left-[565px] top-[892px] text-[28px] font-bold text-center text-[#c23d3b]">
      Studea Joinville Centre
    </p>
    <p className="absolute left-[564px] top-[928px] text-sm font-medium text-center text-[#6976a0]">
      40 rue de Paris, 94340 Joinville-le-Pont, France
    </p>
    <div className="w-[259px] h-24 absolute left-[455.5px] top-[970.5px] rounded-xl bg-white border border-[#eaeffa]">
      <p className="absolute left-[39px] top-6 text-lg font-bold text-center text-[#0e215c]">
        1 pièce de 18 à 28 m2
      </p>
      <p className="absolute left-[60px] top-[51px] text-lg font-bold text-center text-[#0e215c]">
        de 61 m² à 75 m²
      </p>
    </div>
    <div className="w-[259px] h-24 absolute left-[730.5px] top-[969.5px] rounded-xl bg-white border border-[#eaeffa]">
      <p className="w-[200px] h-[52px] absolute left-[30px] top-[23px] text-lg font-bold text-center text-[#c23d3b]">
        <span className="w-[200px] h-[52px] text-lg font-bold text-center text-[#c23d3b]">
          à partir de
        </span>
        <br />
        <span className="w-[200px] h-[52px] text-lg font-bold text-center text-[#c23d3b]">
          754€ CC/mois
        </span>
      </p>
    </div>
  </div>
  <div className="w-[1080px] h-[536px] absolute left-[182px] top-[323px]">
    <img
      src="static/img/icons/House1.svg"
      className="w-[1080px] h-[536px] absolute left-[-0.92px] top-[-0.92px] rounded-[10px] object-cover"
    />
  </div>
  <div className="w-[108px] h-6 absolute left-[685px] top-[215px]">
    <img
      src="static/img/studea.svg"
      className="w-[108px] h-6 absolute left-[-1px] top-[-1px] object-cover"
    />
  </div>
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-6 h-6 absolute left-[1379px] top-[215px]"
    preserveAspectRatio="none"
  >
    <path
      d="M18 18L6 6"
      stroke="#14181F"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M18 6L6 18"
      stroke="#14181F"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
  <svg
    width={7}
    height={11}
    viewBox="0 0 7 11"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-[5.5px] h-[8.62px]"
    preserveAspectRatio="none"
  >
    <path
      d="M2.43717 5.55082L6.45314 2.09247L6.45321 2.09241C6.51454 2.03953 6.56458 1.97554 6.59924 1.9034C6.63394 1.83116 6.65223 1.75275 6.65223 1.67288C6.65223 1.593 6.63394 1.5146 6.59924 1.44236C6.56458 1.37022 6.51454 1.30623 6.45321 1.25335C6.39191 1.2005 6.3203 1.15954 6.24291 1.13191C6.16552 1.10427 6.08318 1.09023 6.00043 1.09023C5.91768 1.09023 5.83534 1.10427 5.75795 1.13191C5.68057 1.15954 5.60895 1.2005 5.54766 1.25335L5.54766 1.25335L1.05034 5.13089C1.05025 5.13096 1.05016 5.13104 1.05008 5.13111C0.98851 5.18382 0.938227 5.24773 0.903376 5.31985C0.868427 5.39218 0.85 5.47075 0.85 5.55082C0.85 5.63088 0.868426 5.70946 0.903376 5.78179C0.938238 5.85394 0.988543 5.91786 1.05014 5.97057C1.05021 5.97063 1.05027 5.97069 1.05034 5.97075L5.5472 9.84789C5.54729 9.84797 5.54739 9.84806 5.54749 9.84814C5.60862 9.90122 5.68016 9.94238 5.75753 9.97017C5.83502 9.998 5.91752 10.0121 6.00043 10.0121C6.08334 10.0121 6.16584 9.998 6.24333 9.97017C6.32063 9.9424 6.39211 9.90129 6.45321 9.84829C6.45336 9.84815 6.45351 9.84802 6.45367 9.84789L6.35526 9.73468M2.43717 5.55082L6.45288 9.00894L6.45314 9.00917L6.35526 9.12283M2.43717 5.55082L6.45274 9.00883M2.43717 5.55082L6.45274 9.00883M6.35526 9.73468C6.4021 9.69463 6.43928 9.64697 6.46465 9.59446C6.49002 9.54196 6.50308 9.48564 6.50308 9.42876C6.50308 9.37187 6.49002 9.31556 6.46465 9.26305C6.43928 9.21054 6.4021 9.16289 6.35526 9.12283M6.35526 9.73468C6.3088 9.77507 6.25352 9.80712 6.19262 9.829C6.13173 9.85087 6.0664 9.86214 6.00043 9.86214C5.93446 9.86214 5.86914 9.85087 5.80824 9.829C5.74734 9.80712 5.69206 9.77507 5.64561 9.73468H6.35526ZM6.35526 9.12283L6.45274 9.00883M6.35526 9.12283L6.45274 9.00883"
      fill="#C23D3B"
      stroke="#C23D3B"
      strokeWidth="0.3"
    />
  </svg>
</div>


Recherche bien


<div
  className="w-[375px] h-[812px] relative overflow-hidden mt-8"
  style={{ background: "linear-gradient(219.21deg, #c399db -0.85%, #5882f7 106.68%)" }}
>
  <div className="flex flex-col justify-start items-start w-[375px] h-[764px] absolute left-[-1px] top-[47px] overflow-hidden gap-6 p-6 rounded-tl-xl rounded-tr-xl bg-white border border-[#eaeffa]">
    <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-3">
      <svg
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
        preserveAspectRatio="xMidYMid meet"
      >
        <path
          d="M20 12C20 16.4183 16.4183 20 12 20V22C17.5228 22 22 17.5228 22 12H20ZM12 20C7.58172 20 4 16.4183 4 12H2C2 17.5228 6.47715 22 12 22V20ZM4 12C4 7.58172 7.58172 4 12 4V2C6.47715 2 2 6.47715 2 12H4ZM12 4C16.4183 4 20 7.58172 20 12H22C22 6.47715 17.5228 2 12 2V4Z"
          fill="#14181F"
        />
        <path
          d="M11.7071 9.70711C12.0976 9.31658 12.0976 8.68342 11.7071 8.29289C11.3166 7.90237 10.6834 7.90237 10.2929 8.29289L11.7071 9.70711ZM8 12L7.29289 11.2929C6.90237 11.6834 6.90237 12.3166 7.29289 12.7071L8 12ZM10.2929 15.7071C10.6834 16.0976 11.3166 16.0976 11.7071 15.7071C12.0976 15.3166 12.0976 14.6834 11.7071 14.2929L10.2929 15.7071ZM16 13C16.5523 13 17 12.5523 17 12C17 11.4477 16.5523 11 16 11V13ZM10.2929 8.29289L7.29289 11.2929L8.70711 12.7071L11.7071 9.70711L10.2929 8.29289ZM7.29289 12.7071L10.2929 15.7071L11.7071 14.2929L8.70711 11.2929L7.29289 12.7071ZM16 11L8 11L8 13L16 13V11Z"
          fill="#14181F"
        />
      </svg>
      <p className="flex-grow-0 flex-shrink-0 text-base font-bold text-center text-[#3679ff]">
        Localisation ?
      </p>
    </div>
    <p className="self-stretch flex-grow-0 flex-shrink-0 w-[327px] text-xs font-medium text-left text-[#43434a]">
      RECHERCHES RÉCENTES
    </p>
  </div>
  <div className="w-[375px] h-[291px] absolute left-[-0.5px] top-[520.5px] bg-[#e6eaee]">
    <div className="w-[375px] h-[34px] absolute left-[-0.5px] top-[256.5px]">
      <div className="w-[134px] h-[5px] absolute left-[120.5px] top-[20.5px] rounded-[100px] bg-[#272832]" />
    </div>
    <div
      className="w-8 h-[42px] absolute left-[2.5px] top-[7.5px] rounded-[4.6px] bg-white border border-[#272832]"
      style={{ boxShadow: "0px 1px 0px 0 #010101" }}
    >
      <p className="absolute left-[7px] top-2 text-[22.5px] text-center text-[#272832]">Q</p>
    </div>
    <div
      className="w-8 h-[42px] absolute left-[21.5px] top-[61.5px] rounded-[4.6px] bg-white border border-[#272832]"
      style={{ boxShadow: "0px 1px 0px 0 #010101" }}
    >
      <p className="absolute left-2 top-2 text-[22.5px] text-center text-[#272832]">A</p>
    </div>
    <div
      className="w-8 h-[42px] absolute left-[58.5px] top-[115.5px] rounded-[4.6px] bg-white border border-[#272832]"
      style={{ boxShadow: "0px 1px 0px 0 #010101" }}
    >
      <p className="absolute left-2 top-2 text-[22.5px] text-center text-[#272832]">A</p>
    </div>
    <div
      className="w-8 h-[42px] absolute left-[39.5px] top-[7.5px] rounded-[4.6px] bg-white border border-[#272832]"
      style={{ boxShadow: "0px 1px 0px 0 #010101" }}
    >
      <p className="absolute left-[5px] top-2 text-[22.5px] text-center text-[#272832]">W</p>
    </div>
    <div
      className="w-8 h-[42px] absolute left-[58.5px] top-[61.5px] rounded-[4.6px] bg-white border border-[#272832]"
      style={{ boxShadow: "0px 1px 0px 0 #010101" }}
    >
      <p className="absolute left-[9px] top-2 text-[22.5px] text-center text-[#272832]">S</p>
    </div>
    <div
      className="w-8 h-[42px] absolute left-[95.5px] top-[115.5px] rounded-[4.6px] bg-white border border-[#272832]"
      style={{ boxShadow: "0px 1px 0px 0 #010101" }}
    >
      <p className="absolute left-[9px] top-2 text-[22.5px] text-center text-[#272832]">S</p>
    </div>
    <div
      className="w-8 h-[42px] absolute left-[77.5px] top-[7.5px] rounded-[4.6px] bg-white border border-[#272832]"
      style={{ boxShadow: "0px 1px 0px 0 #010101" }}
    >
      <p className="absolute left-[9px] top-2 text-[22.5px] text-center text-[#272832]">E</p>
    </div>
    <div
      className="w-8 h-[42px] absolute left-[96.5px] top-[61.5px] rounded-[4.6px] bg-white border border-[#272832]"
      style={{ boxShadow: "0px 1px 0px 0 #010101" }}
    >
      <p className="absolute left-2 top-2 text-[22.5px] text-center text-[#272832]">D</p>
    </div>
    <div
      className="w-8 h-[42px] absolute left-[133.5px] top-[115.5px] rounded-[4.6px] bg-white border border-[#272832]"
      style={{ boxShadow: "0px 1px 0px 0 #010101" }}
    >
      <p className="absolute left-2 top-2 text-[22.5px] text-center text-[#272832]">D</p>
    </div>
    <div
      className="w-8 h-[42px] absolute left-[114.5px] top-[7.5px] rounded-[4.6px] bg-white border border-[#272832]"
      style={{ boxShadow: "0px 1px 0px 0 #010101" }}
    >
      <p className="absolute left-[9px] top-2 text-[22.5px] text-center text-[#272832]">R</p>
    </div>
    <div
      className="w-8 h-[42px] absolute left-[133.5px] top-[61.5px] rounded-[4.6px] bg-white border border-[#272832]"
      style={{ boxShadow: "0px 1px 0px 0 #010101" }}
    >
      <p className="absolute left-2.5 top-2 text-[22.5px] text-center text-[#272832]">F</p>
    </div>
    <div
      className="w-8 h-[42px] absolute left-[170.5px] top-[115.5px] rounded-[4.6px] bg-white border border-[#272832]"
      style={{ boxShadow: "0px 1px 0px 0 #010101" }}
    >
      <p className="absolute left-2.5 top-2 text-[22.5px] text-center text-[#272832]">F</p>
    </div>
    <div
      className="w-8 h-[42px] absolute left-[152.5px] top-[7.5px] rounded-[4.6px] bg-white border border-[#272832]"
      style={{ boxShadow: "0px 1px 0px 0 #010101" }}
    >
      <p className="absolute left-[9px] top-2 text-[22.5px] text-center text-[#272832]">T</p>
    </div>
    <div
      className="w-8 h-[42px] absolute left-[171.5px] top-[61.5px] rounded-[4.6px] bg-white border border-[#272832]"
      style={{ boxShadow: "0px 1px 0px 0 #010101" }}
    >
      <p className="absolute left-2 top-2 text-[22.5px] text-center text-[#272832]">G</p>
    </div>
    <div
      className="w-8 h-[42px] absolute left-[208.5px] top-[115.5px] rounded-[4.6px] bg-white border border-[#272832]"
      style={{ boxShadow: "0px 1px 0px 0 #010101" }}
    >
      <p className="absolute left-2 top-2 text-[22.5px] text-center text-[#272832]">G</p>
    </div>
    <div
      className="w-8 h-[42px] absolute left-[189.5px] top-[7.5px] rounded-[4.6px] bg-white border border-[#272832]"
      style={{ boxShadow: "0px 1px 0px 0 #010101" }}
    >
      <p className="absolute left-[9px] top-2 text-[22.5px] text-center text-[#272832]">Y</p>
    </div>
    <div
      className="w-8 h-[42px] absolute left-[208.5px] top-[61.5px] rounded-[4.6px] bg-white border border-[#272832]"
      style={{ boxShadow: "0px 1px 0px 0 #010101" }}
    >
      <p className="absolute left-2 top-2 text-[22.5px] text-center text-[#272832]">H</p>
    </div>
    <div
      className="w-8 h-[42px] absolute left-[245.5px] top-[115.5px] rounded-[4.6px] bg-white border border-[#272832]"
      style={{ boxShadow: "0px 1px 0px 0 #010101" }}
    >
      <p className="absolute left-2 top-2 text-[22.5px] text-center text-[#272832]">H</p>
    </div>
    <div
      className="w-8 h-[42px] absolute left-[227.5px] top-[7.5px] rounded-[4.6px] bg-white border border-[#272832]"
      style={{ boxShadow: "0px 1px 0px 0 #010101" }}
    >
      <p className="absolute left-2 top-2 text-[22.5px] text-center text-[#272832]">U</p>
    </div>
    <div
      className="w-8 h-[42px] absolute left-[246.5px] top-[61.5px] rounded-[4.6px] bg-white border border-[#272832]"
      style={{ boxShadow: "0px 1px 0px 0 #010101" }}
    >
      <p className="absolute left-2.5 top-2 text-[22.5px] text-center text-[#272832]">J</p>
    </div>
    <div
      className="w-8 h-[42px] absolute left-[283.5px] top-[115.5px] rounded-[4.6px] bg-white border border-[#272832]"
      style={{ boxShadow: "0px 1px 0px 0 #010101" }}
    >
      <p className="absolute left-2.5 top-2 text-[22.5px] text-center text-[#272832]">J</p>
    </div>
    <div
      className="w-8 h-[42px] absolute left-[264.5px] top-[7.5px] rounded-[4.6px] bg-white border border-[#272832]"
      style={{ boxShadow: "0px 1px 0px 0 #010101" }}
    >
      <p className="absolute left-[13px] top-2 text-[22.5px] text-center text-[#272832]">I</p>
    </div>
    <div
      className="w-8 h-[42px] absolute left-[283.5px] top-[61.5px] rounded-[4.6px] bg-white border border-[#272832]"
      style={{ boxShadow: "0px 1px 0px 0 #010101" }}
    >
      <p className="absolute left-[9px] top-2 text-[22.5px] text-center text-[#272832]">K</p>
    </div>
    <div
      className="w-8 h-[42px] absolute left-[302.5px] top-[7.5px] rounded-[4.6px] bg-white border border-[#272832]"
      style={{ boxShadow: "0px 1px 0px 0 #010101" }}
    >
      <p className="absolute left-[7px] top-2 text-[22.5px] text-center text-[#272832]">O</p>
    </div>
    <div
      className="w-8 h-[42px] absolute left-[321.5px] top-[61.5px] rounded-[4.6px] bg-white border border-[#272832]"
      style={{ boxShadow: "0px 1px 0px 0 #010101" }}
    >
      <p className="absolute left-2.5 top-2 text-[22.5px] text-center text-[#272832]">L</p>
    </div>
    <div
      className="w-8 h-[42px] absolute left-[339.5px] top-[7.5px] rounded-[4.6px] bg-white border border-[#272832]"
      style={{ boxShadow: "0px 1px 0px 0 #010101" }}
    >
      <p className="absolute left-[9px] top-2 text-[22.5px] text-center text-[#272832]">P</p>
    </div>
    <svg
      width={42}
      height={43}
      viewBox="0 0 42 43"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-[42px] h-[42px] absolute left-[2.5px] top-[115.5px]"
      preserveAspectRatio="none"
    >
      <g filter="url(#filter0_d_1654_4744)">
        <path
          d="M0 7.36C0 4.78376 0 3.49564 0.50137 2.51164C0.942388 1.6461 1.6461 0.942388 2.51164 0.50137C3.49564 0 4.78376 0 7.36 0H34.64C37.2162 0 38.5044 0 39.4884 0.50137C40.3539 0.942388 41.0576 1.6461 41.4986 2.51164C42 3.49564 42 4.78376 42 7.36V34.64C42 37.2162 42 38.5044 41.4986 39.4884C41.0576 40.3539 40.3539 41.0576 39.4884 41.4986C38.5044 42 37.2162 42 34.64 42H7.36C4.78376 42 3.49564 42 2.51164 41.4986C1.6461 41.0576 0.942388 40.3539 0.50137 39.4884C0 38.5044 0 37.2162 0 34.64V7.36Z"
          fill="white"
        />
        <path
          d="M30.14 23.4643H25.943V27.4334C25.943 27.5134 25.943 27.5867 25.943 27.6633C25.943 27.73 25.943 27.7933 25.9403 27.86C25.9385 28.0029 25.9261 28.1454 25.9033 28.2865C25.8785 28.4267 25.8336 28.5625 25.77 28.6898C25.7049 28.8169 25.6199 28.9328 25.5181 29.033C25.4158 29.1332 25.2991 29.2175 25.1718 29.283C25.0429 29.3457 24.906 29.3906 24.7649 29.4163C24.6234 29.4385 24.4806 29.4507 24.3373 29.4529C24.2707 29.4529 24.206 29.4563 24.1407 29.4563H18.7416C18.675 29.4563 18.6106 29.4529 18.545 29.4529C18.4018 29.4507 18.2589 29.4385 18.1174 29.4163C17.9765 29.3906 17.8397 29.3457 17.7108 29.283C17.5836 29.2175 17.4668 29.1332 17.3646 29.033C17.2628 28.9329 17.1777 28.817 17.1127 28.6898C17.049 28.5625 17.0041 28.4267 16.9793 28.2865C16.9564 28.1455 16.9439 28.0029 16.942 27.86C16.942 27.7933 16.9394 27.73 16.9394 27.6633C16.9394 27.5867 16.9394 27.5134 16.9394 27.4334V23.4643H12.676C12.2448 23.4643 11.6915 22.5345 12.2094 22.018C12.6497 21.5814 19.5688 14.683 21.0168 13.2466C21.1232 13.1158 21.2735 13.0282 21.4397 13H21.451C21.5948 13.0078 21.7283 13.077 21.8176 13.19C23.2656 14.6263 30.2083 21.5814 30.6489 22.018C31.1671 22.5345 30.7332 23.4643 30.14 23.4643Z"
          fill="#272832"
        />
        <path
          d="M2.51164 41.4986L2.05765 42.3896L2.51164 41.4986ZM0.50137 39.4884L-0.389636 39.9423L0.50137 39.4884ZM41.4986 39.4884L42.3896 39.9423L41.4986 39.4884ZM39.4884 41.4986L39.9423 42.3896L39.4884 41.4986ZM39.4884 0.50137L39.9423 -0.389636L39.4884 0.50137ZM41.4986 2.51164L42.3896 2.05765L41.4986 2.51164ZM2.51164 0.50137L2.05765 -0.389636L2.51164 0.50137ZM0.50137 2.51164L-0.389636 2.05765L0.50137 2.51164ZM7.36 1H34.64V-1H7.36V1ZM41 7.36V34.64H43V7.36H41ZM34.64 41H7.36V43H34.64V41ZM1 34.64V7.36H-1V34.64H1ZM7.36 41C6.05538 41 5.13705 40.9992 4.42016 40.9407C3.71494 40.883 3.29316 40.7745 2.96563 40.6076L2.05765 42.3896C2.71412 42.7241 3.4284 42.8663 4.2573 42.934C5.07452 43.0008 6.08838 43 7.36 43V41ZM-1 34.64C-1 35.9116 -1.00078 36.9255 -0.934008 37.7427C-0.866284 38.5716 -0.724122 39.2859 -0.389636 39.9423L1.39238 39.0344C1.22549 38.7068 1.11697 38.2851 1.05935 37.5798C1.00078 36.8629 1 35.9446 1 34.64H-1ZM2.96563 40.6076C2.28825 40.2625 1.73752 39.7118 1.39238 39.0344L-0.389636 39.9423C0.147254 40.9961 1.00395 41.8527 2.05765 42.3896L2.96563 40.6076ZM41 34.64C41 35.9446 40.9992 36.8629 40.9407 37.5798C40.883 38.2851 40.7745 38.7068 40.6076 39.0344L42.3896 39.9423C42.7241 39.2859 42.8663 38.5716 42.934 37.7427C43.0008 36.9255 43 35.9116 43 34.64H41ZM34.64 43C35.9116 43 36.9255 43.0008 37.7427 42.934C38.5716 42.8663 39.2859 42.7241 39.9423 42.3896L39.0344 40.6076C38.7068 40.7745 38.2851 40.883 37.5798 40.9407C36.8629 40.9992 35.9446 41 34.64 41V43ZM40.6076 39.0344C40.2625 39.7118 39.7118 40.2625 39.0344 40.6076L39.9423 42.3896C40.9961 41.8527 41.8527 40.9961 42.3896 39.9423L40.6076 39.0344ZM34.64 1C35.9446 1 36.8629 1.00078 37.5798 1.05935C38.2851 1.11697 38.7068 1.22549 39.0344 1.39238L39.9423 -0.389636C39.2859 -0.724122 38.5716 -0.866284 37.7427 -0.934008C36.9255 -1.00078 35.9116 -1 34.64 -1V1ZM43 7.36C43 6.08838 43.0008 5.07452 42.934 4.2573C42.8663 3.4284 42.7241 2.71412 42.3896 2.05765L40.6076 2.96563C40.7745 3.29316 40.883 3.71494 40.9407 4.42016C40.9992 5.13705 41 6.05538 41 7.36H43ZM39.0344 1.39238C39.7118 1.73752 40.2625 2.28825 40.6076 2.96563L42.3896 2.05765C41.8527 1.00395 40.9961 0.147254 39.9423 -0.389636L39.0344 1.39238ZM7.36 -1C6.08838 -1 5.07452 -1.00078 4.2573 -0.934008C3.4284 -0.866284 2.71412 -0.724122 2.05765 -0.389636L2.96563 1.39238C3.29316 1.22549 3.71494 1.11697 4.42016 1.05935C5.13705 1.00078 6.05538 1 7.36 1V-1ZM1 7.36C1 6.05538 1.00078 5.13705 1.05935 4.42016C1.11697 3.71494 1.22549 3.29316 1.39238 2.96563L-0.389636 2.05765C-0.724122 2.71412 -0.866284 3.4284 -0.934008 4.2573C-1.00078 5.07452 -1 6.08838 -1 7.36H1ZM2.05765 -0.389636C1.00395 0.147254 0.147254 1.00395 -0.389636 2.05765L1.39238 2.96563C1.73752 2.28825 2.28825 1.73752 2.96563 1.39238L2.05765 -0.389636Z"
          fill="#272832"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_1654_4744"
          x={0}
          y={0}
          width={42}
          height={43}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feflood floodOpacity={0} result="BackgroundImageFix" />
          <fecolormatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feoffset dy={1} />
          <fecolormatrix
            type="matrix"
            values="0 0 0 0 0.00392157 0 0 0 0 0.00392157 0 0 0 0 0.00392157 0 0 0 1 0"
          />
          <feblend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1654_4744" />
          <feblend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1654_4744"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
    <svg
      width={42}
      height={43}
      viewBox="0 0 42 43"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-[42px] h-[42px] absolute left-[329.5px] top-[115.5px]"
      preserveAspectRatio="none"
    >
      <g filter="url(#filter0_d_1654_4747)">
        <path
          d="M0 7.36C0 4.78376 0 3.49564 0.50137 2.51164C0.942388 1.6461 1.6461 0.942388 2.51164 0.50137C3.49564 0 4.78376 0 7.36 0H34.64C37.2162 0 38.5044 0 39.4884 0.50137C40.3539 0.942388 41.0576 1.6461 41.4986 2.51164C42 3.49564 42 4.78376 42 7.36V34.64C42 37.2162 42 38.5044 41.4986 39.4884C41.0576 40.3539 40.3539 41.0576 39.4884 41.4986C38.5044 42 37.2162 42 34.64 42H7.36C4.78376 42 3.49564 42 2.51164 41.4986C1.6461 41.0576 0.942388 40.3539 0.50137 39.4884C0 38.5044 0 37.2162 0 34.64V7.36Z"
          fill="white"
        />
        <path
         fillRule="evenodd"
         clipRule="evenodd"
          d="M13.5528 17.1182C13.5379 17.1318 13.5086 17.1601 13.4763 17.192C13.4529 17.215 13.4342 17.2337 13.3954 17.2724L11.2523 19.4156C11.1962 19.4743 11.1572 19.5138 11.0666 19.6044C11.0161 19.6549 10.979 19.6937 10.8991 19.7786C10.7507 19.9222 10.5941 20.0937 10.4474 20.2748C10.3091 20.4211 10.1986 20.5915 10.1214 20.7777C9.96254 21.2618 9.96254 21.7324 10.1041 22.1694L10.123 22.2203C10.2008 22.4046 10.3107 22.5735 10.4474 22.7192C10.5942 22.8989 10.7508 23.0705 10.9163 23.2332C10.979 23.3005 11.0161 23.3393 11.0666 23.3898L11.2523 23.5755L13.2063 25.5326C13.2976 25.624 13.3425 25.6684 13.3945 25.718C13.4499 25.7764 13.5081 25.8343 13.5665 25.8893C13.5769 25.8986 16.0673 28.3874 16.0673 28.3874C16.1442 28.4643 16.2063 28.5247 16.3458 28.6595C16.3606 28.674 16.3831 28.6968 16.39 28.7041C16.426 28.7419 16.4468 28.7637 16.4607 28.7776C16.7511 29.0684 17.085 29.3128 17.4503 29.502C17.8245 29.6883 18.214 29.8164 18.6157 29.8871C18.9952 29.9492 19.3711 29.9824 19.7479 29.9878C19.8128 29.9891 19.8666 29.9898 19.9867 29.991C20.1027 29.9922 20.1537 29.9928 20.2165 29.9941L27.6373 29.9942C27.7138 29.9928 27.7655 29.9922 27.8827 29.991C28.0039 29.9898 28.0584 29.9891 28.128 29.9878C28.5063 29.9811 28.8849 29.9468 29.2595 29.8851C29.6701 29.8157 30.0651 29.6853 30.4338 29.4979C30.8053 29.3092 31.1444 29.0625 31.4383 28.767C31.7306 28.4735 31.9761 28.1362 32.1656 27.7673C32.3526 27.3928 32.4812 26.9997 32.5503 26.5941C32.6132 26.215 32.6465 25.8346 32.6505 25.4533C32.6539 25.3749 32.6553 25.2999 32.6575 25.1339C32.6585 25.055 32.659 25.0203 32.6599 24.9775L32.66 17.9881C32.659 17.9337 32.6585 17.8991 32.6575 17.8216L32.6564 17.7412C32.6549 17.6397 32.6531 17.5636 32.6501 17.4877C32.6459 17.1288 32.6139 16.7533 32.5546 16.3815C32.4822 15.9699 32.3541 15.5804 32.1724 15.2153C31.9814 14.8423 31.7376 14.5075 31.4465 14.2165C31.1563 13.9241 30.8193 13.6783 30.45 13.4903C30.083 13.3064 29.6954 13.178 29.2954 13.1072C28.9118 13.0461 28.5352 13.0141 28.1579 13.0095C28.0331 13.0043 27.9226 13.0031 27.6782 13.0031C27.5981 13.0017 27.5045 13.0008 27.3992 13.0004C27.3199 13.0001 27.257 13 27.1149 13H20.7924C20.5088 13 20.3804 13.0005 20.2186 13.0032C19.9846 13.0031 19.8741 13.0043 19.7318 13.0099C19.3731 13.0138 18.9972 13.0459 18.6251 13.1055C18.214 13.1778 17.8245 13.3059 17.4594 13.4876C17.085 13.6814 16.7511 13.9258 16.4604 14.2169C16.4468 14.2305 16.426 14.2523 16.3915 14.2887C16.3831 14.2974 16.3458 14.3347 16.3458 14.3347C16.2063 14.4695 16.1442 14.5299 16.0673 14.6068L15.7463 14.9278L13.6114 17.0659C13.5926 17.0808 13.5726 17.0984 13.5528 17.1182ZM27.1149 14.2588C27.2552 14.2588 27.317 14.2589 27.3939 14.2592C27.4943 14.2596 27.5828 14.2605 27.6677 14.2619C27.9058 14.262 28.0051 14.263 28.1251 14.2678C28.4589 14.2721 28.7744 14.2989 29.0868 14.3486C29.3562 14.3964 29.6279 14.4864 29.8825 14.6139C30.1288 14.7394 30.357 14.9058 30.5547 15.105C30.7548 15.305 30.9209 15.533 31.0487 15.7826C31.1732 16.033 31.2634 16.307 31.3131 16.5897C31.3611 16.891 31.3879 17.2054 31.3918 17.5206C31.3948 17.6014 31.3963 17.668 31.3977 17.7599L31.3988 17.8383C31.3998 17.9185 31.4004 17.955 31.4013 18.0007L31.4012 24.9652C31.4004 24.9992 31.3998 25.0358 31.3988 25.1174C31.3967 25.2725 31.3954 25.3401 31.3922 25.422C31.3884 25.7568 31.3607 26.0729 31.3089 26.3855C31.2611 26.6662 31.1712 26.9411 31.0426 27.1985C30.9157 27.4454 30.7471 27.6771 30.5461 27.8789C30.3462 28.0799 30.1159 28.2474 29.8636 28.3756C29.6082 28.5054 29.3347 28.5957 29.0523 28.6435C28.7407 28.6947 28.423 28.7235 28.1045 28.7292C28.0391 28.7304 27.9874 28.7311 27.8702 28.7322C27.749 28.7334 27.6945 28.7341 27.6249 28.7355L20.2291 28.7354C20.1733 28.7341 20.1194 28.7334 19.9993 28.7322C19.8834 28.7311 19.8324 28.7304 19.7696 28.7292C19.4512 28.7246 19.1371 28.6968 18.8263 28.646C18.5511 28.5976 18.2771 28.5074 18.0201 28.3795C17.7789 28.2546 17.5502 28.0871 17.3511 27.8877L17.3019 27.8362C17.2531 27.7851 17.2319 27.7633 17.2076 27.7417C17.0822 27.6206 17.0252 27.565 16.9574 27.4972L14.4618 25.0016C14.439 24.9809 14.4252 24.9683 14.4157 24.9599C14.3706 24.9165 14.3337 24.8793 14.2988 24.8422C14.2268 24.7724 14.1873 24.7334 14.0967 24.6428L12.1428 22.6857L11.9567 22.4997C11.9181 22.4611 11.887 22.4285 11.8158 22.3529C11.6608 22.1999 11.5307 22.0567 11.4091 21.9065L11.371 21.8637C11.3393 21.8311 11.313 21.7937 11.2929 21.753C11.2445 21.5852 11.2447 21.407 11.2935 21.2393C11.3124 21.2002 11.3376 21.1644 11.3681 21.1335L11.411 21.0853C11.5307 20.9361 11.6594 20.7944 11.7964 20.661C11.887 20.5657 11.9181 20.5331 11.9567 20.4945C12.055 20.3963 12.0989 20.3518 12.1537 20.2941L14.0967 18.3513L14.2856 18.1625C14.3232 18.1249 14.3393 18.1089 14.3597 18.0888L14.4013 18.0514L14.4013 18.0514L14.4013 18.0513C14.4316 18.0242 14.4483 18.0092 14.465 17.9926L16.6368 15.8176L16.9574 15.497C17.0252 15.4292 17.0822 15.3736 17.2076 15.2525C17.2319 15.2309 17.2531 15.2091 17.3003 15.1597L17.3508 15.1067C17.5502 14.9071 17.779 14.7396 18.0292 14.61C18.2771 14.4868 18.5511 14.3966 18.8338 14.3469C19.1352 14.2986 19.4494 14.2718 19.7642 14.2682C19.9021 14.263 20.0014 14.262 20.2291 14.262C20.3921 14.2593 20.5158 14.2588 20.7924 14.2588H27.1149ZM21.1529 24.8285C21.1019 24.8784 21.0411 24.9192 20.9726 24.9475C20.7606 25.035 20.5168 24.9861 20.3549 24.8236C20.1349 24.6025 20.1349 24.2452 20.3549 24.0242C20.387 23.992 20.4223 23.9642 20.4599 23.9411L22.9041 21.4944L20.3549 18.948L20.3626 18.9403C20.3127 18.8893 20.2719 18.8285 20.2436 18.76C20.1561 18.548 20.205 18.3041 20.3675 18.1423C20.5886 17.9223 20.9459 17.9223 21.1669 18.1423C21.1991 18.1743 21.2268 18.2096 21.2499 18.2472L23.7021 20.6955L26.1774 18.2175C26.1958 18.1912 26.2166 18.166 26.24 18.1423C26.4012 17.9804 26.6441 17.9317 26.8552 18.0189C27.0664 18.1061 27.2041 18.312 27.2041 18.5404C27.2041 18.6927 27.1429 18.835 27.0396 18.9387L27.0456 18.9448L24.5005 21.4926L26.9844 23.9725C27.0069 23.9889 27.0284 24.0072 27.0488 24.0273C27.2107 24.1885 27.2594 24.4314 27.1722 24.6426C27.085 24.8538 26.8791 24.9915 26.6507 24.9915C26.4984 24.9915 26.3561 24.9303 26.2523 24.8269L26.2463 24.833L23.7023 22.2917L21.1606 24.8361L21.1529 24.8285Z"
          fill="#272832"
        />
        <path
          d="M2.51164 41.4986L2.05765 42.3896L2.51164 41.4986ZM0.50137 39.4884L-0.389636 39.9423L0.50137 39.4884ZM41.4986 39.4884L42.3896 39.9423L41.4986 39.4884ZM39.4884 41.4986L39.9423 42.3896L39.4884 41.4986ZM39.4884 0.50137L39.9423 -0.389636L39.4884 0.50137ZM41.4986 2.51164L42.3896 2.05765L41.4986 2.51164ZM2.51164 0.50137L2.05765 -0.389636L2.51164 0.50137ZM0.50137 2.51164L-0.389636 2.05765L0.50137 2.51164ZM7.36 1H34.64V-1H7.36V1ZM41 7.36V34.64H43V7.36H41ZM34.64 41H7.36V43H34.64V41ZM1 34.64V7.36H-1V34.64H1ZM7.36 41C6.05538 41 5.13705 40.9992 4.42016 40.9407C3.71494 40.883 3.29316 40.7745 2.96563 40.6076L2.05765 42.3896C2.71412 42.7241 3.4284 42.8663 4.2573 42.934C5.07452 43.0008 6.08838 43 7.36 43V41ZM-1 34.64C-1 35.9116 -1.00078 36.9255 -0.934008 37.7427C-0.866284 38.5716 -0.724122 39.2859 -0.389636 39.9423L1.39238 39.0344C1.22549 38.7068 1.11697 38.2851 1.05935 37.5798C1.00078 36.8629 1 35.9446 1 34.64H-1ZM2.96563 40.6076C2.28825 40.2625 1.73752 39.7118 1.39238 39.0344L-0.389636 39.9423C0.147254 40.9961 1.00395 41.8527 2.05765 42.3896L2.96563 40.6076ZM41 34.64C41 35.9446 40.9992 36.8629 40.9407 37.5798C40.883 38.2851 40.7745 38.7068 40.6076 39.0344L42.3896 39.9423C42.7241 39.2859 42.8663 38.5716 42.934 37.7427C43.0008 36.9255 43 35.9116 43 34.64H41ZM34.64 43C35.9116 43 36.9255 43.0008 37.7427 42.934C38.5716 42.8663 39.2859 42.7241 39.9423 42.3896L39.0344 40.6076C38.7068 40.7745 38.2851 40.883 37.5798 40.9407C36.8629 40.9992 35.9446 41 34.64 41V43ZM40.6076 39.0344C40.2625 39.7118 39.7118 40.2625 39.0344 40.6076L39.9423 42.3896C40.9961 41.8527 41.8527 40.9961 42.3896 39.9423L40.6076 39.0344ZM34.64 1C35.9446 1 36.8629 1.00078 37.5798 1.05935C38.2851 1.11697 38.7068 1.22549 39.0344 1.39238L39.9423 -0.389636C39.2859 -0.724122 38.5716 -0.866284 37.7427 -0.934008C36.9255 -1.00078 35.9116 -1 34.64 -1V1ZM43 7.36C43 6.08838 43.0008 5.07452 42.934 4.2573C42.8663 3.4284 42.7241 2.71412 42.3896 2.05765L40.6076 2.96563C40.7745 3.29316 40.883 3.71494 40.9407 4.42016C40.9992 5.13705 41 6.05538 41 7.36H43ZM39.0344 1.39238C39.7118 1.73752 40.2625 2.28825 40.6076 2.96563L42.3896 2.05765C41.8527 1.00395 40.9961 0.147254 39.9423 -0.389636L39.0344 1.39238ZM7.36 -1C6.08838 -1 5.07452 -1.00078 4.2573 -0.934008C3.4284 -0.866284 2.71412 -0.724122 2.05765 -0.389636L2.96563 1.39238C3.29316 1.22549 3.71494 1.11697 4.42016 1.05935C5.13705 1.00078 6.05538 1 7.36 1V-1ZM1 7.36C1 6.05538 1.00078 5.13705 1.05935 4.42016C1.11697 3.71494 1.22549 3.29316 1.39238 2.96563L-0.389636 2.05765C-0.724122 2.71412 -0.866284 3.4284 -0.934008 4.2573C-1.00078 5.07452 -1 6.08838 -1 7.36H1ZM2.05765 -0.389636C1.00395 0.147254 0.147254 1.00395 -0.389636 2.05765L1.39238 2.96563C1.73752 2.28825 2.28825 1.73752 2.96563 1.39238L2.05765 -0.389636Z"
          fill="#272832"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_1654_4747"
          x={0}
          y={0}
          width={42}
          height={43}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feflood floodOpacity={0} result="BackgroundImageFix" />
          <fecolormatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feoffset dy={1} />
          <fecolormatrix
            type="matrix"
            values="0 0 0 0 0.00392157 0 0 0 0 0.00392157 0 0 0 0 0.00392157 0 0 0 1 0"
          />
          <feblend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1654_4747" />
          <feblend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1654_4747"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
    <div
      className="w-[87px] h-[42px] absolute left-[2.5px] top-[169.5px] rounded-[4.6px] bg-[#e0e0e0] border border-[#272832]"
      style={{ boxShadow: "0px 1px 0px 0 #010101" }}
    >
      <p className="w-[87px] absolute left-0 top-[11px] text-base text-center text-[#272832]">
        123
      </p>
    </div>
    <div
      className="w-[183px] h-[42px] absolute left-[95.5px] top-[169.5px] rounded-[4.6px] bg-[#e0e0e0] border border-[#272832]"
      style={{ boxShadow: "0px 1px 0px 0 #010101" }}
    >
      <p className="w-[183px] absolute left-0 top-[11px] text-base text-center text-[#272832]">
        123
      </p>
    </div>
    <div
      className="w-[87px] h-[42px] absolute left-[284.5px] top-[169.5px] rounded-[4.6px] bg-[#e0e0e0] border border-[#272832]"
      style={{ boxShadow: "0px 1px 0px 0 #010101" }}
    >
      <p className="w-[87px] absolute left-0 top-[11px] text-base text-center text-[#272832]">Go</p>
    </div>
    <svg
      width={36}
      height={36}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-9 h-9 absolute left-[20.5px] top-[234.5px]"
      preserveAspectRatio="none"
    >
      <path
       fillRule="evenodd"
       clipRule="evenodd"
        d="M18 4.5C25.4558 4.5 31.5 10.5442 31.5 18C31.5 25.4558 25.4558 31.5 18 31.5C10.5442 31.5 4.5 25.4558 4.5 18C4.5 10.5442 10.5442 4.5 18 4.5ZM18 6.07275C24.5871 6.0735 29.9264 11.4138 29.9259 18.0009C29.9254 24.588 24.5853 29.9275 17.9982 29.9272C11.4111 29.927 6.0714 24.5871 6.0714 18C6.07149 14.8365 7.32832 11.8026 9.56539 9.56578C11.8025 7.32897 14.8365 6.07248 18 6.07275ZM13.7293 12.1444C13.312 12.1394 12.9102 12.302 12.6137 12.5957C12.3173 12.8894 12.151 13.2897 12.1521 13.707C12.1521 14.578 12.8582 15.2841 13.7293 15.2841C14.6003 15.2841 15.3064 14.578 15.3064 13.707C15.3075 13.2897 15.1413 12.8894 14.8448 12.5957C14.5484 12.302 14.1465 12.1394 13.7293 12.1444ZM26.9967 20.3254C26.2779 24.21 22.5286 27.4534 17.9983 27.4534C13.5042 27.4534 9.77681 24.2572 9.01575 20.4165C8.86151 19.458 9.64654 19.2319 10.386 19.4107C12.8597 20.126 15.4251 20.474 18 20.4435C20.5691 20.4733 23.1286 20.1265 25.5971 19.4141C26.316 19.2319 27.0858 19.4377 26.9967 20.3254ZM24.5563 20.8654C24.4861 20.8924 24.4149 20.9126 24.343 20.9362C24.3356 20.9396 24.5731 20.862 24.5661 20.8654C22.4315 21.453 20.225 21.7382 18.0111 21.7125C15.3692 21.7125 13.0063 21.4189 11.3803 20.835C10.2014 20.484 10.4275 21.8711 11.2561 22.2964C13.3758 23.2613 15.682 23.7476 18.0108 23.7206C20.781 23.7206 23.2495 23.076 24.8799 22.2424C25.6515 21.7462 25.804 20.4165 24.5563 20.8654ZM22.2795 12.1444C21.8622 12.1394 21.4603 12.302 21.1638 12.5957C20.8673 12.8894 20.701 13.2897 20.702 13.707C20.6937 14.276 20.9925 14.8054 21.4839 15.0923C21.9754 15.3793 22.5833 15.3793 23.0747 15.0923C23.5662 14.8054 23.865 14.276 23.8566 13.707C23.8577 13.2897 23.6914 12.8895 23.3949 12.5958C23.0985 12.3021 22.6967 12.1395 22.2795 12.1444Z"
        fill="#272832"
      />
    </svg>
    <svg
      width={36}
      height={36}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-9 h-9 absolute left-[317.5px] top-[234.5px]"
      preserveAspectRatio="none"
    >
      <path
       fillRule="evenodd"
       clipRule="evenodd"
        d="M11.8333 16.3318C12.2936 16.3318 12.6667 16.7049 12.6667 17.1652C12.6667 17.193 12.6653 17.2204 12.6627 17.2474V19.5421H12.6583V19.5488C12.6583 19.5645 12.6594 19.5801 12.6605 19.5958C12.6615 19.6101 12.6625 19.6245 12.6627 19.6388V19.9522H12.6783C12.926 22.9162 15.3514 25.2264 18.3237 25.3294H18.6603C21.6335 25.2281 24.0603 22.9172 24.307 19.9522H24.327V17.1752L24.3334 17.1752L24.3333 17.1652C24.3333 16.7049 24.7064 16.3318 25.1667 16.3318C25.6269 16.3318 26 16.7049 26 17.1652C26 17.1892 25.999 17.213 25.997 17.2364V19.2821H25.987H25.9867C25.9893 23.1107 23.128 26.3362 19.3267 26.7896V29.3232H22.4667V29.3338C22.4777 29.3334 22.4888 29.3332 22.5 29.3332C22.9602 29.3332 23.3333 29.7063 23.3333 30.1666C23.3333 30.6269 22.9602 31 22.5 31C22.4888 31 22.4777 30.9998 22.4667 30.9993V31H14.53V30.9995C14.52 30.9998 14.51 31 14.5 31C14.0398 31 13.6667 30.6269 13.6667 30.1666C13.6667 29.7063 14.0398 29.3332 14.5 29.3332C14.51 29.3332 14.52 29.3333 14.53 29.3337V29.3232H17.6767V26.7896C13.8673 26.3468 10.9954 23.1175 11 19.2821C11 19.2622 11.0017 19.2432 11.0033 19.2247L11.0033 19.2247C11.0047 19.2092 11.006 19.194 11.0063 19.1788V17.2685C11.0022 17.2347 11 17.2002 11 17.1652C11 16.7049 11.3731 16.3318 11.8333 16.3318ZM22.9933 17.8786C22.9933 18.382 22.9933 18.9121 22.9667 19.4155C22.9462 19.8694 22.8769 20.3198 22.76 20.7589C22.4991 21.6806 21.9429 22.4911 21.1767 23.0658C19.6051 24.3059 17.3882 24.3059 15.8167 23.0658C15.0485 22.4929 14.4915 21.6817 14.2327 20.7589C14.1152 20.32 14.046 19.8695 14.0263 19.4155C13.9973 18.9121 14 18.382 14 17.8786V13.6649C14 13.1648 14.0027 10.9546 14 10.5812C14.0132 10.1245 14.0918 9.6721 14.2333 9.23773C14.767 7.32384 16.5103 6 18.497 6C20.4837 6 22.227 7.32384 22.7607 9.23773C22.886 9.67599 22.9642 10.1264 22.994 10.5812C23.024 11.0846 22.994 13.1648 22.994 13.6649V17.8786H22.9933ZM21.3267 18.6654C21.3267 18.9854 21.32 19.0921 21.3 19.4121C21.2885 19.7027 21.2449 19.9912 21.17 20.2722C21.0104 20.8623 20.6628 21.3842 20.18 21.759C19.1907 22.528 17.8059 22.528 16.8167 21.759C16.332 21.3853 15.9831 20.8631 15.8233 20.2722C15.7501 19.9909 15.7065 19.7026 15.6933 19.4121C15.6767 19.0921 15.6733 18.9854 15.6733 18.6654C15.6733 14.2316 15.6533 10.9446 15.68 10.5912C15.6993 10.3005 15.7473 10.0124 15.8233 9.73112C15.9831 9.14026 16.332 8.61801 16.8167 8.2443C17.8059 7.47532 19.1907 7.47532 20.18 8.2443C20.6628 8.61911 21.0104 9.14107 21.17 9.73112C21.2547 10.0111 21.3083 10.2995 21.33 10.5912C21.3533 10.9712 21.3267 14.2183 21.3267 18.6654Z"
        fill="#272832"
      />
    </svg>
    <div className="w-[375px] h-px absolute left-[-0.5px] top-[-0.5px] bg-[#272832]" />
  </div>
</div>


2
<div
  className="w-[375px] h-[812px] relative overflow-hidden"
  style={{ background: "linear-gradient(219.21deg, #c399db -0.85%, #5882f7 106.68%)" }}
>
  <div className="flex flex-col justify-start items-end w-[375px] absolute left-[-1px] top-[285px] overflow-hidden gap-4 p-6 rounded-tl-xl rounded-tr-xl bg-white border border-[#eaeffa]">
    <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 w-[327px] relative">
      <p className="flex-grow-0 flex-shrink-0 w-[284px] text-base font-bold text-center text-[#272832]">
        Budget
      </p>
      <svg
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
        preserveAspectRatio="none"
      >
        <path
          d="M18 18L6 6"
          stroke="#14181F"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18 6L5.99994 18"
          stroke="#14181F"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
    <div className="self-stretch flex-grow-0 flex-shrink-0 h-20 relative">
      <p className="absolute left-0 top-0 text-base font-bold text-left text-[#0e215c]">
        Votre budget
      </p>
      <div className="w-[327px] h-[52px] absolute left-[-1.5px] top-[26.5px] rounded-xl bg-white border-2 border-[#eff4ff]" />
      <p className="w-[293.46px] absolute left-[16.77px] top-11 text-base font-bold text-left text-[#6976a0]">
        0 €
      </p>
    </div>
    <div className="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5 p-4 rounded-xl bg-[#eff4ff] border border-[#3679ff]">
      <p className="flex-grow-0 flex-shrink-0 text-base text-left text-[#3679ff]">
        <span className="flex-grow-0 flex-shrink-0 text-base font-bold text-left text-[#3679ff]">
          Vous ne connaissez pas{" "}
        </span>
        <br />
        <span className="flex-grow-0 flex-shrink-0 text-base font-bold text-left text-[#3679ff]">
          votre budget ?{" "}
        </span>
        <br />
        <span className="flex-grow-0 flex-shrink-0 text-base text-left text-[#3679ff]">
          Utiliser notre simulateur ci-dessous.
        </span>
      </p>
    </div>
    <div className="self-stretch flex-grow-0 flex-shrink-0 h-20 relative">
      <p className="absolute left-0 top-0 text-base font-bold text-left text-[#0e215c]">
        Votre salaire mensuel net (avant impôt)
      </p>
      <div className="w-[327px] h-[52px] absolute left-[-1.5px] top-[26.5px] rounded-xl bg-white border-2 border-[#eff4ff]" />
      <p className="w-[293.46px] absolute left-[16.77px] top-11 text-base font-bold text-left text-[#6976a0]">
        0 €
      </p>
    </div>
    <div className="self-stretch flex-grow-0 flex-shrink-0 h-20 relative">
      <p className="absolute left-0 top-0 text-base font-bold text-left text-[#0e215c]">
        Votre apport
      </p>
      <div className="w-[327px] h-[52px] absolute left-[-1.5px] top-[26.5px] rounded-xl bg-white border-2 border-[#eff4ff]" />
      <p className="w-[293.46px] absolute left-[16.77px] top-11 text-base font-bold text-left text-[#6976a0]">
        0 €
      </p>
    </div>
    <div
      className="flex justify-end items-end flex-grow-0 flex-shrink-0 relative gap-2.5 px-10 py-3 rounded-xl"
      style={{ background: "linear-gradient(to bottom, #81a3f9 -0.06%, #3462d8 108.09%)" }}
    >
      <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-white">Valider</p>
    </div>
  </div>
</div>
3
<div
  className="w-[375px] h-[812px] relative overflow-hidden"
  style={{ background: "linear-gradient(219.21deg, #c399db -0.85%, #5882f7 106.68%)" }}
>
  <div className="flex flex-col justify-center items-center w-[375px] absolute left-[-1px] top-[499px] overflow-hidden gap-4 p-6 rounded-tl-xl rounded-tr-xl bg-white border border-[#eaeffa]">
    <div className="flex justify-end items-center flex-grow-0 flex-shrink-0 w-[327px] relative">
      <p className="flex-grow w-[303px] text-base font-bold text-center text-[#272832]">
        Nombre de pièce
      </p>
      <svg
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
        preserveAspectRatio="none"
      >
        <path
          d="M18 18L6 6"
          stroke="#14181F"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18 6L5.99994 18"
          stroke="#14181F"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
    <div className="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 w-[351px] gap-4">
      <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 h-[50px] gap-4 p-4">
        <div className="flex justify-between items-center flex-grow-0 flex-shrink-0 w-[141px] relative px-[47px] py-2 rounded-xl bg-white border-2 border-[#eff4ff]">
          <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-[#43434a]">
            Studio
          </p>
        </div>
        <div className="flex justify-between items-center flex-grow-0 flex-shrink-0 w-[141px] relative px-[47px] py-2 rounded-xl bg-white border-2 border-[#eff4ff]">
          <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-[#43434a]">
            2 pièces
          </p>
        </div>
      </div>
      <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-4">
        <div className="flex justify-between items-center flex-grow-0 flex-shrink-0 w-[141px] relative px-[47px] py-2 rounded-xl bg-white border-2 border-[#eff4ff]">
          <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-[#43434a]">
            3 pièces
          </p>
        </div>
        <div className="flex justify-between items-center flex-grow-0 flex-shrink-0 w-[141px] relative px-[47px] py-2 rounded-xl bg-white border-2 border-[#eff4ff]">
          <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-[#43434a]">
            4 pièces
          </p>
        </div>
      </div>
      <div className="flex justify-between items-center flex-grow-0 flex-shrink-0 w-[141px] relative px-[47px] py-2 rounded-xl bg-white border-2 border-[#eff4ff]">
        <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-[#43434a]">
          5 pièces
        </p>
      </div>
    </div>
    <div className="flex-grow-0 flex-shrink-0 w-[327px] h-[58px] relative overflow-hidden">
      <div
        className="flex justify-end items-end absolute left-[199px] top-[7px] gap-2.5 px-10 py-3 rounded-xl"
        style={{ background: "linear-gradient(to bottom, #81a3f9 -0.06%, #3462d8 108.09%)" }}
      >
        <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-white">Valider</p>
      </div>
    </div>
  </div>
</div>





Connexion Mobile






<div className="w-[375px] h-[812px] relative overflow-hidden bg-[#f9fbff] mt-8 mb-8">
  <img
    src="static/img/icons/House1.svg"
    className="w-[382px] h-[266px] absolute left-[-6.92px] top-[-5.92px] object-cover"
  />
  <p className="absolute left-4 top-[277px] text-[28px] font-bold text-left">Résidence Bienvivre</p>
  <p className="absolute left-4 top-[313px] text-sm font-medium text-left text-[#6976a0]">
    Buzenval - 92500 Rueil-Malmaison
  </p>
  <p className="absolute left-8 top-[355px] text-lg font-medium text-left text-[#0e215c]">
    du 3 à 4 pièces
  </p>
  <p className="absolute left-8 top-[382px] text-lg font-medium text-left text-[#0e215c]">
    de 61 m² à 75 m²
  </p>
  <p className="w-[200px] h-[23px] absolute left-8 top-[413px] text-lg font-medium text-left text-[#3679ff]">
    à partir de 271 000€
  </p>
  <p className="w-[200px] h-[23px] absolute left-8 top-[440px] text-lg font-medium text-left text-[#3679ff]">
    soit 700€ / mois
  </p>
  <svg
    width={3}
    height={102}
    viewBox="0 0 3 102"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="absolute left-3.5 top-[357px]"
    preserveAspectRatio="xMidYMid meet"
  >
    <line
      x1="1.5"
      y1="6.97778e-8"
      x2="1.5"
      y2={102}
      stroke="url(#paint0_linear_515_4382)"
      strokeWidth={3}
    />
    <defs>
      <lineargradient
        id="paint0_linear_515_4382"
        x1="0.04963"
        y1={51}
        x2="-1.08088"
        y2={51}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.0434107" stopColor="#81A3F9" />
        <stop offset={1} stopColor="#3462D8" />
      </lineargradient>
    </defs>
  </svg>
  <p className="w-[191px] h-2.5 absolute left-[92px] top-[545px] text-sm font-medium text-left text-[#6976a0]">
    ou appeler le 06 65 07 11 66
  </p>
  <div
    className="flex justify-center items-center w-[343px] absolute left-[15px] top-[486px] gap-2.5 px-[120px] py-4 rounded-xl"
    style={{ background: "linear-gradient(to bottom, #81a3f9 -0.06%, #3462d8 108.09%)" }}
  >
    <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-white">
      Être rappelé selon mes dispos
    </p>
  </div>
  <div className="flex justify-end items-center w-[343px] absolute left-[15px] top-[578px] gap-3 p-4 rounded-xl bg-white border border-[#3679ff]">
    <p className="flex-grow w-[275px] text-sm font-bold text-left text-[#4f80ff]">
      3 logement disponible.
    </p>
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
      preserveAspectRatio="xMidYMid meet"
    >
      <path
        d="M20 12C20 16.4183 16.4183 20 12 20V22C17.5228 22 22 17.5228 22 12H20ZM12 20C7.58172 20 4 16.4183 4 12H2C2 17.5228 6.47715 22 12 22V20ZM4 12C4 7.58172 7.58172 4 12 4V2C6.47715 2 2 6.47715 2 12H4ZM12 4C16.4183 4 20 7.58172 20 12H22C22 6.47715 17.5228 2 12 2V4Z"
        fill="#3679FF"
      />
      <path
        d="M12.2929 14.2929C11.9024 14.6834 11.9024 15.3166 12.2929 15.7071C12.6834 16.0976 13.3166 16.0976 13.7071 15.7071L12.2929 14.2929ZM16 12L16.7071 12.7071C16.8946 12.5196 17 12.2652 17 12C17 11.7348 16.8946 11.4804 16.7071 11.2929L16 12ZM13.7071 8.29289C13.3166 7.90237 12.6834 7.90237 12.2929 8.29289C11.9024 8.68342 11.9024 9.31658 12.2929 9.70711L13.7071 8.29289ZM8 11C7.44772 11 7 11.4477 7 12C7 12.5523 7.44772 13 8 13L8 11ZM13.7071 15.7071L16.7071 12.7071L15.2929 11.2929L12.2929 14.2929L13.7071 15.7071ZM16.7071 11.2929L13.7071 8.29289L12.2929 9.70711L15.2929 12.7071L16.7071 11.2929ZM8 13L16 13V11L8 11L8 13Z"
        fill="#3679FF"
      />
    </svg>
  </div>
  <svg
    width={56}
    height={56}
    viewBox="0 0 56 56"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-9 h-9 absolute left-[322px] top-[15px]"
    preserveAspectRatio="none"
  >
    <g filter="url(#filter0_dd_515_4386)">
      <circle cx={28} cy={20} r={18} fill="white" />
    </g>
    <path
      d="M28 28L27.5134 28.8736C27.8159 29.0421 28.1841 29.0421 28.4866 28.8736L28 28ZM28 15.1622L27.0797 15.5533C27.2365 15.9225 27.5989 16.1622 28 16.1622C28.4011 16.1622 28.7635 15.9225 28.9203 15.5533L28 15.1622ZM18 16.9723C18 20.4457 20.5603 23.4617 22.8347 25.4884C24.0037 26.5302 25.1681 27.3728 26.0381 27.9542C26.474 28.2456 26.8385 28.473 27.0958 28.6286C27.2246 28.7064 27.3267 28.7664 27.3977 28.8076C27.4332 28.8281 27.461 28.844 27.4805 28.8551C27.4902 28.8606 27.4979 28.8649 27.5034 28.868C27.5061 28.8696 27.5084 28.8708 27.51 28.8717C27.5109 28.8722 27.5116 28.8726 27.5121 28.8729C27.5124 28.8731 27.5127 28.8733 27.5129 28.8733C27.5132 28.8735 27.5134 28.8736 28 28C28.4866 27.1264 28.4868 27.1265 28.4869 27.1265C28.4869 27.1265 28.487 27.1266 28.487 27.1266C28.4871 27.1266 28.4869 27.1266 28.4867 27.1264C28.4862 27.1261 28.4851 27.1256 28.4836 27.1247C28.4804 27.1229 28.4752 27.12 28.4679 27.1158C28.4533 27.1075 28.4305 27.0945 28.4001 27.0769C28.3393 27.0417 28.2481 26.9881 28.1307 26.9172C27.8959 26.7751 27.5572 26.5639 27.1494 26.2914C26.3319 25.745 25.2463 24.9585 24.1653 23.9953C21.9397 22.012 20 19.5141 20 16.9723H18ZM28.9203 14.7711C27.7391 11.9915 25.0468 10.7046 22.607 11.057C21.3826 11.2339 20.2163 11.8255 19.359 12.8473C18.4989 13.8723 18 15.2691 18 16.9723H20C20 15.668 20.3761 14.7465 20.891 14.1329C21.4087 13.5159 22.1174 13.1485 22.893 13.0365C24.4532 12.8111 26.2609 13.6266 27.0797 15.5533L28.9203 14.7711ZM36 16.9723C36 19.5141 34.0603 22.012 31.8347 23.9953C30.7537 24.9585 29.6681 25.745 28.8506 26.2914C28.4428 26.5639 28.1041 26.7751 27.8693 26.9172C27.7519 26.9881 27.6607 27.0417 27.5999 27.0769C27.5695 27.0945 27.5467 27.1075 27.5321 27.1158C27.5248 27.12 27.5196 27.1229 27.5164 27.1247C27.5149 27.1256 27.5138 27.1261 27.5133 27.1264C27.5131 27.1266 27.5129 27.1266 27.513 27.1266C27.513 27.1266 27.5131 27.1265 27.5131 27.1265C27.5132 27.1265 27.5134 27.1264 28 28C28.4866 28.8736 28.4868 28.8735 28.4871 28.8733C28.4873 28.8733 28.4876 28.8731 28.4879 28.8729C28.4884 28.8726 28.4891 28.8722 28.49 28.8717C28.4916 28.8708 28.4939 28.8696 28.4966 28.868C28.5021 28.8649 28.5098 28.8606 28.5195 28.8551C28.539 28.844 28.5668 28.8281 28.6023 28.8076C28.6733 28.7664 28.7754 28.7064 28.9042 28.6286C29.1615 28.473 29.526 28.2456 29.9619 27.9542C30.8319 27.3728 31.9963 26.5302 33.1653 25.4884C35.4397 23.4617 38 20.4457 38 16.9723H36ZM28.9203 15.5533C29.7391 13.6266 31.5468 12.8111 33.107 13.0365C33.8826 13.1485 34.5913 13.5159 35.109 14.1329C35.6239 14.7465 36 15.668 36 16.9723H38C38 15.2691 37.5011 13.8723 36.641 12.8473C35.7837 11.8255 34.6174 11.2339 33.393 11.057C30.9532 10.7046 28.2609 11.9915 27.0797 14.7711L28.9203 15.5533Z"
      fill="url(#paint0_linear_515_4386)"
    />
    <defs>
      <filter
        id="filter0_dd_515_4386"
        x={0}
        y={0}
        width={56}
        height={56}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feflood floodOpacity={0} result="BackgroundImageFix" />
        <fecolormatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <femorphology
          radius={6}
          operator="erode"
          in="SourceAlpha"
          result="effect1_dropShadow_515_4386"
        />
        <feoffset dy={8} />
        <fegaussianblur stdDeviation={8} />
        <fecolormatrix
          type="matrix"
          values="0 0 0 0 0.0941176 0 0 0 0 0.152941 0 0 0 0 0.294118 0 0 0 0.08 0"
        />
        <feblend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_515_4386" />
        <fecolormatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <femorphology
          radius={6}
          operator="erode"
          in="SourceAlpha"
          result="effect2_dropShadow_515_4386"
        />
        <feoffset dy={6} />
        <fegaussianblur stdDeviation={4} />
        <fecolormatrix
          type="matrix"
          values="0 0 0 0 0.0941176 0 0 0 0 0.152941 0 0 0 0 0.294118 0 0 0 0.12 0"
        />
        <feblend
          mode="normal"
          in2="effect1_dropShadow_515_4386"
          result="effect2_dropShadow_515_4386"
        />
        <feblend
          mode="normal"
          in="SourceGraphic"
          in2="effect2_dropShadow_515_4386"
          result="shape"
        />
      </filter>
      <lineargradient
        id="paint0_linear_515_4386"
        x1={28}
        y1="11.2059"
        x2={28}
        y2="29.2941"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.0434107" stopColor="#81A3F9" />
        <stop offset={1} stopColor="#3462D8" />
      </lineargradient>
    </defs>
  </svg>
  <svg
    width={56}
    height={56}
    viewBox="0 0 56 56"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-9 h-9 absolute left-[278px] top-[15px]"
    preserveAspectRatio="none"
  >
    <g filter="url(#filter0_dd_515_4387)">
      <circle cx={28} cy={20} r={18} fill="white" />
    </g>
    <path
      d="M34 29C35.6569 29 37 27.6569 37 26C37 24.3431 35.6569 23 34 23C32.3431 23 31 24.3431 31 26C31 27.6569 32.3431 29 34 29Z"
      stroke="url(#paint0_linear_515_4387)"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M25 21.5L31 24.5"
      stroke="url(#paint1_linear_515_4387)"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M22 23C23.6569 23 25 21.6569 25 20C25 18.3431 23.6569 17 22 17C20.3431 17 19 18.3431 19 20C19 21.6569 20.3431 23 22 23Z"
      stroke="url(#paint2_linear_515_4387)"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M31 15.5L25 18.5"
      stroke="url(#paint3_linear_515_4387)"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M34 17C35.6569 17 37 15.6569 37 14C37 12.3431 35.6569 11 34 11C32.3431 11 31 12.3431 31 14C31 15.6569 32.3431 17 34 17Z"
      stroke="url(#paint4_linear_515_4387)"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <defs>
      <filter
        id="filter0_dd_515_4387"
        x={0}
        y={0}
        width={56}
        height={56}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feflood floodOpacity={0} result="BackgroundImageFix" />
        <fecolormatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <femorphology
          radius={6}
          operator="erode"
          in="SourceAlpha"
          result="effect1_dropShadow_515_4387"
        />
        <feoffset dy={8} />
        <fegaussianblur stdDeviation={8} />
        <fecolormatrix
          type="matrix"
          values="0 0 0 0 0.0941176 0 0 0 0 0.152941 0 0 0 0 0.294118 0 0 0 0.08 0"
        />
        <feblend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_515_4387" />
        <fecolormatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <femorphology
          radius={6}
          operator="erode"
          in="SourceAlpha"
          result="effect2_dropShadow_515_4387"
        />
        <feoffset dy={6} />
        <fegaussianblur stdDeviation={4} />
        <fecolormatrix
          type="matrix"
          values="0 0 0 0 0.0941176 0 0 0 0 0.152941 0 0 0 0 0.294118 0 0 0 0.12 0"
        />
        <feblend
          mode="normal"
          in2="effect1_dropShadow_515_4387"
          result="effect2_dropShadow_515_4387"
        />
        <feblend
          mode="normal"
          in="SourceGraphic"
          in2="effect2_dropShadow_515_4387"
          result="shape"
        />
      </filter>
      <lineargradient
        id="paint0_linear_515_4387"
        x1={34}
        y1="22.7022"
        x2={34}
        y2="29.4853"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.0434107" stopColor="#81A3F9" />
        <stop offset={1} stopColor="#3462D8" />
      </lineargradient>
      <lineargradient
        id="paint1_linear_515_4387"
        x1={28}
        y1="21.3511"
        x2={28}
        y2="24.7426"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.0434107" stopColor="#81A3F9" />
        <stop offset={1} stopColor="#3462D8" />
      </lineargradient>
      <lineargradient
        id="paint2_linear_515_4387"
        x1={22}
        y1="16.7022"
        x2={22}
        y2="23.4853"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.0434107" stopColor="#81A3F9" />
        <stop offset={1} stopColor="#3462D8" />
      </lineargradient>
      <lineargradient
        id="paint3_linear_515_4387"
        x1={28}
        y1="15.3511"
        x2={28}
        y2="18.7426"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.0434107" stopColor="#81A3F9" />
        <stop offset={1} stopColor="#3462D8" />
      </lineargradient>
      <lineargradient
        id="paint4_linear_515_4387"
        x1={34}
        y1="10.7022"
        x2={34}
        y2="17.4853"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.0434107" stopColor="#81A3F9" />
        <stop offset={1} stopColor="#3462D8" />
      </lineargradient>
    </defs>
  </svg>
  <svg
    width={56}
    height={56}
    viewBox="0 0 56 56"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-9 h-9 absolute left-[9px] top-[15px]"
    preserveAspectRatio="none"
  >
    <g filter="url(#filter0_dd_515_4388)">
      <circle cx={28} cy={20} r={18} fill="white" />
    </g>
    <path
      d="M30.2929 27.7071C30.6834 28.0976 31.3166 28.0976 31.7071 27.7071C32.0976 27.3166 32.0976 26.6834 31.7071 26.2929L30.2929 27.7071ZM24 20L23.2929 19.2929C22.9024 19.6834 22.9024 20.3166 23.2929 20.7071L24 20ZM31.7071 13.7071C32.0976 13.3166 32.0976 12.6834 31.7071 12.2929C31.3166 11.9024 30.6834 11.9024 30.2929 12.2929L31.7071 13.7071ZM31.7071 26.2929L24.7071 19.2929L23.2929 20.7071L30.2929 27.7071L31.7071 26.2929ZM24.7071 20.7071L31.7071 13.7071L30.2929 12.2929L23.2929 19.2929L24.7071 20.7071Z"
      fill="url(#paint0_linear_515_4388)"
    />
    <defs>
      <filter
        id="filter0_dd_515_4388"
        x={0}
        y={0}
        width={56}
        height={56}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feflood floodOpacity={0} result="BackgroundImageFix" />
        <fecolormatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <femorphology
          radius={6}
          operator="erode"
          in="SourceAlpha"
          result="effect1_dropShadow_515_4388"
        />
        <feoffset dy={8} />
        <fegaussianblur stdDeviation={8} />
        <fecolormatrix
          type="matrix"
          values="0 0 0 0 0.0941176 0 0 0 0 0.152941 0 0 0 0 0.294118 0 0 0 0.08 0"
        />
        <feblend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_515_4388" />
        <fecolormatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <femorphology
          radius={6}
          operator="erode"
          in="SourceAlpha"
          result="effect2_dropShadow_515_4388"
        />
        <feoffset dy={6} />
        <fegaussianblur stdDeviation={4} />
        <fecolormatrix
          type="matrix"
          values="0 0 0 0 0.0941176 0 0 0 0 0.152941 0 0 0 0 0.294118 0 0 0 0.12 0"
        />
        <feblend
          mode="normal"
          in2="effect1_dropShadow_515_4388"
          result="effect2_dropShadow_515_4388"
        />
        <feblend
          mode="normal"
          in="SourceGraphic"
          in2="effect2_dropShadow_515_4388"
          result="shape"
        />
      </filter>
      <lineargradient
        id="paint0_linear_515_4388"
        x1="27.5"
        y1="12.3051"
        x2="27.5"
        y2="28.1324"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.0434107" stopColor="#81A3F9" />
        <stop offset={1} stopColor="#3462D8" />
      </lineargradient>
    </defs>
  </svg>
  <div
    className="flex flex-col justify-start items-start absolute left-[15px] top-[650px] gap-2 p-6 rounded-xl"
    style={{ background: "linear-gradient(219.21deg, #c399db -0.85%, #5882f7 106.68%)" }}
  >
    <svg
      width={12}
      height={20}
      viewBox="0 0 12 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="flex-grow-0 flex-shrink-0 w-3 h-5 relative"
      preserveAspectRatio="none"
    >
      <path
       fillRule="evenodd"
       clipRule="evenodd"
        d="M8.30933 13.2255L8.30672 13.2299C7.9347 13.864 7.81395 14.3314 7.81395 14.659C7.81395 15.0235 7.91119 15.3112 8.09532 15.5637C8.35747 15.9055 8.61345 16.1273 8.85311 16.2662C9.2786 16.5015 9.67042 16.7317 10.0274 16.9571C10.2306 17.0775 10.4454 17.2241 10.6245 17.4022C10.7801 17.5568 11.093 17.9159 11.093 18.4509C11.093 18.9671 10.8425 19.4492 10.3709 19.7339C9.99305 19.9619 9.5759 20 9.27907 20C8.14884 20 7.06772 19.391 6.0768 18.5393L6.07307 18.5361L6.06938 18.5329C5.63861 18.1563 5.27477 17.7451 4.99272 17.3005C4.40913 18.029 3.97055 18.556 3.68243 18.8728C3.4477 19.139 3.21223 19.3787 2.9822 19.5617C2.86566 19.6544 2.72569 19.7526 2.56653 19.8317C2.41577 19.9067 2.17747 20 1.88372 20C1.10385 20 0.625845 19.4682 0.386049 19.0867L0.363945 19.0515L0.344433 19.0149C0.133984 18.6197 0 18.1807 0 17.711C0 17.5215 0.0389596 17.3098 0.0688206 17.1605C0.104856 16.9802 0.156173 16.7588 0.220252 16.502C0.348744 15.987 0.538657 15.2894 0.787816 14.4146C1.27369 12.6935 1.76322 10.6195 2.25542 8.18809C2.74016 5.79344 2.97674 3.65967 2.97674 1.78035C2.97674 1.61642 2.98644 1.43563 3.02054 1.25767C3.04885 1.10986 3.11288 0.857371 3.29024 0.61714C3.68253 0.0679559 4.29786 0 4.60465 0C5.07895 0 5.43947 0.221439 5.66945 0.431036C5.88445 0.626979 6.04539 0.863692 6.16846 1.08381C6.46932 1.57753 6.62791 2.12462 6.62791 2.7052C6.62791 4.91233 6.24412 7.59665 5.49476 10.7446C6.41344 9.55732 7.22252 8.59259 7.9207 7.85507L7.9235 7.85211L7.92633 7.84916C8.26465 7.49678 8.57072 7.20248 8.83526 6.98817C8.96627 6.88204 9.11339 6.7739 9.26881 6.68673C9.39168 6.61782 9.66892 6.47399 10.0233 6.47399C10.6186 6.47399 11.0901 6.75658 11.4206 7.10709C11.6608 7.34987 12 7.77969 12 8.36994C12 8.6902 11.8756 8.93682 11.8246 9.0328C11.7569 9.16029 11.6756 9.27671 11.6016 9.37392C11.4519 9.57065 11.2521 9.79204 11.0226 10.0284C10.5875 10.4764 10.106 10.9706 9.57823 11.5107C9.12882 11.9707 8.70492 12.5372 8.31191 13.221L8.30933 13.2255ZM9.346 17.6843C9.346 17.6843 9.34302 17.685 9.33625 17.6857C9.34248 17.6845 9.346 17.6843 9.346 17.6843Z"
        fill="white"
      />
    </svg>
    <p className="flex-grow-0 flex-shrink-0 w-[295px] text-lg font-bold text-left text-white">
      Le mot de Kit le nid.
    </p>
    <p className="flex-grow-0 flex-shrink-0 w-[295px] text-sm font-medium text-left text-white">
      Kit le nid aime bien faire des prouts dans les logements, et ça tombe bien parce que il y a un
      piano livré avec l’appartement ! À vous les gateaux aux chocolats mmmm !
    </p>
  </div>
  <div className="w-[375px] h-[70px] absolute left-[-2px] top-[741px] overflow-hidden bg-white">
    <div className="w-[62px] h-[49px]">
      <svg
        width={32}
        height={32}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8 absolute left-[124.5px] top-[10.5px]"
        preserveAspectRatio="xMidYMid meet"
      >
        <path
          d="M13.3333 22.6667C18.488 22.6667 22.6667 18.488 22.6667 13.3333C22.6667 8.17868 18.488 4 13.3333 4C8.17868 4 4 8.17868 4 13.3333C4 18.488 8.17868 22.6667 13.3333 22.6667Z"
          stroke="#272832"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M20 20L28 28"
          stroke="#272832"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <p className="absolute left-[110px] top-[47px] text-xs font-bold text-left text-[#272832]">
        Recherche
      </p>
    </div>
    <div className="w-[62px] h-[49px]">
      <svg
        width={32}
        height={32}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8 absolute left-[227.5px] top-[10.5px]"
        preserveAspectRatio="xMidYMid meet"
      >
        <path
          d="M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z"
          stroke="#272832"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M22.9553 25.7764C21.2464 23.8678 18.7634 22.6667 15.9998 22.6667C13.2363 22.6667 10.7533 23.8678 9.04431 25.7764"
          stroke="#272832"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16 18.6667C18.2091 18.6667 20 16.8759 20 14.6667C20 12.4576 18.2091 10.6667 16 10.6667C13.7909 10.6667 12 12.4576 12 14.6667C12 16.8759 13.7909 18.6667 16 18.6667Z"
          stroke="#272832"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <p className="absolute left-[213px] top-[47px] text-xs font-bold text-left text-[#272832]">
        Connexion
      </p>
    </div>
    <div className="w-[33px] h-[49px]">
      <p className="absolute left-[316px] top-[47px] text-xs font-bold text-left text-[#272832]">
        Menu
      </p>
      <svg
        width={32}
        height={32}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8 absolute left-[316.5px] top-[10.5px]"
        preserveAspectRatio="xMidYMid meet"
      >
        <path
          d="M6.66663 22.6667L25.3333 22.6667"
          stroke="#272832"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6.66663 16H25.3333"
          stroke="#272832"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6.66663 9.33325L17.3333 9.33325"
          stroke="#272832"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
    <svg
      width={374}
      height={1}
      viewBox="0 0 374 1"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute left-[-1px] top-0"
      preserveAspectRatio="xMidYMid meet"
    >
      <line x1={-1} y1="0.5" x2={374} y2="0.5" stroke="#EAEFFA" />
    </svg>
    <div className="w-[43px] h-[49px]">
      <svg
        width={32}
        height={32}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8 absolute left-[30.5px] top-[10.5px]"
        preserveAspectRatio="xMidYMid meet"
      >
        <path
          d="M26.2114 12.935L16.878 4.76837C16.3753 4.32851 15.6247 4.32851 15.122 4.76837L5.7887 12.935C5.49935 13.1882 5.33337 13.554 5.33337 13.9385V25.3335C5.33337 26.0698 5.93033 26.6668 6.66671 26.6668H12C12.7364 26.6668 13.3334 26.0698 13.3334 25.3335V20.0001C13.3334 19.2637 13.9303 18.6668 14.6667 18.6668H17.3334C18.0698 18.6668 18.6667 19.2637 18.6667 20.0001V25.3335C18.6667 26.0698 19.2637 26.6668 20 26.6668H25.3334C26.0698 26.6668 26.6667 26.0698 26.6667 25.3335V13.9385C26.6667 13.554 26.5007 13.1882 26.2114 12.935Z"
          stroke="#3679FF"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <p className="absolute left-[26px] top-[47px] text-xs font-bold text-left text-[#3679ff]">
        Acceuil
      </p>
    </div>
  </div>
  <svg
    width={375}
    height={812}
    viewBox="0 0 375 812"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="absolute left-[-1px] top-[-1px] opacity-30"
    preserveAspectRatio="none"
  >
    <path opacity="0.3" d="M0 0H375V812H0V0Z" fill="#051F52" />
  </svg>
  <div className="w-[343px] h-[573px] absolute left-[15px] top-[118px] rounded-xl bg-white border border-[#eaeffa]">
    <div className="flex justify-center items-start absolute left-[29.5px] top-[23px] gap-3">
      <p className="flex-grow-0 flex-shrink-0 w-[263px] h-[33px] text-lg font-bold text-center text-black">
        Connexion ou inscription
      </p>
      <svg
        width={25}
        height={24}
        viewBox="0 0 25 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
        preserveAspectRatio="xMidYMid meet"
      >
        <path
          d="M18.5 18L6.5 6"
          stroke="#14181F"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18.5 6L6.5 18"
          stroke="#14181F"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
    <div className="w-[295px] h-20 absolute left-[23px] top-[104px]">
      <p className="absolute left-0 top-0 text-base font-bold text-left text-[#0e215c]">
        Adresse e-mail
      </p>
      <div className="w-[295px] h-[52px] absolute left-[-1.5px] top-[26.5px] rounded-xl bg-white border-2 border-[#eff4ff]" />
      <p className="w-[264.74px] absolute left-[15.13px] top-11 text-base font-bold text-left text-[#6976a0]">
        Votre e-mail
      </p>
    </div>
    <div
      className="flex justify-center items-center w-[295px] absolute left-[23px] top-[200px] gap-2.5 px-[120px] py-4 rounded-xl"
      style={{ background: "linear-gradient(to bottom, #81a3f9 -0.06%, #3462d8 108.09%)" }}
    >
      <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-white">
        Connexion / Inscription
      </p>
    </div>
    <div className="flex justify-start items-center w-[295px] h-[50px] absolute left-[22.5px] top-[299.5px] gap-10 p-6 rounded-xl bg-white border-2 border-[#eff4ff]">
      <svg
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
        preserveAspectRatio="none"
      >
        <path
          d="M23 12C23 5.92486 18.0751 1 12 1C5.92486 1 1 5.92486 1 12C1 17.4903 5.02252 22.0412 10.2812 22.8664V15.1797H7.48828V12H10.2812V9.57656C10.2812 6.81969 11.9235 5.29688 14.4361 5.29688C15.6392 5.29688 16.8984 5.51172 16.8984 5.51172V8.21875H15.5114C14.145 8.21875 13.7188 9.06674 13.7188 9.9375V12H16.7695L16.2818 15.1797H13.7188V22.8664C18.9775 22.0412 23 17.4903 23 12Z"
          fill="#3679FF"
        />
        <path
          d="M16.2818 15.1797L16.7695 12H13.7188V9.9375C13.7188 9.0676 14.145 8.21875 15.5114 8.21875H16.8984V5.51172C16.8984 5.51172 15.6397 5.29688 14.4361 5.29688C11.9235 5.29688 10.2812 6.81969 10.2812 9.57656V12H7.48828V15.1797H10.2812V22.8664C11.4202 23.0445 12.5798 23.0445 13.7188 22.8664V15.1797H16.2818Z"
          fill="white"
        />
      </svg>
      <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-center text-[#272832]">
        continuer avec Facebook
      </p>
    </div>
    <div className="flex justify-start items-center w-[295px] h-[50px] absolute left-[22.5px] top-[365.5px] gap-10 p-6 rounded-xl bg-white border-2 border-[#eff4ff]">
      <svg
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
        preserveAspectRatio="none"
      >
        <rect x="1.5" y="1.5" width={21} height={21} rx={6} fill="url(#paint0_radial_1654_4032)" />
        <rect x="1.5" y="1.5" width={21} height={21} rx={6} fill="url(#paint1_radial_1654_4032)" />
        <rect x="1.5" y="1.5" width={21} height={21} rx={6} fill="url(#paint2_radial_1654_4032)" />
        <path
          d="M17.25 7.875C17.25 8.49632 16.7463 9 16.125 9C15.5037 9 15 8.49632 15 7.875C15 7.25368 15.5037 6.75 16.125 6.75C16.7463 6.75 17.25 7.25368 17.25 7.875Z"
          fill="white"
        />
        <path
         fillRule="evenodd"
         clipRule="evenodd"
          d="M12 15.75C14.0711 15.75 15.75 14.0711 15.75 12C15.75 9.92893 14.0711 8.25 12 8.25C9.92893 8.25 8.25 9.92893 8.25 12C8.25 14.0711 9.92893 15.75 12 15.75ZM12 14.25C13.2426 14.25 14.25 13.2426 14.25 12C14.25 10.7574 13.2426 9.75 12 9.75C10.7574 9.75 9.75 10.7574 9.75 12C9.75 13.2426 10.7574 14.25 12 14.25Z"
          fill="white"
        />
        <path
         fillRule="evenodd"
         clipRule="evenodd"
          d="M4.5 11.7C4.5 9.17976 4.5 7.91965 4.99047 6.95704C5.4219 6.11031 6.11031 5.4219 6.95704 4.99047C7.91965 4.5 9.17976 4.5 11.7 4.5H12.3C14.8202 4.5 16.0804 4.5 17.043 4.99047C17.8897 5.4219 18.5781 6.11031 19.0095 6.95704C19.5 7.91965 19.5 9.17976 19.5 11.7V12.3C19.5 14.8202 19.5 16.0804 19.0095 17.043C18.5781 17.8897 17.8897 18.5781 17.043 19.0095C16.0804 19.5 14.8202 19.5 12.3 19.5H11.7C9.17976 19.5 7.91965 19.5 6.95704 19.0095C6.11031 18.5781 5.4219 17.8897 4.99047 17.043C4.5 16.0804 4.5 14.8202 4.5 12.3V11.7ZM11.7 6H12.3C13.5849 6 14.4583 6.00117 15.1334 6.05633C15.7911 6.11006 16.1274 6.20745 16.362 6.32698C16.9265 6.6146 17.3854 7.07354 17.673 7.63803C17.7926 7.87263 17.8899 8.20893 17.9437 8.86656C17.9988 9.54169 18 10.4151 18 11.7V12.3C18 13.5849 17.9988 14.4583 17.9437 15.1334C17.8899 15.7911 17.7926 16.1274 17.673 16.362C17.3854 16.9265 16.9265 17.3854 16.362 17.673C16.1274 17.7926 15.7911 17.8899 15.1334 17.9437C14.4583 17.9988 13.5849 18 12.3 18H11.7C10.4151 18 9.54169 17.9988 8.86656 17.9437C8.20893 17.8899 7.87263 17.7926 7.63803 17.673C7.07354 17.3854 6.6146 16.9265 6.32698 16.362C6.20745 16.1274 6.11006 15.7911 6.05633 15.1334C6.00117 14.4583 6 13.5849 6 12.3V11.7C6 10.4151 6.00117 9.54169 6.05633 8.86656C6.11006 8.20893 6.20745 7.87263 6.32698 7.63803C6.6146 7.07354 7.07354 6.6146 7.63803 6.32698C7.87263 6.20745 8.20893 6.11006 8.86656 6.05633C9.54169 6.00117 10.4151 6 11.7 6Z"
          fill="white"
        />
        <defs>
          <radialgradient
            id="paint0_radial_1654_4032"
            cx={0}
            cy={0}
            r={1}
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(9 17.25) rotate(-55.3758) scale(19.1397)"
          >
            <stop stopColor="#B13589" />
            <stop offset="0.79309" stopColor="#C62F94" />
            <stop offset={1} stopColor="#8A3AC8" />
          </radialgradient>
          <radialgradient
            id="paint1_radial_1654_4032"
            cx={0}
            cy={0}
            r={1}
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(8.25 23.25) rotate(-65.1363) scale(16.9457)"
          >
            <stop stopColor="#E0E8B7" />
            <stop offset="0.444662" stopColor="#FB8A2E" />
            <stop offset="0.71474" stopColor="#E2425C" />
            <stop offset={1} stopColor="#E2425C" stopOpacity={0} />
          </radialgradient>
          <radialgradient
            id="paint2_radial_1654_4032"
            cx={0}
            cy={0}
            r={1}
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(0.375001 2.25) rotate(-8.1301) scale(29.1682 6.23877)"
          >
            <stop offset="0.156701" stopColor="#406ADC" />
            <stop offset="0.467799" stopColor="#6A45BE" />
            <stop offset={1} stopColor="#6A45BE" stopOpacity={0} />
          </radialgradient>
        </defs>
      </svg>
      <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-center text-[#272832]">
        continuer avec Instagram
      </p>
    </div>
    <div className="flex justify-start items-center w-[295px] h-[50px] absolute left-[22.5px] top-[431.5px] gap-10 p-6 rounded-xl bg-white border-2 border-[#eff4ff]">
      <svg
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
        preserveAspectRatio="none"
      >
        <g clipPath="url(#clip0_1654_4040)">
          <path
            d="M22.7855 12.2535C22.7855 11.5057 22.7249 10.7539 22.5955 10.0183H12.22V14.2542H18.1616C17.915 15.6204 17.1228 16.8289 15.9628 17.5969V20.3453H19.5075C21.5891 18.4295 22.7855 15.6002 22.7855 12.2535Z"
            fill="#4285F4"
          />
          <path
            d="M12.22 23.0008C15.1868 23.0008 17.6887 22.0267 19.5116 20.3453L15.9668 17.5968C14.9806 18.2677 13.7074 18.6477 12.2241 18.6477C9.35431 18.6477 6.92109 16.7116 6.04805 14.1086H2.39014V16.942C4.25749 20.6565 8.06091 23.0008 12.22 23.0008Z"
            fill="#34A853"
          />
          <path
            d="M6.04397 14.1087C5.58319 12.7426 5.58319 11.2632 6.04397 9.89708V7.06372H2.3901C0.829928 10.1719 0.829928 13.8339 2.3901 16.9421L6.04397 14.1087Z"
            fill="#FBBC04"
          />
          <path
            d="M12.22 5.35386C13.7883 5.3296 15.304 5.91972 16.4397 7.00295L19.5803 3.8624C17.5917 1.99505 14.9523 0.968406 12.22 1.00074C8.06091 1.00074 4.25749 3.34504 2.39014 7.06357L6.044 9.89694C6.91301 7.28992 9.35027 5.35386 12.22 5.35386Z"
            fill="#EA4335"
          />
        </g>
        <defs>
          <clippath id="clip0_1654_4040">
            <rect width={22} height={22} fill="white" transform="translate(1 1)" />
          </clippath>
        </defs>
      </svg>
      <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-center text-[#272832]">
        continuer avec Google
      </p>
    </div>
    <div className="flex justify-start items-center w-[295px] h-[50px] absolute left-[22.5px] top-[497.5px] gap-10 p-6 rounded-xl bg-white border-2 border-[#eff4ff]">
      <svg
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
        preserveAspectRatio="none"
      >
        <g clipPath="url(#clip0_1654_4048)">
          <path
            d="M20.976 18.1449C20.6433 18.9135 20.2495 19.6211 19.7932 20.2715C19.1712 21.1583 18.662 21.7721 18.2695 22.113C17.6612 22.6724 17.0093 22.959 16.3113 22.9753C15.8102 22.9753 15.2059 22.8327 14.5025 22.5434C13.7968 22.2555 13.1482 22.113 12.5552 22.113C11.9332 22.113 11.2662 22.2555 10.5527 22.5434C9.83811 22.8327 9.26246 22.9834 8.82234 22.9984C8.15299 23.0269 7.48582 22.7322 6.81986 22.113C6.39482 21.7422 5.86317 21.1067 5.22627 20.2063C4.54294 19.2449 3.98114 18.13 3.54102 16.8589C3.06966 15.486 2.83337 14.1565 2.83337 12.8694C2.83337 11.3951 3.15196 10.1235 3.79007 9.05784C4.29157 8.20191 4.95875 7.52672 5.79377 7.03105C6.6288 6.53539 7.53104 6.2828 8.50267 6.26664C9.03432 6.26664 9.73151 6.4311 10.5979 6.7543C11.4619 7.07858 12.0166 7.24303 12.2598 7.24303C12.4416 7.24303 13.0579 7.05074 14.1026 6.66738C15.0905 6.31186 15.9243 6.16466 16.6074 6.22264C18.4583 6.37202 19.8489 7.10167 20.7737 8.4162C19.1183 9.4192 18.2994 10.824 18.3157 12.6262C18.3307 14.03 18.8399 15.1981 19.8407 16.1256C20.2943 16.5561 20.8008 16.8888 21.3644 17.1251C21.2422 17.4795 21.1132 17.819 20.976 18.1449ZM16.731 1.44037C16.731 2.54062 16.329 3.56792 15.5278 4.51878C14.5609 5.64917 13.3914 6.30236 12.1232 6.19929C12.107 6.06729 12.0977 5.92837 12.0977 5.78239C12.0977 4.72615 12.5575 3.59576 13.374 2.67152C13.7817 2.20356 14.3002 1.81445 14.9289 1.50406C15.5563 1.19829 16.1497 1.0292 16.7079 1.00024C16.7242 1.14733 16.731 1.29443 16.731 1.44036V1.44037Z"
            fill="black"
          />
        </g>
        <defs>
          <clippath id="clip0_1654_4048">
            <rect width={22} height={22} fill="white" transform="translate(1 1)" />
          </clippath>
        </defs>
      </svg>
      <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-center text-[#272832]">
        continuer avec Apple
      </p>
    </div>
    <svg
      width={135}
      height={2}
      viewBox="0 0 135 2"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute left-[-1.5px] top-[274.5px]"
      preserveAspectRatio="xMidYMid meet"
    >
      <line x1="8.74228e-8" y1={1} x2={135} y2="1.00001" stroke="#EFF4FF" strokeWidth={2} />
    </svg>
    <svg
      width={135}
      height={2}
      viewBox="0 0 135 2"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute left-[206.5px] top-[274.5px]"
      preserveAspectRatio="xMidYMid meet"
    >
      <line x1="8.74228e-8" y1={1} x2={135} y2="1.00001" stroke="#EFF4FF" strokeWidth={2} />
    </svg>
    <p className="absolute left-[161px] top-[267px] text-sm font-bold text-center text-black">Ou</p>
    <svg
      width={343}
      height={2}
      viewBox="0 0 343 2"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute left-[-1.5px] top-[79.5px]"
      preserveAspectRatio="xMidYMid meet"
    >
      <line x1="8.74228e-8" y1={1} x2={343} y2="1.00003" stroke="#EFF4FF" strokeWidth={2} />
    </svg>
  </div>
</div>



Parcours inscription Mobile

<div className="w-[375px] h-[667px] relative overflow-hidden bg-white mt-8 mb-8">
  <img
    src="static/img/icons/House1.svg"
    className="w-[343px] h-[175px] absolute left-[15px] top-[221px] rounded-xl object-cover"
  />
  <p className="w-[341px] absolute left-[17px] top-[75px] text-[28px] font-bold text-center mb-4">
    <span className="w-[341px] text-[28px] font-bold text-center text-[#113eb6]">
      Devenir propriétaire devient plus{" "}
    </span>
    <span className="w-[341px] text-[28px] font-bold text-center text-[#3679ff]">accessible.</span>
  </p>
  <p className="w-[312px] absolute left-[31px] top-[139px] text-base text-center text-[#849cd9] mt-3">
    Réalisez votre premier achat immobilier pour seulement 700€ par mois !*
  </p>
  <div className="w-[131px] h-[35px]">
    <div className="w-[131px] h-[35px]">
      <p className="w-3 h-[9.89px] absolute left-[223px] top-[37.84px] text-[9px] font-bold text-left text-[#43434a]">
        By
      </p>
      <img
        src="nexity-logo-1.png"
        className="w-4 h-[15.82px] absolute left-[236.5px] top-[34.38px] object-cover"
      />
      <svg
        width={97}
        height={35}
        viewBox="0 0 97 35"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute left-[121.81px] top-[23.81px]"
        preserveAspectRatio="none"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14.7453 23.1445L14.7407 23.1523C14.0805 24.2619 13.8662 25.08 13.8662 25.6532C13.8662 26.2912 14.0388 26.7946 14.3655 27.2364C14.8307 27.8346 15.285 28.2229 15.7103 28.4659C16.4653 28.8776 17.1606 29.2805 17.7941 29.6749C18.1547 29.8857 18.5359 30.1422 18.8538 30.4538C19.1298 30.7245 19.6851 31.3528 19.6851 32.289C19.6851 33.1924 19.2405 34.0361 18.4037 34.5342C17.7331 34.9334 16.9929 35 16.4661 35C14.4605 35 12.542 33.9342 10.7836 32.4439L10.777 32.4383L10.7704 32.4326C10.006 31.7736 9.36034 31.054 8.85982 30.2758C7.82421 31.5507 7.04593 32.473 6.53465 33.0274C6.11811 33.4933 5.70025 33.9128 5.29206 34.233C5.08526 34.3952 4.83687 34.567 4.55443 34.7055C4.28689 34.8366 3.86403 35 3.34275 35C1.95883 35 1.11059 34.0693 0.685061 33.4017L0.645838 33.3402L0.611212 33.2761C0.237761 32.5844 0 31.8163 0 30.9942C0 30.6626 0.0691356 30.2922 0.122125 30.0308C0.186073 29.7154 0.277136 29.328 0.390847 28.8785C0.618863 27.9773 0.955872 26.7564 1.39802 25.2256C2.26023 22.2136 3.12892 18.5842 4.00234 14.3292C4.86254 10.1385 5.28237 6.40441 5.28237 3.11561C5.28237 2.82873 5.29959 2.51234 5.36008 2.20093C5.41034 1.94226 5.52396 1.5004 5.83869 1.07999C6.53482 0.118923 7.62675 0 8.17117 0C9.01283 0 9.65259 0.387519 10.0607 0.754313C10.4422 1.09721 10.7278 1.51146 10.9462 1.89667C11.4801 2.76068 11.7615 3.71808 11.7615 4.7341C11.7615 8.59658 11.0805 13.2941 9.75071 18.8031C11.3809 16.7253 12.8167 15.037 14.0557 13.7464L14.0606 13.7412L14.0656 13.736C14.666 13.1194 15.2091 12.6043 15.6786 12.2293C15.9111 12.0436 16.1721 11.8543 16.4479 11.7018C16.666 11.5812 17.158 11.3295 17.7867 11.3295C18.8431 11.3295 19.6799 11.824 20.2664 12.4374C20.6926 12.8623 21.2946 13.6144 21.2946 14.6474C21.2946 15.2079 21.0739 15.6394 20.9834 15.8074C20.8632 16.0305 20.719 16.2342 20.5877 16.4044C20.3219 16.7486 19.9674 17.1361 19.5601 17.5498C18.788 18.3338 17.9336 19.1985 16.997 20.1438C16.1995 20.9487 15.4473 21.9401 14.7499 23.1367L14.7453 23.1445ZM18.7772 13.8382C18.4746 13.5145 18.1444 13.3526 17.7867 13.3526C17.4566 13.3526 16.7138 13.946 15.5582 15.1329C13.677 17.0927 11.2794 20.0583 8.36526 24.0298C7.63601 25.0236 6.87442 26.0805 6.08049 27.2003C5.5928 27.8882 5.09291 28.5998 4.58081 29.3353C4.63476 29.1697 4.68829 29.0048 4.74139 28.8404C5.38175 26.8579 5.96006 24.9579 6.47632 23.1403C8.62418 15.5783 9.69811 9.44291 9.69811 4.7341C9.69811 4.25841 9.60156 3.80456 9.40846 3.37256C9.38336 3.31642 9.35663 3.26064 9.32828 3.20523C9.31293 3.17525 9.29711 3.14537 9.28081 3.11561C9.24357 3.04761 9.20384 2.98017 9.16162 2.91329C8.83147 2.31985 8.50132 2.02312 8.17117 2.02312C7.84102 2.02312 7.62092 2.10405 7.51087 2.2659C7.40083 2.40077 7.3458 2.68401 7.3458 3.11561C7.3458 3.3392 7.34395 3.56454 7.34026 3.79164C7.33988 3.81518 7.33948 3.83875 7.33905 3.86234C7.28063 7.12385 6.84268 10.7458 6.02521 14.7283C5.14481 19.0173 4.26442 22.6994 3.38402 25.7746C2.50363 28.8227 2.06343 30.5626 2.06343 30.9942C2.06343 31.4258 2.18723 31.8709 2.43484 32.3295C2.70997 32.7611 3.0126 32.9769 3.34275 32.9769C3.6729 32.9769 4.22315 32.5453 4.99349 31.6821C5.27125 31.3816 5.64405 30.9519 6.11187 30.3931C6.11775 30.3861 6.12366 30.3791 6.12957 30.372C6.24506 30.234 6.36628 30.0881 6.49323 29.9345C6.52507 29.896 6.55726 29.857 6.58981 29.8175C6.93272 29.4014 7.31562 28.931 7.7385 28.4063C7.79778 28.3327 7.85784 28.2581 7.91869 28.1824C8.36578 27.6263 8.85529 27.0125 9.38722 26.341C9.50261 26.1954 9.61999 26.047 9.73938 25.896V26.341C9.73938 27.1098 9.90794 27.8471 10.2451 28.5532C10.6414 29.3832 11.2707 30.1699 12.133 30.9133C13.0888 31.7234 13.9826 32.295 14.8144 32.628C15.1078 32.7455 15.3935 32.8333 15.6714 32.8915C15.6932 32.896 15.7149 32.9004 15.7365 32.9045C15.7575 32.9086 15.7784 32.9125 15.7993 32.9162C16.0268 32.9567 16.2491 32.9769 16.4661 32.9769C17.2365 32.9769 17.6217 32.7476 17.6217 32.289C17.6217 32.0462 17.319 31.7495 16.7138 31.3988C16.6325 31.3481 16.5499 31.2972 16.4661 31.2459C16.3865 31.1972 16.3057 31.1483 16.2238 31.0992C16.0605 31.0012 15.8928 30.9024 15.7206 30.8028C15.3937 30.6135 15.0507 30.421 14.6916 30.2254C13.9763 29.8208 13.316 29.2274 12.7107 28.4451C12.1054 27.6358 11.8028 26.7052 11.8028 25.6532C11.8028 24.6012 12.188 23.4277 12.9583 22.1329C13.7287 20.8112 14.5816 19.6782 15.517 18.7341C16.4524 17.79 17.3053 16.9268 18.0756 16.1445C18.846 15.3622 19.2311 14.8632 19.2311 14.6474C19.2311 14.4046 19.0798 14.1349 18.7772 13.8382ZM16.5849 30.9475C16.5849 30.9475 16.5796 30.9488 16.5676 30.9499C16.5787 30.9479 16.5849 30.9475 16.5849 30.9475Z"
          fill="url(#paint0_linear_482_4718)"
        />
        <path
          d="M25.0427 32.2403C24.6187 32.2403 24.2654 32.1249 23.9828 31.8939C23.7159 31.6476 23.5824 31.3012 23.5824 30.8548V21.9409C23.5824 21.4944 23.7159 21.1557 23.9828 20.9248C24.2654 20.6939 24.6187 20.5784 25.0427 20.5784C25.4666 20.5784 25.8199 20.6939 26.1026 20.9248C26.3852 21.1557 26.5265 21.4944 26.5265 21.9409V30.8548C26.5265 31.3012 26.3852 31.6476 26.1026 31.8939C25.8199 32.1249 25.4666 32.2403 25.0427 32.2403ZM25.0427 18.5232C24.5088 18.5232 24.0849 18.3846 23.7708 18.1075C23.4568 17.815 23.2998 17.4378 23.2998 16.9759C23.2998 16.5141 23.4568 16.1446 23.7708 15.8675C24.0849 15.5904 24.5088 15.4518 25.0427 15.4518C25.5608 15.4518 25.9769 15.5904 26.291 15.8675C26.6207 16.1446 26.7856 16.5141 26.7856 16.9759C26.7856 17.4378 26.6286 17.815 26.3145 18.1075C26.0005 18.3846 25.5765 18.5232 25.0427 18.5232Z"
          fill="url(#paint1_linear_482_4718)"
        />
        <path
          d="M35.6784 30.0927C36.4635 30.1389 36.856 30.4853 36.856 31.1319C36.856 31.5014 36.699 31.7862 36.385 31.9863C36.0866 32.1711 35.6548 32.248 35.0896 32.2173L34.4536 32.1711C31.8157 31.9863 30.4967 30.6007 30.4967 28.0143V22.9801H29.3191C28.8951 22.9801 28.5654 22.8877 28.3299 22.703C28.11 22.5182 28.0001 22.2488 28.0001 21.8947C28.0001 21.5406 28.11 21.2712 28.3299 21.0865C28.5654 20.9017 28.8951 20.8094 29.3191 20.8094H30.4967V18.6848C30.4967 18.2691 30.6302 17.9381 30.8971 17.6918C31.1641 17.4455 31.5252 17.3223 31.9806 17.3223C32.4202 17.3223 32.7735 17.4455 33.0405 17.6918C33.3074 17.9381 33.4409 18.2691 33.4409 18.6848V20.8094H35.4429C35.8668 20.8094 36.1887 20.9017 36.4085 21.0865C36.6441 21.2712 36.7618 21.5406 36.7618 21.8947C36.7618 22.2488 36.6441 22.5182 36.4085 22.703C36.1887 22.8877 35.8668 22.9801 35.4429 22.9801H33.4409V28.2222C33.4409 29.3614 33.9747 29.9695 35.0425 30.0465L35.6784 30.0927Z"
          fill="url(#paint2_linear_482_4718)"
        />
        <path
          d="M45.8721 32.2403C45.4482 32.2403 45.0949 32.1249 44.8122 31.8939C44.5453 31.6476 44.4118 31.3012 44.4118 30.8548V17.0683C44.4118 16.6218 44.5453 16.2831 44.8122 16.0522C45.0949 15.8213 45.4482 15.7058 45.8721 15.7058C46.2961 15.7058 46.6494 15.8213 46.932 16.0522C47.2147 16.2831 47.356 16.6218 47.356 17.0683V30.8548C47.356 31.3012 47.2147 31.6476 46.932 31.8939C46.6494 32.1249 46.2961 32.2403 45.8721 32.2403Z"
          fill="url(#paint3_linear_482_4718)"
        />
        <path
          d="M58.948 29.0073C59.215 29.0073 59.4269 29.1074 59.584 29.3075C59.7567 29.5077 59.843 29.7771 59.843 30.1158C59.843 30.5931 59.5525 30.9933 58.9716 31.3166C58.4377 31.6091 57.8332 31.8478 57.158 32.0325C56.4828 32.2019 55.839 32.2865 55.2266 32.2865C53.3738 32.2865 51.9057 31.7631 50.8222 30.7162C49.7388 29.6693 49.1971 28.2376 49.1971 26.4209C49.1971 25.2663 49.4326 24.2425 49.9037 23.3496C50.3747 22.4566 51.0342 21.7639 51.8821 21.2712C52.7457 20.7786 53.7193 20.5322 54.8027 20.5322C55.839 20.5322 56.7419 20.7555 57.5113 21.2019C58.2807 21.6484 58.8774 22.2796 59.3013 23.0956C59.7253 23.9115 59.9372 24.8737 59.9372 25.9822C59.9372 26.6442 59.6389 26.9752 59.0422 26.9752H52.0941C52.1883 28.0374 52.4945 28.8226 53.0127 29.3306C53.5308 29.8233 54.2845 30.0696 55.2738 30.0696C55.7762 30.0696 56.2159 30.008 56.5927 29.8849C56.9853 29.7617 57.4249 29.5924 57.9117 29.3768C58.3827 29.1305 58.7282 29.0073 58.948 29.0073ZM54.8734 22.5644C54.0726 22.5644 53.4288 22.8107 52.942 23.3034C52.471 23.796 52.1883 24.5042 52.0941 25.4279H57.4171C57.3857 24.4888 57.1501 23.7806 56.7105 23.3034C56.2708 22.8107 55.6585 22.5644 54.8734 22.5644Z"
          fill="url(#paint4_linear_482_4718)"
        />
        <path
          d="M74.1187 20.5322C75.5005 20.5322 76.529 20.9171 77.2042 21.6869C77.8794 22.4566 78.217 23.619 78.217 25.1739V30.8548C78.217 31.2858 78.0835 31.6245 77.8166 31.8709C77.5653 32.1172 77.212 32.2403 76.7567 32.2403C76.3013 32.2403 75.9402 32.1172 75.6732 31.8709C75.4063 31.6245 75.2728 31.2858 75.2728 30.8548V25.3356C75.2728 24.458 75.1001 23.8191 74.7547 23.4189C74.4249 23.0186 73.8989 22.8184 73.1766 22.8184C72.3287 22.8184 71.6457 23.0802 71.1275 23.6036C70.625 24.127 70.3738 24.8275 70.3738 25.705V30.8548C70.3738 31.2858 70.2403 31.6245 69.9734 31.8709C69.7065 32.1172 69.3453 32.2403 68.89 32.2403C68.4346 32.2403 68.0735 32.1172 67.8065 31.8709C67.5553 31.6245 67.4297 31.2858 67.4297 30.8548V21.9178C67.4297 21.5175 67.5632 21.1942 67.8301 20.9479C68.097 20.7016 68.4582 20.5784 68.9135 20.5784C69.3218 20.5784 69.6515 20.7016 69.9028 20.9479C70.1697 21.1788 70.3032 21.4867 70.3032 21.8716V22.4951C70.6957 21.8639 71.2217 21.379 71.8812 21.0403C72.5407 20.7016 73.2865 20.5322 74.1187 20.5322Z"
          fill="url(#paint5_linear_482_4718)"
        />
        <path
          d="M81.7358 32.2403C81.3118 32.2403 80.9585 32.1249 80.6759 31.8939C80.4089 31.6476 80.2755 31.3012 80.2755 30.8548V21.9409C80.2755 21.4944 80.4089 21.1557 80.6759 20.9248C80.9585 20.6939 81.3118 20.5784 81.7358 20.5784C82.1597 20.5784 82.513 20.6939 82.7956 20.9248C83.0783 21.1557 83.2196 21.4944 83.2196 21.9409V30.8548C83.2196 31.3012 83.0783 31.6476 82.7956 31.8939C82.513 32.1249 82.1597 32.2403 81.7358 32.2403ZM81.7358 18.5232C81.2019 18.5232 80.7779 18.3846 80.4639 18.1075C80.1499 17.815 79.9928 17.4378 79.9928 16.9759C79.9928 16.5141 80.1499 16.1446 80.4639 15.8675C80.7779 15.5904 81.2019 15.4518 81.7358 15.4518C82.2539 15.4518 82.67 15.5904 82.9841 15.8675C83.3138 16.1446 83.4787 16.5141 83.4787 16.9759C83.4787 17.4378 83.3217 17.815 83.0076 18.1075C82.6936 18.3846 82.2696 18.5232 81.7358 18.5232Z"
          fill="url(#paint6_linear_482_4718)"
        />
        <path
          d="M95.4926 15.7058C95.9323 15.7058 96.2934 15.829 96.5761 16.0753C96.8587 16.3216 97 16.6449 97 17.0452V30.8548C97 31.2704 96.8665 31.6014 96.5996 31.8477C96.3327 32.0941 95.9794 32.2172 95.5397 32.2172C95.1001 32.2172 94.7468 32.0941 94.4798 31.8477C94.2129 31.6014 94.0794 31.2704 94.0794 30.8548V30.2774C93.734 30.9086 93.2315 31.4013 92.572 31.7554C91.9283 32.1095 91.1903 32.2865 90.3581 32.2865C89.3688 32.2865 88.4817 32.0402 87.6966 31.5475C86.9272 31.0549 86.3227 30.3621 85.883 29.4692C85.459 28.5609 85.2471 27.5217 85.2471 26.3516C85.2471 25.1816 85.459 24.1578 85.883 23.2803C86.3227 22.4027 86.9272 21.7254 87.6966 21.2481C88.466 20.7709 89.3531 20.5322 90.3581 20.5322C91.1903 20.5322 91.9283 20.7016 92.572 21.0403C93.2158 21.379 93.7104 21.8562 94.0559 22.472V16.999C94.0559 16.6141 94.1815 16.3062 94.4327 16.0753C94.6997 15.829 95.053 15.7058 95.4926 15.7058ZM91.1353 30.0465C92.0774 30.0465 92.7997 29.7309 93.3022 29.0997C93.8204 28.4685 94.0794 27.5679 94.0794 26.3978C94.0794 25.2278 93.8204 24.3349 93.3022 23.719C92.7997 23.0878 92.0853 22.7722 91.1589 22.7722C90.2168 22.7722 89.4866 23.0801 88.9684 23.6959C88.4503 24.3118 88.1912 25.197 88.1912 26.3516C88.1912 27.5217 88.4503 28.43 88.9684 29.0766C89.4866 29.7232 90.2089 30.0465 91.1353 30.0465Z"
          fill="url(#paint7_linear_482_4718)"
        />
        <defs>
          <lineargradient
            id="paint0_linear_482_4718"
            x1="92.364"
            y1="-1.60846"
            x2="73.9333"
            y2="61.008"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#C399DB" />
            <stop offset={1} stopColor="#5882F7" />
          </lineargradient>
          <lineargradient
            id="paint1_linear_482_4718"
            x1="92.364"
            y1="-1.60846"
            x2="73.9333"
            y2="61.008"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#C399DB" />
            <stop offset={1} stopColor="#5882F7" />
          </lineargradient>
          <lineargradient
            id="paint2_linear_482_4718"
            x1="92.364"
            y1="-1.60846"
            x2="73.9333"
            y2="61.008"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#C399DB" />
            <stop offset={1} stopColor="#5882F7" />
          </lineargradient>
          <lineargradient
            id="paint3_linear_482_4718"
            x1="92.364"
            y1="-1.60846"
            x2="73.9333"
            y2="61.008"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#C399DB" />
            <stop offset={1} stopColor="#5882F7" />
          </lineargradient>
          <lineargradient
            id="paint4_linear_482_4718"
            x1="92.364"
            y1="-1.60846"
            x2="73.9333"
            y2="61.008"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#C399DB" />
            <stop offset={1} stopColor="#5882F7" />
          </lineargradient>
          <lineargradient
            id="paint5_linear_482_4718"
            x1="92.364"
            y1="-1.60846"
            x2="73.9333"
            y2="61.008"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#C399DB" />
            <stop offset={1} stopColor="#5882F7" />
          </lineargradient>
          <lineargradient
            id="paint6_linear_482_4718"
            x1="92.364"
            y1="-1.60846"
            x2="73.9333"
            y2="61.008"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#C399DB" />
            <stop offset={1} stopColor="#5882F7" />
          </lineargradient>
          <lineargradient
            id="paint7_linear_482_4718"
            x1="92.364"
            y1="-1.60846"
            x2="73.9333"
            y2="61.008"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#C399DB" />
            <stop offset={1} stopColor="#5882F7" />
          </lineargradient>
        </defs>
      </svg>
    </div>
  </div>
  <p className="w-[274px] absolute left-[85px] top-[535px] text-lg font-bold text-left text-[#1a2e6c]">
    <span className="w-[274px] text-lg font-bold text-left text-[#1a2e6c]">
      Des logements dans toute{" "}
    </span>
    <br />
    <span className="w-[274px] text-lg font-bold text-left text-[#1a2e6c]">la France</span>
  </p>
  <p className="w-[274px] absolute left-[85px] top-[585px] text-sm font-medium text-left text-[#849cd9]">
    Plus de 3 000 logements neufs disponibles.
  </p>
  <p className="w-[252px] absolute left-[61px] top-[475px] text-sm font-medium text-center text-[#849cd9]">
    Construire son projet immobilier avec Kit le nid c’est bénéficier :
  </p>
  <p className="w-[343px] absolute left-4 top-[421px] text-lg font-bold text-center text-[#1a2e6c]">
    <span className="w-[343px] text-lg font-bold text-center text-[#1a2e6c]">
      L’achat dans une résidence
    </span>
    <br />
    <span className="w-[343px] text-lg font-bold text-center text-[#1a2e6c]">
      neuve avec Kit le nid
    </span>
  </p>
  <div className="w-[291px] h-[55px] absolute left-[41px] top-[194px]">
    <div className="w-[291px] h-[55px] absolute left-[-1.5px] top-[-1.5px] rounded-[70px] bg-white border-2 border-[#eff4ff]" />
    <p className="w-[223.98px] absolute left-[13.57px] top-4 text-lg font-bold text-left text-[#0e215c]">
      Localisation
    </p>
    <div
      className="w-[39px] h-[39px] absolute left-[243px] top-[7px] rounded-[42px]"
      style={{ background: "linear-gradient(to bottom, #81a3f9 -0.06%, #3462d8 108.09%)" }}
    />
    <svg
      width={23}
      height={23}
      viewBox="0 0 23 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-[23px] h-[23px] absolute left-[251px] top-[15px]"
      preserveAspectRatio="xMidYMid meet"
    >
      <path
        d="M9.58333 16.2917C13.2882 16.2917 16.2917 13.2882 16.2917 9.58333C16.2917 5.87842 13.2882 2.875 9.58333 2.875C5.87842 2.875 2.875 5.87842 2.875 9.58333C2.875 13.2882 5.87842 16.2917 9.58333 16.2917Z"
        stroke="white"
       strokeWidth={2}
       strokeLinecap="round"
       strokeLinejoin="round"
      />
      <path
        d="M14.375 14.375L20.125 20.125"
        stroke="white"
       strokeWidth={2}
       strokeLinecap="round"
       strokeLinejoin="round"
      />
    </svg>
  </div>
  <svg
    width={53}
    height={53}
    viewBox="0 0 53 53"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-[53px] h-[53px] absolute left-[15px] top-[551px]"
    preserveAspectRatio="none"
  >
    <circle cx="26.5" cy="26.5" r="26.5" fill="#DCE6FF" />
    <path
      d="M33.6585 24.701L26.6585 18.576C26.2815 18.2461 25.7185 18.2461 25.3415 18.576L18.3415 24.701C18.1245 24.8909 18 25.1653 18 25.4536V33.9998C18 34.5521 18.4477 34.9998 19 34.9998H23C23.5523 34.9998 24 34.5521 24 33.9998V29.9998C24 29.4476 24.4477 28.9998 25 28.9998H27C27.5523 28.9998 28 29.4476 28 29.9998V33.9998C28 34.5521 28.4477 34.9998 29 34.9998H33C33.5523 34.9998 34 34.5521 34 33.9998V25.4536C34 25.1653 33.8755 24.8909 33.6585 24.701Z"
      stroke="#6A7CA8"
     strokeWidth={2}
     strokeLinecap="round"
     strokeLinejoin="round"
    />
  </svg>
  <div className="w-[375px] h-[70px] absolute left-[-1px] top-[598px] overflow-hidden bg-[#fcfcfd]">
    <svg
      width={375}
      height={1}
      viewBox="0 0 375 1"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute left-[-1px] top-0"
      preserveAspectRatio="xMidYMid meet"
    >
      <line y1="0.5" x2={375} y2="0.5" stroke="#EAEFFA" />
    </svg>
    <div className="w-[62px] h-[49px]">
      <svg
        width={32}
        height={32}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8 absolute left-[124.5px] top-[10.5px]"
        preserveAspectRatio="xMidYMid meet"
      >
        <path
          d="M13.3333 22.6667C18.488 22.6667 22.6667 18.488 22.6667 13.3333C22.6667 8.17868 18.488 4 13.3333 4C8.17868 4 4 8.17868 4 13.3333C4 18.488 8.17868 22.6667 13.3333 22.6667Z"
          stroke="#272832"
         strokeWidth={2}
         strokeLinecap="round"
         strokeLinejoin="round"
        />
        <path
          d="M20 20L28 28"
          stroke="#272832"
         strokeWidth={2}
         strokeLinecap="round"
         strokeLinejoin="round"
        />
      </svg>
      <p className="absolute left-[110px] top-[47px] text-xs font-bold text-left text-[#272832]">
        Recherche
      </p>
    </div>
    <div className="w-[62px] h-[49px]">
      <svg
        width={32}
        height={32}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8 absolute left-[227.5px] top-[10.5px]"
        preserveAspectRatio="xMidYMid meet"
      >
        <path
          d="M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z"
          stroke="#272832"
         strokeWidth={2}
         strokeLinecap="round"
         strokeLinejoin="round"
        />
        <path
          d="M22.9552 25.7762C21.2463 23.8676 18.7632 22.6665 15.9997 22.6665C13.2362 22.6665 10.7531 23.8676 9.04419 25.7762"
          stroke="#272832"
         strokeWidth={2}
         strokeLinecap="round"
         strokeLinejoin="round"
        />
        <path
          d="M16 18.6665C18.2091 18.6665 20 16.8756 20 14.6665C20 12.4574 18.2091 10.6665 16 10.6665C13.7909 10.6665 12 12.4574 12 14.6665C12 16.8756 13.7909 18.6665 16 18.6665Z"
          stroke="#272832"
         strokeWidth={2}
         strokeLinecap="round"
         strokeLinejoin="round"
        />
      </svg>
      <p className="absolute left-[213px] top-[47px] text-xs font-bold text-left text-[#272832]">
        Connexion
      </p>
    </div>
    <div className="w-[33px] h-[49px]">
      <p className="absolute left-[316px] top-[47px] text-xs font-bold text-left text-[#3679ff]">
        Menu
      </p>
      <svg
        width={32}
        height={32}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8 absolute left-[316.5px] top-[10.5px]"
        preserveAspectRatio="none"
      >
        <path
          d="M24 24L8 8"
          stroke="#3679FF"
         strokeWidth={2}
         strokeLinecap="round"
         strokeLinejoin="round"
        />
        <path
          d="M24 8L8 24"
          stroke="#3679FF"
         strokeWidth={2}
         strokeLinecap="round"
         strokeLinejoin="round"
        />
      </svg>
    </div>
    <div className="w-[43px] h-[49px]">
      <svg
        width={32}
        height={32}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8 absolute left-[30.5px] top-[10.5px]"
        preserveAspectRatio="xMidYMid meet"
      >
        <path
          d="M26.2113 12.935L16.8779 4.76837C16.3752 4.32851 15.6246 4.32851 15.1219 4.76837L5.78858 12.935C5.49923 13.1882 5.33325 13.554 5.33325 13.9385V25.3335C5.33325 26.0698 5.93021 26.6668 6.66659 26.6668H11.9999C12.7363 26.6668 13.3333 26.0698 13.3333 25.3335V20.0001C13.3333 19.2637 13.9302 18.6668 14.6666 18.6668H17.3333C18.0696 18.6668 18.6666 19.2637 18.6666 20.0001V25.3335C18.6666 26.0698 19.2635 26.6668 19.9999 26.6668H25.3333C26.0696 26.6668 26.6666 26.0698 26.6666 25.3335V13.9385C26.6666 13.554 26.5006 13.1882 26.2113 12.935Z"
          stroke="#272832"
         strokeWidth={2}
         strokeLinecap="round"
         strokeLinejoin="round"
        />
      </svg>
      <p className="absolute left-[26px] top-[47px] text-xs font-bold text-left text-[#272832]">
        Acceuil
      </p>
    </div>
  </div>
  <svg
    width={375}
    height={667}
    viewBox="0 0 375 667"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="absolute left-[-1px] top-[-1px] opacity-30"
    preserveAspectRatio="none"
  >
    <path
      opacity="0.3"
      d="M0 0H375V599.5H307.5C300.873 599.5 295.5 604.873 295.5 611.5V655C295.5 661.627 290.127 667 283.5 667H0V0Z"
      fill="#051F52"
    />
  </svg>
  <div className="flex flex-col justify-start items-start absolute left-[76px] top-[427px] overflow-hidden gap-4 p-6 rounded-xl bg-white border border-[#eaeffa]">
    <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-[#43434a]">
      <span className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-[#43434a]">
        Qui sommes-nous ?
      </span>
      <br />
      <span className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-[#43434a]">
        Blog
      </span>
    </p>
    <div
      className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2.5 px-10 py-3 rounded-xl"
      style={{ background: "linear-gradient(to bottom, #81a3f9 -0.06%, #3462d8 108.09%)" }}
    >
      <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-white">
        Connexion/ inscription
      </p>
    </div>
  </div>
</div>;

222222222222222222

<div className="w-[375px] h-[667px] relative overflow-hidden bg-white mb-8">
  <img
    src="rectangle-256.png"
    className="w-[343px] h-[175px] absolute left-[15px] top-[221px] rounded-xl object-cover"
  />
  <p className="w-[341px] absolute left-[17px] top-[75px] text-[28px] font-bold text-center">
    <span className="w-[341px] text-[28px] font-bold text-center text-[#113eb6]">
      Devenir propriétaire devient plus{" "}
    </span>
    <span className="w-[341px] text-[28px] font-bold text-center text-[#3679ff]">accessible.</span>
  </p>
  <p className="w-[312px] absolute left-[31px] top-[139px] text-base text-center text-[#849cd9]">
    Réalisez votre premier achat immobilier pour seulement 700€ par mois !*
  </p>
  <div className="w-[131px] h-[35px]">
    <div className="w-[131px] h-[35px]">
      <p className="w-3 h-[9.89px] absolute left-[223px] top-[37.84px] text-[9px] font-bold text-left text-[#43434a]">
        By
      </p>
      <img
        src="nexity-logo-1.png"
        className="w-4 h-[15.82px] absolute left-[236.5px] top-[34.38px] object-cover"
      />
      <svg
        width={97}
        height={35}
        viewBox="0 0 97 35"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute left-[121.81px] top-[23.81px]"
        preserveAspectRatio="none"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14.7453 23.1445L14.7407 23.1523C14.0805 24.2619 13.8662 25.08 13.8662 25.6532C13.8662 26.2912 14.0388 26.7946 14.3655 27.2364C14.8307 27.8346 15.285 28.2229 15.7103 28.4659C16.4653 28.8776 17.1606 29.2805 17.7941 29.6749C18.1547 29.8857 18.5359 30.1422 18.8538 30.4538C19.1298 30.7245 19.6851 31.3528 19.6851 32.289C19.6851 33.1924 19.2405 34.0361 18.4037 34.5342C17.7331 34.9334 16.9929 35 16.4661 35C14.4605 35 12.542 33.9342 10.7836 32.4439L10.777 32.4383L10.7704 32.4326C10.006 31.7736 9.36034 31.054 8.85982 30.2758C7.82421 31.5507 7.04593 32.473 6.53465 33.0274C6.11811 33.4933 5.70025 33.9128 5.29206 34.233C5.08526 34.3952 4.83687 34.567 4.55443 34.7055C4.28689 34.8366 3.86403 35 3.34275 35C1.95883 35 1.11059 34.0693 0.685061 33.4017L0.645838 33.3402L0.611212 33.2761C0.237761 32.5844 0 31.8163 0 30.9942C0 30.6626 0.0691356 30.2922 0.122125 30.0308C0.186073 29.7154 0.277136 29.328 0.390847 28.8785C0.618863 27.9773 0.955872 26.7564 1.39802 25.2256C2.26023 22.2136 3.12892 18.5842 4.00234 14.3292C4.86254 10.1385 5.28237 6.40441 5.28237 3.11561C5.28237 2.82873 5.29959 2.51234 5.36008 2.20093C5.41034 1.94226 5.52396 1.5004 5.83869 1.07999C6.53482 0.118923 7.62675 0 8.17117 0C9.01283 0 9.65259 0.387519 10.0607 0.754313C10.4422 1.09721 10.7278 1.51146 10.9462 1.89667C11.4801 2.76068 11.7615 3.71808 11.7615 4.7341C11.7615 8.59658 11.0805 13.2941 9.75071 18.8031C11.3809 16.7253 12.8167 15.037 14.0557 13.7464L14.0606 13.7412L14.0656 13.736C14.666 13.1194 15.2091 12.6043 15.6786 12.2293C15.9111 12.0436 16.1721 11.8543 16.4479 11.7018C16.666 11.5812 17.158 11.3295 17.7867 11.3295C18.8431 11.3295 19.6799 11.824 20.2664 12.4374C20.6926 12.8623 21.2946 13.6144 21.2946 14.6474C21.2946 15.2079 21.0739 15.6394 20.9834 15.8074C20.8632 16.0305 20.719 16.2342 20.5877 16.4044C20.3219 16.7486 19.9674 17.1361 19.5601 17.5498C18.788 18.3338 17.9336 19.1985 16.997 20.1438C16.1995 20.9487 15.4473 21.9401 14.7499 23.1367L14.7453 23.1445ZM18.7772 13.8382C18.4746 13.5145 18.1444 13.3526 17.7867 13.3526C17.4566 13.3526 16.7138 13.946 15.5582 15.1329C13.677 17.0927 11.2794 20.0583 8.36526 24.0298C7.63601 25.0236 6.87442 26.0805 6.08049 27.2003C5.5928 27.8882 5.09291 28.5998 4.58081 29.3353C4.63476 29.1697 4.68829 29.0048 4.74139 28.8404C5.38175 26.8579 5.96006 24.9579 6.47632 23.1403C8.62418 15.5783 9.69811 9.44291 9.69811 4.7341C9.69811 4.25841 9.60156 3.80456 9.40846 3.37256C9.38336 3.31642 9.35663 3.26064 9.32828 3.20523C9.31293 3.17525 9.29711 3.14537 9.28081 3.11561C9.24357 3.04761 9.20384 2.98017 9.16162 2.91329C8.83147 2.31985 8.50132 2.02312 8.17117 2.02312C7.84102 2.02312 7.62092 2.10405 7.51087 2.2659C7.40083 2.40077 7.3458 2.68401 7.3458 3.11561C7.3458 3.3392 7.34395 3.56454 7.34026 3.79164C7.33988 3.81518 7.33948 3.83875 7.33905 3.86234C7.28063 7.12385 6.84268 10.7458 6.02521 14.7283C5.14481 19.0173 4.26442 22.6994 3.38402 25.7746C2.50363 28.8227 2.06343 30.5626 2.06343 30.9942C2.06343 31.4258 2.18723 31.8709 2.43484 32.3295C2.70997 32.7611 3.0126 32.9769 3.34275 32.9769C3.6729 32.9769 4.22315 32.5453 4.99349 31.6821C5.27125 31.3816 5.64405 30.9519 6.11187 30.3931C6.11775 30.3861 6.12366 30.3791 6.12957 30.372C6.24506 30.234 6.36628 30.0881 6.49323 29.9345C6.52507 29.896 6.55726 29.857 6.58981 29.8175C6.93272 29.4014 7.31562 28.931 7.7385 28.4063C7.79778 28.3327 7.85784 28.2581 7.91869 28.1824C8.36578 27.6263 8.85529 27.0125 9.38722 26.341C9.50261 26.1954 9.61999 26.047 9.73938 25.896V26.341C9.73938 27.1098 9.90794 27.8471 10.2451 28.5532C10.6414 29.3832 11.2707 30.1699 12.133 30.9133C13.0888 31.7234 13.9826 32.295 14.8144 32.628C15.1078 32.7455 15.3935 32.8333 15.6714 32.8915C15.6932 32.896 15.7149 32.9004 15.7365 32.9045C15.7575 32.9086 15.7784 32.9125 15.7993 32.9162C16.0268 32.9567 16.2491 32.9769 16.4661 32.9769C17.2365 32.9769 17.6217 32.7476 17.6217 32.289C17.6217 32.0462 17.319 31.7495 16.7138 31.3988C16.6325 31.3481 16.5499 31.2972 16.4661 31.2459C16.3865 31.1972 16.3057 31.1483 16.2238 31.0992C16.0605 31.0012 15.8928 30.9024 15.7206 30.8028C15.3937 30.6135 15.0507 30.421 14.6916 30.2254C13.9763 29.8208 13.316 29.2274 12.7107 28.4451C12.1054 27.6358 11.8028 26.7052 11.8028 25.6532C11.8028 24.6012 12.188 23.4277 12.9583 22.1329C13.7287 20.8112 14.5816 19.6782 15.517 18.7341C16.4524 17.79 17.3053 16.9268 18.0756 16.1445C18.846 15.3622 19.2311 14.8632 19.2311 14.6474C19.2311 14.4046 19.0798 14.1349 18.7772 13.8382ZM16.5849 30.9475C16.5849 30.9475 16.5796 30.9488 16.5676 30.9499C16.5787 30.9479 16.5849 30.9475 16.5849 30.9475Z"
          fill="url(#paint0_linear_499_3916)"
        />
        <path
          d="M25.0427 32.2403C24.6187 32.2403 24.2654 32.1249 23.9828 31.8939C23.7159 31.6476 23.5824 31.3012 23.5824 30.8548V21.9409C23.5824 21.4944 23.7159 21.1557 23.9828 20.9248C24.2654 20.6939 24.6187 20.5784 25.0427 20.5784C25.4666 20.5784 25.8199 20.6939 26.1026 20.9248C26.3852 21.1557 26.5265 21.4944 26.5265 21.9409V30.8548C26.5265 31.3012 26.3852 31.6476 26.1026 31.8939C25.8199 32.1249 25.4666 32.2403 25.0427 32.2403ZM25.0427 18.5232C24.5088 18.5232 24.0849 18.3846 23.7708 18.1075C23.4568 17.815 23.2998 17.4378 23.2998 16.9759C23.2998 16.5141 23.4568 16.1446 23.7708 15.8675C24.0849 15.5904 24.5088 15.4518 25.0427 15.4518C25.5608 15.4518 25.9769 15.5904 26.291 15.8675C26.6207 16.1446 26.7856 16.5141 26.7856 16.9759C26.7856 17.4378 26.6286 17.815 26.3145 18.1075C26.0005 18.3846 25.5765 18.5232 25.0427 18.5232Z"
          fill="url(#paint1_linear_499_3916)"
        />
        <path
          d="M35.6784 30.0927C36.4635 30.1389 36.856 30.4853 36.856 31.1319C36.856 31.5014 36.699 31.7862 36.385 31.9863C36.0866 32.1711 35.6548 32.248 35.0896 32.2173L34.4536 32.1711C31.8157 31.9863 30.4967 30.6007 30.4967 28.0143V22.9801H29.3191C28.8951 22.9801 28.5654 22.8877 28.3299 22.703C28.11 22.5182 28.0001 22.2488 28.0001 21.8947C28.0001 21.5406 28.11 21.2712 28.3299 21.0865C28.5654 20.9017 28.8951 20.8094 29.3191 20.8094H30.4967V18.6848C30.4967 18.2691 30.6302 17.9381 30.8971 17.6918C31.1641 17.4455 31.5252 17.3223 31.9806 17.3223C32.4202 17.3223 32.7735 17.4455 33.0405 17.6918C33.3074 17.9381 33.4409 18.2691 33.4409 18.6848V20.8094H35.4429C35.8668 20.8094 36.1887 20.9017 36.4085 21.0865C36.6441 21.2712 36.7618 21.5406 36.7618 21.8947C36.7618 22.2488 36.6441 22.5182 36.4085 22.703C36.1887 22.8877 35.8668 22.9801 35.4429 22.9801H33.4409V28.2222C33.4409 29.3614 33.9747 29.9695 35.0425 30.0465L35.6784 30.0927Z"
          fill="url(#paint2_linear_499_3916)"
        />
        <path
          d="M45.8721 32.2403C45.4482 32.2403 45.0949 32.1249 44.8122 31.8939C44.5453 31.6476 44.4118 31.3012 44.4118 30.8548V17.0683C44.4118 16.6218 44.5453 16.2831 44.8122 16.0522C45.0949 15.8213 45.4482 15.7058 45.8721 15.7058C46.2961 15.7058 46.6494 15.8213 46.932 16.0522C47.2147 16.2831 47.356 16.6218 47.356 17.0683V30.8548C47.356 31.3012 47.2147 31.6476 46.932 31.8939C46.6494 32.1249 46.2961 32.2403 45.8721 32.2403Z"
          fill="url(#paint3_linear_499_3916)"
        />
        <path
          d="M58.948 29.0073C59.215 29.0073 59.4269 29.1074 59.584 29.3075C59.7567 29.5077 59.843 29.7771 59.843 30.1158C59.843 30.5931 59.5525 30.9933 58.9716 31.3166C58.4377 31.6091 57.8332 31.8478 57.158 32.0325C56.4828 32.2019 55.839 32.2865 55.2266 32.2865C53.3738 32.2865 51.9057 31.7631 50.8222 30.7162C49.7388 29.6693 49.1971 28.2376 49.1971 26.4209C49.1971 25.2663 49.4326 24.2425 49.9037 23.3496C50.3747 22.4566 51.0342 21.7639 51.8821 21.2712C52.7457 20.7786 53.7193 20.5322 54.8027 20.5322C55.839 20.5322 56.7419 20.7555 57.5113 21.2019C58.2807 21.6484 58.8774 22.2796 59.3013 23.0956C59.7253 23.9115 59.9372 24.8737 59.9372 25.9822C59.9372 26.6442 59.6389 26.9752 59.0422 26.9752H52.0941C52.1883 28.0374 52.4945 28.8226 53.0127 29.3306C53.5308 29.8233 54.2845 30.0696 55.2738 30.0696C55.7762 30.0696 56.2159 30.008 56.5927 29.8849C56.9853 29.7617 57.4249 29.5924 57.9117 29.3768C58.3827 29.1305 58.7282 29.0073 58.948 29.0073ZM54.8734 22.5644C54.0726 22.5644 53.4288 22.8107 52.942 23.3034C52.471 23.796 52.1883 24.5042 52.0941 25.4279H57.4171C57.3857 24.4888 57.1501 23.7806 56.7105 23.3034C56.2708 22.8107 55.6585 22.5644 54.8734 22.5644Z"
          fill="url(#paint4_linear_499_3916)"
        />
        <path
          d="M74.1187 20.5322C75.5005 20.5322 76.529 20.9171 77.2042 21.6869C77.8794 22.4566 78.217 23.619 78.217 25.1739V30.8548C78.217 31.2858 78.0835 31.6245 77.8166 31.8709C77.5653 32.1172 77.212 32.2403 76.7567 32.2403C76.3013 32.2403 75.9402 32.1172 75.6732 31.8709C75.4063 31.6245 75.2728 31.2858 75.2728 30.8548V25.3356C75.2728 24.458 75.1001 23.8191 74.7547 23.4189C74.4249 23.0186 73.8989 22.8184 73.1766 22.8184C72.3287 22.8184 71.6457 23.0802 71.1275 23.6036C70.625 24.127 70.3738 24.8275 70.3738 25.705V30.8548C70.3738 31.2858 70.2403 31.6245 69.9734 31.8709C69.7065 32.1172 69.3453 32.2403 68.89 32.2403C68.4346 32.2403 68.0735 32.1172 67.8065 31.8709C67.5553 31.6245 67.4297 31.2858 67.4297 30.8548V21.9178C67.4297 21.5175 67.5632 21.1942 67.8301 20.9479C68.097 20.7016 68.4582 20.5784 68.9135 20.5784C69.3218 20.5784 69.6515 20.7016 69.9028 20.9479C70.1697 21.1788 70.3032 21.4867 70.3032 21.8716V22.4951C70.6957 21.8639 71.2217 21.379 71.8812 21.0403C72.5407 20.7016 73.2865 20.5322 74.1187 20.5322Z"
          fill="url(#paint5_linear_499_3916)"
        />
        <path
          d="M81.7358 32.2403C81.3118 32.2403 80.9585 32.1249 80.6759 31.8939C80.4089 31.6476 80.2755 31.3012 80.2755 30.8548V21.9409C80.2755 21.4944 80.4089 21.1557 80.6759 20.9248C80.9585 20.6939 81.3118 20.5784 81.7358 20.5784C82.1597 20.5784 82.513 20.6939 82.7956 20.9248C83.0783 21.1557 83.2196 21.4944 83.2196 21.9409V30.8548C83.2196 31.3012 83.0783 31.6476 82.7956 31.8939C82.513 32.1249 82.1597 32.2403 81.7358 32.2403ZM81.7358 18.5232C81.2019 18.5232 80.7779 18.3846 80.4639 18.1075C80.1499 17.815 79.9928 17.4378 79.9928 16.9759C79.9928 16.5141 80.1499 16.1446 80.4639 15.8675C80.7779 15.5904 81.2019 15.4518 81.7358 15.4518C82.2539 15.4518 82.67 15.5904 82.9841 15.8675C83.3138 16.1446 83.4787 16.5141 83.4787 16.9759C83.4787 17.4378 83.3217 17.815 83.0076 18.1075C82.6936 18.3846 82.2696 18.5232 81.7358 18.5232Z"
          fill="url(#paint6_linear_499_3916)"
        />
        <path
          d="M95.4926 15.7058C95.9323 15.7058 96.2934 15.829 96.5761 16.0753C96.8587 16.3216 97 16.6449 97 17.0452V30.8548C97 31.2704 96.8665 31.6014 96.5996 31.8477C96.3327 32.0941 95.9794 32.2172 95.5397 32.2172C95.1001 32.2172 94.7468 32.0941 94.4798 31.8477C94.2129 31.6014 94.0794 31.2704 94.0794 30.8548V30.2774C93.734 30.9086 93.2315 31.4013 92.572 31.7554C91.9283 32.1095 91.1903 32.2865 90.3581 32.2865C89.3688 32.2865 88.4817 32.0402 87.6966 31.5475C86.9272 31.0549 86.3227 30.3621 85.883 29.4692C85.459 28.5609 85.2471 27.5217 85.2471 26.3516C85.2471 25.1816 85.459 24.1578 85.883 23.2803C86.3227 22.4027 86.9272 21.7254 87.6966 21.2481C88.466 20.7709 89.3531 20.5322 90.3581 20.5322C91.1903 20.5322 91.9283 20.7016 92.572 21.0403C93.2158 21.379 93.7104 21.8562 94.0559 22.472V16.999C94.0559 16.6141 94.1815 16.3062 94.4327 16.0753C94.6997 15.829 95.053 15.7058 95.4926 15.7058ZM91.1353 30.0465C92.0774 30.0465 92.7997 29.7309 93.3022 29.0997C93.8204 28.4685 94.0794 27.5679 94.0794 26.3978C94.0794 25.2278 93.8204 24.3349 93.3022 23.719C92.7997 23.0878 92.0853 22.7722 91.1589 22.7722C90.2168 22.7722 89.4866 23.0801 88.9684 23.6959C88.4503 24.3118 88.1912 25.197 88.1912 26.3516C88.1912 27.5217 88.4503 28.43 88.9684 29.0766C89.4866 29.7232 90.2089 30.0465 91.1353 30.0465Z"
          fill="url(#paint7_linear_499_3916)"
        />
        <defs>
          <lineargradient
            id="paint0_linear_499_3916"
            x1="92.364"
            y1="-1.60846"
            x2="73.9333"
            y2="61.008"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#C399DB" />
            <stop offset={1} stopColor="#5882F7" />
          </lineargradient>
          <lineargradient
            id="paint1_linear_499_3916"
            x1="92.364"
            y1="-1.60846"
            x2="73.9333"
            y2="61.008"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#C399DB" />
            <stop offset={1} stopColor="#5882F7" />
          </lineargradient>
          <lineargradient
            id="paint2_linear_499_3916"
            x1="92.364"
            y1="-1.60846"
            x2="73.9333"
            y2="61.008"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#C399DB" />
            <stop offset={1} stopColor="#5882F7" />
          </lineargradient>
          <lineargradient
            id="paint3_linear_499_3916"
            x1="92.364"
            y1="-1.60846"
            x2="73.9333"
            y2="61.008"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#C399DB" />
            <stop offset={1} stopColor="#5882F7" />
          </lineargradient>
          <lineargradient
            id="paint4_linear_499_3916"
            x1="92.364"
            y1="-1.60846"
            x2="73.9333"
            y2="61.008"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#C399DB" />
            <stop offset={1} stopColor="#5882F7" />
          </lineargradient>
          <lineargradient
            id="paint5_linear_499_3916"
            x1="92.364"
            y1="-1.60846"
            x2="73.9333"
            y2="61.008"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#C399DB" />
            <stop offset={1} stopColor="#5882F7" />
          </lineargradient>
          <lineargradient
            id="paint6_linear_499_3916"
            x1="92.364"
            y1="-1.60846"
            x2="73.9333"
            y2="61.008"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#C399DB" />
            <stop offset={1} stopColor="#5882F7" />
          </lineargradient>
          <lineargradient
            id="paint7_linear_499_3916"
            x1="92.364"
            y1="-1.60846"
            x2="73.9333"
            y2="61.008"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#C399DB" />
            <stop offset={1} stopColor="#5882F7" />
          </lineargradient>
        </defs>
      </svg>
    </div>
  </div>
  <p className="w-[274px] absolute left-[85px] top-[535px] text-lg font-bold text-left text-[#1a2e6c]">
    <span className="w-[274px] text-lg font-bold text-left text-[#1a2e6c]">
      Des logements dans toute{" "}
    </span>
    <br />
    <span className="w-[274px] text-lg font-bold text-left text-[#1a2e6c]">la France</span>
  </p>
  <p className="w-[274px] absolute left-[85px] top-[585px] text-sm font-medium text-left text-[#849cd9]">
    Plus de 3 000 logements neufs disponibles.
  </p>
  <p className="w-[252px] absolute left-[61px] top-[475px] text-sm font-medium text-center text-[#849cd9]">
    Construire son projet immobilier avec Kit le nid c’est bénéficier :
  </p>
  <p className="w-[343px] absolute left-4 top-[421px] text-lg font-bold text-center text-[#1a2e6c]">
    <span className="w-[343px] text-lg font-bold text-center text-[#1a2e6c]">
      L’achat dans une résidence
    </span>
    <br />
    <span className="w-[343px] text-lg font-bold text-center text-[#1a2e6c]">
      neuve avec Kit le nid
    </span>
  </p>
  <div className="w-[291px] h-[55px] absolute left-[41px] top-[194px]">
    <div className="w-[291px] h-[55px] absolute left-[-1.5px] top-[-1.5px] rounded-[70px] bg-white border-2 border-[#eff4ff]" />
    <p className="w-[223.98px] absolute left-[13.57px] top-4 text-lg font-bold text-left text-[#0e215c]">
      Localisation
    </p>
    <div
      className="w-[39px] h-[39px] absolute left-[243px] top-[7px] rounded-[42px]"
      style={{ background: "linear-gradient(to bottom, #81a3f9 -0.06%, #3462d8 108.09%)" }}
    />
    <svg
      width={23}
      height={23}
      viewBox="0 0 23 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-[23px] h-[23px] absolute left-[251px] top-[15px]"
      preserveAspectRatio="xMidYMid meet"
    >
      <path
        d="M9.58333 16.2917C13.2882 16.2917 16.2917 13.2882 16.2917 9.58333C16.2917 5.87842 13.2882 2.875 9.58333 2.875C5.87842 2.875 2.875 5.87842 2.875 9.58333C2.875 13.2882 5.87842 16.2917 9.58333 16.2917Z"
        stroke="white"
       strokeWidth={2}
       strokeLinecap="round"
       strokeLinejoin="round"
      />
      <path
        d="M14.375 14.375L20.125 20.125"
        stroke="white"
       strokeWidth={2}
       strokeLinecap="round"
       strokeLinejoin="round"
      />
    </svg>
  </div>
  <svg
    width={53}
    height={53}
    viewBox="0 0 53 53"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-[53px] h-[53px] absolute left-[15px] top-[551px]"
    preserveAspectRatio="none"
  >
    <circle cx="26.5" cy="26.5" r="26.5" fill="#DCE6FF" />
    <path
      d="M33.6585 24.701L26.6585 18.576C26.2815 18.2461 25.7185 18.2461 25.3415 18.576L18.3415 24.701C18.1245 24.8909 18 25.1653 18 25.4536V33.9998C18 34.5521 18.4477 34.9998 19 34.9998H23C23.5523 34.9998 24 34.5521 24 33.9998V29.9998C24 29.4476 24.4477 28.9998 25 28.9998H27C27.5523 28.9998 28 29.4476 28 29.9998V33.9998C28 34.5521 28.4477 34.9998 29 34.9998H33C33.5523 34.9998 34 34.5521 34 33.9998V25.4536C34 25.1653 33.8755 24.8909 33.6585 24.701Z"
      stroke="#6A7CA8"
     strokeWidth={2}
     strokeLinecap="round"
     strokeLinejoin="round"
    />
  </svg>
  <div className="w-[375px] h-[70px] absolute left-[-1px] top-[596px] overflow-hidden bg-white">
    <div className="w-[62px] h-[49px]">
      <svg
        width={32}
        height={32}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8 absolute left-[124.5px] top-[10.5px]"
        preserveAspectRatio="xMidYMid meet"
      >
        <path
          d="M13.3333 22.6667C18.488 22.6667 22.6667 18.488 22.6667 13.3333C22.6667 8.17868 18.488 4 13.3333 4C8.17868 4 4 8.17868 4 13.3333C4 18.488 8.17868 22.6667 13.3333 22.6667Z"
          stroke="#3679FF"
         strokeWidth={2}
         strokeLinecap="round"
         strokeLinejoin="round"
        />
        <path
          d="M20 20L28 28"
          stroke="#3679FF"
         strokeWidth={2}
         strokeLinecap="round"
         strokeLinejoin="round"
        />
      </svg>
      <p className="absolute left-[110px] top-[47px] text-xs font-bold text-left text-[#3679ff]">
        Recherche
      </p>
    </div>
    <div className="w-[62px] h-[49px]">
      <svg
        width={32}
        height={32}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8 absolute left-[227.5px] top-[10.5px]"
        preserveAspectRatio="xMidYMid meet"
      >
        <path
          d="M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z"
          stroke="#272832"
         strokeWidth={2}
         strokeLinecap="round"
         strokeLinejoin="round"
        />
        <path
          d="M22.9553 25.7762C21.2464 23.8676 18.7634 22.6665 15.9998 22.6665C13.2363 22.6665 10.7533 23.8676 9.04431 25.7762"
          stroke="#272832"
         strokeWidth={2}
         strokeLinecap="round"
         strokeLinejoin="round"
        />
        <path
          d="M16 18.6665C18.2091 18.6665 20 16.8756 20 14.6665C20 12.4574 18.2091 10.6665 16 10.6665C13.7909 10.6665 12 12.4574 12 14.6665C12 16.8756 13.7909 18.6665 16 18.6665Z"
          stroke="#272832"
         strokeWidth={2}
         strokeLinecap="round"
         strokeLinejoin="round"
        />
      </svg>
      <p className="absolute left-[213px] top-[47px] text-xs font-bold text-left text-[#272832]">
        Connexion
      </p>
    </div>
    <div className="w-[33px] h-[49px]">
      <p className="absolute left-[316px] top-[47px] text-xs font-bold text-left text-[#272832]">
        Menu
      </p>
      <svg
        width={32}
        height={32}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8 absolute left-[316.5px] top-[10.5px]"
        preserveAspectRatio="xMidYMid meet"
      >
        <path
          d="M6.66663 22.6665L25.3333 22.6665"
          stroke="#272832"
         strokeWidth={2}
         strokeLinecap="round"
         strokeLinejoin="round"
        />
        <path
          d="M6.66663 16H25.3333"
          stroke="#272832"
         strokeWidth={2}
         strokeLinecap="round"
         strokeLinejoin="round"
        />
        <path
          d="M6.66663 9.3335L17.3333 9.3335"
          stroke="#272832"
         strokeWidth={2}
         strokeLinecap="round"
         strokeLinejoin="round"
        />
      </svg>
    </div>
    <svg
      width={375}
      height={1}
      viewBox="0 0 375 1"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute left-[-1px] top-0"
      preserveAspectRatio="xMidYMid meet"
    >
      <line y1="0.5" x2={375} y2="0.5" stroke="#EAEFFA" />
    </svg>
    <div className="w-[43px] h-[49px]">
      <svg
        width={32}
        height={32}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8 absolute left-[30.5px] top-[10.5px]"
        preserveAspectRatio="xMidYMid meet"
      >
        <path
          d="M26.2114 12.935L16.878 4.76837C16.3753 4.32851 15.6247 4.32851 15.122 4.76837L5.7887 12.935C5.49935 13.1882 5.33337 13.554 5.33337 13.9385V25.3335C5.33337 26.0698 5.93033 26.6668 6.66671 26.6668H12C12.7364 26.6668 13.3334 26.0698 13.3334 25.3335V20.0001C13.3334 19.2637 13.9303 18.6668 14.6667 18.6668H17.3334C18.0698 18.6668 18.6667 19.2637 18.6667 20.0001V25.3335C18.6667 26.0698 19.2637 26.6668 20 26.6668H25.3334C26.0698 26.6668 26.6667 26.0698 26.6667 25.3335V13.9385C26.6667 13.554 26.5007 13.1882 26.2114 12.935Z"
          stroke="#3679FF"
         strokeWidth={2}
         strokeLinecap="round"
         strokeLinejoin="round"
        />
      </svg>
      <p className="absolute left-[26px] top-[47px] text-xs font-bold text-left text-[#3679ff]">
        Acceuil
      </p>
    </div>
  </div>
  <div className="w-[375px] h-[667px] absolute left-[-1px] top-[-1px] opacity-30 bg-[#051f52]" />
  <div className="w-[343px] h-[573px] absolute left-[15px] top-[46px] rounded-xl bg-white border border-[#eaeffa]">
    <div className="flex justify-center items-start absolute left-[29.5px] top-[23px] gap-3">
      <p className="flex-grow-0 flex-shrink-0 w-[263px] h-[33px] text-lg font-bold text-center text-black">
        Connexion ou inscription
      </p>
      <svg
        width={25}
        height={24}
        viewBox="0 0 25 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
        preserveAspectRatio="xMidYMid meet"
      >
        <path
          d="M18.5 18L6.5 6"
          stroke="#14181F"
         strokeWidth={2}
         strokeLinecap="round"
         strokeLinejoin="round"
        />
        <path
          d="M18.5 6L6.5 18"
          stroke="#14181F"
         strokeWidth={2}
         strokeLinecap="round"
         strokeLinejoin="round"
        />
      </svg>
    </div>
    <div className="w-[295px] h-20 absolute left-[23px] top-[104px]">
      <p className="absolute left-0 top-0 text-base font-bold text-left text-[#0e215c]">
        Adresse e-mail
      </p>
      <div className="w-[295px] h-[52px] absolute left-[-1.5px] top-[26.5px] rounded-xl bg-white border-2 border-[#eff4ff]" />
      <p className="w-[264.74px] absolute left-[15.13px] top-11 text-base font-bold text-left text-[#6976a0]">
        Votre e-mail
      </p>
    </div>
    <div
      className="flex justify-center items-center w-[295px] absolute left-[23px] top-[200px] gap-2.5 px-[120px] py-4 rounded-xl"
      style={{ background: "linear-gradient(to bottom, #81a3f9 -0.06%, #3462d8 108.09%)" }}
    >
      <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-white">
        Connexion / Inscription
      </p>
    </div>
    <div className="flex justify-start items-center w-[295px] h-[50px] absolute left-[22.5px] top-[299.5px] gap-10 p-6 rounded-xl bg-white border-2 border-[#eff4ff]">
      <svg
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
        preserveAspectRatio="none"
      >
        <path
          d="M23 12C23 5.92486 18.0751 1 12 1C5.92486 1 1 5.92486 1 12C1 17.4903 5.02252 22.0412 10.2813 22.8664V15.1797H7.48828V12H10.2813V9.57656C10.2813 6.81969 11.9235 5.29688 14.4361 5.29688C15.6392 5.29688 16.8984 5.51172 16.8984 5.51172V8.21875H15.5114C14.145 8.21875 13.7188 9.06674 13.7188 9.9375V12H16.7695L16.2818 15.1797H13.7188V22.8664C18.9775 22.0412 23 17.4903 23 12Z"
          fill="#3679FF"
        />
        <path
          d="M16.2818 15.1797L16.7695 12H13.7188V9.9375C13.7188 9.0676 14.145 8.21875 15.5114 8.21875H16.8984V5.51172C16.8984 5.51172 15.6397 5.29688 14.4361 5.29688C11.9235 5.29688 10.2813 6.81969 10.2813 9.57656V12H7.48828V15.1797H10.2813V22.8664C11.4202 23.0445 12.5798 23.0445 13.7188 22.8664V15.1797H16.2818Z"
          fill="white"
        />
      </svg>
      <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-center text-[#272832]">
        continuer avec Facebook
      </p>
    </div>
    <div className="flex justify-start items-center w-[295px] h-[50px] absolute left-[22.5px] top-[365.5px] gap-10 p-6 rounded-xl bg-white border-2 border-[#eff4ff]">
      <svg
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
        preserveAspectRatio="none"
      >
        <rect x="1.5" y="1.5" width={21} height={21} rx={6} fill="url(#paint0_radial_1659_4158)" />
        <rect x="1.5" y="1.5" width={21} height={21} rx={6} fill="url(#paint1_radial_1659_4158)" />
        <rect x="1.5" y="1.5" width={21} height={21} rx={6} fill="url(#paint2_radial_1659_4158)" />
        <path
          d="M17.25 7.875C17.25 8.49632 16.7463 9 16.125 9C15.5037 9 15 8.49632 15 7.875C15 7.25368 15.5037 6.75 16.125 6.75C16.7463 6.75 17.25 7.25368 17.25 7.875Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 15.75C14.0711 15.75 15.75 14.0711 15.75 12C15.75 9.92893 14.0711 8.25 12 8.25C9.92893 8.25 8.25 9.92893 8.25 12C8.25 14.0711 9.92893 15.75 12 15.75ZM12 14.25C13.2426 14.25 14.25 13.2426 14.25 12C14.25 10.7574 13.2426 9.75 12 9.75C10.7574 9.75 9.75 10.7574 9.75 12C9.75 13.2426 10.7574 14.25 12 14.25Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.5 11.7C4.5 9.17976 4.5 7.91965 4.99047 6.95704C5.4219 6.11031 6.11031 5.4219 6.95704 4.99047C7.91965 4.5 9.17976 4.5 11.7 4.5H12.3C14.8202 4.5 16.0804 4.5 17.043 4.99047C17.8897 5.4219 18.5781 6.11031 19.0095 6.95704C19.5 7.91965 19.5 9.17976 19.5 11.7V12.3C19.5 14.8202 19.5 16.0804 19.0095 17.043C18.5781 17.8897 17.8897 18.5781 17.043 19.0095C16.0804 19.5 14.8202 19.5 12.3 19.5H11.7C9.17976 19.5 7.91965 19.5 6.95704 19.0095C6.11031 18.5781 5.4219 17.8897 4.99047 17.043C4.5 16.0804 4.5 14.8202 4.5 12.3V11.7ZM11.7 6H12.3C13.5849 6 14.4583 6.00117 15.1334 6.05633C15.7911 6.11006 16.1274 6.20745 16.362 6.32698C16.9265 6.6146 17.3854 7.07354 17.673 7.63803C17.7926 7.87263 17.8899 8.20893 17.9437 8.86656C17.9988 9.54169 18 10.4151 18 11.7V12.3C18 13.5849 17.9988 14.4583 17.9437 15.1334C17.8899 15.7911 17.7926 16.1274 17.673 16.362C17.3854 16.9265 16.9265 17.3854 16.362 17.673C16.1274 17.7926 15.7911 17.8899 15.1334 17.9437C14.4583 17.9988 13.5849 18 12.3 18H11.7C10.4151 18 9.54169 17.9988 8.86656 17.9437C8.20893 17.8899 7.87263 17.7926 7.63803 17.673C7.07354 17.3854 6.6146 16.9265 6.32698 16.362C6.20745 16.1274 6.11006 15.7911 6.05633 15.1334C6.00117 14.4583 6 13.5849 6 12.3V11.7C6 10.4151 6.00117 9.54169 6.05633 8.86656C6.11006 8.20893 6.20745 7.87263 6.32698 7.63803C6.6146 7.07354 7.07354 6.6146 7.63803 6.32698C7.87263 6.20745 8.20893 6.11006 8.86656 6.05633C9.54169 6.00117 10.4151 6 11.7 6Z"
          fill="white"
        />
        <defs>
          <radialgradient
            id="paint0_radial_1659_4158"
            cx={0}
            cy={0}
            r={1}
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(9 17.25) rotate(-55.3758) scale(19.1397)"
          >
            <stop stopColor="#B13589" />
            <stop offset="0.79309" stopColor="#C62F94" />
            <stop offset={1} stopColor="#8A3AC8" />
          </radialgradient>
          <radialgradient
            id="paint1_radial_1659_4158"
            cx={0}
            cy={0}
            r={1}
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(8.25 23.25) rotate(-65.1363) scale(16.9457)"
          >
            <stop stopColor="#E0E8B7" />
            <stop offset="0.444662" stopColor="#FB8A2E" />
            <stop offset="0.71474" stopColor="#E2425C" />
            <stop offset={1} stopColor="#E2425C"stopOpacity={0} />
          </radialgradient>
          <radialgradient
            id="paint2_radial_1659_4158"
            cx={0}
            cy={0}
            r={1}
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(0.375001 2.25) rotate(-8.1301) scale(29.1682 6.23877)"
          >
            <stop offset="0.156701" stopColor="#406ADC" />
            <stop offset="0.467799" stopColor="#6A45BE" />
            <stop offset={1} stopColor="#6A45BE"stopOpacity={0} />
          </radialgradient>
        </defs>
      </svg>
      <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-center text-[#272832]">
        continuer avec Instagram
      </p>
    </div>
    <div className="flex justify-start items-center w-[295px] h-[50px] absolute left-[22.5px] top-[431.5px] gap-10 p-6 rounded-xl bg-white border-2 border-[#eff4ff]">
      <svg
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
        preserveAspectRatio="none"
      >
        <g clipPath="url(#clip0_1659_4166)">
          <path
            d="M22.7855 12.2532C22.7855 11.5055 22.7249 10.7537 22.5955 10.0181H12.22V14.254H18.1616C17.915 15.6201 17.1228 16.8286 15.9628 17.5966V20.3451H19.5075C21.5891 18.4292 22.7855 15.5999 22.7855 12.2532Z"
            fill="#4285F4"
          />
          <path
            d="M12.22 23.001C15.1868 23.001 17.6887 22.0269 19.5116 20.3455L15.9668 17.597C14.9806 18.268 13.7074 18.6479 12.2241 18.6479C9.35431 18.6479 6.92109 16.7119 6.04805 14.1089H2.39014V16.9422C4.25749 20.6567 8.06091 23.001 12.22 23.001V23.001Z"
            fill="#34A853"
          />
          <path
            d="M6.04397 14.1085C5.58319 12.7423 5.58319 11.263 6.04397 9.89684V7.06348H2.3901C0.829928 10.1717 0.829928 13.8336 2.3901 16.9418L6.04397 14.1085V14.1085Z"
            fill="#FBBC04"
          />
          <path
            d="M12.22 5.35386C13.7883 5.3296 15.304 5.91972 16.4397 7.00295L19.5803 3.8624C17.5917 1.99505 14.9523 0.968406 12.22 1.00074C8.06091 1.00074 4.25749 3.34504 2.39014 7.06357L6.044 9.89694C6.91301 7.28992 9.35027 5.35386 12.22 5.35386V5.35386Z"
            fill="#EA4335"
          />
        </g>
        <defs>
          <clippath id="clip0_1659_4166">
            <rect width={22} height={22} fill="white" transform="translate(1 1)" />
          </clippath>
        </defs>
      </svg>
      <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-center text-[#272832]">
        continuer avec Google
      </p>
    </div>
    <div className="flex justify-start items-center w-[295px] h-[50px] absolute left-[22.5px] top-[497.5px] gap-10 p-6 rounded-xl bg-white border-2 border-[#eff4ff]">
      <svg
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
        preserveAspectRatio="none"
      >
        <g clipPath="url(#clip0_1659_4174)">
          <path
            d="M20.976 18.1447C20.6433 18.9133 20.2495 19.6208 19.7932 20.2713C19.1712 21.158 18.662 21.7719 18.2695 22.1127C17.6612 22.6722 17.0093 22.9587 16.3113 22.975C15.8102 22.975 15.2059 22.8324 14.5025 22.5432C13.7968 22.2553 13.1482 22.1127 12.5552 22.1127C11.9332 22.1127 11.2662 22.2553 10.5527 22.5432C9.83811 22.8324 9.26246 22.9832 8.82234 22.9981C8.15299 23.0266 7.48582 22.732 6.81986 22.1127C6.39482 21.742 5.86317 21.1064 5.22627 20.2061C4.54294 19.2446 3.98114 18.1297 3.54102 16.8587C3.06966 15.4857 2.83337 14.1563 2.83337 12.8692C2.83337 11.3948 3.15196 10.1232 3.79007 9.0576C4.29157 8.20166 4.95875 7.52647 5.79377 7.03081C6.6288 6.53514 7.53104 6.28256 8.50267 6.2664C9.03432 6.2664 9.73151 6.43085 10.5979 6.75405C11.4619 7.07834 12.0166 7.24279 12.2598 7.24279C12.4416 7.24279 13.0579 7.0505 14.1026 6.66714C15.0905 6.31162 15.9243 6.16441 16.6074 6.2224C18.4583 6.37178 19.8489 7.10142 20.7737 8.41595C19.1183 9.41896 18.2994 10.8238 18.3157 12.626C18.3307 14.0297 18.8399 15.1979 19.8407 16.1254C20.2943 16.5558 20.8008 16.8885 21.3644 17.1248C21.2422 17.4793 21.1132 17.8188 20.976 18.1447V18.1447ZM16.731 1.44013C16.731 2.54038 16.329 3.56768 15.5278 4.51854C14.5609 5.64892 13.3914 6.30211 12.1232 6.19904C12.107 6.06705 12.0977 5.92813 12.0977 5.78214C12.0977 4.7259 12.5575 3.59552 13.374 2.67127C13.7817 2.20331 14.3002 1.81421 14.9289 1.50381C15.5563 1.19805 16.1497 1.02896 16.7079 1C16.7242 1.14709 16.731 1.29418 16.731 1.44011V1.44013Z"
            fill="black"
          />
        </g>
        <defs>
          <clippath id="clip0_1659_4174">
            <rect width={22} height={22} fill="white" transform="translate(1 1)" />
          </clippath>
        </defs>
      </svg>
      <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-center text-[#272832]">
        continuer avec Apple
      </p>
    </div>
    <svg
      width={135}
      height={2}
      viewBox="0 0 135 2"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute left-[-1.5px] top-[274.5px]"
      preserveAspectRatio="xMidYMid meet"
    >
      <line x1="8.74228e-8" y1={1} x2={135} y2="1.00001" stroke="#EFF4FF"strokeWidth={2} />
    </svg>
    <svg
      width={135}
      height={2}
      viewBox="0 0 135 2"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute left-[206.5px] top-[274.5px]"
      preserveAspectRatio="xMidYMid meet"
    >
      <line x1="8.74228e-8" y1={1} x2={135} y2="1.00001" stroke="#EFF4FF"strokeWidth={2} />
    </svg>
    <p className="absolute left-[161px] top-[267px] text-sm font-bold text-center text-black">Ou</p>
    <svg
      width={343}
      height={2}
      viewBox="0 0 343 2"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute left-[-1.5px] top-[79.5px]"
      preserveAspectRatio="xMidYMid meet"
    >
      <line x1="8.74228e-8" y1={1} x2={343} y2="1.00003" stroke="#EFF4FF"strokeWidth={2} />
    </svg>
  </div>
</div>


33333333333333333333333333

<div className="w-[375px] h-[667px] relative overflow-hidden bg-white mt-8 mb-8">
  <img
    src="rectangle-256.png"
    className="w-[343px] h-[175px] absolute left-[15px] top-[221px] rounded-xl object-cover"
  />
  <p className="w-[341px] absolute left-[17px] top-[75px] text-[28px] font-bold text-center">
    <span className="w-[341px] text-[28px] font-bold text-center text-[#113eb6]">
      Devenir propriétaire devient plus{" "}
    </span>
    <span className="w-[341px] text-[28px] font-bold text-center text-[#3679ff]">accessible.</span>
  </p>
  <p className="w-[312px] absolute left-[31px] top-[139px] text-base text-center text-[#849cd9]">
    Réalisez votre premier achat immobilier pour seulement 700€ par mois !*
  </p>
  <div className="w-[131px] h-[35px]">
    <div className="w-[131px] h-[35px]">
      <p className="w-3 h-[9.89px] absolute left-[223px] top-[37.84px] text-[9px] font-bold text-left text-[#43434a]">
        By
      </p>
      <img
        src="nexity-logo-1.png"
        className="w-4 h-[15.82px] absolute left-[236.5px] top-[34.38px] object-cover"
      />
      <svg
        width={97}
        height={35}
        viewBox="0 0 97 35"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute left-[121.81px] top-[23.81px]"
        preserveAspectRatio="none"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14.7453 23.1445L14.7407 23.1523C14.0805 24.2619 13.8662 25.08 13.8662 25.6532C13.8662 26.2912 14.0388 26.7946 14.3655 27.2364C14.8307 27.8346 15.285 28.2229 15.7103 28.4659C16.4653 28.8776 17.1606 29.2805 17.7941 29.6749C18.1547 29.8857 18.5359 30.1422 18.8538 30.4538C19.1298 30.7245 19.6851 31.3528 19.6851 32.289C19.6851 33.1924 19.2405 34.0361 18.4037 34.5342C17.7331 34.9334 16.9929 35 16.4661 35C14.4605 35 12.542 33.9342 10.7836 32.4439L10.777 32.4383L10.7704 32.4326C10.006 31.7736 9.36034 31.054 8.85982 30.2758C7.82421 31.5507 7.04593 32.473 6.53465 33.0274C6.11811 33.4933 5.70025 33.9128 5.29206 34.233C5.08526 34.3952 4.83687 34.567 4.55443 34.7055C4.28689 34.8366 3.86403 35 3.34275 35C1.95883 35 1.11059 34.0693 0.685061 33.4017L0.645838 33.3402L0.611212 33.2761C0.237761 32.5844 0 31.8163 0 30.9942C0 30.6626 0.0691356 30.2922 0.122125 30.0308C0.186073 29.7154 0.277136 29.328 0.390847 28.8785C0.618863 27.9773 0.955872 26.7564 1.39802 25.2256C2.26023 22.2136 3.12892 18.5842 4.00234 14.3292C4.86254 10.1385 5.28237 6.40441 5.28237 3.11561C5.28237 2.82873 5.29959 2.51234 5.36008 2.20093C5.41034 1.94226 5.52396 1.5004 5.83869 1.07999C6.53482 0.118923 7.62675 0 8.17117 0C9.01283 0 9.65259 0.387519 10.0607 0.754313C10.4422 1.09721 10.7278 1.51146 10.9462 1.89667C11.4801 2.76068 11.7615 3.71808 11.7615 4.7341C11.7615 8.59658 11.0805 13.2941 9.75071 18.8031C11.3809 16.7253 12.8167 15.037 14.0557 13.7464L14.0606 13.7412L14.0656 13.736C14.666 13.1194 15.2091 12.6043 15.6786 12.2293C15.9111 12.0436 16.1721 11.8543 16.4479 11.7018C16.666 11.5812 17.158 11.3295 17.7867 11.3295C18.8431 11.3295 19.6799 11.824 20.2664 12.4374C20.6926 12.8623 21.2946 13.6144 21.2946 14.6474C21.2946 15.2079 21.0739 15.6394 20.9834 15.8074C20.8632 16.0305 20.719 16.2342 20.5877 16.4044C20.3219 16.7486 19.9674 17.1361 19.5601 17.5498C18.788 18.3338 17.9336 19.1985 16.997 20.1438C16.1995 20.9487 15.4473 21.9401 14.7499 23.1367L14.7453 23.1445ZM18.7772 13.8382C18.4746 13.5145 18.1444 13.3526 17.7867 13.3526C17.4566 13.3526 16.7138 13.946 15.5582 15.1329C13.677 17.0927 11.2794 20.0583 8.36526 24.0298C7.63601 25.0236 6.87442 26.0805 6.08049 27.2003C5.5928 27.8882 5.09291 28.5998 4.58081 29.3353C4.63476 29.1697 4.68829 29.0048 4.74139 28.8404C5.38174 26.8579 5.96006 24.9579 6.47632 23.1403C8.62418 15.5783 9.69811 9.44291 9.69811 4.7341C9.69811 4.25841 9.60156 3.80456 9.40846 3.37256C9.38336 3.31642 9.35663 3.26064 9.32828 3.20523C9.31293 3.17525 9.29711 3.14537 9.28081 3.11561C9.24357 3.04761 9.20384 2.98017 9.16162 2.9133C8.83147 2.31985 8.50132 2.02312 8.17117 2.02312C7.84102 2.02312 7.62092 2.10405 7.51087 2.2659C7.40083 2.40077 7.3458 2.68401 7.3458 3.11561C7.3458 3.3392 7.34395 3.56454 7.34026 3.79164C7.33988 3.81518 7.33948 3.83875 7.33905 3.86234C7.28063 7.12385 6.84268 10.7458 6.02521 14.7283C5.14481 19.0173 4.26442 22.6994 3.38402 25.7746C2.50363 28.8227 2.06343 30.5626 2.06343 30.9942C2.06343 31.4258 2.18723 31.8709 2.43484 32.3295C2.70997 32.7611 3.0126 32.9769 3.34275 32.9769C3.6729 32.9769 4.22315 32.5453 4.99349 31.6821C5.27125 31.3816 5.64405 30.9519 6.11187 30.3931C6.11775 30.3861 6.12366 30.3791 6.12957 30.372C6.24506 30.234 6.36628 30.0881 6.49324 29.9345C6.52507 29.896 6.55726 29.857 6.58981 29.8175C6.93272 29.4014 7.31562 28.931 7.7385 28.4063C7.79778 28.3327 7.85784 28.2581 7.91869 28.1824C8.36578 27.6263 8.85529 27.0125 9.38722 26.341C9.50261 26.1954 9.61999 26.047 9.73938 25.896V26.341C9.73938 27.1098 9.90794 27.8471 10.2451 28.5532C10.6414 29.3832 11.2707 30.1699 12.133 30.9133C13.0888 31.7234 13.9826 32.295 14.8144 32.628C15.1078 32.7455 15.3935 32.8333 15.6714 32.8915C15.6932 32.896 15.7149 32.9004 15.7365 32.9045C15.7575 32.9086 15.7784 32.9125 15.7993 32.9162C16.0268 32.9566 16.2491 32.9769 16.4661 32.9769C17.2365 32.9769 17.6217 32.7476 17.6217 32.289C17.6217 32.0462 17.319 31.7495 16.7138 31.3988C16.6325 31.3481 16.5499 31.2972 16.4661 31.2459C16.3865 31.1972 16.3057 31.1483 16.2238 31.0992C16.0605 31.0012 15.8928 30.9024 15.7206 30.8028C15.3937 30.6135 15.0507 30.421 14.6916 30.2254C13.9763 29.8208 13.316 29.2274 12.7107 28.4451C12.1054 27.6358 11.8028 26.7052 11.8028 25.6532C11.8028 24.6012 12.188 23.4277 12.9583 22.1329C13.7287 20.8112 14.5816 19.6782 15.517 18.7341C16.4524 17.79 17.3053 16.9268 18.0756 16.1445C18.846 15.3622 19.2311 14.8632 19.2311 14.6474C19.2311 14.4046 19.0798 14.1349 18.7772 13.8382ZM16.5849 30.9475C16.5849 30.9475 16.5796 30.9488 16.5676 30.9499C16.5787 30.9479 16.5849 30.9475 16.5849 30.9475Z"
          fill="url(#paint0_linear_499_3940)"
        />
        <path
          d="M25.0427 32.2403C24.6187 32.2403 24.2654 32.1249 23.9828 31.8939C23.7159 31.6476 23.5824 31.3012 23.5824 30.8548V21.9409C23.5824 21.4944 23.7159 21.1558 23.9828 20.9248C24.2654 20.6939 24.6187 20.5784 25.0427 20.5784C25.4666 20.5784 25.8199 20.6939 26.1026 20.9248C26.3852 21.1558 26.5265 21.4944 26.5265 21.9409V30.8548C26.5265 31.3012 26.3852 31.6476 26.1026 31.8939C25.8199 32.1249 25.4666 32.2403 25.0427 32.2403ZM25.0427 18.5232C24.5088 18.5232 24.0849 18.3846 23.7708 18.1075C23.4568 17.815 23.2998 17.4378 23.2998 16.9759C23.2998 16.5141 23.4568 16.1446 23.7708 15.8675C24.0849 15.5904 24.5088 15.4518 25.0427 15.4518C25.5608 15.4518 25.9769 15.5904 26.291 15.8675C26.6207 16.1446 26.7856 16.5141 26.7856 16.9759C26.7856 17.4378 26.6286 17.815 26.3145 18.1075C26.0005 18.3846 25.5765 18.5232 25.0427 18.5232Z"
          fill="url(#paint1_linear_499_3940)"
        />
        <path
          d="M35.6784 30.0927C36.4635 30.1389 36.856 30.4853 36.856 31.1319C36.856 31.5014 36.699 31.7862 36.385 31.9863C36.0866 32.1711 35.6548 32.248 35.0896 32.2173L34.4536 32.1711C31.8157 31.9863 30.4967 30.6007 30.4967 28.0143V22.9801H29.3191C28.8951 22.9801 28.5654 22.8877 28.3299 22.703C28.11 22.5182 28.0001 22.2488 28.0001 21.8947C28.0001 21.5406 28.11 21.2712 28.3299 21.0865C28.5654 20.9017 28.8951 20.8094 29.3191 20.8094H30.4967V18.6848C30.4967 18.2691 30.6302 17.9381 30.8971 17.6918C31.1641 17.4455 31.5252 17.3223 31.9806 17.3223C32.4202 17.3223 32.7735 17.4455 33.0405 17.6918C33.3074 17.9381 33.4409 18.2691 33.4409 18.6848V20.8094H35.4429C35.8668 20.8094 36.1887 20.9017 36.4085 21.0865C36.6441 21.2712 36.7618 21.5406 36.7618 21.8947C36.7618 22.2488 36.6441 22.5182 36.4085 22.703C36.1887 22.8877 35.8668 22.9801 35.4429 22.9801H33.4409V28.2222C33.4409 29.3614 33.9747 29.9695 35.0425 30.0465L35.6784 30.0927Z"
          fill="url(#paint2_linear_499_3940)"
        />
        <path
          d="M45.8721 32.2403C45.4482 32.2403 45.0949 32.1249 44.8122 31.8939C44.5453 31.6476 44.4118 31.3012 44.4118 30.8548V17.0683C44.4118 16.6218 44.5453 16.2831 44.8122 16.0522C45.0949 15.8213 45.4482 15.7058 45.8721 15.7058C46.2961 15.7058 46.6494 15.8213 46.932 16.0522C47.2147 16.2831 47.356 16.6218 47.356 17.0683V30.8548C47.356 31.3012 47.2147 31.6476 46.932 31.8939C46.6494 32.1249 46.2961 32.2403 45.8721 32.2403Z"
          fill="url(#paint3_linear_499_3940)"
        />
        <path
          d="M58.948 29.0073C59.215 29.0073 59.4269 29.1074 59.584 29.3075C59.7567 29.5077 59.843 29.7771 59.843 30.1158C59.843 30.5931 59.5525 30.9933 58.9716 31.3166C58.4377 31.6091 57.8332 31.8478 57.158 32.0325C56.4828 32.2019 55.839 32.2865 55.2266 32.2865C53.3738 32.2865 51.9057 31.7631 50.8222 30.7162C49.7388 29.6693 49.1971 28.2376 49.1971 26.4209C49.1971 25.2663 49.4326 24.2425 49.9037 23.3496C50.3747 22.4566 51.0342 21.7639 51.8821 21.2712C52.7457 20.7786 53.7193 20.5322 54.8027 20.5322C55.839 20.5322 56.7419 20.7555 57.5113 21.2019C58.2807 21.6484 58.8774 22.2796 59.3013 23.0956C59.7253 23.9115 59.9372 24.8737 59.9372 25.9822C59.9372 26.6442 59.6389 26.9752 59.0422 26.9752H52.0941C52.1883 28.0374 52.4945 28.8226 53.0127 29.3306C53.5308 29.8233 54.2845 30.0696 55.2738 30.0696C55.7762 30.0696 56.2159 30.008 56.5927 29.8849C56.9853 29.7617 57.4249 29.5924 57.9117 29.3768C58.3827 29.1305 58.7282 29.0073 58.948 29.0073ZM54.8734 22.5644C54.0726 22.5644 53.4288 22.8107 52.942 23.3034C52.471 23.796 52.1883 24.5042 52.0941 25.4279H57.4171C57.3857 24.4888 57.1501 23.7806 56.7105 23.3034C56.2708 22.8107 55.6585 22.5644 54.8734 22.5644Z"
          fill="url(#paint4_linear_499_3940)"
        />
        <path
          d="M74.1187 20.5322C75.5005 20.5322 76.529 20.9171 77.2042 21.6869C77.8794 22.4566 78.217 23.619 78.217 25.1739V30.8548C78.217 31.2858 78.0835 31.6245 77.8166 31.8709C77.5653 32.1172 77.212 32.2403 76.7567 32.2403C76.3013 32.2403 75.9402 32.1172 75.6732 31.8709C75.4063 31.6245 75.2728 31.2858 75.2728 30.8548V25.3356C75.2728 24.458 75.1001 23.8191 74.7547 23.4189C74.4249 23.0186 73.8989 22.8184 73.1766 22.8184C72.3287 22.8184 71.6457 23.0802 71.1275 23.6036C70.625 24.127 70.3738 24.8275 70.3738 25.705V30.8548C70.3738 31.2858 70.2403 31.6245 69.9734 31.8709C69.7065 32.1172 69.3453 32.2403 68.89 32.2403C68.4346 32.2403 68.0735 32.1172 67.8065 31.8709C67.5553 31.6245 67.4297 31.2858 67.4297 30.8548V21.9178C67.4297 21.5175 67.5632 21.1942 67.8301 20.9479C68.097 20.7016 68.4582 20.5784 68.9135 20.5784C69.3218 20.5784 69.6515 20.7016 69.9028 20.9479C70.1697 21.1788 70.3032 21.4867 70.3032 21.8716V22.4951C70.6957 21.8639 71.2217 21.379 71.8812 21.0403C72.5407 20.7016 73.2865 20.5322 74.1187 20.5322Z"
          fill="url(#paint5_linear_499_3940)"
        />
        <path
          d="M81.7358 32.2403C81.3118 32.2403 80.9585 32.1249 80.6759 31.8939C80.4089 31.6476 80.2755 31.3012 80.2755 30.8548V21.9409C80.2755 21.4944 80.4089 21.1558 80.6759 20.9248C80.9585 20.6939 81.3118 20.5784 81.7358 20.5784C82.1597 20.5784 82.513 20.6939 82.7956 20.9248C83.0783 21.1558 83.2196 21.4944 83.2196 21.9409V30.8548C83.2196 31.3012 83.0783 31.6476 82.7956 31.8939C82.513 32.1249 82.1597 32.2403 81.7358 32.2403ZM81.7358 18.5232C81.2019 18.5232 80.7779 18.3846 80.4639 18.1075C80.1499 17.815 79.9928 17.4378 79.9928 16.9759C79.9928 16.5141 80.1499 16.1446 80.4639 15.8675C80.7779 15.5904 81.2019 15.4518 81.7358 15.4518C82.2539 15.4518 82.67 15.5904 82.9841 15.8675C83.3138 16.1446 83.4787 16.5141 83.4787 16.9759C83.4787 17.4378 83.3217 17.815 83.0076 18.1075C82.6936 18.3846 82.2696 18.5232 81.7358 18.5232Z"
          fill="url(#paint6_linear_499_3940)"
        />
        <path
          d="M95.4926 15.7058C95.9323 15.7058 96.2934 15.829 96.5761 16.0753C96.8587 16.3216 97 16.6449 97 17.0452V30.8548C97 31.2704 96.8665 31.6014 96.5996 31.8477C96.3327 32.0941 95.9794 32.2172 95.5397 32.2172C95.1001 32.2172 94.7468 32.0941 94.4798 31.8477C94.2129 31.6014 94.0794 31.2704 94.0794 30.8548V30.2774C93.734 30.9086 93.2315 31.4013 92.572 31.7554C91.9283 32.1095 91.1903 32.2865 90.3581 32.2865C89.3688 32.2865 88.4817 32.0402 87.6966 31.5475C86.9272 31.0549 86.3226 30.3621 85.883 29.4692C85.459 28.5609 85.2471 27.5217 85.2471 26.3516C85.2471 25.1816 85.459 24.1578 85.883 23.2803C86.3226 22.4027 86.9272 21.7254 87.6966 21.2481C88.466 20.7709 89.3531 20.5322 90.3581 20.5322C91.1903 20.5322 91.9283 20.7016 92.572 21.0403C93.2158 21.379 93.7104 21.8562 94.0559 22.472V16.999C94.0559 16.6141 94.1815 16.3062 94.4327 16.0753C94.6997 15.829 95.053 15.7058 95.4926 15.7058ZM91.1353 30.0465C92.0774 30.0465 92.7997 29.7309 93.3022 29.0997C93.8204 28.4685 94.0794 27.5679 94.0794 26.3978C94.0794 25.2278 93.8204 24.3349 93.3022 23.719C92.7997 23.0878 92.0853 22.7722 91.1589 22.7722C90.2168 22.7722 89.4866 23.0801 88.9684 23.6959C88.4503 24.3118 88.1912 25.197 88.1912 26.3516C88.1912 27.5217 88.4503 28.43 88.9684 29.0766C89.4866 29.7232 90.2089 30.0465 91.1353 30.0465Z"
          fill="url(#paint7_linear_499_3940)"
        />
        <defs>
          <lineargradient
            id="paint0_linear_499_3940"
            x1="92.364"
            y1="-1.60846"
            x2="73.9333"
            y2="61.008"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#C399DB" />
            <stop offset={1} stopColor="#5882F7" />
          </lineargradient>
          <lineargradient
            id="paint1_linear_499_3940"
            x1="92.364"
            y1="-1.60846"
            x2="73.9333"
            y2="61.008"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#C399DB" />
            <stop offset={1} stopColor="#5882F7" />
          </lineargradient>
          <lineargradient
            id="paint2_linear_499_3940"
            x1="92.364"
            y1="-1.60846"
            x2="73.9333"
            y2="61.008"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#C399DB" />
            <stop offset={1} stopColor="#5882F7" />
          </lineargradient>
          <lineargradient
            id="paint3_linear_499_3940"
            x1="92.364"
            y1="-1.60846"
            x2="73.9333"
            y2="61.008"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#C399DB" />
            <stop offset={1} stopColor="#5882F7" />
          </lineargradient>
          <lineargradient
            id="paint4_linear_499_3940"
            x1="92.364"
            y1="-1.60846"
            x2="73.9333"
            y2="61.008"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#C399DB" />
            <stop offset={1} stopColor="#5882F7" />
          </lineargradient>
          <lineargradient
            id="paint5_linear_499_3940"
            x1="92.364"
            y1="-1.60846"
            x2="73.9333"
            y2="61.008"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#C399DB" />
            <stop offset={1} stopColor="#5882F7" />
          </lineargradient>
          <lineargradient
            id="paint6_linear_499_3940"
            x1="92.364"
            y1="-1.60846"
            x2="73.9333"
            y2="61.008"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#C399DB" />
            <stop offset={1} stopColor="#5882F7" />
          </lineargradient>
          <lineargradient
            id="paint7_linear_499_3940"
            x1="92.364"
            y1="-1.60846"
            x2="73.9333"
            y2="61.008"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#C399DB" />
            <stop offset={1} stopColor="#5882F7" />
          </lineargradient>
        </defs>
      </svg>
    </div>
  </div>
  <p className="w-[274px] absolute left-[85px] top-[535px] text-lg font-bold text-left text-[#1a2e6c]">
    <span className="w-[274px] text-lg font-bold text-left text-[#1a2e6c]">
      Des logements dans toute{" "}
    </span>
    <br />
    <span className="w-[274px] text-lg font-bold text-left text-[#1a2e6c]">la France</span>
  </p>
  <p className="w-[274px] absolute left-[85px] top-[585px] text-sm font-medium text-left text-[#849cd9]">
    Plus de 3 000 logements neufs disponibles.
  </p>
  <p className="w-[252px] absolute left-[61px] top-[475px] text-sm font-medium text-center text-[#849cd9]">
    Construire son projet immobilier avec Kit le nid c’est bénéficier :
  </p>
  <p className="w-[343px] absolute left-4 top-[421px] text-lg font-bold text-center text-[#1a2e6c]">
    <span className="w-[343px] text-lg font-bold text-center text-[#1a2e6c]">
      L’achat dans une résidence
    </span>
    <br />
    <span className="w-[343px] text-lg font-bold text-center text-[#1a2e6c]">
      neuve avec Kit le nid
    </span>
  </p>
  <div className="w-[291px] h-[55px] absolute left-[41px] top-[194px]">
    <div className="w-[291px] h-[55px] absolute left-[-1.5px] top-[-1.5px] rounded-[70px] bg-white border-2 border-[#eff4ff]" />
    <p className="w-[223.98px] absolute left-[13.57px] top-4 text-lg font-bold text-left text-[#0e215c]">
      Localisation
    </p>
    <div
      className="w-[39px] h-[39px] absolute left-[243px] top-[7px] rounded-[42px]"
      style={{ background: "linear-gradient(to bottom, #81a3f9 -0.06%, #3462d8 108.09%)" }}
    />
    <svg
      width={23}
      height={23}
      viewBox="0 0 23 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-[23px] h-[23px] absolute left-[251px] top-[15px]"
      preserveAspectRatio="xMidYMid meet"
    >
      <path
        d="M9.58333 16.2917C13.2882 16.2917 16.2917 13.2882 16.2917 9.58333C16.2917 5.87842 13.2882 2.875 9.58333 2.875C5.87842 2.875 2.875 5.87842 2.875 9.58333C2.875 13.2882 5.87842 16.2917 9.58333 16.2917Z"
        stroke="white"
       strokeWidth={2}
       strokeLinecap="round"
       strokeLinejoin="round"
      />
      <path
        d="M14.375 14.375L20.125 20.125"
        stroke="white"
       strokeWidth={2}
       strokeLinecap="round"
       strokeLinejoin="round"
      />
    </svg>
  </div>
  <svg
    width={53}
    height={53}
    viewBox="0 0 53 53"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-[53px] h-[53px] absolute left-[15px] top-[551px]"
    preserveAspectRatio="none"
  >
    <circle cx="26.5" cy="26.5" r="26.5" fill="#DCE6FF" />
    <path
      d="M33.6585 24.701L26.6585 18.576C26.2815 18.2461 25.7185 18.2461 25.3415 18.576L18.3415 24.701C18.1245 24.8909 18 25.1653 18 25.4536V33.9998C18 34.5521 18.4477 34.9998 19 34.9998H23C23.5523 34.9998 24 34.5521 24 33.9998V29.9998C24 29.4476 24.4477 28.9998 25 28.9998H27C27.5523 28.9998 28 29.4476 28 29.9998V33.9998C28 34.5521 28.4477 34.9998 29 34.9998H33C33.5523 34.9998 34 34.5521 34 33.9998V25.4536C34 25.1653 33.8755 24.8909 33.6585 24.701Z"
      stroke="#6A7CA8"
     strokeWidth={2}
     strokeLinecap="round"
     strokeLinejoin="round"
    />
  </svg>
  <div className="w-[375px] h-[70px] absolute left-[-1px] top-[596px] overflow-hidden bg-white">
    <div className="w-[62px] h-[49px]">
      <svg
        width={32}
        height={32}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8 absolute left-[124.5px] top-[10.5px]"
        preserveAspectRatio="xMidYMid meet"
      >
        <path
          d="M13.3333 22.6667C18.488 22.6667 22.6667 18.488 22.6667 13.3333C22.6667 8.17868 18.488 4 13.3333 4C8.17868 4 4 8.17868 4 13.3333C4 18.488 8.17868 22.6667 13.3333 22.6667Z"
          stroke="#3679FF"
         strokeWidth={2}
         strokeLinecap="round"
         strokeLinejoin="round"
        />
        <path
          d="M20 20L28 28"
          stroke="#3679FF"
         strokeWidth={2}
         strokeLinecap="round"
         strokeLinejoin="round"
        />
      </svg>
      <p className="absolute left-[110px] top-[47px] text-xs font-bold text-left text-[#3679ff]">
        Recherche
      </p>
    </div>
    <div className="w-[62px] h-[49px]">
      <svg
        width={32}
        height={32}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8 absolute left-[227.5px] top-[10.5px]"
        preserveAspectRatio="xMidYMid meet"
      >
        <path
          d="M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z"
          stroke="#272832"
         strokeWidth={2}
         strokeLinecap="round"
         strokeLinejoin="round"
        />
        <path
          d="M22.9553 25.7762C21.2464 23.8676 18.7634 22.6665 15.9998 22.6665C13.2363 22.6665 10.7533 23.8676 9.04431 25.7762"
          stroke="#272832"
         strokeWidth={2}
         strokeLinecap="round"
         strokeLinejoin="round"
        />
        <path
          d="M16 18.6665C18.2091 18.6665 20 16.8756 20 14.6665C20 12.4574 18.2091 10.6665 16 10.6665C13.7909 10.6665 12 12.4574 12 14.6665C12 16.8756 13.7909 18.6665 16 18.6665Z"
          stroke="#272832"
         strokeWidth={2}
         strokeLinecap="round"
         strokeLinejoin="round"
        />
      </svg>
      <p className="absolute left-[213px] top-[47px] text-xs font-bold text-left text-[#272832]">
        Connexion
      </p>
    </div>
    <div className="w-[33px] h-[49px]">
      <p className="absolute left-[316px] top-[47px] text-xs font-bold text-left text-[#272832]">
        Menu
      </p>
      <svg
        width={32}
        height={32}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8 absolute left-[316.5px] top-[10.5px]"
        preserveAspectRatio="xMidYMid meet"
      >
        <path
          d="M6.66663 22.6665L25.3333 22.6665"
          stroke="#272832"
         strokeWidth={2}
         strokeLinecap="round"
         strokeLinejoin="round"
        />
        <path
          d="M6.66663 16H25.3333"
          stroke="#272832"
         strokeWidth={2}
         strokeLinecap="round"
         strokeLinejoin="round"
        />
        <path
          d="M6.66663 9.3335L17.3333 9.3335"
          stroke="#272832"
         strokeWidth={2}
         strokeLinecap="round"
         strokeLinejoin="round"
        />
      </svg>
    </div>
    <svg
      width={375}
      height={1}
      viewBox="0 0 375 1"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute left-[-1px] top-0"
      preserveAspectRatio="xMidYMid meet"
    >
      <line y1="0.5" x2={375} y2="0.5" stroke="#EAEFFA" />
    </svg>
    <div className="w-[43px] h-[49px]">
      <svg
        width={32}
        height={32}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8 absolute left-[30.5px] top-[10.5px]"
        preserveAspectRatio="xMidYMid meet"
      >
        <path
          d="M26.2114 12.935L16.878 4.76837C16.3753 4.32851 15.6247 4.32851 15.122 4.76837L5.7887 12.935C5.49935 13.1882 5.33337 13.554 5.33337 13.9385V25.3335C5.33337 26.0698 5.93033 26.6668 6.66671 26.6668H12C12.7364 26.6668 13.3334 26.0698 13.3334 25.3335V20.0001C13.3334 19.2637 13.9303 18.6668 14.6667 18.6668H17.3334C18.0698 18.6668 18.6667 19.2637 18.6667 20.0001V25.3335C18.6667 26.0698 19.2637 26.6668 20 26.6668H25.3334C26.0698 26.6668 26.6667 26.0698 26.6667 25.3335V13.9385C26.6667 13.554 26.5007 13.1882 26.2114 12.935Z"
          stroke="#3679FF"
         strokeWidth={2}
         strokeLinecap="round"
         strokeLinejoin="round"
        />
      </svg>
      <p className="absolute left-[26px] top-[47px] text-xs font-bold text-left text-[#3679ff]">
        Acceuil
      </p>
    </div>
  </div>
  <div className="w-[375px] h-[667px] absolute left-[-1px] top-[-1px] opacity-30 bg-[#051f52]" />
  <div className="w-[343px] h-[573px] absolute left-[17px] top-[46px] rounded-xl bg-white border border-[#eaeffa]">
    <div className="flex justify-center items-start absolute left-[29.5px] top-[23px] gap-3">
      <p className="flex-grow-0 flex-shrink-0 w-[263px] h-[33px] text-lg font-bold text-center text-black">
        Finalise ton inscription
      </p>
      <svg
        width={25}
        height={24}
        viewBox="0 0 25 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
        preserveAspectRatio="xMidYMid meet"
      >
        <path
          d="M18.5 18L6.5 6"
          stroke="#14181F"
         strokeWidth={2}
         strokeLinecap="round"
         strokeLinejoin="round"
        />
        <path
          d="M18.5 6L6.5 18"
          stroke="#14181F"
         strokeWidth={2}
         strokeLinecap="round"
         strokeLinejoin="round"
        />
      </svg>
    </div>
    <div className="w-[295px] h-20 absolute left-[23px] top-[104px]">
      <p className="absolute left-0 top-0 text-base font-bold text-left text-[#0e215c]">Nom</p>
      <div className="w-[295px] h-[52px] absolute left-[-1.5px] top-[26.5px] rounded-xl bg-white border-2 border-[#eff4ff]" />
      <p className="w-[264.74px] absolute left-[15.13px] top-11 text-base font-bold text-left text-[#6976a0]">
        Votre nom
      </p>
    </div>
    <svg
      width={343}
      height={2}
      viewBox="0 0 343 2"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute left-[-1.5px] top-[79.5px]"
      preserveAspectRatio="xMidYMid meet"
    >
      <line x1="8.74228e-8" y1={1} x2={343} y2="1.00003" stroke="#EFF4FF"strokeWidth={2} />
    </svg>
    <div className="w-[295px] h-20 absolute left-[23px] top-[200px]">
      <p className="absolute left-0 top-0 text-base font-bold text-left text-[#0e215c]">Prénom</p>
      <div className="w-[295px] h-[52px] absolute left-[-1.5px] top-[26.5px] rounded-xl bg-white border-2 border-[#eff4ff]" />
      <p className="w-[264.74px] absolute left-[15.13px] top-11 text-base font-bold text-left text-[#6976a0]">
        Votre prénom
      </p>
    </div>
    <div className="w-[295px] h-20 absolute left-[23px] top-[296px]">
      <p className="absolute left-0 top-0 text-base font-bold text-left text-[#0e215c]">
        Téléphone
      </p>
      <div className="w-[295px] h-[52px] absolute left-[-1.5px] top-[26.5px] rounded-xl bg-white border-2 border-[#eff4ff]" />
      <p className="w-[264.74px] absolute left-[15.13px] top-11 text-base font-bold text-left text-[#6976a0]">
        Votre téléphone
      </p>
    </div>
    <div
      className="flex justify-center items-center w-[295px] absolute left-[23px] top-[392px] gap-2.5 px-[120px] py-4 rounded-xl"
      style={{ background: "linear-gradient(to bottom, #81a3f9 -0.06%, #3462d8 108.09%)" }}
    >
      <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-white">Continuer</p>
    </div>
  </div>
</div>


444444444444444444444444444444

<div className="w-[375px] h-[667px] relative overflow-hidden bg-white mb-8">
  <img
    src="rectangle-256.png"
    className="w-[343px] h-[175px] absolute left-[15px] top-[221px] rounded-xl object-cover"
  />
  <p className="w-[341px] absolute left-[17px] top-[75px] text-[28px] font-bold text-center">
    <span className="w-[341px] text-[28px] font-bold text-center text-[#113eb6]">
      Devenir propriétaire devient plus{" "}
    </span>
    <span className="w-[341px] text-[28px] font-bold text-center text-[#3679ff]">accessible.</span>
  </p>
  <p className="w-[312px] absolute left-[31px] top-[139px] text-base text-center text-[#849cd9]">
    Réalisez votre premier achat immobilier pour seulement 700€ par mois !*
  </p>
  <div className="w-[131px] h-[35px]">
    <div className="w-[131px] h-[35px]">
      <p className="w-3 h-[9.89px] absolute left-[223px] top-[37.84px] text-[9px] font-bold text-left text-[#43434a]">
        By
      </p>
      <img
        src="nexity-logo-1.png"
        className="w-4 h-[15.82px] absolute left-[236.5px] top-[34.38px] object-cover"
      />
      <svg
        width={97}
        height={35}
        viewBox="0 0 97 35"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute left-[121.81px] top-[23.81px]"
        preserveAspectRatio="none"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14.7453 23.1445L14.7407 23.1523C14.0805 24.2619 13.8662 25.08 13.8662 25.6532C13.8662 26.2912 14.0388 26.7946 14.3655 27.2364C14.8307 27.8346 15.285 28.2229 15.7103 28.4659C16.4653 28.8776 17.1606 29.2805 17.7941 29.6749C18.1547 29.8857 18.5359 30.1422 18.8538 30.4538C19.1298 30.7245 19.6851 31.3528 19.6851 32.289C19.6851 33.1924 19.2405 34.0361 18.4037 34.5342C17.7331 34.9334 16.9929 35 16.4661 35C14.4605 35 12.542 33.9342 10.7836 32.4439L10.777 32.4383L10.7704 32.4326C10.006 31.7736 9.36034 31.054 8.85982 30.2758C7.82421 31.5507 7.04593 32.473 6.53465 33.0274C6.11811 33.4933 5.70025 33.9128 5.29206 34.233C5.08526 34.3952 4.83687 34.567 4.55443 34.7055C4.28689 34.8366 3.86403 35 3.34275 35C1.95883 35 1.11059 34.0693 0.685061 33.4017L0.645838 33.3402L0.611212 33.2761C0.237761 32.5844 0 31.8163 0 30.9942C0 30.6626 0.0691356 30.2922 0.122125 30.0308C0.186073 29.7154 0.277136 29.328 0.390847 28.8785C0.618863 27.9773 0.955872 26.7564 1.39802 25.2256C2.26023 22.2136 3.12892 18.5842 4.00234 14.3292C4.86254 10.1385 5.28237 6.40441 5.28237 3.11561C5.28237 2.82873 5.29959 2.51234 5.36008 2.20093C5.41034 1.94226 5.52396 1.5004 5.83869 1.07999C6.53482 0.118923 7.62675 0 8.17117 0C9.01283 0 9.65259 0.387519 10.0607 0.754313C10.4422 1.09721 10.7278 1.51146 10.9462 1.89667C11.4801 2.76068 11.7615 3.71808 11.7615 4.7341C11.7615 8.59658 11.0805 13.2941 9.75071 18.8031C11.3809 16.7253 12.8167 15.037 14.0557 13.7464L14.0606 13.7412L14.0656 13.736C14.666 13.1194 15.2091 12.6043 15.6786 12.2293C15.9111 12.0436 16.1721 11.8543 16.4479 11.7018C16.666 11.5812 17.158 11.3295 17.7867 11.3295C18.8431 11.3295 19.6799 11.824 20.2664 12.4374C20.6926 12.8623 21.2946 13.6144 21.2946 14.6474C21.2946 15.2079 21.0739 15.6394 20.9834 15.8074C20.8632 16.0305 20.719 16.2342 20.5877 16.4044C20.3219 16.7486 19.9674 17.1361 19.5601 17.5498C18.788 18.3338 17.9336 19.1985 16.997 20.1438C16.1995 20.9487 15.4473 21.9401 14.7499 23.1367L14.7453 23.1445ZM18.7772 13.8382C18.4746 13.5145 18.1444 13.3526 17.7867 13.3526C17.4566 13.3526 16.7138 13.946 15.5582 15.1329C13.677 17.0927 11.2794 20.0583 8.36526 24.0298C7.63601 25.0236 6.87442 26.0805 6.08049 27.2003C5.5928 27.8882 5.09291 28.5998 4.58081 29.3353C4.63476 29.1697 4.68829 29.0048 4.74139 28.8404C5.38175 26.8579 5.96006 24.9579 6.47632 23.1403C8.62418 15.5783 9.69811 9.44291 9.69811 4.7341C9.69811 4.25841 9.60156 3.80456 9.40846 3.37256C9.38336 3.31642 9.35663 3.26064 9.32828 3.20523C9.31293 3.17525 9.29711 3.14537 9.28081 3.11561C9.24357 3.04761 9.20384 2.98017 9.16162 2.91329C8.83147 2.31985 8.50132 2.02312 8.17117 2.02312C7.84102 2.02312 7.62092 2.10405 7.51087 2.2659C7.40083 2.40077 7.3458 2.68401 7.3458 3.11561C7.3458 3.3392 7.34395 3.56454 7.34026 3.79164C7.33988 3.81518 7.33948 3.83875 7.33905 3.86234C7.28063 7.12385 6.84268 10.7458 6.02521 14.7283C5.14481 19.0173 4.26442 22.6994 3.38402 25.7746C2.50363 28.8227 2.06343 30.5626 2.06343 30.9942C2.06343 31.4258 2.18723 31.8709 2.43484 32.3295C2.70997 32.7611 3.0126 32.9769 3.34275 32.9769C3.6729 32.9769 4.22315 32.5453 4.99349 31.6821C5.27125 31.3816 5.64405 30.9519 6.11187 30.3931C6.11775 30.3861 6.12366 30.3791 6.12957 30.372C6.24506 30.234 6.36628 30.0881 6.49323 29.9345C6.52507 29.896 6.55726 29.857 6.58981 29.8175C6.93272 29.4014 7.31562 28.931 7.7385 28.4063C7.79778 28.3327 7.85784 28.2581 7.91869 28.1824C8.36578 27.6263 8.85529 27.0125 9.38722 26.341C9.50261 26.1954 9.61999 26.047 9.73938 25.896V26.341C9.73938 27.1098 9.90794 27.8471 10.2451 28.5532C10.6414 29.3832 11.2707 30.1699 12.133 30.9133C13.0888 31.7234 13.9826 32.295 14.8144 32.628C15.1078 32.7455 15.3935 32.8333 15.6714 32.8915C15.6932 32.896 15.7149 32.9004 15.7365 32.9045C15.7575 32.9086 15.7784 32.9125 15.7993 32.9162C16.0268 32.9567 16.2491 32.9769 16.4661 32.9769C17.2365 32.9769 17.6217 32.7476 17.6217 32.289C17.6217 32.0462 17.319 31.7495 16.7138 31.3988C16.6325 31.3481 16.5499 31.2972 16.4661 31.2459C16.3865 31.1972 16.3057 31.1483 16.2238 31.0992C16.0605 31.0012 15.8928 30.9024 15.7206 30.8028C15.3937 30.6135 15.0507 30.421 14.6916 30.2254C13.9763 29.8208 13.316 29.2274 12.7107 28.4451C12.1054 27.6358 11.8028 26.7052 11.8028 25.6532C11.8028 24.6012 12.188 23.4277 12.9583 22.1329C13.7287 20.8112 14.5816 19.6782 15.517 18.7341C16.4524 17.79 17.3053 16.9268 18.0756 16.1445C18.846 15.3622 19.2311 14.8632 19.2311 14.6474C19.2311 14.4046 19.0798 14.1349 18.7772 13.8382ZM16.5849 30.9475C16.5849 30.9475 16.5796 30.9488 16.5676 30.9499C16.5787 30.9479 16.5849 30.9475 16.5849 30.9475Z"
          fill="url(#paint0_linear_499_3981)"
        />
        <path
          d="M25.0427 32.2403C24.6187 32.2403 24.2654 32.1249 23.9828 31.8939C23.7159 31.6476 23.5824 31.3012 23.5824 30.8548V21.9409C23.5824 21.4944 23.7159 21.1557 23.9828 20.9248C24.2654 20.6939 24.6187 20.5784 25.0427 20.5784C25.4666 20.5784 25.8199 20.6939 26.1026 20.9248C26.3852 21.1557 26.5265 21.4944 26.5265 21.9409V30.8548C26.5265 31.3012 26.3852 31.6476 26.1026 31.8939C25.8199 32.1249 25.4666 32.2403 25.0427 32.2403ZM25.0427 18.5232C24.5088 18.5232 24.0849 18.3846 23.7708 18.1075C23.4568 17.815 23.2998 17.4378 23.2998 16.9759C23.2998 16.5141 23.4568 16.1446 23.7708 15.8675C24.0849 15.5904 24.5088 15.4518 25.0427 15.4518C25.5608 15.4518 25.9769 15.5904 26.291 15.8675C26.6207 16.1446 26.7856 16.5141 26.7856 16.9759C26.7856 17.4378 26.6286 17.815 26.3145 18.1075C26.0005 18.3846 25.5765 18.5232 25.0427 18.5232Z"
          fill="url(#paint1_linear_499_3981)"
        />
        <path
          d="M35.6784 30.0927C36.4635 30.1389 36.856 30.4853 36.856 31.1319C36.856 31.5014 36.699 31.7862 36.385 31.9863C36.0866 32.1711 35.6548 32.248 35.0896 32.2173L34.4536 32.1711C31.8157 31.9863 30.4967 30.6007 30.4967 28.0143V22.9801H29.3191C28.8951 22.9801 28.5654 22.8877 28.3299 22.703C28.11 22.5182 28.0001 22.2488 28.0001 21.8947C28.0001 21.5406 28.11 21.2712 28.3299 21.0865C28.5654 20.9017 28.8951 20.8094 29.3191 20.8094H30.4967V18.6848C30.4967 18.2691 30.6302 17.9381 30.8971 17.6918C31.1641 17.4455 31.5252 17.3223 31.9806 17.3223C32.4202 17.3223 32.7735 17.4455 33.0405 17.6918C33.3074 17.9381 33.4409 18.2691 33.4409 18.6848V20.8094H35.4429C35.8668 20.8094 36.1887 20.9017 36.4085 21.0865C36.6441 21.2712 36.7618 21.5406 36.7618 21.8947C36.7618 22.2488 36.6441 22.5182 36.4085 22.703C36.1887 22.8877 35.8668 22.9801 35.4429 22.9801H33.4409V28.2222C33.4409 29.3614 33.9747 29.9695 35.0425 30.0465L35.6784 30.0927Z"
          fill="url(#paint2_linear_499_3981)"
        />
        <path
          d="M45.8721 32.2403C45.4482 32.2403 45.0949 32.1249 44.8122 31.8939C44.5453 31.6476 44.4118 31.3012 44.4118 30.8548V17.0683C44.4118 16.6218 44.5453 16.2831 44.8122 16.0522C45.0949 15.8213 45.4482 15.7058 45.8721 15.7058C46.2961 15.7058 46.6494 15.8213 46.932 16.0522C47.2147 16.2831 47.356 16.6218 47.356 17.0683V30.8548C47.356 31.3012 47.2147 31.6476 46.932 31.8939C46.6494 32.1249 46.2961 32.2403 45.8721 32.2403Z"
          fill="url(#paint3_linear_499_3981)"
        />
        <path
          d="M58.948 29.0073C59.215 29.0073 59.4269 29.1074 59.584 29.3075C59.7567 29.5077 59.843 29.7771 59.843 30.1158C59.843 30.5931 59.5525 30.9933 58.9716 31.3166C58.4377 31.6091 57.8332 31.8478 57.158 32.0325C56.4828 32.2019 55.839 32.2865 55.2266 32.2865C53.3738 32.2865 51.9057 31.7631 50.8222 30.7162C49.7388 29.6693 49.1971 28.2376 49.1971 26.4209C49.1971 25.2663 49.4326 24.2425 49.9037 23.3496C50.3747 22.4566 51.0342 21.7639 51.8821 21.2712C52.7457 20.7786 53.7193 20.5322 54.8027 20.5322C55.839 20.5322 56.7419 20.7555 57.5113 21.2019C58.2807 21.6484 58.8774 22.2796 59.3013 23.0956C59.7253 23.9115 59.9372 24.8737 59.9372 25.9822C59.9372 26.6442 59.6389 26.9752 59.0422 26.9752H52.0941C52.1883 28.0374 52.4945 28.8226 53.0127 29.3306C53.5308 29.8233 54.2845 30.0696 55.2738 30.0696C55.7762 30.0696 56.2159 30.008 56.5927 29.8849C56.9853 29.7617 57.4249 29.5924 57.9117 29.3768C58.3827 29.1305 58.7282 29.0073 58.948 29.0073ZM54.8734 22.5644C54.0726 22.5644 53.4288 22.8107 52.942 23.3034C52.471 23.796 52.1883 24.5042 52.0941 25.4279H57.4171C57.3857 24.4888 57.1501 23.7806 56.7105 23.3034C56.2708 22.8107 55.6585 22.5644 54.8734 22.5644Z"
          fill="url(#paint4_linear_499_3981)"
        />
        <path
          d="M74.1187 20.5322C75.5005 20.5322 76.529 20.9171 77.2042 21.6869C77.8794 22.4566 78.217 23.619 78.217 25.1739V30.8548C78.217 31.2858 78.0835 31.6245 77.8166 31.8709C77.5653 32.1172 77.212 32.2403 76.7567 32.2403C76.3013 32.2403 75.9402 32.1172 75.6732 31.8709C75.4063 31.6245 75.2728 31.2858 75.2728 30.8548V25.3356C75.2728 24.458 75.1001 23.8191 74.7547 23.4189C74.4249 23.0186 73.8989 22.8184 73.1766 22.8184C72.3287 22.8184 71.6457 23.0802 71.1275 23.6036C70.625 24.127 70.3738 24.8275 70.3738 25.705V30.8548C70.3738 31.2858 70.2403 31.6245 69.9734 31.8709C69.7065 32.1172 69.3453 32.2403 68.89 32.2403C68.4346 32.2403 68.0735 32.1172 67.8065 31.8709C67.5553 31.6245 67.4297 31.2858 67.4297 30.8548V21.9178C67.4297 21.5175 67.5632 21.1942 67.8301 20.9479C68.097 20.7016 68.4582 20.5784 68.9135 20.5784C69.3218 20.5784 69.6515 20.7016 69.9028 20.9479C70.1697 21.1788 70.3032 21.4867 70.3032 21.8716V22.4951C70.6957 21.8639 71.2217 21.379 71.8812 21.0403C72.5407 20.7016 73.2865 20.5322 74.1187 20.5322Z"
          fill="url(#paint5_linear_499_3981)"
        />
        <path
          d="M81.7358 32.2403C81.3118 32.2403 80.9585 32.1249 80.6759 31.8939C80.4089 31.6476 80.2755 31.3012 80.2755 30.8548V21.9409C80.2755 21.4944 80.4089 21.1557 80.6759 20.9248C80.9585 20.6939 81.3118 20.5784 81.7358 20.5784C82.1597 20.5784 82.513 20.6939 82.7956 20.9248C83.0783 21.1557 83.2196 21.4944 83.2196 21.9409V30.8548C83.2196 31.3012 83.0783 31.6476 82.7956 31.8939C82.513 32.1249 82.1597 32.2403 81.7358 32.2403ZM81.7358 18.5232C81.2019 18.5232 80.7779 18.3846 80.4639 18.1075C80.1499 17.815 79.9928 17.4378 79.9928 16.9759C79.9928 16.5141 80.1499 16.1446 80.4639 15.8675C80.7779 15.5904 81.2019 15.4518 81.7358 15.4518C82.2539 15.4518 82.67 15.5904 82.9841 15.8675C83.3138 16.1446 83.4787 16.5141 83.4787 16.9759C83.4787 17.4378 83.3217 17.815 83.0076 18.1075C82.6936 18.3846 82.2696 18.5232 81.7358 18.5232Z"
          fill="url(#paint6_linear_499_3981)"
        />
        <path
          d="M95.4926 15.7058C95.9323 15.7058 96.2934 15.829 96.5761 16.0753C96.8587 16.3216 97 16.6449 97 17.0452V30.8548C97 31.2704 96.8665 31.6014 96.5996 31.8477C96.3327 32.0941 95.9794 32.2172 95.5397 32.2172C95.1001 32.2172 94.7468 32.0941 94.4798 31.8477C94.2129 31.6014 94.0794 31.2704 94.0794 30.8548V30.2774C93.734 30.9086 93.2315 31.4013 92.572 31.7554C91.9283 32.1095 91.1903 32.2865 90.3581 32.2865C89.3688 32.2865 88.4817 32.0402 87.6966 31.5475C86.9272 31.0549 86.3227 30.3621 85.883 29.4692C85.459 28.5609 85.2471 27.5217 85.2471 26.3516C85.2471 25.1816 85.459 24.1578 85.883 23.2803C86.3227 22.4027 86.9272 21.7254 87.6966 21.2481C88.466 20.7709 89.3531 20.5322 90.3581 20.5322C91.1903 20.5322 91.9283 20.7016 92.572 21.0403C93.2158 21.379 93.7104 21.8562 94.0559 22.472V16.999C94.0559 16.6141 94.1815 16.3062 94.4327 16.0753C94.6997 15.829 95.053 15.7058 95.4926 15.7058ZM91.1353 30.0465C92.0774 30.0465 92.7997 29.7309 93.3022 29.0997C93.8204 28.4685 94.0794 27.5679 94.0794 26.3978C94.0794 25.2278 93.8204 24.3349 93.3022 23.719C92.7997 23.0878 92.0853 22.7722 91.1589 22.7722C90.2168 22.7722 89.4866 23.0801 88.9684 23.6959C88.4503 24.3118 88.1912 25.197 88.1912 26.3516C88.1912 27.5217 88.4503 28.43 88.9684 29.0766C89.4866 29.7232 90.2089 30.0465 91.1353 30.0465Z"
          fill="url(#paint7_linear_499_3981)"
        />
        <defs>
          <lineargradient
            id="paint0_linear_499_3981"
            x1="92.364"
            y1="-1.60846"
            x2="73.9333"
            y2="61.008"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#C399DB" />
            <stop offset={1} stopColor="#5882F7" />
          </lineargradient>
          <lineargradient
            id="paint1_linear_499_3981"
            x1="92.364"
            y1="-1.60846"
            x2="73.9333"
            y2="61.008"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#C399DB" />
            <stop offset={1} stopColor="#5882F7" />
          </lineargradient>
          <lineargradient
            id="paint2_linear_499_3981"
            x1="92.364"
            y1="-1.60846"
            x2="73.9333"
            y2="61.008"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#C399DB" />
            <stop offset={1} stopColor="#5882F7" />
          </lineargradient>
          <lineargradient
            id="paint3_linear_499_3981"
            x1="92.364"
            y1="-1.60846"
            x2="73.9333"
            y2="61.008"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#C399DB" />
            <stop offset={1} stopColor="#5882F7" />
          </lineargradient>
          <lineargradient
            id="paint4_linear_499_3981"
            x1="92.364"
            y1="-1.60846"
            x2="73.9333"
            y2="61.008"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#C399DB" />
            <stop offset={1} stopColor="#5882F7" />
          </lineargradient>
          <lineargradient
            id="paint5_linear_499_3981"
            x1="92.364"
            y1="-1.60846"
            x2="73.9333"
            y2="61.008"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#C399DB" />
            <stop offset={1} stopColor="#5882F7" />
          </lineargradient>
          <lineargradient
            id="paint6_linear_499_3981"
            x1="92.364"
            y1="-1.60846"
            x2="73.9333"
            y2="61.008"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#C399DB" />
            <stop offset={1} stopColor="#5882F7" />
          </lineargradient>
          <lineargradient
            id="paint7_linear_499_3981"
            x1="92.364"
            y1="-1.60846"
            x2="73.9333"
            y2="61.008"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#C399DB" />
            <stop offset={1} stopColor="#5882F7" />
          </lineargradient>
        </defs>
      </svg>
    </div>
  </div>
  <p className="w-[274px] absolute left-[85px] top-[535px] text-lg font-bold text-left text-[#1a2e6c]">
    <span className="w-[274px] text-lg font-bold text-left text-[#1a2e6c]">
      Des logements dans toute{" "}
    </span>
    <br />
    <span className="w-[274px] text-lg font-bold text-left text-[#1a2e6c]">la France</span>
  </p>
  <p className="w-[274px] absolute left-[85px] top-[585px] text-sm font-medium text-left text-[#849cd9]">
    Plus de 3 000 logements neufs disponibles.
  </p>
  <p className="w-[252px] absolute left-[61px] top-[475px] text-sm font-medium text-center text-[#849cd9]">
    Construire son projet immobilier avec Kit le nid c’est bénéficier :
  </p>
  <p className="w-[343px] absolute left-4 top-[421px] text-lg font-bold text-center text-[#1a2e6c]">
    <span className="w-[343px] text-lg font-bold text-center text-[#1a2e6c]">
      L’achat dans une résidence
    </span>
    <br />
    <span className="w-[343px] text-lg font-bold text-center text-[#1a2e6c]">
      neuve avec Kit le nid
    </span>
  </p>
  <div className="w-[291px] h-[55px] absolute left-[41px] top-[194px]">
    <div className="w-[291px] h-[55px] absolute left-[-1.5px] top-[-1.5px] rounded-[70px] bg-white border-2 border-[#eff4ff]" />
    <p className="w-[223.98px] absolute left-[13.57px] top-4 text-lg font-bold text-left text-[#0e215c]">
      Localisation
    </p>
    <div
      className="w-[39px] h-[39px] absolute left-[243px] top-[7px] rounded-[42px]"
      style={{ background: "linear-gradient(to bottom, #81a3f9 -0.06%, #3462d8 108.09%)" }}
    />
    <svg
      width={23}
      height={23}
      viewBox="0 0 23 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-[23px] h-[23px] absolute left-[251px] top-[15px]"
      preserveAspectRatio="xMidYMid meet"
    >
      <path
        d="M9.58333 16.2917C13.2882 16.2917 16.2917 13.2882 16.2917 9.58333C16.2917 5.87842 13.2882 2.875 9.58333 2.875C5.87842 2.875 2.875 5.87842 2.875 9.58333C2.875 13.2882 5.87842 16.2917 9.58333 16.2917Z"
        stroke="white"
       strokeWidth={2}
       strokeLinecap="round"
       strokeLinejoin="round"
      />
      <path
        d="M14.375 14.375L20.125 20.125"
        stroke="white"
       strokeWidth={2}
       strokeLinecap="round"
       strokeLinejoin="round"
      />
    </svg>
  </div>
  <svg
    width={53}
    height={53}
    viewBox="0 0 53 53"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-[53px] h-[53px] absolute left-[15px] top-[551px]"
    preserveAspectRatio="none"
  >
    <circle cx="26.5" cy="26.5" r="26.5" fill="#DCE6FF" />
    <path
      d="M33.6585 24.701L26.6585 18.576C26.2815 18.2461 25.7185 18.2461 25.3415 18.576L18.3415 24.701C18.1245 24.8909 18 25.1653 18 25.4536V33.9998C18 34.5521 18.4477 34.9998 19 34.9998H23C23.5523 34.9998 24 34.5521 24 33.9998V29.9998C24 29.4476 24.4477 28.9998 25 28.9998H27C27.5523 28.9998 28 29.4476 28 29.9998V33.9998C28 34.5521 28.4477 34.9998 29 34.9998H33C33.5523 34.9998 34 34.5521 34 33.9998V25.4536C34 25.1653 33.8755 24.8909 33.6585 24.701Z"
      stroke="#6A7CA8"
     strokeWidth={2}
     strokeLinecap="round"
     strokeLinejoin="round"
    />
  </svg>
  <div className="w-[375px] h-[70px] absolute left-[-1px] top-[596px] overflow-hidden bg-white">
    <div className="w-[62px] h-[49px]">
      <svg
        width={32}
        height={32}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8 absolute left-[124.5px] top-[10.5px]"
        preserveAspectRatio="xMidYMid meet"
      >
        <path
          d="M13.3333 22.6667C18.488 22.6667 22.6667 18.488 22.6667 13.3333C22.6667 8.17868 18.488 4 13.3333 4C8.17868 4 4 8.17868 4 13.3333C4 18.488 8.17868 22.6667 13.3333 22.6667Z"
          stroke="#3679FF"
         strokeWidth={2}
         strokeLinecap="round"
         strokeLinejoin="round"
        />
        <path
          d="M20 20L28 28"
          stroke="#3679FF"
         strokeWidth={2}
         strokeLinecap="round"
         strokeLinejoin="round"
        />
      </svg>
      <p className="absolute left-[110px] top-[47px] text-xs font-bold text-left text-[#3679ff]">
        Recherche
      </p>
    </div>
    <div className="w-[62px] h-[49px]">
      <svg
        width={32}
        height={32}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8 absolute left-[227.5px] top-[10.5px]"
        preserveAspectRatio="xMidYMid meet"
      >
        <path
          d="M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z"
          stroke="#272832"
         strokeWidth={2}
         strokeLinecap="round"
         strokeLinejoin="round"
        />
        <path
          d="M22.9553 25.7762C21.2463 23.8676 18.7633 22.6665 15.9998 22.6665C13.2362 22.6665 10.7532 23.8676 9.04425 25.7762"
          stroke="#272832"
         strokeWidth={2}
         strokeLinecap="round"
         strokeLinejoin="round"
        />
        <path
          d="M16 18.6665C18.2091 18.6665 20 16.8756 20 14.6665C20 12.4574 18.2091 10.6665 16 10.6665C13.7909 10.6665 12 12.4574 12 14.6665C12 16.8756 13.7909 18.6665 16 18.6665Z"
          stroke="#272832"
         strokeWidth={2}
         strokeLinecap="round"
         strokeLinejoin="round"
        />
      </svg>
      <p className="absolute left-[213px] top-[47px] text-xs font-bold text-left text-[#272832]">
        Connexion
      </p>
    </div>
    <div className="w-[33px] h-[49px]">
      <p className="absolute left-[316px] top-[47px] text-xs font-bold text-left text-[#272832]">
        Menu
      </p>
      <svg
        width={32}
        height={32}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8 absolute left-[316.5px] top-[10.5px]"
        preserveAspectRatio="xMidYMid meet"
      >
        <path
          d="M6.66669 22.6665L25.3334 22.6665"
          stroke="#272832"
         strokeWidth={2}
         strokeLinecap="round"
         strokeLinejoin="round"
        />
        <path
          d="M6.66669 16H25.3334"
          stroke="#272832"
         strokeWidth={2}
         strokeLinecap="round"
         strokeLinejoin="round"
        />
        <path
          d="M6.66669 9.3335L17.3334 9.3335"
          stroke="#272832"
         strokeWidth={2}
         strokeLinecap="round"
         strokeLinejoin="round"
        />
      </svg>
    </div>
    <svg
      width={375}
      height={1}
      viewBox="0 0 375 1"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute left-[-1px] top-0"
      preserveAspectRatio="xMidYMid meet"
    >
      <line y1="0.5" x2={375} y2="0.5" stroke="#EAEFFA" />
    </svg>
    <div className="w-[43px] h-[49px]">
      <svg
        width={32}
        height={32}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8 absolute left-[30.5px] top-[10.5px]"
        preserveAspectRatio="xMidYMid meet"
      >
        <path
          d="M26.2114 12.935L16.878 4.76837C16.3753 4.32851 15.6247 4.32851 15.122 4.76837L5.7887 12.935C5.49935 13.1882 5.33337 13.554 5.33337 13.9385V25.3335C5.33337 26.0698 5.93033 26.6668 6.66671 26.6668H12C12.7364 26.6668 13.3334 26.0698 13.3334 25.3335V20.0001C13.3334 19.2637 13.9303 18.6668 14.6667 18.6668H17.3334C18.0698 18.6668 18.6667 19.2637 18.6667 20.0001V25.3335C18.6667 26.0698 19.2637 26.6668 20 26.6668H25.3334C26.0698 26.6668 26.6667 26.0698 26.6667 25.3335V13.9385C26.6667 13.554 26.5007 13.1882 26.2114 12.935Z"
          stroke="#3679FF"
         strokeWidth={2}
         strokeLinecap="round"
         strokeLinejoin="round"
        />
      </svg>
      <p className="absolute left-[26px] top-[47px] text-xs font-bold text-left text-[#3679ff]">
        Acceuil
      </p>
    </div>
  </div>
  <div className="w-[375px] h-[667px] absolute left-[-1px] top-[-1px] opacity-30 bg-[#051f52]" />
  <div className="w-[343px] h-[590px] absolute left-[15px] top-[38px] rounded-xl bg-white border border-[#eaeffa]">
    <div className="flex justify-center items-start absolute left-[29.5px] top-[23px] gap-3">
      <p className="flex-grow-0 flex-shrink-0 w-[263px] h-[33px] text-lg font-bold text-center text-black">
        Finalise ton inscription
      </p>
      <svg
        width={25}
        height={24}
        viewBox="0 0 25 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
        preserveAspectRatio="xMidYMid meet"
      >
        <path
          d="M18.5 18L6.5 6"
          stroke="#14181F"
         strokeWidth={2}
         strokeLinecap="round"
         strokeLinejoin="round"
        />
        <path
          d="M18.5 6L6.49994 18"
          stroke="#14181F"
         strokeWidth={2}
         strokeLinecap="round"
         strokeLinejoin="round"
        />
      </svg>
    </div>
    <div className="w-[295px] h-20 absolute left-[23px] top-[104px]">
      <p className="absolute left-0 top-0 text-base font-bold text-left text-[#0e215c]">
        Mot de passe
      </p>
      <div className="w-[295px] h-[52px] absolute left-[-1.5px] top-[26.5px] rounded-xl bg-white border-2 border-[#eff4ff]" />
      <p className="w-[264.74px] absolute left-[15.13px] top-11 text-base font-bold text-left text-[#6976a0]">
        Choisissez un mot de passe
      </p>
    </div>
    <div
      className="flex justify-center items-center w-[295px] absolute left-[23px] top-[515px] gap-2.5 px-[120px] py-4 rounded-xl"
      style={{ background: "linear-gradient(to bottom, #81a3f9 -0.06%, #3462d8 108.09%)" }}
    >
      <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-white">Continuer</p>
    </div>
    <svg
      width={343}
      height={2}
      viewBox="0 0 343 2"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute left-[-1.5px] top-[79.5px]"
      preserveAspectRatio="xMidYMid meet"
    >
      <line x1="8.74228e-8" y1={1} x2={343} y2="1.00003" stroke="#EFF4FF"strokeWidth={2} />
    </svg>
    <div className="flex justify-center items-center w-[295px] absolute left-[22.5px] top-[263.5px] gap-6 p-4 rounded-xl bg-white border-2 border-[#eff4ff]">
      <div className="flex-grow-0 flex-shrink-0 w-4 h-4 relative overflow-hidden rounded-sm bg-white border-2 border-[#cdd2d8]">
        <div className="flex justify-center items-start w-2.5 h-2.5 absolute left-px top-px overflow-hidden gap-1 p-4 rounded-sm bg-[#3679ff] border-2 border-[#3679ff]" />
      </div>
      <p className="flex-grow-0 flex-shrink-0 w-60 text-xs text-left text-[#43434a]">
        En envoyant ma demande, j&apos; accepte que le groupe Nexity exploite mes données personnelles
        dans le cadre de ma demande de contact et de la relation commerciale qui pourrait en
        découler.
      </p>
    </div>
    <p className="w-[295px] h-28 absolute left-6 top-[388px] text-xs text-left text-[#6976a0]">
      <span className="w-[295px] h-28 text-xs font-semibold text-left text-[#6976a0]">
        Vous avez la possibilité de modifier votre consentement, d&apos; exercer vos droits pour accéder,
        rectifier, effacer vos données, limiter leurs traitements, vous y opposer et demander la
        portabilité de celle-ci. Pour cela vous pouvez consulter sur ce lien notre
      </span>
      <span className="w-[295px] h-28 text-xs text-left text-[#6976a0]">
        {" "}
        Charte de protection des données à caractère personnel.
      </span>
      <br />
    </p>
    <div className="flex justify-center items-center w-[295px] absolute left-[22.5px] top-[199.5px] gap-6 p-4 rounded-xl bg-white border-2 border-[#eff4ff]">
      <div className="flex justify-center items-start flex-grow-0 flex-shrink-0 w-4 h-4 overflow-hidden gap-1 p-4 rounded-sm bg-white border-2 border-[#cdd2d8]" />
      <p className="flex-grow-0 flex-shrink-0 w-60 text-xs text-left text-[#43434a]">
        J’accepte les conditions générales.{" "}
      </p>
    </div>
  </div>
</div>


5555555555555555555555555555

<div className="w-[375px] h-[812px] relative overflow-hidden bg-[#f9fbff] mb-8 mt-8">
  <img
    src="capture-d’écran-2021-01-27-à-18.28-2.png"
    className="w-[343px] h-[542px] absolute left-[15px] top-[191px] rounded-xl object-none"
  />
  <div className="w-[33px] h-[68px] absolute left-[317px] top-[657px] bg-white/[0.78]" />
  <p className="absolute left-[327px] top-[658px] text-[25px] font-bold text-left text-black">+</p>
  <p className="absolute left-[330px] top-[689px] text-[25px] font-bold text-left text-black">-</p>
  <div className="w-[131px] h-[35.4px]">
    <div className="w-[131px] h-[35.4px]">
      <p className="absolute left-[223px] top-[38px] text-[9px] font-bold text-left text-[#43434a]">
        By
      </p>
      <img
        src="nexity-logo-1.png"
        className="w-4 h-4 absolute left-[236.5px] top-[34.5px] object-cover"
      />
      <svg
        width={97}
        height={36}
        viewBox="0 0 97 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute left-[121.81px] top-[23.81px]"
        preserveAspectRatio="none"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14.7453 23.41L14.7407 23.4179C14.0805 24.5402 13.8662 25.3677 13.8662 25.9474C13.8662 26.5927 14.0388 27.1019 14.3655 27.5488C14.8307 28.1538 15.285 28.5466 15.7103 28.7924C16.4653 29.2088 17.1606 29.6164 17.7941 30.0153C18.1547 30.2285 18.5359 30.4879 18.8538 30.8031C19.1298 31.0769 19.6851 31.7125 19.6851 32.6594C19.6851 33.5732 19.2405 34.4265 18.4037 34.9304C17.7331 35.3341 16.9929 35.4015 16.4661 35.4015C14.4605 35.4015 12.542 34.3234 10.7836 32.816L10.777 32.8103L10.7704 32.8046C10.006 32.138 9.36034 31.4102 8.85982 30.6231C7.82421 31.9126 7.04593 32.8455 6.53465 33.4063C6.11811 33.8775 5.70025 34.3018 5.29206 34.6256C5.08526 34.7897 4.83687 34.9635 4.55443 35.1036C4.28689 35.2362 3.86403 35.4015 3.34275 35.4015C1.95883 35.4015 1.11059 34.4601 0.685061 33.7849L0.645838 33.7226L0.611212 33.6578C0.237761 32.9582 0 32.1812 0 31.3497C0 31.0143 0.0691356 30.6397 0.122125 30.3753C0.186073 30.0562 0.277136 29.6644 0.390847 29.2098C0.618863 28.2982 0.955872 27.0634 1.39802 25.5149C2.26023 22.4684 3.12892 18.7974 4.00234 14.4935C4.86254 10.2548 5.28237 6.47787 5.28237 3.15134C5.28237 2.86118 5.29959 2.54116 5.36008 2.22618C5.41034 1.96454 5.52396 1.51761 5.83869 1.09238C6.53482 0.120287 7.62675 0 8.17117 0C9.01283 0 9.65259 0.391964 10.0607 0.762965C10.4422 1.1098 10.7278 1.5288 10.9462 1.91843C11.4801 2.79235 11.7615 3.76073 11.7615 4.78841C11.7615 8.69519 11.0805 13.4466 9.75071 19.0188C11.3809 16.9172 12.8167 15.2095 14.0557 13.904L14.0606 13.8988L14.0656 13.8936C14.666 13.2698 15.2091 12.7489 15.6786 12.3696C15.9111 12.1817 16.1721 11.9903 16.4479 11.836C16.666 11.714 17.158 11.4594 17.7867 11.4594C18.8431 11.4594 19.6799 11.9596 20.2664 12.5801C20.6926 13.0098 21.2946 13.7706 21.2946 14.8154C21.2946 15.3823 21.0739 15.8188 20.9834 15.9887C20.8632 16.2144 20.719 16.4204 20.5877 16.5925C20.3219 16.9408 19.9674 17.3326 19.5601 17.7511C18.788 18.5441 17.9336 19.4187 16.997 20.3748C16.1995 21.189 15.4473 22.1917 14.7499 23.4021L14.7453 23.41ZM18.7772 13.9969C18.4746 13.6695 18.1444 13.5058 17.7867 13.5058C17.4566 13.5058 16.7138 14.106 15.5582 15.3065C13.677 17.2888 11.2794 20.2884 8.36526 24.3054C7.63601 25.3106 6.87442 26.3796 6.08049 27.5123C5.5928 28.2081 5.09291 28.9279 4.58081 29.6717C4.63476 29.5043 4.68829 29.3375 4.74139 29.1712C5.38175 27.166 5.96006 25.2442 6.47632 23.4057C8.62418 15.757 9.69811 9.55123 9.69811 4.78841C9.69811 4.30726 9.60156 3.8482 9.40846 3.41124C9.38336 3.35446 9.35663 3.29804 9.32828 3.242C9.31293 3.21167 9.29711 3.18145 9.28081 3.15134C9.24357 3.08256 9.20384 3.01435 9.16162 2.94671C8.83147 2.34645 8.50132 2.04633 8.17117 2.04633C7.84102 2.04633 7.62092 2.12818 7.51087 2.29189C7.40083 2.42831 7.3458 2.71479 7.3458 3.15134C7.3458 3.3775 7.34395 3.60543 7.34026 3.83513C7.33988 3.85894 7.33948 3.88278 7.33905 3.90664C7.28063 7.20556 6.84268 10.8691 6.02521 14.8973C5.14481 19.2355 4.26442 22.9598 3.38402 26.0702C2.50363 29.1533 2.06343 30.9132 2.06343 31.3497C2.06343 31.7863 2.18723 32.2365 2.43484 32.7003C2.70997 33.1369 3.0126 33.3551 3.34275 33.3551C3.6729 33.3551 4.22315 32.9186 4.99349 32.0455C5.27125 31.7415 5.64405 31.307 6.11187 30.7418C6.11775 30.7347 6.12366 30.7275 6.12957 30.7204C6.24506 30.5807 6.36628 30.4332 6.49323 30.2779C6.52507 30.2389 6.55726 30.1994 6.58981 30.1595C6.93272 29.7387 7.31562 29.2629 7.7385 28.7321C7.79778 28.6577 7.85784 28.5822 7.91869 28.5057C8.36578 27.9431 8.85529 27.3223 9.38722 26.6432C9.50261 26.4959 9.61999 26.3458 9.73938 26.193V26.6432C9.73938 27.4207 9.90794 28.1665 10.2451 28.8807C10.6414 29.7202 11.2707 30.516 12.133 31.2679C13.0888 32.0873 13.9826 32.6654 14.8144 33.0023C15.1078 33.1211 15.3935 33.2099 15.6714 33.2687C15.6932 33.2733 15.7149 33.2777 15.7365 33.282C15.7575 33.2861 15.7784 33.29 15.7993 33.2937C16.0268 33.3347 16.2491 33.3551 16.4661 33.3551C17.2365 33.3551 17.6217 33.1232 17.6217 32.6594C17.6217 32.4138 17.319 32.1137 16.7138 31.759C16.6325 31.7077 16.5499 31.6561 16.4661 31.6043C16.3865 31.5551 16.3057 31.5056 16.2238 31.4559C16.0605 31.3568 15.8928 31.2569 15.7206 31.1561C15.3937 30.9646 15.0507 30.77 14.6916 30.5721C13.9763 30.1629 13.316 29.5626 12.7107 28.7714C12.1054 27.9528 11.8028 27.0115 11.8028 25.9474C11.8028 24.8833 12.188 23.6965 12.9583 22.3868C13.7287 21.0499 14.5816 19.9039 15.517 18.949C16.4524 17.994 17.3053 17.1209 18.0756 16.3297C18.846 15.5384 19.2311 15.0337 19.2311 14.8154C19.2311 14.5698 19.0798 14.297 18.7772 13.9969ZM16.5849 31.3025C16.5849 31.3025 16.5796 31.3038 16.5676 31.3049C16.5787 31.3029 16.5849 31.3025 16.5849 31.3025Z"
          fill="url(#paint0_linear_499_4761)"
        />
        <path
          d="M25.0427 32.6101C24.6187 32.6101 24.2654 32.4934 23.9828 32.2598C23.7159 32.0106 23.5824 31.6603 23.5824 31.2087V22.1926C23.5824 21.741 23.7159 21.3984 23.9828 21.1648C24.2654 20.9313 24.6187 20.8145 25.0427 20.8145C25.4666 20.8145 25.8199 20.9313 26.1026 21.1648C26.3852 21.3984 26.5265 21.741 26.5265 22.1926V31.2087C26.5265 31.6603 26.3852 32.0106 26.1026 32.2598C25.8199 32.4934 25.4666 32.6101 25.0427 32.6101ZM25.0427 18.7356C24.5088 18.7356 24.0849 18.5955 23.7708 18.3152C23.4568 18.0193 23.2998 17.6378 23.2998 17.1707C23.2998 16.7035 23.4568 16.3298 23.7708 16.0495C24.0849 15.7692 24.5088 15.629 25.0427 15.629C25.5608 15.629 25.9769 15.7692 26.291 16.0495C26.6207 16.3298 26.7856 16.7035 26.7856 17.1707C26.7856 17.6378 26.6286 18.0193 26.3145 18.3152C26.0005 18.5955 25.5765 18.7356 25.0427 18.7356Z"
          fill="url(#paint1_linear_499_4761)"
        />
        <path
          d="M35.6784 30.4379C36.4635 30.4846 36.856 30.835 36.856 31.489C36.856 31.8627 36.699 32.1508 36.385 32.3532C36.0866 32.5401 35.6548 32.6179 35.0896 32.5868L34.4536 32.5401C31.8157 32.3532 30.4967 30.9517 30.4967 28.3357V23.2437H29.3191C28.8951 23.2437 28.5654 23.1502 28.3299 22.9634C28.11 22.7765 28.0001 22.504 28.0001 22.1459C28.0001 21.7877 28.11 21.5152 28.3299 21.3283C28.5654 21.1415 28.8951 21.048 29.3191 21.048H30.4967V18.8991C30.4967 18.4787 30.6302 18.1439 30.8971 17.8947C31.1641 17.6456 31.5252 17.521 31.9806 17.521C32.4202 17.521 32.7735 17.6456 33.0405 17.8947C33.3074 18.1439 33.4409 18.4787 33.4409 18.8991V21.048H35.4429C35.8668 21.048 36.1887 21.1415 36.4085 21.3283C36.6441 21.5152 36.7618 21.7877 36.7618 22.1459C36.7618 22.504 36.6441 22.7765 36.4085 22.9634C36.1887 23.1502 35.8668 23.2437 35.4429 23.2437H33.4409V28.5459C33.4409 29.6982 33.9747 30.3133 35.0425 30.3912L35.6784 30.4379Z"
          fill="url(#paint2_linear_499_4761)"
        />
        <path
          d="M45.8721 32.6101C45.4482 32.6101 45.0949 32.4934 44.8122 32.2598C44.5453 32.0106 44.4118 31.6603 44.4118 31.2087V17.2641C44.4118 16.8125 44.5453 16.4699 44.8122 16.2363C45.0949 16.0028 45.4482 15.886 45.8721 15.886C46.2961 15.886 46.6494 16.0028 46.932 16.2363C47.2147 16.4699 47.356 16.8125 47.356 17.2641V31.2087C47.356 31.6603 47.2147 32.0106 46.932 32.2598C46.6494 32.4934 46.2961 32.6101 45.8721 32.6101Z"
          fill="url(#paint3_linear_499_4761)"
        />
        <path
          d="M58.948 29.3401C59.215 29.3401 59.4269 29.4413 59.584 29.6437C59.7567 29.8461 59.843 30.1187 59.843 30.4612C59.843 30.944 59.5525 31.3488 58.9716 31.6758C58.4377 31.9717 57.8332 32.2131 57.158 32.3999C56.4828 32.5712 55.839 32.6569 55.2266 32.6569C53.3738 32.6569 51.9057 32.1274 50.8222 31.0685C49.7388 30.0096 49.1971 28.5615 49.1971 26.724C49.1971 25.5561 49.4326 24.5206 49.9037 23.6174C50.3747 22.7142 51.0342 22.0135 51.8821 21.5152C52.7457 21.0169 53.7193 20.7678 54.8027 20.7678C55.839 20.7678 56.7419 20.9935 57.5113 21.4451C58.2807 21.8967 58.8774 22.5352 59.3013 23.3605C59.7253 24.1858 59.9372 25.159 59.9372 26.2802C59.9372 26.9498 59.6389 27.2846 59.0422 27.2846H52.0941C52.1883 28.359 52.4945 29.1532 53.0127 29.6671C53.5308 30.1654 54.2845 30.4145 55.2738 30.4145C55.7762 30.4145 56.2159 30.3522 56.5927 30.2277C56.9853 30.1031 57.4249 29.9318 57.9117 29.7138C58.3827 29.4646 58.7282 29.3401 58.948 29.3401ZM54.8734 22.8232C54.0726 22.8232 53.4288 23.0724 52.942 23.5707C52.471 24.069 52.1883 24.7853 52.0941 25.7196H57.4171C57.3857 24.7697 57.1501 24.0534 56.7105 23.5707C56.2708 23.0724 55.6585 22.8232 54.8734 22.8232Z"
          fill="url(#paint4_linear_499_4761)"
        />
        <path
          d="M74.1187 20.7678C75.5005 20.7678 76.529 21.157 77.2042 21.9356C77.8794 22.7142 78.217 23.8899 78.217 25.4627V31.2087C78.217 31.6447 78.0835 31.9873 77.8166 32.2364C77.5653 32.4856 77.212 32.6101 76.7567 32.6101C76.3013 32.6101 75.9402 32.4856 75.6732 32.2364C75.4063 31.9873 75.2728 31.6447 75.2728 31.2087V25.6262C75.2728 24.7386 75.1001 24.0923 74.7547 23.6875C74.4249 23.2826 73.8989 23.0802 73.1766 23.0802C72.3287 23.0802 71.6457 23.3449 71.1275 23.8743C70.625 24.4038 70.3738 25.1123 70.3738 25.9999V31.2087C70.3738 31.6447 70.2403 31.9873 69.9734 32.2364C69.7065 32.4856 69.3453 32.6101 68.89 32.6101C68.4346 32.6101 68.0735 32.4856 67.8065 32.2364C67.5553 31.9873 67.4297 31.6447 67.4297 31.2087V22.1692C67.4297 21.7644 67.5632 21.4373 67.8301 21.1882C68.097 20.939 68.4582 20.8145 68.9135 20.8145C69.3218 20.8145 69.6515 20.939 69.9028 21.1882C70.1697 21.4218 70.3032 21.7332 70.3032 22.1225V22.7532C70.6957 22.1147 71.2217 21.6242 71.8812 21.2816C72.5407 20.939 73.2865 20.7678 74.1187 20.7678Z"
          fill="url(#paint5_linear_499_4761)"
        />
        <path
          d="M81.7358 32.6101C81.3118 32.6101 80.9585 32.4934 80.6759 32.2598C80.4089 32.0106 80.2755 31.6603 80.2755 31.2087V22.1926C80.2755 21.741 80.4089 21.3984 80.6759 21.1648C80.9585 20.9313 81.3118 20.8145 81.7358 20.8145C82.1597 20.8145 82.513 20.9313 82.7956 21.1648C83.0783 21.3984 83.2196 21.741 83.2196 22.1926V31.2087C83.2196 31.6603 83.0783 32.0106 82.7956 32.2598C82.513 32.4934 82.1597 32.6101 81.7358 32.6101ZM81.7358 18.7356C81.2019 18.7356 80.7779 18.5955 80.4639 18.3152C80.1499 18.0193 79.9928 17.6378 79.9928 17.1707C79.9928 16.7035 80.1499 16.3298 80.4639 16.0495C80.7779 15.7692 81.2019 15.629 81.7358 15.629C82.2539 15.629 82.67 15.7692 82.9841 16.0495C83.3138 16.3298 83.4787 16.7035 83.4787 17.1707C83.4787 17.6378 83.3217 18.0193 83.0076 18.3152C82.6936 18.5955 82.2696 18.7356 81.7358 18.7356Z"
          fill="url(#paint6_linear_499_4761)"
        />
        <path
          d="M95.4926 15.886C95.9323 15.886 96.2934 16.0105 96.5761 16.2597C96.8587 16.5088 97 16.8358 97 17.2407V31.2087C97 31.6291 96.8665 31.9639 96.5996 32.213C96.3327 32.4622 95.9794 32.5868 95.5397 32.5868C95.1001 32.5868 94.7468 32.4622 94.4798 32.213C94.2129 31.9639 94.0794 31.6291 94.0794 31.2087V30.6247C93.734 31.2632 93.2315 31.7615 92.572 32.1196C91.9283 32.4778 91.1903 32.6568 90.3581 32.6568C89.3688 32.6568 88.4817 32.4077 87.6966 31.9094C86.9272 31.4111 86.3227 30.7104 85.883 29.8072C85.459 28.8885 85.2471 27.8374 85.2471 26.6539C85.2471 25.4704 85.459 24.4349 85.883 23.5473C86.3227 22.6597 86.9272 21.9746 87.6966 21.4918C88.466 21.0091 89.3531 20.7677 90.3581 20.7677C91.1903 20.7677 91.9283 20.939 92.572 21.2816C93.2158 21.6242 93.7104 22.1069 94.0559 22.7298V17.194C94.0559 16.8047 94.1815 16.4933 94.4327 16.2597C94.6997 16.0105 95.053 15.886 95.4926 15.886ZM91.1353 30.3911C92.0774 30.3911 92.7997 30.0719 93.3022 29.4335C93.8204 28.795 94.0794 27.8841 94.0794 26.7006C94.0794 25.5171 93.8204 24.614 93.3022 23.9911C92.7997 23.3527 92.0853 23.0334 91.1589 23.0334C90.2168 23.0334 89.4866 23.3449 88.9684 23.9677C88.4503 24.5906 88.1912 25.486 88.1912 26.6539C88.1912 27.8374 88.4503 28.7561 88.9684 29.4101C89.4866 30.0641 90.2089 30.3911 91.1353 30.3911Z"
          fill="url(#paint7_linear_499_4761)"
        />
        <defs>
          <lineargradient
            id="paint0_linear_499_4761"
            x1="92.364"
            y1="-1.6269"
            x2="73.5427"
            y2="61.5915"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#C399DB" />
            <stop offset={1} stopColor="#5882F7" />
          </lineargradient>
          <lineargradient
            id="paint1_linear_499_4761"
            x1="92.364"
            y1="-1.6269"
            x2="73.5427"
            y2="61.5915"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#C399DB" />
            <stop offset={1} stopColor="#5882F7" />
          </lineargradient>
          <lineargradient
            id="paint2_linear_499_4761"
            x1="92.364"
            y1="-1.6269"
            x2="73.5427"
            y2="61.5915"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#C399DB" />
            <stop offset={1} stopColor="#5882F7" />
          </lineargradient>
          <lineargradient
            id="paint3_linear_499_4761"
            x1="92.364"
            y1="-1.6269"
            x2="73.5427"
            y2="61.5915"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#C399DB" />
            <stop offset={1} stopColor="#5882F7" />
          </lineargradient>
          <lineargradient
            id="paint4_linear_499_4761"
            x1="92.364"
            y1="-1.6269"
            x2="73.5427"
            y2="61.5915"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#C399DB" />
            <stop offset={1} stopColor="#5882F7" />
          </lineargradient>
          <lineargradient
            id="paint5_linear_499_4761"
            x1="92.364"
            y1="-1.6269"
            x2="73.5427"
            y2="61.5915"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#C399DB" />
            <stop offset={1} stopColor="#5882F7" />
          </lineargradient>
          <lineargradient
            id="paint6_linear_499_4761"
            x1="92.364"
            y1="-1.6269"
            x2="73.5427"
            y2="61.5915"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#C399DB" />
            <stop offset={1} stopColor="#5882F7" />
          </lineargradient>
          <lineargradient
            id="paint7_linear_499_4761"
            x1="92.364"
            y1="-1.6269"
            x2="73.5427"
            y2="61.5915"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#C399DB" />
            <stop offset={1} stopColor="#5882F7" />
          </lineargradient>
        </defs>
      </svg>
    </div>
  </div>
  <div className="w-[375px] h-[70px] absolute left-[-2px] top-[741px] overflow-hidden bg-white">
    <div className="w-[62px] h-[49px]">
      <svg
        width={32}
        height={32}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8 absolute left-[124.5px] top-[10.5px]"
        preserveAspectRatio="xMidYMid meet"
      >
        <path
          d="M13.3333 22.6667C18.488 22.6667 22.6667 18.488 22.6667 13.3333C22.6667 8.17868 18.488 4 13.3333 4C8.17868 4 4 8.17868 4 13.3333C4 18.488 8.17868 22.6667 13.3333 22.6667Z"
          stroke="#272832"
         strokeWidth={2}
         strokeLinecap="round"
         strokeLinejoin="round"
        />
        <path
          d="M20 20L28 28"
          stroke="#272832"
         strokeWidth={2}
         strokeLinecap="round"
         strokeLinejoin="round"
        />
      </svg>
      <p className="absolute left-[110px] top-[47px] text-xs font-bold text-left text-[#272832]">
        Recherche
      </p>
    </div>
    <div className="w-[62px] h-[49px]">
      <svg
        width={32}
        height={32}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8 absolute left-[227.5px] top-[10.5px]"
        preserveAspectRatio="xMidYMid meet"
      >
        <path
          d="M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z"
          stroke="#272832"
         strokeWidth={2}
         strokeLinecap="round"
         strokeLinejoin="round"
        />
        <path
          d="M22.9553 25.7764C21.2463 23.8678 18.7633 22.6667 15.9998 22.6667C13.2362 22.6667 10.7532 23.8678 9.04427 25.7764"
          stroke="#272832"
         strokeWidth={2}
         strokeLinecap="round"
         strokeLinejoin="round"
        />
        <path
          d="M16 18.6667C18.2091 18.6667 20 16.8759 20 14.6667C20 12.4576 18.2091 10.6667 16 10.6667C13.7909 10.6667 12 12.4576 12 14.6667C12 16.8759 13.7909 18.6667 16 18.6667Z"
          stroke="#272832"
         strokeWidth={2}
         strokeLinecap="round"
         strokeLinejoin="round"
        />
      </svg>
      <p className="absolute left-[213px] top-[47px] text-xs font-bold text-left text-[#272832]">
        Connexion
      </p>
    </div>
    <div className="w-[33px] h-[49px]">
      <p className="absolute left-[316px] top-[47px] text-xs font-bold text-left text-[#272832]">
        Menu
      </p>
      <svg
        width={32}
        height={32}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8 absolute left-[316.5px] top-[10.5px]"
        preserveAspectRatio="xMidYMid meet"
      >
        <path
          d="M6.66666 22.6667L25.3333 22.6667"
          stroke="#272832"
         strokeWidth={2}
         strokeLinecap="round"
         strokeLinejoin="round"
        />
        <path
          d="M6.66666 16H25.3333"
          stroke="#272832"
         strokeWidth={2}
         strokeLinecap="round"
         strokeLinejoin="round"
        />
        <path
          d="M6.66666 9.33325L17.3333 9.33325"
          stroke="#272832"
         strokeWidth={2}
         strokeLinecap="round"
         strokeLinejoin="round"
        />
      </svg>
    </div>
    <svg
      width={374}
      height={1}
      viewBox="0 0 374 1"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute left-[-1px] top-0"
      preserveAspectRatio="xMidYMid meet"
    >
      <line x1={-1} y1="0.5" x2={374} y2="0.5" stroke="#EAEFFA" />
    </svg>
    <div className="w-[43px] h-[49px]">
      <svg
        width={32}
        height={32}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8 absolute left-[30.5px] top-[10.5px]"
        preserveAspectRatio="xMidYMid meet"
      >
        <path
          d="M26.2113 12.935L16.878 4.76837C16.3753 4.32851 15.6247 4.32851 15.122 4.76837L5.78866 12.935C5.49931 13.1882 5.33333 13.554 5.33333 13.9385V25.3335C5.33333 26.0698 5.93029 26.6668 6.66667 26.6668H12C12.7364 26.6668 13.3333 26.0698 13.3333 25.3335V20.0001C13.3333 19.2637 13.9303 18.6668 14.6667 18.6668H17.3333C18.0697 18.6668 18.6667 19.2637 18.6667 20.0001V25.3335C18.6667 26.0698 19.2636 26.6668 20 26.6668H25.3333C26.0697 26.6668 26.6667 26.0698 26.6667 25.3335V13.9385C26.6667 13.554 26.5007 13.1882 26.2113 12.935Z"
          stroke="#3679FF"
         strokeWidth={2}
         strokeLinecap="round"
         strokeLinejoin="round"
        />
      </svg>
      <p className="absolute left-[26px] top-[47px] text-xs font-bold text-left text-[#3679ff]">
        Acceuil
      </p>
    </div>
  </div>
  <div className="flex justify-center items-center w-[283px] absolute left-[44.5px] top-[206.5px] gap-6 p-4 rounded-xl bg-white border-2 border-[#eff4ff]">
    <div className="flex justify-center items-start flex-grow-0 flex-shrink-0 w-4 h-4 overflow-hidden gap-1 p-4 rounded-sm bg-white border-2 border-[#cdd2d8]" />
    <p className="flex-grow w-[211px] text-xs text-left text-[#43434a]">
      Actualiser quand je déplace la carte
    </p>
  </div>
  <div className="flex justify-between items-center w-[167px] absolute left-[14.5px] top-[137.5px] px-[47px] py-2 rounded-xl bg-white border-2 border-[#eff4ff]">
    <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-[#43434a]">Prix</p>
  </div>
  <div className="w-[343px] h-[55px] absolute left-[15px] top-[75px]">
    <div className="w-[343px] h-[55px] absolute left-[-1.5px] top-[-1.5px] rounded-xl bg-white border-2 border-[#eff4ff]" />
    <p className="w-[264px] absolute left-4 top-4 text-lg font-bold text-left text-[#3679ff]">
      Saint - Denis (93)
    </p>
    <div
      className="w-[39px] h-[39px] absolute left-[295px] top-[7px] rounded-xl"
      style={{ background: "linear-gradient(to bottom, #81a3f9 -0.06%, #3462d8 108.09%)" }}
    />
    <svg
      width={23}
      height={23}
      viewBox="0 0 23 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-[23px] h-[23px] absolute left-[303px] top-[15px]"
      preserveAspectRatio="xMidYMid meet"
    >
      <path
        d="M9.58333 16.2917C13.2882 16.2917 16.2917 13.2882 16.2917 9.58333C16.2917 5.87842 13.2882 2.875 9.58333 2.875C5.87842 2.875 2.875 5.87842 2.875 9.58333C2.875 13.2882 5.87842 16.2917 9.58333 16.2917Z"
        stroke="white"
       strokeWidth={2}
       strokeLinecap="round"
       strokeLinejoin="round"
      />
      <path
        d="M14.375 14.375L20.125 20.125"
        stroke="white"
       strokeWidth={2}
       strokeLinecap="round"
       strokeLinejoin="round"
      />
    </svg>
  </div>
  <div
    className="w-[164px] h-[46px] absolute left-[104px] top-[679px]"
    style={{
      filter:
        "drop-shadow(0px 2px 4px rgba(24,39,75,0.12)) drop-shadow(0px 4px 4px rgba(24,39,75,0.08))",
    }}
  >
    <div className="w-[164px] h-[46px] absolute left-[-1px] top-[-1px] rounded-xl bg-[#191f2c]" />
    <p className="absolute left-[21px] top-[11px] text-lg font-bold text-left text-white">
      Mode liste
    </p>
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6 absolute left-[119px] top-2.5"
      preserveAspectRatio="xMidYMid meet"
    >
      <path
        d="M9 17H19"
        stroke="white"
       strokeWidth={2}
       strokeLinecap="round"
       strokeLinejoin="round"
      />
      <path
        d="M5 17H5.002V17.002H5V17Z"
        stroke="white"
       strokeWidth={2}
       strokeLinecap="round"
       strokeLinejoin="round"
      />
      <path
        d="M9 12H19"
        stroke="white"
       strokeWidth={2}
       strokeLinecap="round"
       strokeLinejoin="round"
      />
      <path
        d="M5 12H5.002V12.002H5V12Z"
        stroke="white"
       strokeWidth={2}
       strokeLinecap="round"
       strokeLinejoin="round"
      />
      <path
        d="M9 7H19"
        stroke="white"
       strokeWidth={2}
       strokeLinecap="round"
       strokeLinejoin="round"
      />
      <path
        d="M5 7H5.002V7.002H5V7Z"
        stroke="white"
       strokeWidth={2}
       strokeLinecap="round"
       strokeLinejoin="round"
      />
    </svg>
  </div>
  <svg
    width={374}
    height={810}
    viewBox="0 0 374 810"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="absolute left-[-2px] top-px opacity-30"
    preserveAspectRatio="none"
  >
    <path opacity="0.3" d="M-1 0H374V810H-1V0Z" fill="#051F52" />
  </svg>
  <div className="flex flex-col justify-center items-center w-[375px] absolute left-[-2px] top-[585px] overflow-hidden gap-4 p-6 rounded-tl-xl rounded-tr-xl bg-white border border-[#eaeffa]">
    <div className="flex justify-end items-center flex-grow-0 flex-shrink-0 w-[327px] relative">
      <p className="flex-grow w-[303px] text-base font-bold text-center text-[#272832]">
        Nombre de pièce
      </p>
      <svg
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
        preserveAspectRatio="none"
      >
        <path
          d="M18 18L6 6"
          stroke="#14181F"
         strokeWidth={2}
         strokeLinecap="round"
         strokeLinejoin="round"
        />
        <path
          d="M18 6L5.99997 18"
          stroke="#14181F"
         strokeWidth={2}
         strokeLinecap="round"
         strokeLinejoin="round"
        />
      </svg>
    </div>
    <div className="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 w-[351px] gap-4">
      <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 h-[50px] gap-4 p-4">
        <div className="flex justify-between items-center flex-grow-0 flex-shrink-0 w-[141px] relative px-[47px] py-2 rounded-xl bg-white border-2 border-[#eff4ff]">
          <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-[#43434a]">
            Studio
          </p>
        </div>
        <div className="flex justify-between items-center flex-grow-0 flex-shrink-0 w-[141px] relative px-[47px] py-2 rounded-xl bg-white border-2 border-[#eff4ff]">
          <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-[#43434a]">
            2 pièces
          </p>
        </div>
      </div>
      <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-4">
        <div className="flex justify-between items-center flex-grow-0 flex-shrink-0 w-[141px] relative px-[47px] py-2 rounded-xl bg-white border-2 border-[#eff4ff]">
          <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-[#43434a]">
            3 pièces
          </p>
        </div>
        <div className="flex justify-between items-center flex-grow-0 flex-shrink-0 w-[141px] relative px-[47px] py-2 rounded-xl bg-white border-2 border-[#eff4ff]">
          <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-[#43434a]">
            4 pièces
          </p>
        </div>
      </div>
      <div className="flex justify-between items-center flex-grow-0 flex-shrink-0 w-[141px] relative px-[47px] py-2 rounded-xl bg-white border-2 border-[#eff4ff]">
        <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-[#43434a]">
          5 pièces
        </p>
      </div>
    </div>
    <div className="flex-grow-0 flex-shrink-0 w-[327px] h-[58px] relative overflow-hidden">
      <div
        className="flex justify-end items-end absolute left-[199px] top-[7px] gap-2.5 px-10 py-3 rounded-xl"
        style={{ background: "linear-gradient(to bottom, #81a3f9 -0.06%, #3462d8 108.09%)" }}
      >
        <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-white">Valider</p>
      </div>
    </div>
  </div>
  <div className="flex justify-between items-center w-[167px] absolute left-[190.5px] top-[137.5px] px-[47px] py-2 rounded-xl bg-white border-2 border-[#eff4ff]">
    <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-[#43434a]">
      Nb de pièce
    </p>
  </div>
</div>


66666666666666666666

<div className="w-[375px] h-[812px] relative overflow-hidden bg-[#f9fbff]">
  <div className="w-[343px] h-[141px] absolute left-[15px] top-[486px]">
    <div className="w-[343px] h-[141px] absolute left-[-1.5px] top-[-1.5px] rounded-xl bg-white border-2 border-[#eff4ff]" />
    <p className="w-[179px] absolute left-[133px] top-[78px] text-xs font-medium text-left text-[#1a2e6c]">
      de 1 à 3 pièces
    </p>
    <p className="w-[161px] h-[18px] absolute left-[133px] top-4 text-lg font-bold text-left text-[#3679ff]">
      Titre du bien
    </p>
    <p className="w-[161px] absolute left-[133px] top-[37px] text-xs font-medium text-left text-[#6976a0]">
      <span className="w-[161px] text-xs font-medium text-left text-[#6976a0]">
        92500 Rueil-Malmaison
      </span>
      <br />
      <span className="w-[161px] text-xs font-medium text-left text-[#6976a0]">Buzenval</span>
    </p>
    <p className="w-[61px] absolute left-[133px] top-[94px] text-xs font-medium text-left text-[#6976a0]">
      à partir de
    </p>
    <p className="w-[117px] absolute left-[196px] top-[94px] text-xs font-medium text-left text-[#1a2e6c]">
      230 000€
    </p>
    <p className="absolute left-[133px] top-[110px] text-xs font-medium text-left text-[#6976a0]">
      soit
    </p>
    <p className="w-[68px] absolute left-[158px] top-[110px] text-xs font-medium text-left text-[#1a2e6c]">
      700€ / mois
    </p>
    <div className="w-[109px] h-[109px]">
      <div className="w-[109px] h-[109px] absolute left-[15.58px] top-[15.58px] rounded-[10px] bg-[#c4c4c4]" />
      <img
        src="ralph-ravi-kayden-2d4laqalbda-unsplash.jpeg"
        className="w-[217.44px] h-[198.04px] absolute left-[-8.2px] top-[-8.42px] rounded-[10px] object-cover"
      />
    </div>
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6 absolute left-[310px] top-[108px]"
      preserveAspectRatio="xMidYMid meet"
    >
      <path
        d="M12 20L11.5134 20.8736C11.8159 21.0421 12.1841 21.0421 12.4866 20.8736L12 20ZM12 7.16221L11.0797 7.55332C11.2365 7.9225 11.5989 8.16221 12 8.16221C12.4011 8.16221 12.7635 7.9225 12.9203 7.55332L12 7.16221ZM2 8.97234C2 12.4457 4.56031 15.4617 6.83471 17.4884C8.00373 18.5302 9.16813 19.3728 10.0381 19.9542C10.474 20.2456 10.8385 20.473 11.0958 20.6286C11.2246 20.7064 11.3267 20.7664 11.3977 20.8076C11.4332 20.8281 11.461 20.844 11.4805 20.8551C11.4902 20.8606 11.4979 20.8649 11.5034 20.868C11.5061 20.8696 11.5084 20.8708 11.51 20.8717C11.5109 20.8722 11.5116 20.8726 11.5121 20.8729C11.5124 20.8731 11.5127 20.8733 11.5129 20.8733C11.5132 20.8735 11.5134 20.8736 12 20C12.4866 19.1264 12.4868 19.1265 12.4869 19.1265C12.4869 19.1265 12.487 19.1266 12.487 19.1266C12.4871 19.1266 12.4869 19.1266 12.4867 19.1264C12.4862 19.1261 12.4851 19.1256 12.4836 19.1247C12.4804 19.1229 12.4752 19.12 12.4679 19.1158C12.4533 19.1075 12.4305 19.0945 12.4001 19.0769C12.3393 19.0417 12.2481 18.9881 12.1307 18.9172C11.8959 18.7751 11.5572 18.5639 11.1494 18.2914C10.3319 17.745 9.24627 16.9585 8.1653 15.9953C5.93969 14.012 4 11.5141 4 8.97234H2ZM12.9203 6.77109C11.7391 3.99154 9.04681 2.70458 6.60702 3.05704C5.38263 3.23392 4.21629 3.82554 3.35895 4.84728C2.49888 5.87228 2 7.26915 2 8.97234H4C4 7.66797 4.37612 6.74652 4.89105 6.13285C5.40871 5.51592 6.11737 5.14854 6.89298 5.03649C8.45319 4.8111 10.2609 5.62663 11.0797 7.55332L12.9203 6.77109ZM20 8.97234C20 11.5141 18.0603 14.012 15.8347 15.9953C14.7537 16.9585 13.6681 17.745 12.8506 18.2914C12.4428 18.5639 12.1041 18.7751 11.8693 18.9172C11.7519 18.9881 11.6607 19.0417 11.5999 19.0769C11.5695 19.0945 11.5467 19.1075 11.5321 19.1158C11.5248 19.12 11.5196 19.1229 11.5164 19.1247C11.5149 19.1256 11.5138 19.1261 11.5133 19.1264C11.5131 19.1266 11.5129 19.1266 11.513 19.1266C11.513 19.1266 11.5131 19.1265 11.5131 19.1265C11.5132 19.1265 11.5134 19.1264 12 20C12.4866 20.8736 12.4868 20.8735 12.4871 20.8733C12.4873 20.8733 12.4876 20.8731 12.4879 20.8729C12.4884 20.8726 12.4891 20.8722 12.49 20.8717C12.4916 20.8708 12.4939 20.8696 12.4966 20.868C12.5021 20.8649 12.5098 20.8606 12.5195 20.8551C12.539 20.844 12.5668 20.8281 12.6023 20.8076C12.6733 20.7664 12.7754 20.7064 12.9042 20.6286C13.1615 20.473 13.526 20.2456 13.9619 19.9542C14.8319 19.3728 15.9963 18.5302 17.1653 17.4884C19.4397 15.4617 22 12.4457 22 8.97234H20ZM12.9203 7.55332C13.7391 5.62663 15.5468 4.8111 17.107 5.03649C17.8826 5.14854 18.5913 5.51592 19.109 6.13285C19.6239 6.74652 20 7.66797 20 8.97234H22C22 7.26915 21.5011 5.87228 20.641 4.84728C19.7837 3.82554 18.6174 3.23392 17.393 3.05704C14.9532 2.70458 12.2609 3.99154 11.0797 6.77109L12.9203 7.55332Z"
        fill="#3679FF"
      />
    </svg>
  </div>
  <div className="w-[343px] h-[141px] absolute left-[15px] top-[635px]">
    <div className="w-[343px] h-[141px] absolute left-[-1.5px] top-[-1.5px] rounded-xl bg-white border-2 border-[#eff4ff]" />
    <p className="w-[179px] absolute left-[133px] top-[78px] text-xs font-medium text-left text-[#1a2e6c]">
      de 1 à 3 pièces
    </p>
    <p className="w-[161px] h-[18px] absolute left-[133px] top-4 text-lg font-bold text-left text-[#3679ff]">
      Titre du bien
    </p>
    <p className="w-[161px] absolute left-[133px] top-[37px] text-xs font-medium text-left text-[#6976a0]">
      <span className="w-[161px] text-xs font-medium text-left text-[#6976a0]">
        92500 Rueil-Malmaison
      </span>
      <br />
      <span className="w-[161px] text-xs font-medium text-left text-[#6976a0]">Buzenval</span>
    </p>
    <p className="w-[61px] absolute left-[133px] top-[94px] text-xs font-medium text-left text-[#6976a0]">
      à partir de
    </p>
    <p className="w-[117px] absolute left-[196px] top-[94px] text-xs font-medium text-left text-[#1a2e6c]">
      230 000€
    </p>
    <p className="absolute left-[133px] top-[110px] text-xs font-medium text-left text-[#6976a0]">
      soit
    </p>
    <p className="w-[68px] absolute left-[158px] top-[110px] text-xs font-medium text-left text-[#1a2e6c]">
      700€ / mois
    </p>
    <div className="w-[109px] h-[109px]">
      <div className="w-[109px] h-[109px] absolute left-[15.58px] top-[15.58px] rounded-[10px] bg-[#c4c4c4]" />
      <img
        src="ralph-ravi-kayden-2d4laqalbda-unsplash.jpeg"
        className="w-[217.44px] h-[198.04px] absolute left-[-8.2px] top-[-8.42px] rounded-[10px] object-cover"
      />
    </div>
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6 absolute left-[310px] top-[108px]"
      preserveAspectRatio="xMidYMid meet"
    >
      <path
        d="M12 20L11.5134 20.8736C11.8159 21.0421 12.1841 21.0421 12.4866 20.8736L12 20ZM12 7.16221L11.0797 7.55332C11.2365 7.9225 11.5989 8.16221 12 8.16221C12.4011 8.16221 12.7635 7.9225 12.9203 7.55332L12 7.16221ZM2 8.97234C2 12.4457 4.56031 15.4617 6.83471 17.4884C8.00373 18.5302 9.16813 19.3728 10.0381 19.9542C10.474 20.2456 10.8385 20.473 11.0958 20.6286C11.2246 20.7064 11.3267 20.7664 11.3977 20.8076C11.4332 20.8281 11.461 20.844 11.4805 20.8551C11.4902 20.8606 11.4979 20.8649 11.5034 20.868C11.5061 20.8696 11.5084 20.8708 11.51 20.8717C11.5109 20.8722 11.5116 20.8726 11.5121 20.8729C11.5124 20.8731 11.5127 20.8733 11.5129 20.8733C11.5132 20.8735 11.5134 20.8736 12 20C12.4866 19.1264 12.4868 19.1265 12.4869 19.1265C12.4869 19.1265 12.487 19.1266 12.487 19.1266C12.4871 19.1266 12.4869 19.1266 12.4867 19.1264C12.4862 19.1261 12.4851 19.1256 12.4836 19.1247C12.4804 19.1229 12.4752 19.12 12.4679 19.1158C12.4533 19.1075 12.4305 19.0945 12.4001 19.0769C12.3393 19.0417 12.2481 18.9881 12.1307 18.9172C11.8959 18.7751 11.5572 18.5639 11.1494 18.2914C10.3319 17.745 9.24627 16.9585 8.1653 15.9953C5.93969 14.012 4 11.5141 4 8.97234H2ZM12.9203 6.77109C11.7391 3.99154 9.04681 2.70458 6.60702 3.05704C5.38263 3.23392 4.21629 3.82554 3.35895 4.84728C2.49888 5.87228 2 7.26915 2 8.97234H4C4 7.66797 4.37612 6.74652 4.89105 6.13285C5.40871 5.51592 6.11737 5.14854 6.89298 5.03649C8.45319 4.8111 10.2609 5.62663 11.0797 7.55332L12.9203 6.77109ZM20 8.97234C20 11.5141 18.0603 14.012 15.8347 15.9953C14.7537 16.9585 13.6681 17.745 12.8506 18.2914C12.4428 18.5639 12.1041 18.7751 11.8693 18.9172C11.7519 18.9881 11.6607 19.0417 11.5999 19.0769C11.5695 19.0945 11.5467 19.1075 11.5321 19.1158C11.5248 19.12 11.5196 19.1229 11.5164 19.1247C11.5149 19.1256 11.5138 19.1261 11.5133 19.1264C11.5131 19.1266 11.5129 19.1266 11.513 19.1266C11.513 19.1266 11.5131 19.1265 11.5131 19.1265C11.5132 19.1265 11.5134 19.1264 12 20C12.4866 20.8736 12.4868 20.8735 12.4871 20.8733C12.4873 20.8733 12.4876 20.8731 12.4879 20.8729C12.4884 20.8726 12.4891 20.8722 12.49 20.8717C12.4916 20.8708 12.4939 20.8696 12.4966 20.868C12.5021 20.8649 12.5098 20.8606 12.5195 20.8551C12.539 20.844 12.5668 20.8281 12.6023 20.8076C12.6733 20.7664 12.7754 20.7064 12.9042 20.6286C13.1615 20.473 13.526 20.2456 13.9619 19.9542C14.8319 19.3728 15.9963 18.5302 17.1653 17.4884C19.4397 15.4617 22 12.4457 22 8.97234H20ZM12.9203 7.55332C13.7391 5.62663 15.5468 4.8111 17.107 5.03649C17.8826 5.14854 18.5913 5.51592 19.109 6.13285C19.6239 6.74652 20 7.66797 20 8.97234H22C22 7.26915 21.5011 5.87228 20.641 4.84728C19.7837 3.82554 18.6174 3.23392 17.393 3.05704C14.9532 2.70458 12.2609 3.99154 11.0797 6.77109L12.9203 7.55332Z"
        fill="#3679FF"
      />
    </svg>
  </div>
  <div className="w-[343px] h-[141px] absolute left-[15px] top-[784px]">
    <div className="w-[343px] h-[141px] absolute left-[-1.5px] top-[-1.5px] rounded-xl bg-white border-2 border-[#eff4ff]" />
    <p className="w-[179px] absolute left-[133px] top-[78px] text-xs font-medium text-left text-[#1a2e6c]">
      de 1 à 3 pièces
    </p>
    <p className="w-[161px] h-[18px] absolute left-[133px] top-4 text-lg font-bold text-left text-[#3679ff]">
      Titre du bien
    </p>
    <p className="w-[161px] absolute left-[133px] top-[37px] text-xs font-medium text-left text-[#6976a0]">
      <span className="w-[161px] text-xs font-medium text-left text-[#6976a0]">
        92500 Rueil-Malmaison
      </span>
      <br />
      <span className="w-[161px] text-xs font-medium text-left text-[#6976a0]">Buzenval</span>
    </p>
    <p className="w-[61px] absolute left-[133px] top-[94px] text-xs font-medium text-left text-[#6976a0]">
      à partir de
    </p>
    <p className="w-[117px] absolute left-[196px] top-[94px] text-xs font-medium text-left text-[#1a2e6c]">
      230 000€
    </p>
    <p className="absolute left-[133px] top-[110px] text-xs font-medium text-left text-[#6976a0]">
      soit
    </p>
    <p className="w-[68px] absolute left-[158px] top-[110px] text-xs font-medium text-left text-[#1a2e6c]">
      700€ / mois
    </p>
    <div className="w-[109px] h-[109px]">
      <div className="w-[109px] h-[109px] absolute left-[15.58px] top-[15.58px] rounded-[10px] bg-[#c4c4c4]" />
      <img
        src="ralph-ravi-kayden-2d4laqalbda-unsplash.jpeg"
        className="w-[217.44px] h-[198.04px] absolute left-[-8.2px] top-[-8.42px] rounded-[10px] object-cover"
      />
    </div>
    <div className="w-6 h-6 absolute left-[310px] top-[108px]" />
  </div>
  <div className="w-[343px] h-[141px] absolute left-[15px] top-[188px]">
    <div className="w-[343px] h-[141px] absolute left-[-1.5px] top-[-1.5px] rounded-xl bg-white border-2 border-[#eff4ff]" />
    <p className="w-[179px] absolute left-[133px] top-[78px] text-xs font-medium text-left text-[#1a2e6c]">
      de 1 à 3 pièces
    </p>
    <p className="w-[161px] h-[18px] absolute left-[133px] top-4 text-lg font-bold text-left text-[#3679ff]">
      Titre du bien
    </p>
    <p className="w-[161px] absolute left-[133px] top-[37px] text-xs font-medium text-left text-[#6976a0]">
      <span className="w-[161px] text-xs font-medium text-left text-[#6976a0]">
        92500 Rueil-Malmaison
      </span>
      <br />
      <span className="w-[161px] text-xs font-medium text-left text-[#6976a0]">Buzenval</span>
    </p>
    <p className="w-[61px] absolute left-[133px] top-[94px] text-xs font-medium text-left text-[#6976a0]">
      à partir de
    </p>
    <p className="w-[117px] absolute left-[196px] top-[94px] text-xs font-medium text-left text-[#1a2e6c]">
      230 000€
    </p>
    <p className="absolute left-[133px] top-[110px] text-xs font-medium text-left text-[#6976a0]">
      soit
    </p>
    <p className="w-[68px] absolute left-[158px] top-[110px] text-xs font-medium text-left text-[#1a2e6c]">
      700€ / mois
    </p>
    <div className="w-[109px] h-[109px]">
      <div className="w-[109px] h-[109px] absolute left-[15.58px] top-[15.58px] rounded-[10px] bg-[#c4c4c4]" />
      <img
        src="ralph-ravi-kayden-2d4laqalbda-unsplash.jpeg"
        className="w-[217.44px] h-[198.04px] absolute left-[-8.2px] top-[-8.42px] rounded-[10px] object-cover"
      />
    </div>
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6 absolute left-[310px] top-[108px]"
      preserveAspectRatio="xMidYMid meet"
    >
      <path
        d="M12 20L11.5134 20.8736C11.8159 21.0421 12.1841 21.0421 12.4866 20.8736L12 20ZM12 7.16221L11.0797 7.55332C11.2365 7.9225 11.5989 8.16221 12 8.16221C12.4011 8.16221 12.7635 7.9225 12.9203 7.55332L12 7.16221ZM2 8.97234C2 12.4457 4.56031 15.4617 6.83471 17.4884C8.00373 18.5302 9.16813 19.3728 10.0381 19.9542C10.474 20.2456 10.8385 20.473 11.0958 20.6286C11.2246 20.7064 11.3267 20.7664 11.3977 20.8076C11.4332 20.8281 11.461 20.844 11.4805 20.8551C11.4902 20.8606 11.4979 20.8649 11.5034 20.868C11.5061 20.8696 11.5084 20.8708 11.51 20.8717C11.5109 20.8722 11.5116 20.8726 11.5121 20.8729C11.5124 20.8731 11.5127 20.8733 11.5129 20.8733C11.5132 20.8735 11.5134 20.8736 12 20C12.4866 19.1264 12.4868 19.1265 12.4869 19.1265C12.4869 19.1265 12.487 19.1266 12.487 19.1266C12.4871 19.1266 12.4869 19.1266 12.4867 19.1264C12.4862 19.1261 12.4851 19.1256 12.4836 19.1247C12.4804 19.1229 12.4752 19.12 12.4679 19.1158C12.4533 19.1075 12.4305 19.0945 12.4001 19.0769C12.3393 19.0417 12.2481 18.9881 12.1307 18.9172C11.8959 18.7751 11.5572 18.5639 11.1494 18.2914C10.3319 17.745 9.24627 16.9585 8.1653 15.9953C5.93969 14.012 4 11.5141 4 8.97234H2ZM12.9203 6.77109C11.7391 3.99154 9.04681 2.70458 6.60702 3.05704C5.38263 3.23392 4.21629 3.82554 3.35895 4.84728C2.49888 5.87228 2 7.26915 2 8.97234H4C4 7.66797 4.37612 6.74652 4.89105 6.13285C5.40871 5.51592 6.11737 5.14854 6.89298 5.03649C8.45319 4.8111 10.2609 5.62663 11.0797 7.55332L12.9203 6.77109ZM20 8.97234C20 11.5141 18.0603 14.012 15.8347 15.9953C14.7537 16.9585 13.6681 17.745 12.8506 18.2914C12.4428 18.5639 12.1041 18.7751 11.8693 18.9172C11.7519 18.9881 11.6607 19.0417 11.5999 19.0769C11.5695 19.0945 11.5467 19.1075 11.5321 19.1158C11.5248 19.12 11.5196 19.1229 11.5164 19.1247C11.5149 19.1256 11.5138 19.1261 11.5133 19.1264C11.5131 19.1266 11.5129 19.1266 11.513 19.1266C11.513 19.1266 11.5131 19.1265 11.5131 19.1265C11.5132 19.1265 11.5134 19.1264 12 20C12.4866 20.8736 12.4868 20.8735 12.4871 20.8733C12.4873 20.8733 12.4876 20.8731 12.4879 20.8729C12.4884 20.8726 12.4891 20.8722 12.49 20.8717C12.4916 20.8708 12.4939 20.8696 12.4966 20.868C12.5021 20.8649 12.5098 20.8606 12.5195 20.8551C12.539 20.844 12.5668 20.8281 12.6023 20.8076C12.6733 20.7664 12.7754 20.7064 12.9042 20.6286C13.1615 20.473 13.526 20.2456 13.9619 19.9542C14.8319 19.3728 15.9963 18.5302 17.1653 17.4884C19.4397 15.4617 22 12.4457 22 8.97234H20ZM12.9203 7.55332C13.7391 5.62663 15.5468 4.8111 17.107 5.03649C17.8826 5.14854 18.5913 5.51592 19.109 6.13285C19.6239 6.74652 20 7.66797 20 8.97234H22C22 7.26915 21.5011 5.87228 20.641 4.84728C19.7837 3.82554 18.6174 3.23392 17.393 3.05704C14.9532 2.70458 12.2609 3.99154 11.0797 6.77109L12.9203 7.55332Z"
        fill="#3679FF"
      />
    </svg>
  </div>
  <div className="w-[343px] h-[141px] absolute left-[15px] top-[337px]">
    <div className="w-[343px] h-[141px] absolute left-[-1.5px] top-[-1.5px] rounded-xl bg-white border-2 border-[#eff4ff]" />
    <p className="w-[179px] absolute left-[133px] top-[78px] text-xs font-medium text-left text-[#1a2e6c]">
      de 1 à 3 pièces
    </p>
    <p className="w-[161px] h-[18px] absolute left-[133px] top-4 text-lg font-bold text-left text-[#3679ff]">
      Titre du bien
    </p>
    <p className="w-[161px] absolute left-[133px] top-[37px] text-xs font-medium text-left text-[#6976a0]">
      <span className="w-[161px] text-xs font-medium text-left text-[#6976a0]">
        92500 Rueil-Malmaison
      </span>
      <br />
      <span className="w-[161px] text-xs font-medium text-left text-[#6976a0]">Buzenval</span>
    </p>
    <p className="w-[61px] absolute left-[133px] top-[94px] text-xs font-medium text-left text-[#6976a0]">
      à partir de
    </p>
    <p className="w-[117px] absolute left-[196px] top-[94px] text-xs font-medium text-left text-[#1a2e6c]">
      230 000€
    </p>
    <p className="absolute left-[133px] top-[110px] text-xs font-medium text-left text-[#6976a0]">
      soit
    </p>
    <p className="w-[68px] absolute left-[158px] top-[110px] text-xs font-medium text-left text-[#1a2e6c]">
      700€ / mois
    </p>
    <div className="w-[109px] h-[109px]">
      <div className="w-[109px] h-[109px] absolute left-[15.58px] top-[15.58px] rounded-[10px] bg-[#c4c4c4]" />
      <img
        src="ralph-ravi-kayden-2d4laqalbda-unsplash.jpeg"
        className="w-[217.44px] h-[198.04px] absolute left-[-8.2px] top-[-8.42px] rounded-[10px] object-cover"
      />
    </div>
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6 absolute left-[310px] top-[108px]"
      preserveAspectRatio="xMidYMid meet"
    >
      <path
        d="M12 20L11.5134 20.8736C11.8159 21.0421 12.1841 21.0421 12.4866 20.8736L12 20ZM12 7.16221L11.0797 7.55332C11.2365 7.9225 11.5989 8.16221 12 8.16221C12.4011 8.16221 12.7635 7.9225 12.9203 7.55332L12 7.16221ZM2 8.97234C2 12.4457 4.56031 15.4617 6.83471 17.4884C8.00373 18.5302 9.16813 19.3728 10.0381 19.9542C10.474 20.2456 10.8385 20.473 11.0958 20.6286C11.2246 20.7064 11.3267 20.7664 11.3977 20.8076C11.4332 20.8281 11.461 20.844 11.4805 20.8551C11.4902 20.8606 11.4979 20.8649 11.5034 20.868C11.5061 20.8696 11.5084 20.8708 11.51 20.8717C11.5109 20.8722 11.5116 20.8726 11.5121 20.8729C11.5124 20.8731 11.5127 20.8733 11.5129 20.8733C11.5132 20.8735 11.5134 20.8736 12 20C12.4866 19.1264 12.4868 19.1265 12.4869 19.1265C12.4869 19.1265 12.487 19.1266 12.487 19.1266C12.4871 19.1266 12.4869 19.1266 12.4867 19.1264C12.4862 19.1261 12.4851 19.1256 12.4836 19.1247C12.4804 19.1229 12.4752 19.12 12.4679 19.1158C12.4533 19.1075 12.4305 19.0945 12.4001 19.0769C12.3393 19.0417 12.2481 18.9881 12.1307 18.9172C11.8959 18.7751 11.5572 18.5639 11.1494 18.2914C10.3319 17.745 9.24627 16.9585 8.1653 15.9953C5.93969 14.012 4 11.5141 4 8.97234H2ZM12.9203 6.77109C11.7391 3.99154 9.04681 2.70458 6.60702 3.05704C5.38263 3.23392 4.21629 3.82554 3.35895 4.84728C2.49888 5.87228 2 7.26915 2 8.97234H4C4 7.66797 4.37612 6.74652 4.89105 6.13285C5.40871 5.51592 6.11737 5.14854 6.89298 5.03649C8.45319 4.8111 10.2609 5.62663 11.0797 7.55332L12.9203 6.77109ZM20 8.97234C20 11.5141 18.0603 14.012 15.8347 15.9953C14.7537 16.9585 13.6681 17.745 12.8506 18.2914C12.4428 18.5639 12.1041 18.7751 11.8693 18.9172C11.7519 18.9881 11.6607 19.0417 11.5999 19.0769C11.5695 19.0945 11.5467 19.1075 11.5321 19.1158C11.5248 19.12 11.5196 19.1229 11.5164 19.1247C11.5149 19.1256 11.5138 19.1261 11.5133 19.1264C11.5131 19.1266 11.5129 19.1266 11.513 19.1266C11.513 19.1266 11.5131 19.1265 11.5131 19.1265C11.5132 19.1265 11.5134 19.1264 12 20C12.4866 20.8736 12.4868 20.8735 12.4871 20.8733C12.4873 20.8733 12.4876 20.8731 12.4879 20.8729C12.4884 20.8726 12.4891 20.8722 12.49 20.8717C12.4916 20.8708 12.4939 20.8696 12.4966 20.868C12.5021 20.8649 12.5098 20.8606 12.5195 20.8551C12.539 20.844 12.5668 20.8281 12.6023 20.8076C12.6733 20.7664 12.7754 20.7064 12.9042 20.6286C13.1615 20.473 13.526 20.2456 13.9619 19.9542C14.8319 19.3728 15.9963 18.5302 17.1653 17.4884C19.4397 15.4617 22 12.4457 22 8.97234H20ZM12.9203 7.55332C13.7391 5.62663 15.5468 4.8111 17.107 5.03649C17.8826 5.14854 18.5913 5.51592 19.109 6.13285C19.6239 6.74652 20 7.66797 20 8.97234H22C22 7.26915 21.5011 5.87228 20.641 4.84728C19.7837 3.82554 18.6174 3.23392 17.393 3.05704C14.9532 2.70458 12.2609 3.99154 11.0797 6.77109L12.9203 7.55332Z"
        fill="#3679FF"
      />
    </svg>
  </div>
  <div className="w-[131px] h-[35px]">
    <div className="w-[131px] h-[35px]">
      <p className="w-3 h-[9.89px] absolute left-[223px] top-[37.84px] text-[9px] font-bold text-left text-[#43434a]">
        By
      </p>
      <img
        src="nexity-logo-1.png"
        className="w-4 h-[15.82px] absolute left-[236.5px] top-[34.38px] object-cover"
      />
      <svg
        width={97}
        height={35}
        viewBox="0 0 97 35"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute left-[121.81px] top-[23.81px]"
        preserveAspectRatio="none"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14.7453 23.1445L14.7407 23.1523C14.0805 24.2619 13.8662 25.08 13.8662 25.6532C13.8662 26.2912 14.0388 26.7946 14.3655 27.2364C14.8307 27.8346 15.285 28.2229 15.7103 28.4659C16.4653 28.8776 17.1606 29.2805 17.7941 29.6749C18.1547 29.8857 18.5359 30.1422 18.8538 30.4538C19.1298 30.7245 19.6851 31.3528 19.6851 32.289C19.6851 33.1924 19.2405 34.0361 18.4037 34.5342C17.7331 34.9334 16.9929 35 16.4661 35C14.4605 35 12.542 33.9342 10.7836 32.4439L10.777 32.4383L10.7704 32.4326C10.006 31.7736 9.36034 31.054 8.85982 30.2758C7.82421 31.5507 7.04593 32.473 6.53465 33.0274C6.11811 33.4933 5.70025 33.9128 5.29206 34.233C5.08526 34.3952 4.83687 34.567 4.55443 34.7055C4.28689 34.8366 3.86403 35 3.34275 35C1.95883 35 1.11059 34.0693 0.685061 33.4017L0.645838 33.3402L0.611212 33.2761C0.237761 32.5844 0 31.8163 0 30.9942C0 30.6626 0.0691356 30.2922 0.122125 30.0308C0.186073 29.7154 0.277136 29.328 0.390847 28.8785C0.618863 27.9773 0.955872 26.7564 1.39802 25.2256C2.26023 22.2136 3.12892 18.5842 4.00234 14.3292C4.86254 10.1385 5.28237 6.40441 5.28237 3.11561C5.28237 2.82873 5.29959 2.51234 5.36008 2.20093C5.41034 1.94226 5.52396 1.5004 5.83869 1.07999C6.53482 0.118923 7.62675 0 8.17117 0C9.01283 0 9.65259 0.387519 10.0607 0.754313C10.4422 1.09721 10.7278 1.51146 10.9462 1.89667C11.4801 2.76068 11.7615 3.71808 11.7615 4.7341C11.7615 8.59658 11.0805 13.2941 9.75071 18.8031C11.3809 16.7253 12.8167 15.037 14.0557 13.7464L14.0606 13.7412L14.0656 13.736C14.666 13.1194 15.2091 12.6043 15.6786 12.2293C15.9111 12.0436 16.1721 11.8543 16.4479 11.7018C16.666 11.5812 17.158 11.3295 17.7867 11.3295C18.8431 11.3295 19.6799 11.824 20.2664 12.4374C20.6926 12.8623 21.2946 13.6144 21.2946 14.6474C21.2946 15.2079 21.0739 15.6394 20.9834 15.8074C20.8632 16.0305 20.719 16.2342 20.5877 16.4044C20.3219 16.7486 19.9674 17.1361 19.5601 17.5498C18.788 18.3338 17.9336 19.1985 16.997 20.1438C16.1995 20.9487 15.4473 21.9401 14.7499 23.1367L14.7453 23.1445ZM18.7772 13.8382C18.4746 13.5145 18.1444 13.3526 17.7867 13.3526C17.4566 13.3526 16.7138 13.946 15.5582 15.1329C13.677 17.0927 11.2794 20.0583 8.36526 24.0298C7.63601 25.0236 6.87442 26.0805 6.08049 27.2003C5.5928 27.8882 5.09291 28.5998 4.58081 29.3353C4.63476 29.1697 4.68829 29.0048 4.74139 28.8404C5.38174 26.8579 5.96006 24.9579 6.47632 23.1403C8.62418 15.5783 9.69811 9.44291 9.69811 4.7341C9.69811 4.25841 9.60156 3.80456 9.40846 3.37256C9.38336 3.31642 9.35663 3.26064 9.32828 3.20523C9.31293 3.17525 9.29711 3.14537 9.28081 3.11561C9.24357 3.04761 9.20384 2.98017 9.16162 2.9133C8.83147 2.31985 8.50132 2.02312 8.17117 2.02312C7.84102 2.02312 7.62092 2.10405 7.51087 2.2659C7.40083 2.40077 7.3458 2.68401 7.3458 3.11561C7.3458 3.3392 7.34395 3.56454 7.34026 3.79164C7.33988 3.81518 7.33948 3.83875 7.33905 3.86234C7.28063 7.12385 6.84268 10.7458 6.02521 14.7283C5.14481 19.0173 4.26442 22.6994 3.38402 25.7746C2.50363 28.8227 2.06343 30.5626 2.06343 30.9942C2.06343 31.4258 2.18723 31.8709 2.43484 32.3295C2.70997 32.7611 3.0126 32.9769 3.34275 32.9769C3.6729 32.9769 4.22315 32.5453 4.99349 31.6821C5.27125 31.3816 5.64405 30.9519 6.11187 30.3931C6.11775 30.3861 6.12366 30.3791 6.12957 30.372C6.24506 30.234 6.36628 30.0881 6.49324 29.9345C6.52507 29.896 6.55726 29.857 6.58981 29.8175C6.93272 29.4014 7.31562 28.931 7.7385 28.4063C7.79778 28.3327 7.85784 28.2581 7.91869 28.1824C8.36578 27.6263 8.85529 27.0125 9.38722 26.341C9.50261 26.1954 9.61999 26.047 9.73938 25.896V26.341C9.73938 27.1098 9.90794 27.8471 10.2451 28.5532C10.6414 29.3832 11.2707 30.1699 12.133 30.9133C13.0888 31.7234 13.9826 32.295 14.8144 32.628C15.1078 32.7455 15.3935 32.8333 15.6714 32.8915C15.6932 32.896 15.7149 32.9004 15.7365 32.9045C15.7575 32.9086 15.7784 32.9125 15.7993 32.9162C16.0268 32.9566 16.2491 32.9769 16.4661 32.9769C17.2365 32.9769 17.6217 32.7476 17.6217 32.289C17.6217 32.0462 17.319 31.7495 16.7138 31.3988C16.6325 31.3481 16.5499 31.2972 16.4661 31.2459C16.3865 31.1972 16.3057 31.1483 16.2238 31.0992C16.0605 31.0012 15.8928 30.9024 15.7206 30.8028C15.3937 30.6135 15.0507 30.421 14.6916 30.2254C13.9763 29.8208 13.316 29.2274 12.7107 28.4451C12.1054 27.6358 11.8028 26.7052 11.8028 25.6532C11.8028 24.6012 12.188 23.4277 12.9583 22.1329C13.7287 20.8112 14.5816 19.6782 15.517 18.7341C16.4524 17.79 17.3053 16.9268 18.0756 16.1445C18.846 15.3622 19.2311 14.8632 19.2311 14.6474C19.2311 14.4046 19.0798 14.1349 18.7772 13.8382ZM16.5849 30.9475C16.5849 30.9475 16.5796 30.9488 16.5676 30.9499C16.5787 30.9479 16.5849 30.9475 16.5849 30.9475Z"
          fill="url(#paint0_linear_499_4652)"
        />
        <path
          d="M25.0427 32.2403C24.6187 32.2403 24.2654 32.1249 23.9828 31.8939C23.7159 31.6476 23.5824 31.3012 23.5824 30.8548V21.9409C23.5824 21.4944 23.7159 21.1558 23.9828 20.9248C24.2654 20.6939 24.6187 20.5784 25.0427 20.5784C25.4666 20.5784 25.8199 20.6939 26.1026 20.9248C26.3852 21.1558 26.5265 21.4944 26.5265 21.9409V30.8548C26.5265 31.3012 26.3852 31.6476 26.1026 31.8939C25.8199 32.1249 25.4666 32.2403 25.0427 32.2403ZM25.0427 18.5232C24.5088 18.5232 24.0849 18.3846 23.7708 18.1075C23.4568 17.815 23.2998 17.4378 23.2998 16.9759C23.2998 16.5141 23.4568 16.1446 23.7708 15.8675C24.0849 15.5904 24.5088 15.4518 25.0427 15.4518C25.5608 15.4518 25.9769 15.5904 26.291 15.8675C26.6207 16.1446 26.7856 16.5141 26.7856 16.9759C26.7856 17.4378 26.6286 17.815 26.3145 18.1075C26.0005 18.3846 25.5765 18.5232 25.0427 18.5232Z"
          fill="url(#paint1_linear_499_4652)"
        />
        <path
          d="M35.6784 30.0927C36.4635 30.1389 36.856 30.4853 36.856 31.1319C36.856 31.5014 36.699 31.7862 36.385 31.9863C36.0866 32.1711 35.6548 32.248 35.0896 32.2173L34.4536 32.1711C31.8157 31.9863 30.4967 30.6007 30.4967 28.0143V22.9801H29.3191C28.8951 22.9801 28.5654 22.8877 28.3299 22.703C28.11 22.5182 28.0001 22.2488 28.0001 21.8947C28.0001 21.5406 28.11 21.2712 28.3299 21.0865C28.5654 20.9017 28.8951 20.8094 29.3191 20.8094H30.4967V18.6848C30.4967 18.2691 30.6302 17.9381 30.8971 17.6918C31.1641 17.4455 31.5252 17.3223 31.9806 17.3223C32.4202 17.3223 32.7735 17.4455 33.0405 17.6918C33.3074 17.9381 33.4409 18.2691 33.4409 18.6848V20.8094H35.4429C35.8668 20.8094 36.1887 20.9017 36.4085 21.0865C36.6441 21.2712 36.7618 21.5406 36.7618 21.8947C36.7618 22.2488 36.6441 22.5182 36.4085 22.703C36.1887 22.8877 35.8668 22.9801 35.4429 22.9801H33.4409V28.2222C33.4409 29.3614 33.9747 29.9695 35.0425 30.0465L35.6784 30.0927Z"
          fill="url(#paint2_linear_499_4652)"
        />
        <path
          d="M45.8721 32.2403C45.4482 32.2403 45.0949 32.1249 44.8122 31.8939C44.5453 31.6476 44.4118 31.3012 44.4118 30.8548V17.0683C44.4118 16.6218 44.5453 16.2831 44.8122 16.0522C45.0949 15.8213 45.4482 15.7058 45.8721 15.7058C46.2961 15.7058 46.6494 15.8213 46.932 16.0522C47.2147 16.2831 47.356 16.6218 47.356 17.0683V30.8548C47.356 31.3012 47.2147 31.6476 46.932 31.8939C46.6494 32.1249 46.2961 32.2403 45.8721 32.2403Z"
          fill="url(#paint3_linear_499_4652)"
        />
        <path
          d="M58.948 29.0073C59.215 29.0073 59.4269 29.1074 59.584 29.3075C59.7567 29.5077 59.843 29.7771 59.843 30.1158C59.843 30.5931 59.5525 30.9933 58.9716 31.3166C58.4377 31.6091 57.8332 31.8478 57.158 32.0325C56.4828 32.2019 55.839 32.2865 55.2266 32.2865C53.3738 32.2865 51.9057 31.7631 50.8222 30.7162C49.7388 29.6693 49.1971 28.2376 49.1971 26.4209C49.1971 25.2663 49.4326 24.2425 49.9037 23.3496C50.3747 22.4566 51.0342 21.7639 51.8821 21.2712C52.7457 20.7786 53.7193 20.5322 54.8027 20.5322C55.839 20.5322 56.7419 20.7555 57.5113 21.2019C58.2807 21.6484 58.8774 22.2796 59.3013 23.0956C59.7253 23.9115 59.9372 24.8737 59.9372 25.9822C59.9372 26.6442 59.6389 26.9752 59.0422 26.9752H52.0941C52.1883 28.0374 52.4945 28.8226 53.0127 29.3306C53.5308 29.8233 54.2845 30.0696 55.2738 30.0696C55.7762 30.0696 56.2159 30.008 56.5927 29.8849C56.9853 29.7617 57.4249 29.5924 57.9117 29.3768C58.3827 29.1305 58.7282 29.0073 58.948 29.0073ZM54.8734 22.5644C54.0726 22.5644 53.4288 22.8107 52.942 23.3034C52.471 23.796 52.1883 24.5042 52.0941 25.4279H57.4171C57.3857 24.4888 57.1501 23.7806 56.7105 23.3034C56.2708 22.8107 55.6585 22.5644 54.8734 22.5644Z"
          fill="url(#paint4_linear_499_4652)"
        />
        <path
          d="M74.1187 20.5322C75.5005 20.5322 76.529 20.9171 77.2042 21.6869C77.8794 22.4566 78.217 23.619 78.217 25.1739V30.8548C78.217 31.2858 78.0835 31.6245 77.8166 31.8709C77.5653 32.1172 77.212 32.2403 76.7567 32.2403C76.3013 32.2403 75.9402 32.1172 75.6732 31.8709C75.4063 31.6245 75.2728 31.2858 75.2728 30.8548V25.3356C75.2728 24.458 75.1001 23.8191 74.7547 23.4189C74.4249 23.0186 73.8989 22.8184 73.1766 22.8184C72.3287 22.8184 71.6457 23.0802 71.1275 23.6036C70.625 24.127 70.3738 24.8275 70.3738 25.705V30.8548C70.3738 31.2858 70.2403 31.6245 69.9734 31.8709C69.7065 32.1172 69.3453 32.2403 68.89 32.2403C68.4346 32.2403 68.0735 32.1172 67.8065 31.8709C67.5553 31.6245 67.4297 31.2858 67.4297 30.8548V21.9178C67.4297 21.5175 67.5632 21.1942 67.8301 20.9479C68.097 20.7016 68.4582 20.5784 68.9135 20.5784C69.3218 20.5784 69.6515 20.7016 69.9028 20.9479C70.1697 21.1788 70.3032 21.4867 70.3032 21.8716V22.4951C70.6957 21.8639 71.2217 21.379 71.8812 21.0403C72.5407 20.7016 73.2865 20.5322 74.1187 20.5322Z"
          fill="url(#paint5_linear_499_4652)"
        />
        <path
          d="M81.7358 32.2403C81.3118 32.2403 80.9585 32.1249 80.6759 31.8939C80.4089 31.6476 80.2755 31.3012 80.2755 30.8548V21.9409C80.2755 21.4944 80.4089 21.1558 80.6759 20.9248C80.9585 20.6939 81.3118 20.5784 81.7358 20.5784C82.1597 20.5784 82.513 20.6939 82.7956 20.9248C83.0783 21.1558 83.2196 21.4944 83.2196 21.9409V30.8548C83.2196 31.3012 83.0783 31.6476 82.7956 31.8939C82.513 32.1249 82.1597 32.2403 81.7358 32.2403ZM81.7358 18.5232C81.2019 18.5232 80.7779 18.3846 80.4639 18.1075C80.1499 17.815 79.9928 17.4378 79.9928 16.9759C79.9928 16.5141 80.1499 16.1446 80.4639 15.8675C80.7779 15.5904 81.2019 15.4518 81.7358 15.4518C82.2539 15.4518 82.67 15.5904 82.9841 15.8675C83.3138 16.1446 83.4787 16.5141 83.4787 16.9759C83.4787 17.4378 83.3217 17.815 83.0076 18.1075C82.6936 18.3846 82.2696 18.5232 81.7358 18.5232Z"
          fill="url(#paint6_linear_499_4652)"
        />
        <path
          d="M95.4926 15.7058C95.9323 15.7058 96.2934 15.829 96.5761 16.0753C96.8587 16.3216 97 16.6449 97 17.0452V30.8548C97 31.2704 96.8665 31.6014 96.5996 31.8477C96.3327 32.0941 95.9794 32.2172 95.5397 32.2172C95.1001 32.2172 94.7468 32.0941 94.4798 31.8477C94.2129 31.6014 94.0794 31.2704 94.0794 30.8548V30.2774C93.734 30.9086 93.2315 31.4013 92.572 31.7554C91.9283 32.1095 91.1903 32.2865 90.3581 32.2865C89.3688 32.2865 88.4817 32.0402 87.6966 31.5475C86.9272 31.0549 86.3226 30.3621 85.883 29.4692C85.459 28.5609 85.2471 27.5217 85.2471 26.3516C85.2471 25.1816 85.459 24.1578 85.883 23.2803C86.3226 22.4027 86.9272 21.7254 87.6966 21.2481C88.466 20.7709 89.3531 20.5322 90.3581 20.5322C91.1903 20.5322 91.9283 20.7016 92.572 21.0403C93.2158 21.379 93.7104 21.8562 94.0559 22.472V16.999C94.0559 16.6141 94.1815 16.3062 94.4327 16.0753C94.6997 15.829 95.053 15.7058 95.4926 15.7058ZM91.1353 30.0465C92.0774 30.0465 92.7997 29.7309 93.3022 29.0997C93.8204 28.4685 94.0794 27.5679 94.0794 26.3978C94.0794 25.2278 93.8204 24.3349 93.3022 23.719C92.7997 23.0878 92.0853 22.7722 91.1589 22.7722C90.2168 22.7722 89.4866 23.0801 88.9684 23.6959C88.4503 24.3118 88.1912 25.197 88.1912 26.3516C88.1912 27.5217 88.4503 28.43 88.9684 29.0766C89.4866 29.7232 90.2089 30.0465 91.1353 30.0465Z"
          fill="url(#paint7_linear_499_4652)"
        />
        <defs>
          <lineargradient
            id="paint0_linear_499_4652"
            x1="92.364"
            y1="-1.60846"
            x2="73.9333"
            y2="61.008"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#C399DB" />
            <stop offset={1} stopColor="#5882F7" />
          </lineargradient>
          <lineargradient
            id="paint1_linear_499_4652"
            x1="92.364"
            y1="-1.60846"
            x2="73.9333"
            y2="61.008"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#C399DB" />
            <stop offset={1} stopColor="#5882F7" />
          </lineargradient>
          <lineargradient
            id="paint2_linear_499_4652"
            x1="92.364"
            y1="-1.60846"
            x2="73.9333"
            y2="61.008"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#C399DB" />
            <stop offset={1} stopColor="#5882F7" />
          </lineargradient>
          <lineargradient
            id="paint3_linear_499_4652"
            x1="92.364"
            y1="-1.60846"
            x2="73.9333"
            y2="61.008"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#C399DB" />
            <stop offset={1} stopColor="#5882F7" />
          </lineargradient>
          <lineargradient
            id="paint4_linear_499_4652"
            x1="92.364"
            y1="-1.60846"
            x2="73.9333"
            y2="61.008"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#C399DB" />
            <stop offset={1} stopColor="#5882F7" />
          </lineargradient>
          <lineargradient
            id="paint5_linear_499_4652"
            x1="92.364"
            y1="-1.60846"
            x2="73.9333"
            y2="61.008"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#C399DB" />
            <stop offset={1} stopColor="#5882F7" />
          </lineargradient>
          <lineargradient
            id="paint6_linear_499_4652"
            x1="92.364"
            y1="-1.60846"
            x2="73.9333"
            y2="61.008"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#C399DB" />
            <stop offset={1} stopColor="#5882F7" />
          </lineargradient>
          <lineargradient
            id="paint7_linear_499_4652"
            x1="92.364"
            y1="-1.60846"
            x2="73.9333"
            y2="61.008"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#C399DB" />
            <stop offset={1} stopColor="#5882F7" />
          </lineargradient>
        </defs>
      </svg>
    </div>
  </div>
  <div className="flex justify-between items-center w-[167px] absolute left-[14.5px] top-[137.5px] px-[47px] py-2 rounded-xl bg-white border-2 border-[#eff4ff]">
    <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-[#43434a]">Prix</p>
  </div>
  <div className="w-[343px] h-[55px] absolute left-[15px] top-[75px]">
    <div className="w-[343px] h-[55px] absolute left-[-1.5px] top-[-1.5px] rounded-xl bg-white border-2 border-[#eff4ff]" />
    <p className="w-[264px] absolute left-4 top-4 text-lg font-bold text-left text-[#3679ff]">
      Saint - Denis (93)
    </p>
    <div
      className="w-[39px] h-[39px] absolute left-[295px] top-[7px] rounded-xl"
      style={{ background: "linear-gradient(to bottom, #81a3f9 -0.06%, #3462d8 108.09%)" }}
    />
    <svg
      width={23}
      height={23}
      viewBox="0 0 23 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-[23px] h-[23px] absolute left-[303px] top-[15px]"
      preserveAspectRatio="xMidYMid meet"
    >
      <path
        d="M9.58333 16.2917C13.2882 16.2917 16.2917 13.2882 16.2917 9.58333C16.2917 5.87842 13.2882 2.875 9.58333 2.875C5.87842 2.875 2.875 5.87842 2.875 9.58333C2.875 13.2882 5.87842 16.2917 9.58333 16.2917Z"
        stroke="white"
       strokeWidth={2}
       strokeLinecap="round"
       strokeLinejoin="round"
      />
      <path
        d="M14.375 14.375L20.125 20.125"
        stroke="white"
       strokeWidth={2}
       strokeLinecap="round"
       strokeLinejoin="round"
      />
    </svg>
  </div>
  <div className="w-[164px] h-[46px] absolute left-[104px] top-[679px]">
    <div className="w-[164px] h-[46px] absolute left-[-1px] top-[-1px] rounded-xl bg-[#191f2c]" />
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6 absolute left-[123px] top-2.5"
      preserveAspectRatio="xMidYMid meet"
    >
      <path
        d="M15 6L21 3V18L15 21V6Z"
        stroke="white"
       strokeWidth={2}
       strokeLinecap="round"
       strokeLinejoin="round"
      />
      <path
        d="M9 18L15 21V6L9 3V18Z"
        stroke="white"
       strokeWidth={2}
       strokeLinecap="round"
       strokeLinejoin="round"
      />
      <path
        d="M3 6L9 3V18L3 21V6Z"
        stroke="white"
       strokeWidth={2}
       strokeLinecap="round"
       strokeLinejoin="round"
      />
    </svg>
    <p className="absolute left-4 top-[11px] text-lg font-bold text-left text-white">Mode carte</p>
  </div>
  <div className="w-[375px] h-[70px] absolute left-[-1.5px] top-[740.5px] overflow-hidden bg-white">
    <div className="w-[62px] h-[49px]">
      <svg
        width={32}
        height={32}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8 absolute left-[124.5px] top-[10.5px]"
        preserveAspectRatio="xMidYMid meet"
      >
        <path
          d="M13.3333 22.6667C18.488 22.6667 22.6667 18.488 22.6667 13.3333C22.6667 8.17868 18.488 4 13.3333 4C8.17868 4 4 8.17868 4 13.3333C4 18.488 8.17868 22.6667 13.3333 22.6667Z"
          stroke="#272832"
         strokeWidth={2}
         strokeLinecap="round"
         strokeLinejoin="round"
        />
        <path
          d="M20 20L28 28"
          stroke="#272832"
         strokeWidth={2}
         strokeLinecap="round"
         strokeLinejoin="round"
        />
      </svg>
      <p className="absolute left-[110px] top-[47px] text-xs font-bold text-left text-[#272832]">
        Recherche
      </p>
    </div>
    <div className="w-[62px] h-[49px]">
      <svg
        width={32}
        height={32}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8 absolute left-[227.5px] top-[10.5px]"
        preserveAspectRatio="xMidYMid meet"
      >
        <path
          d="M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z"
          stroke="#272832"
         strokeWidth={2}
         strokeLinecap="round"
         strokeLinejoin="round"
        />
        <path
          d="M22.9553 25.7764C21.2463 23.8678 18.7633 22.6667 15.9998 22.6667C13.2362 22.6667 10.7532 23.8678 9.04427 25.7764"
          stroke="#272832"
         strokeWidth={2}
         strokeLinecap="round"
         strokeLinejoin="round"
        />
        <path
          d="M16 18.6667C18.2091 18.6667 20 16.8759 20 14.6667C20 12.4576 18.2091 10.6667 16 10.6667C13.7909 10.6667 12 12.4576 12 14.6667C12 16.8759 13.7909 18.6667 16 18.6667Z"
          stroke="#272832"
         strokeWidth={2}
         strokeLinecap="round"
         strokeLinejoin="round"
        />
      </svg>
      <p className="absolute left-[213px] top-[47px] text-xs font-bold text-left text-[#272832]">
        Connexion
      </p>
    </div>
    <div className="w-[33px] h-[49px]">
      <p className="absolute left-[316px] top-[47px] text-xs font-bold text-left text-[#272832]">
        Menu
      </p>
      <svg
        width={32}
        height={32}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8 absolute left-[316.5px] top-[10.5px]"
        preserveAspectRatio="xMidYMid meet"
      >
        <path
          d="M6.66667 22.6667L25.3333 22.6667"
          stroke="#272832"
         strokeWidth={2}
         strokeLinecap="round"
         strokeLinejoin="round"
        />
        <path
          d="M6.66667 16H25.3333"
          stroke="#272832"
         strokeWidth={2}
         strokeLinecap="round"
         strokeLinejoin="round"
        />
        <path
          d="M6.66667 9.33325L17.3333 9.33325"
          stroke="#272832"
         strokeWidth={2}
         strokeLinecap="round"
         strokeLinejoin="round"
        />
      </svg>
    </div>
    <svg
      width={375}
      height={1}
      viewBox="0 0 375 1"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute left-[-1.5px] top-[-0.5px]"
      preserveAspectRatio="xMidYMid meet"
    >
      <line y1="0.5" x2={375} y2="0.5" stroke="#EAEFFA" />
    </svg>
    <div className="w-[43px] h-[49px]">
      <svg
        width={32}
        height={32}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8 absolute left-[30.5px] top-[10.5px]"
        preserveAspectRatio="xMidYMid meet"
      >
        <path
          d="M26.2113 12.935L16.878 4.76837C16.3753 4.32851 15.6247 4.32851 15.122 4.76837L5.78867 12.935C5.49932 13.1882 5.33334 13.554 5.33334 13.9385V25.3335C5.33334 26.0698 5.9303 26.6668 6.66668 26.6668H12C12.7364 26.6668 13.3333 26.0698 13.3333 25.3335V20.0001C13.3333 19.2637 13.9303 18.6668 14.6667 18.6668H17.3333C18.0697 18.6668 18.6667 19.2637 18.6667 20.0001V25.3335C18.6667 26.0698 19.2636 26.6668 20 26.6668H25.3333C26.0697 26.6668 26.6667 26.0698 26.6667 25.3335V13.9385C26.6667 13.554 26.5007 13.1882 26.2113 12.935Z"
          stroke="#3679FF"
         strokeWidth={2}
         strokeLinecap="round"
         strokeLinejoin="round"
        />
      </svg>
      <p className="absolute left-[26px] top-[47px] text-xs font-bold text-left text-[#3679ff]">
        Acceuil
      </p>
    </div>
  </div>
  <svg
    width={375}
    height={810}
    viewBox="0 0 375 810"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="absolute left-[-1px] top-0 opacity-30"
    preserveAspectRatio="none"
  >
    <path opacity="0.3" d="M0 0H375V810H0V0Z" fill="#051F52" />
  </svg>
  <div className="flex flex-col justify-center items-center w-[375px] absolute left-[-1px] top-[584px] overflow-hidden gap-4 p-6 rounded-tl-xl rounded-tr-xl bg-white border border-[#eaeffa]">
    <div className="flex justify-end items-center flex-grow-0 flex-shrink-0 w-[327px] relative">
      <p className="flex-grow w-[303px] text-base font-bold text-center text-[#272832]">
        Nombre de pièce
      </p>
      <svg
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
        preserveAspectRatio="none"
      >
        <path
          d="M18 18L6 6"
          stroke="#14181F"
         strokeWidth={2}
         strokeLinecap="round"
         strokeLinejoin="round"
        />
        <path
          d="M18 6L5.99997 18"
          stroke="#14181F"
         strokeWidth={2}
         strokeLinecap="round"
         strokeLinejoin="round"
        />
      </svg>
    </div>
    <div className="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 w-[351px] gap-4">
      <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 h-[50px] gap-4 p-4">
        <div className="flex justify-between items-center flex-grow-0 flex-shrink-0 w-[141px] relative px-[47px] py-2 rounded-xl bg-white border-2 border-[#eff4ff]">
          <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-[#43434a]">
            Studio
          </p>
        </div>
        <div className="flex justify-between items-center flex-grow-0 flex-shrink-0 w-[141px] relative px-[47px] py-2 rounded-xl bg-white border-2 border-[#eff4ff]">
          <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-[#43434a]">
            2 pièces
          </p>
        </div>
      </div>
      <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-4">
        <div className="flex justify-between items-center flex-grow-0 flex-shrink-0 w-[141px] relative px-[47px] py-2 rounded-xl bg-white border-2 border-[#eff4ff]">
          <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-[#43434a]">
            3 pièces
          </p>
        </div>
        <div className="flex justify-between items-center flex-grow-0 flex-shrink-0 w-[141px] relative px-[47px] py-2 rounded-xl bg-white border-2 border-[#eff4ff]">
          <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-[#43434a]">
            4 pièces
          </p>
        </div>
      </div>
      <div className="flex justify-between items-center flex-grow-0 flex-shrink-0 w-[141px] relative px-[47px] py-2 rounded-xl bg-white border-2 border-[#eff4ff]">
        <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-[#43434a]">
          5 pièces
        </p>
      </div>
    </div>
    <div className="flex-grow-0 flex-shrink-0 w-[327px] h-[58px] relative overflow-hidden">
      <div
        className="flex justify-end items-end absolute left-[199px] top-[7px] gap-2.5 px-10 py-3 rounded-xl"
        style={{ background: "linear-gradient(to bottom, #81a3f9 -0.06%, #3462d8 108.09%)" }}
      >
        <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-white">Valider</p>
      </div>
    </div>
  </div>
  <div className="flex justify-between items-center w-[167px] absolute left-[190.5px] top-[137.5px] px-[47px] py-2 rounded-xl bg-white border-2 border-[#eff4ff]">
    <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-[#43434a]">
      Nb de pièce
    </p>
  </div>
</div>

7777777777777777777

<div className="w-[375px] h-[812px] relative overflow-hidden bg-[#f9fbff] mt-8 mb-8">
  <div className="w-[343px] h-[141px] absolute left-[15px] top-[486px]">
    <div className="w-[343px] h-[141px] absolute left-[-1.5px] top-[-1.5px] rounded-xl bg-white border-2 border-[#eff4ff]" />
    <p className="w-[179px] absolute left-[133px] top-[78px] text-xs font-medium text-left text-[#1a2e6c]">
      de 1 à 3 pièces
    </p>
    <p className="w-[161px] h-[18px] absolute left-[133px] top-4 text-lg font-bold text-left text-[#3679ff]">
      Titre du bien
    </p>
    <p className="w-[161px] absolute left-[133px] top-[37px] text-xs font-medium text-left text-[#6976a0]">
      <span className="w-[161px] text-xs font-medium text-left text-[#6976a0]">
        92500 Rueil-Malmaison
      </span>
      <br />
      <span className="w-[161px] text-xs font-medium text-left text-[#6976a0]">Buzenval</span>
    </p>
    <p className="w-[61px] absolute left-[133px] top-[94px] text-xs font-medium text-left text-[#6976a0]">
      à partir de
    </p>
    <p className="w-[117px] absolute left-[196px] top-[94px] text-xs font-medium text-left text-[#1a2e6c]">
      230 000€
    </p>
    <p className="absolute left-[133px] top-[110px] text-xs font-medium text-left text-[#6976a0]">
      soit
    </p>
    <p className="w-[68px] absolute left-[158px] top-[110px] text-xs font-medium text-left text-[#1a2e6c]">
      700€ / mois
    </p>
    <div className="w-[109px] h-[109px]">
      <div className="w-[109px] h-[109px] absolute left-[15.58px] top-[15.58px] rounded-[10px] bg-[#c4c4c4]" />
      
    </div>
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6 absolute left-[310px] top-[108px]"
      preserveAspectRatio="xMidYMid meet"
    >
      <path
        d="M12 20L11.5134 20.8736C11.8159 21.0421 12.1841 21.0421 12.4866 20.8736L12 20ZM12 7.16221L11.0797 7.55332C11.2365 7.9225 11.5989 8.16221 12 8.16221C12.4011 8.16221 12.7635 7.9225 12.9203 7.55332L12 7.16221ZM2 8.97234C2 12.4457 4.56031 15.4617 6.83471 17.4884C8.00373 18.5302 9.16813 19.3728 10.0381 19.9542C10.474 20.2456 10.8385 20.473 11.0958 20.6286C11.2246 20.7064 11.3267 20.7664 11.3977 20.8076C11.4332 20.8281 11.461 20.844 11.4805 20.8551C11.4902 20.8606 11.4979 20.8649 11.5034 20.868C11.5061 20.8696 11.5084 20.8708 11.51 20.8717C11.5109 20.8722 11.5116 20.8726 11.5121 20.8729C11.5124 20.8731 11.5127 20.8733 11.5129 20.8733C11.5132 20.8735 11.5134 20.8736 12 20C12.4866 19.1264 12.4868 19.1265 12.4869 19.1265C12.4869 19.1265 12.487 19.1266 12.487 19.1266C12.4871 19.1266 12.4869 19.1266 12.4867 19.1264C12.4862 19.1261 12.4851 19.1256 12.4836 19.1247C12.4804 19.1229 12.4752 19.12 12.4679 19.1158C12.4533 19.1075 12.4305 19.0945 12.4001 19.0769C12.3393 19.0417 12.2481 18.9881 12.1307 18.9172C11.8959 18.7751 11.5572 18.5639 11.1494 18.2914C10.3319 17.745 9.24627 16.9585 8.1653 15.9953C5.93969 14.012 4 11.5141 4 8.97234H2ZM12.9203 6.77109C11.7391 3.99154 9.04681 2.70458 6.60702 3.05704C5.38263 3.23392 4.21629 3.82554 3.35895 4.84728C2.49888 5.87228 2 7.26915 2 8.97234H4C4 7.66797 4.37612 6.74652 4.89105 6.13285C5.40871 5.51592 6.11737 5.14854 6.89298 5.03649C8.45319 4.8111 10.2609 5.62663 11.0797 7.55332L12.9203 6.77109ZM20 8.97234C20 11.5141 18.0603 14.012 15.8347 15.9953C14.7537 16.9585 13.6681 17.745 12.8506 18.2914C12.4428 18.5639 12.1041 18.7751 11.8693 18.9172C11.7519 18.9881 11.6607 19.0417 11.5999 19.0769C11.5695 19.0945 11.5467 19.1075 11.5321 19.1158C11.5248 19.12 11.5196 19.1229 11.5164 19.1247C11.5149 19.1256 11.5138 19.1261 11.5133 19.1264C11.5131 19.1266 11.5129 19.1266 11.513 19.1266C11.513 19.1266 11.5131 19.1265 11.5131 19.1265C11.5132 19.1265 11.5134 19.1264 12 20C12.4866 20.8736 12.4868 20.8735 12.4871 20.8733C12.4873 20.8733 12.4876 20.8731 12.4879 20.8729C12.4884 20.8726 12.4891 20.8722 12.49 20.8717C12.4916 20.8708 12.4939 20.8696 12.4966 20.868C12.5021 20.8649 12.5098 20.8606 12.5195 20.8551C12.539 20.844 12.5668 20.8281 12.6023 20.8076C12.6733 20.7664 12.7754 20.7064 12.9042 20.6286C13.1615 20.473 13.526 20.2456 13.9619 19.9542C14.8319 19.3728 15.9963 18.5302 17.1653 17.4884C19.4397 15.4617 22 12.4457 22 8.97234H20ZM12.9203 7.55332C13.7391 5.62663 15.5468 4.8111 17.107 5.03649C17.8826 5.14854 18.5913 5.51592 19.109 6.13285C19.6239 6.74652 20 7.66797 20 8.97234H22C22 7.26915 21.5011 5.87228 20.641 4.84728C19.7837 3.82554 18.6174 3.23392 17.393 3.05704C14.9532 2.70458 12.2609 3.99154 11.0797 6.77109L12.9203 7.55332Z"
        fill="#3679FF"
      />
    </svg>
  </div>
  <div className="w-[343px] h-[141px] absolute left-[15px] top-[635px]">
    <div className="w-[343px] h-[141px] absolute left-[-1.5px] top-[-1.5px] rounded-xl bg-white border-2 border-[#eff4ff]" />
    <p className="w-[179px] absolute left-[133px] top-[78px] text-xs font-medium text-left text-[#1a2e6c]">
      de 1 à 3 pièces
    </p>
    <p className="w-[161px] h-[18px] absolute left-[133px] top-4 text-lg font-bold text-left text-[#3679ff]">
      Titre du bien
    </p>
    <p className="w-[161px] absolute left-[133px] top-[37px] text-xs font-medium text-left text-[#6976a0]">
      <span className="w-[161px] text-xs font-medium text-left text-[#6976a0]">
        92500 Rueil-Malmaison
      </span>
      <br />
      <span className="w-[161px] text-xs font-medium text-left text-[#6976a0]">Buzenval</span>
    </p>
    <p className="w-[61px] absolute left-[133px] top-[94px] text-xs font-medium text-left text-[#6976a0]">
      à partir de
    </p>
    <p className="w-[117px] absolute left-[196px] top-[94px] text-xs font-medium text-left text-[#1a2e6c]">
      230 000€
    </p>
    <p className="absolute left-[133px] top-[110px] text-xs font-medium text-left text-[#6976a0]">
      soit
    </p>
    <p className="w-[68px] absolute left-[158px] top-[110px] text-xs font-medium text-left text-[#1a2e6c]">
      700€ / mois
    </p>
    <div className="w-[109px] h-[109px]">
      <div className="w-[109px] h-[109px] absolute left-[15.58px] top-[15.58px] rounded-[10px] bg-[#c4c4c4]" />
      
    </div>
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6 absolute left-[310px] top-[108px]"
      preserveAspectRatio="xMidYMid meet"
    >
      <path
        d="M12 20L11.5134 20.8736C11.8159 21.0421 12.1841 21.0421 12.4866 20.8736L12 20ZM12 7.16221L11.0797 7.55332C11.2365 7.9225 11.5989 8.16221 12 8.16221C12.4011 8.16221 12.7635 7.9225 12.9203 7.55332L12 7.16221ZM2 8.97234C2 12.4457 4.56031 15.4617 6.83471 17.4884C8.00373 18.5302 9.16813 19.3728 10.0381 19.9542C10.474 20.2456 10.8385 20.473 11.0958 20.6286C11.2246 20.7064 11.3267 20.7664 11.3977 20.8076C11.4332 20.8281 11.461 20.844 11.4805 20.8551C11.4902 20.8606 11.4979 20.8649 11.5034 20.868C11.5061 20.8696 11.5084 20.8708 11.51 20.8717C11.5109 20.8722 11.5116 20.8726 11.5121 20.8729C11.5124 20.8731 11.5127 20.8733 11.5129 20.8733C11.5132 20.8735 11.5134 20.8736 12 20C12.4866 19.1264 12.4868 19.1265 12.4869 19.1265C12.4869 19.1265 12.487 19.1266 12.487 19.1266C12.4871 19.1266 12.4869 19.1266 12.4867 19.1264C12.4862 19.1261 12.4851 19.1256 12.4836 19.1247C12.4804 19.1229 12.4752 19.12 12.4679 19.1158C12.4533 19.1075 12.4305 19.0945 12.4001 19.0769C12.3393 19.0417 12.2481 18.9881 12.1307 18.9172C11.8959 18.7751 11.5572 18.5639 11.1494 18.2914C10.3319 17.745 9.24627 16.9585 8.1653 15.9953C5.93969 14.012 4 11.5141 4 8.97234H2ZM12.9203 6.77109C11.7391 3.99154 9.04681 2.70458 6.60702 3.05704C5.38263 3.23392 4.21629 3.82554 3.35895 4.84728C2.49888 5.87228 2 7.26915 2 8.97234H4C4 7.66797 4.37612 6.74652 4.89105 6.13285C5.40871 5.51592 6.11737 5.14854 6.89298 5.03649C8.45319 4.8111 10.2609 5.62663 11.0797 7.55332L12.9203 6.77109ZM20 8.97234C20 11.5141 18.0603 14.012 15.8347 15.9953C14.7537 16.9585 13.6681 17.745 12.8506 18.2914C12.4428 18.5639 12.1041 18.7751 11.8693 18.9172C11.7519 18.9881 11.6607 19.0417 11.5999 19.0769C11.5695 19.0945 11.5467 19.1075 11.5321 19.1158C11.5248 19.12 11.5196 19.1229 11.5164 19.1247C11.5149 19.1256 11.5138 19.1261 11.5133 19.1264C11.5131 19.1266 11.5129 19.1266 11.513 19.1266C11.513 19.1266 11.5131 19.1265 11.5131 19.1265C11.5132 19.1265 11.5134 19.1264 12 20C12.4866 20.8736 12.4868 20.8735 12.4871 20.8733C12.4873 20.8733 12.4876 20.8731 12.4879 20.8729C12.4884 20.8726 12.4891 20.8722 12.49 20.8717C12.4916 20.8708 12.4939 20.8696 12.4966 20.868C12.5021 20.8649 12.5098 20.8606 12.5195 20.8551C12.539 20.844 12.5668 20.8281 12.6023 20.8076C12.6733 20.7664 12.7754 20.7064 12.9042 20.6286C13.1615 20.473 13.526 20.2456 13.9619 19.9542C14.8319 19.3728 15.9963 18.5302 17.1653 17.4884C19.4397 15.4617 22 12.4457 22 8.97234H20ZM12.9203 7.55332C13.7391 5.62663 15.5468 4.8111 17.107 5.03649C17.8826 5.14854 18.5913 5.51592 19.109 6.13285C19.6239 6.74652 20 7.66797 20 8.97234H22C22 7.26915 21.5011 5.87228 20.641 4.84728C19.7837 3.82554 18.6174 3.23392 17.393 3.05704C14.9532 2.70458 12.2609 3.99154 11.0797 6.77109L12.9203 7.55332Z"
        fill="#3679FF"
      />
    </svg>
  </div>
 
  <div className="w-[343px] h-[141px] absolute left-[15px] top-[188px]">
    <div className="w-[343px] h-[141px] absolute left-[-1.5px] top-[-1.5px] rounded-xl bg-white border-2 border-[#eff4ff]" />
    <p className="w-[179px] absolute left-[133px] top-[78px] text-xs font-medium text-left text-[#1a2e6c]">
      de 1 à 3 pièces
    </p>
    <p className="w-[161px] h-[18px] absolute left-[133px] top-4 text-lg font-bold text-left text-[#3679ff]">
      Titre du bien
    </p>
    <p className="w-[161px] absolute left-[133px] top-[37px] text-xs font-medium text-left text-[#6976a0]">
      <span className="w-[161px] text-xs font-medium text-left text-[#6976a0]">
        92500 Rueil-Malmaison
      </span>
      <br />
      <span className="w-[161px] text-xs font-medium text-left text-[#6976a0]">Buzenval</span>
    </p>
    <p className="w-[61px] absolute left-[133px] top-[94px] text-xs font-medium text-left text-[#6976a0]">
      à partir de
    </p>
    <p className="w-[117px] absolute left-[196px] top-[94px] text-xs font-medium text-left text-[#1a2e6c]">
      230 000€
    </p>
    <p className="absolute left-[133px] top-[110px] text-xs font-medium text-left text-[#6976a0]">
      soit
    </p>
    <p className="w-[68px] absolute left-[158px] top-[110px] text-xs font-medium text-left text-[#1a2e6c]">
      700€ / mois
    </p>
    <div className="w-[109px] h-[109px]">
      <div className="w-[109px] h-[109px] absolute left-[15.58px] top-[15.58px] rounded-[10px] bg-[#c4c4c4]" />
     
    </div>
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6 absolute left-[310px] top-[108px]"
      preserveAspectRatio="xMidYMid meet"
    >
      <path
        d="M12 20L11.5134 20.8736C11.8159 21.0421 12.1841 21.0421 12.4866 20.8736L12 20ZM12 7.16221L11.0797 7.55332C11.2365 7.9225 11.5989 8.16221 12 8.16221C12.4011 8.16221 12.7635 7.9225 12.9203 7.55332L12 7.16221ZM2 8.97234C2 12.4457 4.56031 15.4617 6.83471 17.4884C8.00373 18.5302 9.16813 19.3728 10.0381 19.9542C10.474 20.2456 10.8385 20.473 11.0958 20.6286C11.2246 20.7064 11.3267 20.7664 11.3977 20.8076C11.4332 20.8281 11.461 20.844 11.4805 20.8551C11.4902 20.8606 11.4979 20.8649 11.5034 20.868C11.5061 20.8696 11.5084 20.8708 11.51 20.8717C11.5109 20.8722 11.5116 20.8726 11.5121 20.8729C11.5124 20.8731 11.5127 20.8733 11.5129 20.8733C11.5132 20.8735 11.5134 20.8736 12 20C12.4866 19.1264 12.4868 19.1265 12.4869 19.1265C12.4869 19.1265 12.487 19.1266 12.487 19.1266C12.4871 19.1266 12.4869 19.1266 12.4867 19.1264C12.4862 19.1261 12.4851 19.1256 12.4836 19.1247C12.4804 19.1229 12.4752 19.12 12.4679 19.1158C12.4533 19.1075 12.4305 19.0945 12.4001 19.0769C12.3393 19.0417 12.2481 18.9881 12.1307 18.9172C11.8959 18.7751 11.5572 18.5639 11.1494 18.2914C10.3319 17.745 9.24627 16.9585 8.1653 15.9953C5.93969 14.012 4 11.5141 4 8.97234H2ZM12.9203 6.77109C11.7391 3.99154 9.04681 2.70458 6.60702 3.05704C5.38263 3.23392 4.21629 3.82554 3.35895 4.84728C2.49888 5.87228 2 7.26915 2 8.97234H4C4 7.66797 4.37612 6.74652 4.89105 6.13285C5.40871 5.51592 6.11737 5.14854 6.89298 5.03649C8.45319 4.8111 10.2609 5.62663 11.0797 7.55332L12.9203 6.77109ZM20 8.97234C20 11.5141 18.0603 14.012 15.8347 15.9953C14.7537 16.9585 13.6681 17.745 12.8506 18.2914C12.4428 18.5639 12.1041 18.7751 11.8693 18.9172C11.7519 18.9881 11.6607 19.0417 11.5999 19.0769C11.5695 19.0945 11.5467 19.1075 11.5321 19.1158C11.5248 19.12 11.5196 19.1229 11.5164 19.1247C11.5149 19.1256 11.5138 19.1261 11.5133 19.1264C11.5131 19.1266 11.5129 19.1266 11.513 19.1266C11.513 19.1266 11.5131 19.1265 11.5131 19.1265C11.5132 19.1265 11.5134 19.1264 12 20C12.4866 20.8736 12.4868 20.8735 12.4871 20.8733C12.4873 20.8733 12.4876 20.8731 12.4879 20.8729C12.4884 20.8726 12.4891 20.8722 12.49 20.8717C12.4916 20.8708 12.4939 20.8696 12.4966 20.868C12.5021 20.8649 12.5098 20.8606 12.5195 20.8551C12.539 20.844 12.5668 20.8281 12.6023 20.8076C12.6733 20.7664 12.7754 20.7064 12.9042 20.6286C13.1615 20.473 13.526 20.2456 13.9619 19.9542C14.8319 19.3728 15.9963 18.5302 17.1653 17.4884C19.4397 15.4617 22 12.4457 22 8.97234H20ZM12.9203 7.55332C13.7391 5.62663 15.5468 4.8111 17.107 5.03649C17.8826 5.14854 18.5913 5.51592 19.109 6.13285C19.6239 6.74652 20 7.66797 20 8.97234H22C22 7.26915 21.5011 5.87228 20.641 4.84728C19.7837 3.82554 18.6174 3.23392 17.393 3.05704C14.9532 2.70458 12.2609 3.99154 11.0797 6.77109L12.9203 7.55332Z"
        fill="#3679FF"
      />
    </svg>
  </div>
  <div className="w-[343px] h-[141px] absolute left-[15px] top-[337px]">
    <div className="w-[343px] h-[141px] absolute left-[-1.5px] top-[-1.5px] rounded-xl bg-white border-2 border-[#eff4ff]" />
    <p className="w-[179px] absolute left-[133px] top-[78px] text-xs font-medium text-left text-[#1a2e6c]">
      de 1 à 3 pièces
    </p>
    <p className="w-[161px] h-[18px] absolute left-[133px] top-4 text-lg font-bold text-left text-[#3679ff]">
      Titre du bien
    </p>
    <p className="w-[161px] absolute left-[133px] top-[37px] text-xs font-medium text-left text-[#6976a0]">
      <span className="w-[161px] text-xs font-medium text-left text-[#6976a0]">
        92500 Rueil-Malmaison
      </span>
      <br />
      <span className="w-[161px] text-xs font-medium text-left text-[#6976a0]">Buzenval</span>
    </p>
    <p className="w-[61px] absolute left-[133px] top-[94px] text-xs font-medium text-left text-[#6976a0]">
      à partir de
    </p>
    <p className="w-[117px] absolute left-[196px] top-[94px] text-xs font-medium text-left text-[#1a2e6c]">
      230 000€
    </p>
    <p className="absolute left-[133px] top-[110px] text-xs font-medium text-left text-[#6976a0]">
      soit
    </p>
    <p className="w-[68px] absolute left-[158px] top-[110px] text-xs font-medium text-left text-[#1a2e6c]">
      700€ / mois
    </p>
    <div className="w-[109px] h-[109px]">
      <div className="w-[109px] h-[109px] absolute left-[15.58px] top-[15.58px] rounded-[10px] bg-[#c4c4c4]" />
      <img
        src="ralph-ravi-kayden-2d4laqalbda-unsplash.jpeg"
        className="w-[217.44px] h-[198.04px] absolute left-[-8.2px] top-[-8.42px] rounded-[10px] object-cover"
      />
    </div>
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6 absolute left-[310px] top-[108px]"
      preserveAspectRatio="xMidYMid meet"
    >
      <path
        d="M12 20L11.5134 20.8736C11.8159 21.0421 12.1841 21.0421 12.4866 20.8736L12 20ZM12 7.16221L11.0797 7.55332C11.2365 7.9225 11.5989 8.16221 12 8.16221C12.4011 8.16221 12.7635 7.9225 12.9203 7.55332L12 7.16221ZM2 8.97234C2 12.4457 4.56031 15.4617 6.83471 17.4884C8.00373 18.5302 9.16813 19.3728 10.0381 19.9542C10.474 20.2456 10.8385 20.473 11.0958 20.6286C11.2246 20.7064 11.3267 20.7664 11.3977 20.8076C11.4332 20.8281 11.461 20.844 11.4805 20.8551C11.4902 20.8606 11.4979 20.8649 11.5034 20.868C11.5061 20.8696 11.5084 20.8708 11.51 20.8717C11.5109 20.8722 11.5116 20.8726 11.5121 20.8729C11.5124 20.8731 11.5127 20.8733 11.5129 20.8733C11.5132 20.8735 11.5134 20.8736 12 20C12.4866 19.1264 12.4868 19.1265 12.4869 19.1265C12.4869 19.1265 12.487 19.1266 12.487 19.1266C12.4871 19.1266 12.4869 19.1266 12.4867 19.1264C12.4862 19.1261 12.4851 19.1256 12.4836 19.1247C12.4804 19.1229 12.4752 19.12 12.4679 19.1158C12.4533 19.1075 12.4305 19.0945 12.4001 19.0769C12.3393 19.0417 12.2481 18.9881 12.1307 18.9172C11.8959 18.7751 11.5572 18.5639 11.1494 18.2914C10.3319 17.745 9.24627 16.9585 8.1653 15.9953C5.93969 14.012 4 11.5141 4 8.97234H2ZM12.9203 6.77109C11.7391 3.99154 9.04681 2.70458 6.60702 3.05704C5.38263 3.23392 4.21629 3.82554 3.35895 4.84728C2.49888 5.87228 2 7.26915 2 8.97234H4C4 7.66797 4.37612 6.74652 4.89105 6.13285C5.40871 5.51592 6.11737 5.14854 6.89298 5.03649C8.45319 4.8111 10.2609 5.62663 11.0797 7.55332L12.9203 6.77109ZM20 8.97234C20 11.5141 18.0603 14.012 15.8347 15.9953C14.7537 16.9585 13.6681 17.745 12.8506 18.2914C12.4428 18.5639 12.1041 18.7751 11.8693 18.9172C11.7519 18.9881 11.6607 19.0417 11.5999 19.0769C11.5695 19.0945 11.5467 19.1075 11.5321 19.1158C11.5248 19.12 11.5196 19.1229 11.5164 19.1247C11.5149 19.1256 11.5138 19.1261 11.5133 19.1264C11.5131 19.1266 11.5129 19.1266 11.513 19.1266C11.513 19.1266 11.5131 19.1265 11.5131 19.1265C11.5132 19.1265 11.5134 19.1264 12 20C12.4866 20.8736 12.4868 20.8735 12.4871 20.8733C12.4873 20.8733 12.4876 20.8731 12.4879 20.8729C12.4884 20.8726 12.4891 20.8722 12.49 20.8717C12.4916 20.8708 12.4939 20.8696 12.4966 20.868C12.5021 20.8649 12.5098 20.8606 12.5195 20.8551C12.539 20.844 12.5668 20.8281 12.6023 20.8076C12.6733 20.7664 12.7754 20.7064 12.9042 20.6286C13.1615 20.473 13.526 20.2456 13.9619 19.9542C14.8319 19.3728 15.9963 18.5302 17.1653 17.4884C19.4397 15.4617 22 12.4457 22 8.97234H20ZM12.9203 7.55332C13.7391 5.62663 15.5468 4.8111 17.107 5.03649C17.8826 5.14854 18.5913 5.51592 19.109 6.13285C19.6239 6.74652 20 7.66797 20 8.97234H22C22 7.26915 21.5011 5.87228 20.641 4.84728C19.7837 3.82554 18.6174 3.23392 17.393 3.05704C14.9532 2.70458 12.2609 3.99154 11.0797 6.77109L12.9203 7.55332Z"
        fill="#3679FF"
      />
    </svg>
  </div>
  <div className="w-[131px] h-[35px]">
    <div className="w-[131px] h-[35px]">
      <p className="w-3 h-[9.89px] absolute left-[223px] top-[37.84px] text-[9px] font-bold text-left text-[#43434a]">
        By
      </p>
      <img
        src="nexity-logo-1.png"
        className="w-4 h-[15.82px] absolute left-[236.5px] top-[34.38px] object-cover"
      />
      <svg
        width={97}
        height={35}
        viewBox="0 0 97 35"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute left-[121.81px] top-[23.81px]"
        preserveAspectRatio="none"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14.7453 23.1445L14.7407 23.1523C14.0805 24.2619 13.8662 25.08 13.8662 25.6532C13.8662 26.2912 14.0388 26.7946 14.3655 27.2364C14.8307 27.8346 15.285 28.2229 15.7103 28.4659C16.4653 28.8776 17.1606 29.2805 17.7941 29.6749C18.1547 29.8857 18.5359 30.1422 18.8538 30.4538C19.1298 30.7245 19.6851 31.3528 19.6851 32.289C19.6851 33.1924 19.2405 34.0361 18.4037 34.5342C17.7331 34.9334 16.9929 35 16.4661 35C14.4605 35 12.542 33.9342 10.7836 32.4439L10.777 32.4383L10.7704 32.4326C10.006 31.7736 9.36034 31.054 8.85982 30.2758C7.82421 31.5507 7.04593 32.473 6.53465 33.0274C6.11811 33.4933 5.70025 33.9128 5.29206 34.233C5.08526 34.3952 4.83687 34.567 4.55443 34.7055C4.28689 34.8366 3.86403 35 3.34275 35C1.95883 35 1.11059 34.0693 0.685061 33.4017L0.645838 33.3402L0.611212 33.2761C0.237761 32.5844 0 31.8163 0 30.9942C0 30.6626 0.0691356 30.2922 0.122125 30.0308C0.186073 29.7154 0.277136 29.328 0.390847 28.8785C0.618863 27.9773 0.955872 26.7564 1.39802 25.2256C2.26023 22.2136 3.12892 18.5842 4.00234 14.3292C4.86254 10.1385 5.28237 6.40441 5.28237 3.11561C5.28237 2.82873 5.29959 2.51234 5.36008 2.20093C5.41034 1.94226 5.52396 1.5004 5.83869 1.07999C6.53482 0.118923 7.62675 0 8.17117 0C9.01283 0 9.65259 0.387519 10.0607 0.754313C10.4422 1.09721 10.7278 1.51146 10.9462 1.89667C11.4801 2.76068 11.7615 3.71808 11.7615 4.7341C11.7615 8.59658 11.0805 13.2941 9.75071 18.8031C11.3809 16.7253 12.8167 15.037 14.0557 13.7464L14.0606 13.7412L14.0656 13.736C14.666 13.1194 15.2091 12.6043 15.6786 12.2293C15.9111 12.0436 16.1721 11.8543 16.4479 11.7018C16.666 11.5812 17.158 11.3295 17.7867 11.3295C18.8431 11.3295 19.6799 11.824 20.2664 12.4374C20.6926 12.8623 21.2946 13.6144 21.2946 14.6474C21.2946 15.2079 21.0739 15.6394 20.9834 15.8074C20.8632 16.0305 20.719 16.2342 20.5877 16.4044C20.3219 16.7486 19.9674 17.1361 19.5601 17.5498C18.788 18.3338 17.9336 19.1985 16.997 20.1438C16.1995 20.9487 15.4473 21.9401 14.7499 23.1367L14.7453 23.1445ZM18.7772 13.8382C18.4746 13.5145 18.1444 13.3526 17.7867 13.3526C17.4566 13.3526 16.7138 13.946 15.5582 15.1329C13.677 17.0927 11.2794 20.0583 8.36526 24.0298C7.63601 25.0236 6.87442 26.0805 6.08049 27.2003C5.5928 27.8882 5.09291 28.5998 4.58081 29.3353C4.63476 29.1697 4.68829 29.0048 4.74139 28.8404C5.38174 26.8579 5.96006 24.9579 6.47632 23.1403C8.62418 15.5783 9.69811 9.44291 9.69811 4.7341C9.69811 4.25841 9.60156 3.80456 9.40846 3.37256C9.38336 3.31642 9.35663 3.26064 9.32828 3.20523C9.31293 3.17525 9.29711 3.14537 9.28081 3.11561C9.24357 3.04761 9.20384 2.98017 9.16162 2.9133C8.83147 2.31985 8.50132 2.02312 8.17117 2.02312C7.84102 2.02312 7.62092 2.10405 7.51087 2.2659C7.40083 2.40077 7.3458 2.68401 7.3458 3.11561C7.3458 3.3392 7.34395 3.56454 7.34026 3.79164C7.33988 3.81518 7.33948 3.83875 7.33905 3.86234C7.28063 7.12385 6.84268 10.7458 6.02521 14.7283C5.14481 19.0173 4.26442 22.6994 3.38402 25.7746C2.50363 28.8227 2.06343 30.5626 2.06343 30.9942C2.06343 31.4258 2.18723 31.8709 2.43484 32.3295C2.70997 32.7611 3.0126 32.9769 3.34275 32.9769C3.6729 32.9769 4.22315 32.5453 4.99349 31.6821C5.27125 31.3816 5.64405 30.9519 6.11187 30.3931C6.11775 30.3861 6.12366 30.3791 6.12957 30.372C6.24506 30.234 6.36628 30.0881 6.49324 29.9345C6.52507 29.896 6.55726 29.857 6.58981 29.8175C6.93272 29.4014 7.31562 28.931 7.7385 28.4063C7.79778 28.3327 7.85784 28.2581 7.91869 28.1824C8.36578 27.6263 8.85529 27.0125 9.38722 26.341C9.50261 26.1954 9.61999 26.047 9.73938 25.896V26.341C9.73938 27.1098 9.90794 27.8471 10.2451 28.5532C10.6414 29.3832 11.2707 30.1699 12.133 30.9133C13.0888 31.7234 13.9826 32.295 14.8144 32.628C15.1078 32.7455 15.3935 32.8333 15.6714 32.8915C15.6932 32.896 15.7149 32.9004 15.7365 32.9045C15.7575 32.9086 15.7784 32.9125 15.7993 32.9162C16.0268 32.9566 16.2491 32.9769 16.4661 32.9769C17.2365 32.9769 17.6217 32.7476 17.6217 32.289C17.6217 32.0462 17.319 31.7495 16.7138 31.3988C16.6325 31.3481 16.5499 31.2972 16.4661 31.2459C16.3865 31.1972 16.3057 31.1483 16.2238 31.0992C16.0605 31.0012 15.8928 30.9024 15.7206 30.8028C15.3937 30.6135 15.0507 30.421 14.6916 30.2254C13.9763 29.8208 13.316 29.2274 12.7107 28.4451C12.1054 27.6358 11.8028 26.7052 11.8028 25.6532C11.8028 24.6012 12.188 23.4277 12.9583 22.1329C13.7287 20.8112 14.5816 19.6782 15.517 18.7341C16.4524 17.79 17.3053 16.9268 18.0756 16.1445C18.846 15.3622 19.2311 14.8632 19.2311 14.6474C19.2311 14.4046 19.0798 14.1349 18.7772 13.8382ZM16.5849 30.9475C16.5849 30.9475 16.5796 30.9488 16.5676 30.9499C16.5787 30.9479 16.5849 30.9475 16.5849 30.9475Z"
          fill="url(#paint0_linear_499_4970)"
        />
        <path
          d="M25.0427 32.2403C24.6187 32.2403 24.2654 32.1249 23.9828 31.8939C23.7159 31.6476 23.5824 31.3012 23.5824 30.8548V21.9409C23.5824 21.4944 23.7159 21.1558 23.9828 20.9248C24.2654 20.6939 24.6187 20.5784 25.0427 20.5784C25.4666 20.5784 25.8199 20.6939 26.1026 20.9248C26.3852 21.1558 26.5265 21.4944 26.5265 21.9409V30.8548C26.5265 31.3012 26.3852 31.6476 26.1026 31.8939C25.8199 32.1249 25.4666 32.2403 25.0427 32.2403ZM25.0427 18.5232C24.5088 18.5232 24.0849 18.3846 23.7708 18.1075C23.4568 17.815 23.2998 17.4378 23.2998 16.9759C23.2998 16.5141 23.4568 16.1446 23.7708 15.8675C24.0849 15.5904 24.5088 15.4518 25.0427 15.4518C25.5608 15.4518 25.9769 15.5904 26.291 15.8675C26.6207 16.1446 26.7856 16.5141 26.7856 16.9759C26.7856 17.4378 26.6286 17.815 26.3145 18.1075C26.0005 18.3846 25.5765 18.5232 25.0427 18.5232Z"
          fill="url(#paint1_linear_499_4970)"
        />
        <path
          d="M35.6784 30.0927C36.4635 30.1389 36.856 30.4853 36.856 31.1319C36.856 31.5014 36.699 31.7862 36.385 31.9863C36.0866 32.1711 35.6548 32.248 35.0896 32.2173L34.4536 32.1711C31.8157 31.9863 30.4967 30.6007 30.4967 28.0143V22.9801H29.3191C28.8951 22.9801 28.5654 22.8877 28.3299 22.703C28.11 22.5182 28.0001 22.2488 28.0001 21.8947C28.0001 21.5406 28.11 21.2712 28.3299 21.0865C28.5654 20.9017 28.8951 20.8094 29.3191 20.8094H30.4967V18.6848C30.4967 18.2691 30.6302 17.9381 30.8971 17.6918C31.1641 17.4455 31.5252 17.3223 31.9806 17.3223C32.4202 17.3223 32.7735 17.4455 33.0405 17.6918C33.3074 17.9381 33.4409 18.2691 33.4409 18.6848V20.8094H35.4429C35.8668 20.8094 36.1887 20.9017 36.4085 21.0865C36.6441 21.2712 36.7618 21.5406 36.7618 21.8947C36.7618 22.2488 36.6441 22.5182 36.4085 22.703C36.1887 22.8877 35.8668 22.9801 35.4429 22.9801H33.4409V28.2222C33.4409 29.3614 33.9747 29.9695 35.0425 30.0465L35.6784 30.0927Z"
          fill="url(#paint2_linear_499_4970)"
        />
        <path
          d="M45.8721 32.2403C45.4482 32.2403 45.0949 32.1249 44.8122 31.8939C44.5453 31.6476 44.4118 31.3012 44.4118 30.8548V17.0683C44.4118 16.6218 44.5453 16.2831 44.8122 16.0522C45.0949 15.8213 45.4482 15.7058 45.8721 15.7058C46.2961 15.7058 46.6494 15.8213 46.932 16.0522C47.2147 16.2831 47.356 16.6218 47.356 17.0683V30.8548C47.356 31.3012 47.2147 31.6476 46.932 31.8939C46.6494 32.1249 46.2961 32.2403 45.8721 32.2403Z"
          fill="url(#paint3_linear_499_4970)"
        />
        <path
          d="M58.948 29.0073C59.215 29.0073 59.4269 29.1074 59.584 29.3075C59.7567 29.5077 59.843 29.7771 59.843 30.1158C59.843 30.5931 59.5525 30.9933 58.9716 31.3166C58.4377 31.6091 57.8332 31.8478 57.158 32.0325C56.4828 32.2019 55.839 32.2865 55.2266 32.2865C53.3738 32.2865 51.9057 31.7631 50.8222 30.7162C49.7388 29.6693 49.1971 28.2376 49.1971 26.4209C49.1971 25.2663 49.4326 24.2425 49.9037 23.3496C50.3747 22.4566 51.0342 21.7639 51.8821 21.2712C52.7457 20.7786 53.7193 20.5322 54.8027 20.5322C55.839 20.5322 56.7419 20.7555 57.5113 21.2019C58.2807 21.6484 58.8774 22.2796 59.3013 23.0956C59.7253 23.9115 59.9372 24.8737 59.9372 25.9822C59.9372 26.6442 59.6389 26.9752 59.0422 26.9752H52.0941C52.1883 28.0374 52.4945 28.8226 53.0127 29.3306C53.5308 29.8233 54.2845 30.0696 55.2738 30.0696C55.7762 30.0696 56.2159 30.008 56.5927 29.8849C56.9853 29.7617 57.4249 29.5924 57.9117 29.3768C58.3827 29.1305 58.7282 29.0073 58.948 29.0073ZM54.8734 22.5644C54.0726 22.5644 53.4288 22.8107 52.942 23.3034C52.471 23.796 52.1883 24.5042 52.0941 25.4279H57.4171C57.3857 24.4888 57.1501 23.7806 56.7105 23.3034C56.2708 22.8107 55.6585 22.5644 54.8734 22.5644Z"
          fill="url(#paint4_linear_499_4970)"
        />
        <path
          d="M74.1187 20.5322C75.5005 20.5322 76.529 20.9171 77.2042 21.6869C77.8794 22.4566 78.217 23.619 78.217 25.1739V30.8548C78.217 31.2858 78.0835 31.6245 77.8166 31.8709C77.5653 32.1172 77.212 32.2403 76.7567 32.2403C76.3013 32.2403 75.9402 32.1172 75.6732 31.8709C75.4063 31.6245 75.2728 31.2858 75.2728 30.8548V25.3356C75.2728 24.458 75.1001 23.8191 74.7547 23.4189C74.4249 23.0186 73.8989 22.8184 73.1766 22.8184C72.3287 22.8184 71.6457 23.0802 71.1275 23.6036C70.625 24.127 70.3738 24.8275 70.3738 25.705V30.8548C70.3738 31.2858 70.2403 31.6245 69.9734 31.8709C69.7065 32.1172 69.3453 32.2403 68.89 32.2403C68.4346 32.2403 68.0735 32.1172 67.8065 31.8709C67.5553 31.6245 67.4297 31.2858 67.4297 30.8548V21.9178C67.4297 21.5175 67.5632 21.1942 67.8301 20.9479C68.097 20.7016 68.4582 20.5784 68.9135 20.5784C69.3218 20.5784 69.6515 20.7016 69.9028 20.9479C70.1697 21.1788 70.3032 21.4867 70.3032 21.8716V22.4951C70.6957 21.8639 71.2217 21.379 71.8812 21.0403C72.5407 20.7016 73.2865 20.5322 74.1187 20.5322Z"
          fill="url(#paint5_linear_499_4970)"
        />
        <path
          d="M81.7358 32.2403C81.3118 32.2403 80.9585 32.1249 80.6759 31.8939C80.4089 31.6476 80.2755 31.3012 80.2755 30.8548V21.9409C80.2755 21.4944 80.4089 21.1558 80.6759 20.9248C80.9585 20.6939 81.3118 20.5784 81.7358 20.5784C82.1597 20.5784 82.513 20.6939 82.7956 20.9248C83.0783 21.1558 83.2196 21.4944 83.2196 21.9409V30.8548C83.2196 31.3012 83.0783 31.6476 82.7956 31.8939C82.513 32.1249 82.1597 32.2403 81.7358 32.2403ZM81.7358 18.5232C81.2019 18.5232 80.7779 18.3846 80.4639 18.1075C80.1499 17.815 79.9928 17.4378 79.9928 16.9759C79.9928 16.5141 80.1499 16.1446 80.4639 15.8675C80.7779 15.5904 81.2019 15.4518 81.7358 15.4518C82.2539 15.4518 82.67 15.5904 82.9841 15.8675C83.3138 16.1446 83.4787 16.5141 83.4787 16.9759C83.4787 17.4378 83.3217 17.815 83.0076 18.1075C82.6936 18.3846 82.2696 18.5232 81.7358 18.5232Z"
          fill="url(#paint6_linear_499_4970)"
        />
        <path
          d="M95.4926 15.7058C95.9323 15.7058 96.2934 15.829 96.5761 16.0753C96.8587 16.3216 97 16.6449 97 17.0452V30.8548C97 31.2704 96.8665 31.6014 96.5996 31.8477C96.3327 32.0941 95.9794 32.2172 95.5397 32.2172C95.1001 32.2172 94.7468 32.0941 94.4798 31.8477C94.2129 31.6014 94.0794 31.2704 94.0794 30.8548V30.2774C93.734 30.9086 93.2315 31.4013 92.572 31.7554C91.9283 32.1095 91.1903 32.2865 90.3581 32.2865C89.3688 32.2865 88.4817 32.0402 87.6966 31.5475C86.9272 31.0549 86.3226 30.3621 85.883 29.4692C85.459 28.5609 85.2471 27.5217 85.2471 26.3516C85.2471 25.1816 85.459 24.1578 85.883 23.2803C86.3226 22.4027 86.9272 21.7254 87.6966 21.2481C88.466 20.7709 89.3531 20.5322 90.3581 20.5322C91.1903 20.5322 91.9283 20.7016 92.572 21.0403C93.2158 21.379 93.7104 21.8562 94.0559 22.472V16.999C94.0559 16.6141 94.1815 16.3062 94.4327 16.0753C94.6997 15.829 95.053 15.7058 95.4926 15.7058ZM91.1353 30.0465C92.0774 30.0465 92.7997 29.7309 93.3022 29.0997C93.8204 28.4685 94.0794 27.5679 94.0794 26.3978C94.0794 25.2278 93.8204 24.3349 93.3022 23.719C92.7997 23.0878 92.0853 22.7722 91.1589 22.7722C90.2168 22.7722 89.4866 23.0801 88.9684 23.6959C88.4503 24.3118 88.1912 25.197 88.1912 26.3516C88.1912 27.5217 88.4503 28.43 88.9684 29.0766C89.4866 29.7232 90.2089 30.0465 91.1353 30.0465Z"
          fill="url(#paint7_linear_499_4970)"
        />
        <defs>
          <lineargradient
            id="paint0_linear_499_4970"
            x1="92.364"
            y1="-1.60846"
            x2="73.9333"
            y2="61.008"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#C399DB" />
            <stop offset={1} stopColor="#5882F7" />
          </lineargradient>
          <lineargradient
            id="paint1_linear_499_4970"
            x1="92.364"
            y1="-1.60846"
            x2="73.9333"
            y2="61.008"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#C399DB" />
            <stop offset={1} stopColor="#5882F7" />
          </lineargradient>
          <lineargradient
            id="paint2_linear_499_4970"
            x1="92.364"
            y1="-1.60846"
            x2="73.9333"
            y2="61.008"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#C399DB" />
            <stop offset={1} stopColor="#5882F7" />
          </lineargradient>
          <lineargradient
            id="paint3_linear_499_4970"
            x1="92.364"
            y1="-1.60846"
            x2="73.9333"
            y2="61.008"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#C399DB" />
            <stop offset={1} stopColor="#5882F7" />
          </lineargradient>
          <lineargradient
            id="paint4_linear_499_4970"
            x1="92.364"
            y1="-1.60846"
            x2="73.9333"
            y2="61.008"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#C399DB" />
            <stop offset={1} stopColor="#5882F7" />
          </lineargradient>
          <lineargradient
            id="paint5_linear_499_4970"
            x1="92.364"
            y1="-1.60846"
            x2="73.9333"
            y2="61.008"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#C399DB" />
            <stop offset={1} stopColor="#5882F7" />
          </lineargradient>
          <lineargradient
            id="paint6_linear_499_4970"
            x1="92.364"
            y1="-1.60846"
            x2="73.9333"
            y2="61.008"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#C399DB" />
            <stop offset={1} stopColor="#5882F7" />
          </lineargradient>
          <lineargradient
            id="paint7_linear_499_4970"
            x1="92.364"
            y1="-1.60846"
            x2="73.9333"
            y2="61.008"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#C399DB" />
            <stop offset={1} stopColor="#5882F7" />
          </lineargradient>
        </defs>
      </svg>
    </div>
  </div>
  <div className="w-[343px] h-[55px] absolute left-[15px] top-[75px]">
    <div className="w-[343px] h-[55px] absolute left-[-1.5px] top-[-1.5px] rounded-xl bg-white border-2 border-[#eff4ff]" />
    <p className="w-[264px] absolute left-4 top-4 text-lg font-bold text-left text-[#3679ff]">
      Saint - Denis (93)
    </p>
    <div
      className="w-[39px] h-[39px] absolute left-[295px] top-[7px] rounded-xl"
      style={{ background: "linear-gradient(to bottom, #81a3f9 -0.06%, #3462d8 108.09%)" }}
    />
    <svg
      width={23}
      height={23}
      viewBox="0 0 23 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-[23px] h-[23px] absolute left-[303px] top-[15px]"
      preserveAspectRatio="xMidYMid meet"
    >
      <path
        d="M9.58333 16.2917C13.2882 16.2917 16.2917 13.2882 16.2917 9.58333C16.2917 5.87842 13.2882 2.875 9.58333 2.875C5.87842 2.875 2.875 5.87842 2.875 9.58333C2.875 13.2882 5.87842 16.2917 9.58333 16.2917Z"
        stroke="white"
       strokeWidth={2}
       strokeLinecap="round"
       strokeLinejoin="round"
      />
      <path
        d="M14.375 14.375L20.125 20.125"
        stroke="white"
       strokeWidth={2}
       strokeLinecap="round"
       strokeLinejoin="round"
      />
    </svg>
  </div>
  <div className="w-[164px] h-[46px] absolute left-[104px] top-[679px]">
    <div className="w-[164px] h-[46px] absolute left-[-1px] top-[-1px] rounded-xl bg-[#191f2c]" />
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6 absolute left-[123px] top-2.5"
      preserveAspectRatio="xMidYMid meet"
    >
      <path
        d="M15 6L21 3V18L15 21V6Z"
        stroke="white"
       strokeWidth={2}
       strokeLinecap="round"
       strokeLinejoin="round"
      />
      <path
        d="M9 18L15 21V6L9 3V18Z"
        stroke="white"
       strokeWidth={2}
       strokeLinecap="round"
       strokeLinejoin="round"
      />
      <path
        d="M3 6L9 3V18L3 21V6Z"
        stroke="white"
       strokeWidth={2}
       strokeLinecap="round"
       strokeLinejoin="round"
      />
    </svg>
    <p className="absolute left-4 top-[11px] text-lg font-bold text-left text-white">Mode carte</p>
  </div>
  <div className="w-[375px] h-[70px] absolute left-[-1.5px] top-[740.5px] overflow-hidden bg-white">
    <div className="w-[62px] h-[49px]">
      <svg
        width={32}
        height={32}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8 absolute left-[124.5px] top-[10.5px]"
        preserveAspectRatio="xMidYMid meet"
      >
        <path
          d="M13.3333 22.6667C18.488 22.6667 22.6667 18.488 22.6667 13.3333C22.6667 8.17868 18.488 4 13.3333 4C8.17868 4 4 8.17868 4 13.3333C4 18.488 8.17868 22.6667 13.3333 22.6667Z"
          stroke="#272832"
         strokeWidth={2}
         strokeLinecap="round"
         strokeLinejoin="round"
        />
        <path
          d="M20 20L28 28"
          stroke="#272832"
         strokeWidth={2}
         strokeLinecap="round"
         strokeLinejoin="round"
        />
      </svg>
      <p className="absolute left-[110px] top-[47px] text-xs font-bold text-left text-[#272832]">
        Recherche
      </p>
    </div>
    <div className="w-[62px] h-[49px]">
      <svg
        width={32}
        height={32}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8 absolute left-[227.5px] top-[10.5px]"
        preserveAspectRatio="xMidYMid meet"
      >
        <path
          d="M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z"
          stroke="#272832"
         strokeWidth={2}
         strokeLinecap="round"
         strokeLinejoin="round"
        />
        <path
          d="M22.9553 25.7763C21.2463 23.8677 18.7633 22.6666 15.9998 22.6666C13.2362 22.6666 10.7532 23.8677 9.04427 25.7763"
          stroke="#272832"
         strokeWidth={2}
         strokeLinecap="round"
         strokeLinejoin="round"
        />
        <path
          d="M16 18.6666C18.2091 18.6666 20 16.8758 20 14.6666C20 12.4575 18.2091 10.6666 16 10.6666C13.7909 10.6666 12 12.4575 12 14.6666C12 16.8758 13.7909 18.6666 16 18.6666Z"
          stroke="#272832"
         strokeWidth={2}
         strokeLinecap="round"
         strokeLinejoin="round"
        />
      </svg>
      <p className="absolute left-[213px] top-[47px] text-xs font-bold text-left text-[#272832]">
        Connexion
      </p>
    </div>
    <div className="w-[33px] h-[49px]">
      <p className="absolute left-[316px] top-[47px] text-xs font-bold text-left text-[#272832]">
        Menu
      </p>
      <svg
        width={32}
        height={32}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8 absolute left-[316.5px] top-[10.5px]"
        preserveAspectRatio="xMidYMid meet"
      >
        <path
          d="M6.66667 22.6666L25.3333 22.6666"
          stroke="#272832"
         strokeWidth={2}
         strokeLinecap="round"
         strokeLinejoin="round"
        />
        <path
          d="M6.66667 16H25.3333"
          stroke="#272832"
         strokeWidth={2}
         strokeLinecap="round"
         strokeLinejoin="round"
        />
        <path
          d="M6.66667 9.33337L17.3333 9.33337"
          stroke="#272832"
         strokeWidth={2}
         strokeLinecap="round"
         strokeLinejoin="round"
        />
      </svg>
    </div>
    <svg
      width={375}
      height={1}
      viewBox="0 0 375 1"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute left-[-1.5px] top-[-0.5px]"
      preserveAspectRatio="xMidYMid meet"
    >
      <line y1="0.5" x2={375} y2="0.5" stroke="#EAEFFA" />
    </svg>
    <div className="w-[43px] h-[49px]">
      <svg
        width={32}
        height={32}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8 absolute left-[30.5px] top-[10.5px]"
        preserveAspectRatio="xMidYMid meet"
      >
        <path
          d="M26.2113 12.9349L16.878 4.76825C16.3753 4.32839 15.6247 4.32839 15.122 4.76825L5.78867 12.9349C5.49932 13.1881 5.33334 13.5539 5.33334 13.9384V25.3333C5.33334 26.0697 5.9303 26.6667 6.66668 26.6667H12C12.7364 26.6667 13.3333 26.0697 13.3333 25.3333V20C13.3333 19.2636 13.9303 18.6667 14.6667 18.6667H17.3333C18.0697 18.6667 18.6667 19.2636 18.6667 20V25.3333C18.6667 26.0697 19.2636 26.6667 20 26.6667H25.3333C26.0697 26.6667 26.6667 26.0697 26.6667 25.3333V13.9384C26.6667 13.5539 26.5007 13.1881 26.2113 12.9349Z"
          stroke="#3679FF"
         strokeWidth={2}
         strokeLinecap="round"
         strokeLinejoin="round"
        />
      </svg>
      <p className="absolute left-[26px] top-[47px] text-xs font-bold text-left text-[#3679ff]">
        Acceuil
      </p>
    </div>
  </div>
  <div className="flex justify-between items-center w-[167px] absolute left-[190.5px] top-[137.5px] px-[47px] py-2 rounded-xl bg-white border-2 border-[#eff4ff]">
    <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-[#43434a]">
      Nb de pièce
    </p>
  </div>
  <svg
    width={375}
    height={810}
    viewBox="0 0 375 810"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="absolute left-[-1px] top-0 opacity-30"
    preserveAspectRatio="none"
  >
    <path opacity="0.3" d="M0 0H375V810H0V0Z" fill="#051F52" />
  </svg>
  <div className="flex flex-col justify-start items-end w-[375px] absolute left-[-1px] top-[285px] overflow-hidden gap-4 p-6 rounded-tl-xl rounded-tr-xl bg-white border border-[#eaeffa]">
    <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 w-[327px] relative">
      <p className="flex-grow-0 flex-shrink-0 w-[284px] text-base font-bold text-center text-[#272832]">
        Budget
      </p>
      <svg
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
        preserveAspectRatio="none"
      >
        <path
          d="M18 18L6 6"
          stroke="#14181F"
         strokeWidth={2}
         strokeLinecap="round"
         strokeLinejoin="round"
        />
        <path
          d="M18 6L5.99997 18"
          stroke="#14181F"
         strokeWidth={2}
         strokeLinecap="round"
         strokeLinejoin="round"
        />
      </svg>
    </div>
    <div className="self-stretch flex-grow-0 flex-shrink-0 h-20 relative">
      <p className="absolute left-0 top-0 text-base font-bold text-left text-[#0e215c]">
        Votre budget
      </p>
      <div className="w-[327px] h-[52px] absolute left-[-1.5px] top-[26.5px] rounded-xl bg-white border-2 border-[#eff4ff]" />
      <p className="w-[293.46px] absolute left-[16.77px] top-11 text-base font-bold text-left text-[#6976a0]">
        0 €
      </p>
    </div>
    <div className="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5 p-4 rounded-xl bg-[#eff4ff] border border-[#3679ff]">
      <p className="flex-grow-0 flex-shrink-0 text-base text-left text-[#3679ff]">
        <span className="flex-grow-0 flex-shrink-0 text-base font-bold text-left text-[#3679ff]">
          Vous ne connaissez pas{" "}
        </span>
        <br />
        <span className="flex-grow-0 flex-shrink-0 text-base font-bold text-left text-[#3679ff]">
          votre budget ?{" "}
        </span>
        <br />
        <span className="flex-grow-0 flex-shrink-0 text-base text-left text-[#3679ff]">
          Utiliser notre simulateur ci-dessous.
        </span>
      </p>
    </div>
    <div className="self-stretch flex-grow-0 flex-shrink-0 h-20 relative">
      <p className="absolute left-0 top-0 text-base font-bold text-left text-[#0e215c]">
        Votre salaire mensuel net (avant impôt)
      </p>
      <div className="w-[327px] h-[52px] absolute left-[-1.5px] top-[26.5px] rounded-xl bg-white border-2 border-[#eff4ff]" />
      <p className="w-[293.46px] absolute left-[16.77px] top-11 text-base font-bold text-left text-[#6976a0]">
        0 €
      </p>
    </div>
    <div className="self-stretch flex-grow-0 flex-shrink-0 h-20 relative">
      <p className="absolute left-0 top-0 text-base font-bold text-left text-[#0e215c]">
        Votre apport
      </p>
      <div className="w-[327px] h-[52px] absolute left-[-1.5px] top-[26.5px] rounded-xl bg-white border-2 border-[#eff4ff]" />
      <p className="w-[293.46px] absolute left-[16.77px] top-11 text-base font-bold text-left text-[#6976a0]">
        0 €
      </p>
    </div>
    <div
      className="flex justify-end items-end flex-grow-0 flex-shrink-0 relative gap-2.5 px-10 py-3 rounded-xl"
      style={{ background: "linear-gradient(to bottom, #81a3f9 -0.06%, #3462d8 108.09%)" }}
    >
      <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-white">Valider</p>
    </div>
  </div>
  <div className="flex justify-between items-center w-[167px] absolute left-[14.5px] top-[137.5px] px-[47px] py-2 rounded-xl bg-white border-2 border-[#eff4ff]">
    <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-[#43434a]">Prix</p>
  </div>
</div>


888888888888888888
<div className="w-[375px] h-[812px] relative overflow-hidden bg-[#f9fbff] mb-8 mt-8">
  <img
    src="capture-d’écran-2021-01-27-à-18.28-2.png"
    className="w-[343px] h-[542px] absolute left-[15px] top-[191px] rounded-xl object-none"
  />
  <div className="w-[33px] h-[68px] absolute left-[317px] top-[657px] bg-white/[0.78]" />
  <p className="absolute left-[327px] top-[658px] text-[25px] font-bold text-left text-black">+</p>
  <p className="absolute left-[330px] top-[689px] text-[25px] font-bold text-left text-black">-</p>
  <div className="w-[131px] h-[35.4px]">
    <div className="w-[131px] h-[35.4px]">
      <p className="absolute left-[223px] top-[38px] text-[9px] font-bold text-left text-[#43434a]">
        By
      </p>
      <img
        src="nexity-logo-1.png"
        className="w-4 h-4 absolute left-[236.5px] top-[34.5px] object-cover"
      />
      <svg
        width={97}
        height={36}
        viewBox="0 0 97 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute left-[121.81px] top-[23.81px]"
        preserveAspectRatio="none"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14.7453 23.41L14.7407 23.4179C14.0805 24.5402 13.8662 25.3677 13.8662 25.9474C13.8662 26.5927 14.0388 27.1019 14.3655 27.5488C14.8307 28.1538 15.285 28.5466 15.7103 28.7924C16.4653 29.2088 17.1606 29.6164 17.7941 30.0153C18.1547 30.2285 18.5359 30.4879 18.8538 30.8031C19.1298 31.0769 19.6851 31.7125 19.6851 32.6594C19.6851 33.5732 19.2405 34.4265 18.4037 34.9304C17.7331 35.3341 16.9929 35.4015 16.4661 35.4015C14.4605 35.4015 12.542 34.3234 10.7836 32.816L10.777 32.8103L10.7704 32.8046C10.006 32.138 9.36034 31.4102 8.85982 30.6231C7.82421 31.9126 7.04593 32.8455 6.53465 33.4063C6.11811 33.8775 5.70025 34.3018 5.29206 34.6256C5.08526 34.7897 4.83687 34.9635 4.55443 35.1036C4.28689 35.2362 3.86403 35.4015 3.34275 35.4015C1.95883 35.4015 1.11059 34.4601 0.685061 33.7849L0.645838 33.7226L0.611212 33.6578C0.237761 32.9582 0 32.1812 0 31.3497C0 31.0143 0.0691356 30.6397 0.122125 30.3753C0.186073 30.0562 0.277136 29.6644 0.390847 29.2098C0.618863 28.2982 0.955872 27.0634 1.39802 25.5149C2.26023 22.4684 3.12892 18.7974 4.00234 14.4935C4.86254 10.2548 5.28237 6.47787 5.28237 3.15134C5.28237 2.86118 5.29959 2.54116 5.36008 2.22618C5.41034 1.96454 5.52396 1.51761 5.83869 1.09238C6.53482 0.120287 7.62675 0 8.17117 0C9.01283 0 9.65259 0.391964 10.0607 0.762965C10.4422 1.1098 10.7278 1.5288 10.9462 1.91843C11.4801 2.79235 11.7615 3.76073 11.7615 4.78841C11.7615 8.69519 11.0805 13.4466 9.75071 19.0188C11.3809 16.9172 12.8167 15.2095 14.0557 13.904L14.0606 13.8988L14.0656 13.8936C14.666 13.2698 15.2091 12.7489 15.6786 12.3696C15.9111 12.1817 16.1721 11.9903 16.4479 11.836C16.666 11.714 17.158 11.4594 17.7867 11.4594C18.8431 11.4594 19.6799 11.9596 20.2664 12.5801C20.6926 13.0098 21.2946 13.7706 21.2946 14.8154C21.2946 15.3823 21.0739 15.8188 20.9834 15.9887C20.8632 16.2144 20.719 16.4204 20.5877 16.5925C20.3219 16.9408 19.9674 17.3326 19.5601 17.7511C18.788 18.5441 17.9336 19.4187 16.997 20.3748C16.1995 21.189 15.4473 22.1917 14.7499 23.4021L14.7453 23.41ZM18.7772 13.9969C18.4746 13.6695 18.1444 13.5058 17.7867 13.5058C17.4566 13.5058 16.7138 14.106 15.5582 15.3065C13.677 17.2888 11.2794 20.2884 8.36526 24.3054C7.63601 25.3106 6.87442 26.3796 6.08049 27.5123C5.5928 28.2081 5.09291 28.9279 4.58081 29.6717C4.63476 29.5043 4.68829 29.3375 4.74139 29.1712C5.38174 27.166 5.96006 25.2442 6.47632 23.4057C8.62418 15.757 9.69811 9.55123 9.69811 4.78841C9.69811 4.30726 9.60156 3.8482 9.40846 3.41124C9.38336 3.35446 9.35663 3.29804 9.32828 3.242C9.31293 3.21167 9.29711 3.18145 9.28081 3.15134C9.24357 3.08256 9.20384 3.01435 9.16162 2.94671C8.83147 2.34645 8.50132 2.04633 8.17117 2.04633C7.84102 2.04633 7.62092 2.12818 7.51087 2.29189C7.40083 2.42831 7.3458 2.71479 7.3458 3.15134C7.3458 3.3775 7.34395 3.60543 7.34026 3.83513C7.33988 3.85894 7.33948 3.88278 7.33905 3.90664C7.28063 7.20556 6.84268 10.8691 6.02521 14.8973C5.14481 19.2355 4.26442 22.9598 3.38402 26.0702C2.50363 29.1533 2.06343 30.9132 2.06343 31.3497C2.06343 31.7863 2.18723 32.2365 2.43484 32.7003C2.70997 33.1369 3.0126 33.3551 3.34275 33.3551C3.6729 33.3551 4.22315 32.9186 4.99349 32.0455C5.27125 31.7415 5.64405 31.307 6.11187 30.7418C6.11775 30.7347 6.12366 30.7275 6.12957 30.7204C6.24506 30.5807 6.36628 30.4332 6.49324 30.2779C6.52507 30.2389 6.55726 30.1994 6.58981 30.1595C6.93272 29.7387 7.31562 29.2629 7.7385 28.7321C7.79778 28.6577 7.85784 28.5822 7.91869 28.5057C8.36578 27.9431 8.85529 27.3223 9.38722 26.6432C9.50261 26.4959 9.61999 26.3458 9.73938 26.193V26.6432C9.73938 27.4207 9.90794 28.1665 10.2451 28.8807C10.6414 29.7202 11.2707 30.516 12.133 31.2679C13.0888 32.0873 13.9826 32.6654 14.8144 33.0023C15.1078 33.1211 15.3935 33.2099 15.6714 33.2687C15.6932 33.2733 15.7149 33.2777 15.7365 33.282C15.7575 33.2861 15.7784 33.29 15.7993 33.2937C16.0268 33.3347 16.2491 33.3551 16.4661 33.3551C17.2365 33.3551 17.6217 33.1232 17.6217 32.6594C17.6217 32.4138 17.319 32.1137 16.7138 31.759C16.6325 31.7077 16.5499 31.6561 16.4661 31.6043C16.3865 31.5551 16.3057 31.5056 16.2238 31.4559C16.0605 31.3568 15.8928 31.2569 15.7206 31.1561C15.3937 30.9646 15.0507 30.77 14.6916 30.5721C13.9763 30.1629 13.316 29.5626 12.7107 28.7714C12.1054 27.9528 11.8028 27.0115 11.8028 25.9474C11.8028 24.8833 12.188 23.6965 12.9583 22.3868C13.7287 21.0499 14.5816 19.9039 15.517 18.949C16.4524 17.994 17.3053 17.1209 18.0756 16.3297C18.846 15.5384 19.2311 15.0337 19.2311 14.8154C19.2311 14.5698 19.0798 14.297 18.7772 13.9969ZM16.5849 31.3025C16.5849 31.3025 16.5796 31.3038 16.5676 31.305C16.5787 31.3029 16.5849 31.3025 16.5849 31.3025Z"
          fill="url(#paint0_linear_499_5083)"
        />
        <path
          d="M25.0427 32.6101C24.6187 32.6101 24.2654 32.4934 23.9828 32.2598C23.7159 32.0106 23.5824 31.6603 23.5824 31.2087V22.1926C23.5824 21.741 23.7159 21.3984 23.9828 21.1648C24.2654 20.9313 24.6187 20.8145 25.0427 20.8145C25.4666 20.8145 25.8199 20.9313 26.1026 21.1648C26.3852 21.3984 26.5265 21.741 26.5265 22.1926V31.2087C26.5265 31.6603 26.3852 32.0106 26.1026 32.2598C25.8199 32.4934 25.4666 32.6101 25.0427 32.6101ZM25.0427 18.7356C24.5088 18.7356 24.0849 18.5955 23.7708 18.3152C23.4568 18.0193 23.2998 17.6378 23.2998 17.1707C23.2998 16.7035 23.4568 16.3298 23.7708 16.0495C24.0849 15.7692 24.5088 15.629 25.0427 15.629C25.5608 15.629 25.9769 15.7692 26.291 16.0495C26.6207 16.3298 26.7856 16.7035 26.7856 17.1707C26.7856 17.6378 26.6286 18.0193 26.3145 18.3152C26.0005 18.5955 25.5765 18.7356 25.0427 18.7356Z"
          fill="url(#paint1_linear_499_5083)"
        />
        <path
          d="M35.6784 30.4379C36.4635 30.4846 36.856 30.835 36.856 31.489C36.856 31.8627 36.699 32.1508 36.385 32.3532C36.0866 32.5401 35.6548 32.6179 35.0896 32.5868L34.4536 32.5401C31.8157 32.3532 30.4967 30.9517 30.4967 28.3357V23.2437H29.3191C28.8951 23.2437 28.5654 23.1502 28.3299 22.9634C28.11 22.7765 28.0001 22.504 28.0001 22.1459C28.0001 21.7877 28.11 21.5152 28.3299 21.3283C28.5654 21.1415 28.8951 21.048 29.3191 21.048H30.4967V18.8991C30.4967 18.4787 30.6302 18.1439 30.8971 17.8947C31.1641 17.6456 31.5252 17.521 31.9806 17.521C32.4202 17.521 32.7735 17.6456 33.0405 17.8947C33.3074 18.1439 33.4409 18.4787 33.4409 18.8991V21.048H35.4429C35.8668 21.048 36.1887 21.1415 36.4085 21.3283C36.6441 21.5152 36.7618 21.7877 36.7618 22.1459C36.7618 22.504 36.6441 22.7765 36.4085 22.9634C36.1887 23.1502 35.8668 23.2437 35.4429 23.2437H33.4409V28.5459C33.4409 29.6982 33.9747 30.3133 35.0425 30.3912L35.6784 30.4379Z"
          fill="url(#paint2_linear_499_5083)"
        />
        <path
          d="M45.8721 32.6101C45.4482 32.6101 45.0949 32.4934 44.8122 32.2598C44.5453 32.0106 44.4118 31.6603 44.4118 31.2087V17.2641C44.4118 16.8125 44.5453 16.4699 44.8122 16.2363C45.0949 16.0028 45.4482 15.886 45.8721 15.886C46.2961 15.886 46.6494 16.0028 46.932 16.2363C47.2147 16.4699 47.356 16.8125 47.356 17.2641V31.2087C47.356 31.6603 47.2147 32.0106 46.932 32.2598C46.6494 32.4934 46.2961 32.6101 45.8721 32.6101Z"
          fill="url(#paint3_linear_499_5083)"
        />
        <path
          d="M58.948 29.3401C59.215 29.3401 59.4269 29.4413 59.584 29.6437C59.7567 29.8461 59.843 30.1187 59.843 30.4612C59.843 30.944 59.5525 31.3488 58.9716 31.6758C58.4377 31.9717 57.8332 32.2131 57.158 32.3999C56.4828 32.5712 55.839 32.6569 55.2266 32.6569C53.3738 32.6569 51.9057 32.1274 50.8222 31.0685C49.7388 30.0096 49.1971 28.5615 49.1971 26.724C49.1971 25.5561 49.4326 24.5206 49.9037 23.6174C50.3747 22.7142 51.0342 22.0135 51.8821 21.5152C52.7457 21.0169 53.7193 20.7678 54.8027 20.7678C55.839 20.7678 56.7419 20.9935 57.5113 21.4451C58.2807 21.8967 58.8774 22.5352 59.3013 23.3605C59.7253 24.1858 59.9372 25.159 59.9372 26.2802C59.9372 26.9498 59.6389 27.2846 59.0422 27.2846H52.0941C52.1883 28.359 52.4945 29.1532 53.0127 29.6671C53.5308 30.1654 54.2845 30.4145 55.2738 30.4145C55.7762 30.4145 56.2159 30.3522 56.5927 30.2277C56.9853 30.1031 57.4249 29.9318 57.9117 29.7138C58.3827 29.4646 58.7282 29.3401 58.948 29.3401ZM54.8734 22.8232C54.0726 22.8232 53.4288 23.0724 52.942 23.5707C52.471 24.069 52.1883 24.7853 52.0941 25.7196H57.4171C57.3857 24.7697 57.1501 24.0534 56.7105 23.5707C56.2708 23.0724 55.6585 22.8232 54.8734 22.8232Z"
          fill="url(#paint4_linear_499_5083)"
        />
        <path
          d="M74.1187 20.7678C75.5005 20.7678 76.529 21.157 77.2042 21.9356C77.8794 22.7142 78.217 23.8899 78.217 25.4627V31.2087C78.217 31.6447 78.0835 31.9873 77.8166 32.2364C77.5653 32.4856 77.212 32.6101 76.7567 32.6101C76.3013 32.6101 75.9402 32.4856 75.6732 32.2364C75.4063 31.9873 75.2728 31.6447 75.2728 31.2087V25.6262C75.2728 24.7386 75.1001 24.0923 74.7547 23.6875C74.4249 23.2826 73.8989 23.0802 73.1766 23.0802C72.3287 23.0802 71.6457 23.3449 71.1275 23.8743C70.625 24.4038 70.3738 25.1123 70.3738 25.9999V31.2087C70.3738 31.6447 70.2403 31.9873 69.9734 32.2364C69.7065 32.4856 69.3453 32.6101 68.89 32.6101C68.4346 32.6101 68.0735 32.4856 67.8065 32.2364C67.5553 31.9873 67.4297 31.6447 67.4297 31.2087V22.1692C67.4297 21.7644 67.5632 21.4373 67.8301 21.1882C68.097 20.939 68.4582 20.8145 68.9135 20.8145C69.3218 20.8145 69.6515 20.939 69.9028 21.1882C70.1697 21.4218 70.3032 21.7332 70.3032 22.1225V22.7532C70.6957 22.1147 71.2217 21.6242 71.8812 21.2816C72.5407 20.939 73.2865 20.7678 74.1187 20.7678Z"
          fill="url(#paint5_linear_499_5083)"
        />
        <path
          d="M81.7358 32.6101C81.3118 32.6101 80.9585 32.4934 80.6759 32.2598C80.4089 32.0106 80.2755 31.6603 80.2755 31.2087V22.1926C80.2755 21.741 80.4089 21.3984 80.6759 21.1648C80.9585 20.9313 81.3118 20.8145 81.7358 20.8145C82.1597 20.8145 82.513 20.9313 82.7956 21.1648C83.0783 21.3984 83.2196 21.741 83.2196 22.1926V31.2087C83.2196 31.6603 83.0783 32.0106 82.7956 32.2598C82.513 32.4934 82.1597 32.6101 81.7358 32.6101ZM81.7358 18.7356C81.2019 18.7356 80.7779 18.5955 80.4639 18.3152C80.1499 18.0193 79.9928 17.6378 79.9928 17.1707C79.9928 16.7035 80.1499 16.3298 80.4639 16.0495C80.7779 15.7692 81.2019 15.629 81.7358 15.629C82.2539 15.629 82.67 15.7692 82.9841 16.0495C83.3138 16.3298 83.4787 16.7035 83.4787 17.1707C83.4787 17.6378 83.3217 18.0193 83.0076 18.3152C82.6936 18.5955 82.2696 18.7356 81.7358 18.7356Z"
          fill="url(#paint6_linear_499_5083)"
        />
        <path
          d="M95.4926 15.886C95.9323 15.886 96.2934 16.0105 96.5761 16.2597C96.8587 16.5088 97 16.8358 97 17.2407V31.2087C97 31.6291 96.8665 31.9639 96.5996 32.213C96.3327 32.4622 95.9794 32.5868 95.5397 32.5868C95.1001 32.5868 94.7468 32.4622 94.4798 32.213C94.2129 31.9639 94.0794 31.6291 94.0794 31.2087V30.6247C93.734 31.2632 93.2315 31.7615 92.572 32.1196C91.9283 32.4778 91.1903 32.6568 90.3581 32.6568C89.3688 32.6568 88.4817 32.4077 87.6966 31.9094C86.9272 31.4111 86.3226 30.7104 85.883 29.8072C85.459 28.8885 85.2471 27.8374 85.2471 26.6539C85.2471 25.4704 85.459 24.4349 85.883 23.5473C86.3226 22.6597 86.9272 21.9746 87.6966 21.4918C88.466 21.0091 89.3531 20.7677 90.3581 20.7677C91.1903 20.7677 91.9283 20.939 92.572 21.2816C93.2158 21.6242 93.7104 22.1069 94.0559 22.7298V17.194C94.0559 16.8047 94.1815 16.4933 94.4327 16.2597C94.6997 16.0105 95.053 15.886 95.4926 15.886ZM91.1353 30.3911C92.0774 30.3911 92.7997 30.0719 93.3022 29.4335C93.8204 28.795 94.0794 27.8841 94.0794 26.7006C94.0794 25.5171 93.8204 24.614 93.3022 23.9911C92.7997 23.3527 92.0853 23.0334 91.1589 23.0334C90.2168 23.0334 89.4866 23.3449 88.9684 23.9677C88.4503 24.5906 88.1912 25.486 88.1912 26.6539C88.1912 27.8374 88.4503 28.7561 88.9684 29.4101C89.4866 30.0641 90.2089 30.3911 91.1353 30.3911Z"
          fill="url(#paint7_linear_499_5083)"
        />
        <defs>
          <lineargradient
            id="paint0_linear_499_5083"
            x1="92.364"
            y1="-1.6269"
            x2="73.5427"
            y2="61.5915"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#C399DB" />
            <stop offset={1} stopColor="#5882F7" />
          </lineargradient>
          <lineargradient
            id="paint1_linear_499_5083"
            x1="92.364"
            y1="-1.6269"
            x2="73.5427"
            y2="61.5915"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#C399DB" />
            <stop offset={1} stopColor="#5882F7" />
          </lineargradient>
          <lineargradient
            id="paint2_linear_499_5083"
            x1="92.364"
            y1="-1.6269"
            x2="73.5427"
            y2="61.5915"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#C399DB" />
            <stop offset={1} stopColor="#5882F7" />
          </lineargradient>
          <lineargradient
            id="paint3_linear_499_5083"
            x1="92.364"
            y1="-1.6269"
            x2="73.5427"
            y2="61.5915"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#C399DB" />
            <stop offset={1} stopColor="#5882F7" />
          </lineargradient>
          <lineargradient
            id="paint4_linear_499_5083"
            x1="92.364"
            y1="-1.6269"
            x2="73.5427"
            y2="61.5915"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#C399DB" />
            <stop offset={1} stopColor="#5882F7" />
          </lineargradient>
          <lineargradient
            id="paint5_linear_499_5083"
            x1="92.364"
            y1="-1.6269"
            x2="73.5427"
            y2="61.5915"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#C399DB" />
            <stop offset={1} stopColor="#5882F7" />
          </lineargradient>
          <lineargradient
            id="paint6_linear_499_5083"
            x1="92.364"
            y1="-1.6269"
            x2="73.5427"
            y2="61.5915"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#C399DB" />
            <stop offset={1} stopColor="#5882F7" />
          </lineargradient>
          <lineargradient
            id="paint7_linear_499_5083"
            x1="92.364"
            y1="-1.6269"
            x2="73.5427"
            y2="61.5915"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#C399DB" />
            <stop offset={1} stopColor="#5882F7" />
          </lineargradient>
        </defs>
      </svg>
    </div>
  </div>
  <div className="w-[375px] h-[70px] absolute left-[-2px] top-[741px] overflow-hidden bg-white">
    <div className="w-[62px] h-[49px]">
      <svg
        width={32}
        height={32}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8 absolute left-[124.5px] top-[10.5px]"
        preserveAspectRatio="xMidYMid meet"
      >
        <path
          d="M13.3333 22.6667C18.488 22.6667 22.6667 18.488 22.6667 13.3333C22.6667 8.17868 18.488 4 13.3333 4C8.17868 4 4 8.17868 4 13.3333C4 18.488 8.17868 22.6667 13.3333 22.6667Z"
          stroke="#272832"
         strokeWidth={2}
         strokeLinecap="round"
         strokeLinejoin="round"
        />
        <path
          d="M20 20L28 28"
          stroke="#272832"
         strokeWidth={2}
         strokeLinecap="round"
         strokeLinejoin="round"
        />
      </svg>
      <p className="absolute left-[110px] top-[47px] text-xs font-bold text-left text-[#272832]">
        Recherche
      </p>
    </div>
    <div className="w-[62px] h-[49px]">
      <svg
        width={32}
        height={32}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8 absolute left-[227.5px] top-[10.5px]"
        preserveAspectRatio="xMidYMid meet"
      >
        <path
          d="M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z"
          stroke="#272832"
         strokeWidth={2}
         strokeLinecap="round"
         strokeLinejoin="round"
        />
        <path
          d="M22.9553 25.7763C21.2463 23.8677 18.7633 22.6666 15.9998 22.6666C13.2362 22.6666 10.7532 23.8677 9.04427 25.7763"
          stroke="#272832"
         strokeWidth={2}
         strokeLinecap="round"
         strokeLinejoin="round"
        />
        <path
          d="M16 18.6666C18.2091 18.6666 20 16.8758 20 14.6666C20 12.4575 18.2091 10.6666 16 10.6666C13.7909 10.6666 12 12.4575 12 14.6666C12 16.8758 13.7909 18.6666 16 18.6666Z"
          stroke="#272832"
         strokeWidth={2}
         strokeLinecap="round"
         strokeLinejoin="round"
        />
      </svg>
      <p className="absolute left-[213px] top-[47px] text-xs font-bold text-left text-[#272832]">
        Connexion
      </p>
    </div>
    <div className="w-[33px] h-[49px]">
      <p className="absolute left-[316px] top-[47px] text-xs font-bold text-left text-[#272832]">
        Menu
      </p>
      <svg
        width={32}
        height={32}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8 absolute left-[316.5px] top-[10.5px]"
        preserveAspectRatio="xMidYMid meet"
      >
        <path
          d="M6.66666 22.6666L25.3333 22.6666"
          stroke="#272832"
         strokeWidth={2}
         strokeLinecap="round"
         strokeLinejoin="round"
        />
        <path
          d="M6.66666 16H25.3333"
          stroke="#272832"
         strokeWidth={2}
         strokeLinecap="round"
         strokeLinejoin="round"
        />
        <path
          d="M6.66666 9.33337L17.3333 9.33337"
          stroke="#272832"
         strokeWidth={2}
         strokeLinecap="round"
         strokeLinejoin="round"
        />
      </svg>
    </div>
    <svg
      width={374}
      height={1}
      viewBox="0 0 374 1"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute left-[-1px] top-0"
      preserveAspectRatio="xMidYMid meet"
    >
      <line x1={-1} y1="0.5" x2={374} y2="0.5" stroke="#EAEFFA" />
    </svg>
    <div className="w-[43px] h-[49px]">
      <svg
        width={32}
        height={32}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8 absolute left-[30.5px] top-[10.5px]"
        preserveAspectRatio="xMidYMid meet"
      >
        <path
          d="M26.2113 12.9349L16.878 4.76825C16.3753 4.32839 15.6247 4.32839 15.122 4.76825L5.78866 12.9349C5.49931 13.1881 5.33333 13.5539 5.33333 13.9384V25.3333C5.33333 26.0697 5.93029 26.6667 6.66667 26.6667H12C12.7364 26.6667 13.3333 26.0697 13.3333 25.3333V20C13.3333 19.2636 13.9303 18.6667 14.6667 18.6667H17.3333C18.0697 18.6667 18.6667 19.2636 18.6667 20V25.3333C18.6667 26.0697 19.2636 26.6667 20 26.6667H25.3333C26.0697 26.6667 26.6667 26.0697 26.6667 25.3333V13.9384C26.6667 13.5539 26.5007 13.1881 26.2113 12.9349Z"
          stroke="#3679FF"
         strokeWidth={2}
         strokeLinecap="round"
         strokeLinejoin="round"
        />
      </svg>
      <p className="absolute left-[26px] top-[47px] text-xs font-bold text-left text-[#3679ff]">
        Acceuil
      </p>
    </div>
  </div>
  <div className="flex justify-center items-center w-[283px] absolute left-[44.5px] top-[206.5px] gap-6 p-4 rounded-xl bg-white border-2 border-[#eff4ff]">
    <div className="flex justify-center items-start flex-grow-0 flex-shrink-0 w-4 h-4 overflow-hidden gap-1 p-4 rounded-sm bg-white border-2 border-[#cdd2d8]" />
    <p className="flex-grow w-[211px] text-xs text-left text-[#43434a]">
      Actualiser quand je déplace la carte
    </p>
  </div>
  <div className="w-[343px] h-[55px] absolute left-[15px] top-[75px]">
    <div className="w-[343px] h-[55px] absolute left-[-1.5px] top-[-1.5px] rounded-xl bg-white border-2 border-[#eff4ff]" />
    <p className="w-[264px] absolute left-4 top-4 text-lg font-bold text-left text-[#3679ff]">
      Saint - Denis (93)
    </p>
    <div
      className="w-[39px] h-[39px] absolute left-[295px] top-[7px] rounded-xl"
      style={{ background: "linear-gradient(to bottom, #81a3f9 -0.06%, #3462d8 108.09%)" }}
    />
    <svg
      width={23}
      height={23}
      viewBox="0 0 23 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-[23px] h-[23px] absolute left-[303px] top-[15px]"
      preserveAspectRatio="xMidYMid meet"
    >
      <path
        d="M9.58333 16.2917C13.2882 16.2917 16.2917 13.2882 16.2917 9.58333C16.2917 5.87842 13.2882 2.875 9.58333 2.875C5.87842 2.875 2.875 5.87842 2.875 9.58333C2.875 13.2882 5.87842 16.2917 9.58333 16.2917Z"
        stroke="white"
       strokeWidth={2}
       strokeLinecap="round"
       strokeLinejoin="round"
      />
      <path
        d="M14.375 14.375L20.125 20.125"
        stroke="white"
       strokeWidth={2}
       strokeLinecap="round"
       strokeLinejoin="round"
      />
    </svg>
  </div>
  <div
    className="w-[164px] h-[46px] absolute left-[104px] top-[679px]"
    style={{
      filter:
        "drop-shadow(0px 2px 4px rgba(24,39,75,0.12)) drop-shadow(0px 4px 4px rgba(24,39,75,0.08))",
    }}
  >
    <div className="w-[164px] h-[46px] absolute left-[-1px] top-[-1px] rounded-xl bg-[#191f2c]" />
    <p className="absolute left-[21px] top-[11px] text-lg font-bold text-left text-white">
      Mode liste
    </p>
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6 absolute left-[119px] top-2.5"
      preserveAspectRatio="xMidYMid meet"
    >
      <path
        d="M9 17H19"
        stroke="white"
       strokeWidth={2}
       strokeLinecap="round"
       strokeLinejoin="round"
      />
      <path
        d="M5 17H5.002V17.002H5V17Z"
        stroke="white"
       strokeWidth={2}
       strokeLinecap="round"
       strokeLinejoin="round"
      />
      <path
        d="M9 12H19"
        stroke="white"
       strokeWidth={2}
       strokeLinecap="round"
       strokeLinejoin="round"
      />
      <path
        d="M5 12H5.002V12.002H5V12Z"
        stroke="white"
       strokeWidth={2}
       strokeLinecap="round"
       strokeLinejoin="round"
      />
      <path
        d="M9 7H19"
        stroke="white"
       strokeWidth={2}
       strokeLinecap="round"
       strokeLinejoin="round"
      />
      <path
        d="M5 7H5.002V7.002H5V7Z"
        stroke="white"
       strokeWidth={2}
       strokeLinecap="round"
       strokeLinejoin="round"
      />
    </svg>
  </div>
  <div className="flex justify-between items-center w-[167px] absolute left-[190.5px] top-[137.5px] px-[47px] py-2 rounded-xl bg-white border-2 border-[#eff4ff]">
    <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-[#43434a]">
      Nb de pièce
    </p>
  </div>
  <svg
    width={374}
    height={810}
    viewBox="0 0 374 810"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="absolute left-[-2px] top-px opacity-30"
    preserveAspectRatio="none"
  >
    <path opacity="0.3" d="M-1 0H374V810H-1V0Z" fill="#051F52" />
  </svg>
  <div className="flex flex-col justify-start items-end w-[375px] absolute left-[-1px] top-[285px] overflow-hidden gap-4 p-6 rounded-tl-xl rounded-tr-xl bg-white border border-[#eaeffa]">
    <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 w-[327px] relative">
      <p className="flex-grow-0 flex-shrink-0 w-[284px] text-base font-bold text-center text-[#272832]">
        Budget
      </p>
      <svg
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
        preserveAspectRatio="none"
      >
        <path
          d="M18 18L6 6"
          stroke="#14181F"
         strokeWidth={2}
         strokeLinecap="round"
         strokeLinejoin="round"
        />
        <path
          d="M18 6L5.99997 18"
          stroke="#14181F"
         strokeWidth={2}
         strokeLinecap="round"
         strokeLinejoin="round"
        />
      </svg>
    </div>
    <div className="self-stretch flex-grow-0 flex-shrink-0 h-20 relative">
      <p className="absolute left-0 top-0 text-base font-bold text-left text-[#0e215c]">
        Votre budget
      </p>
      <div className="w-[327px] h-[52px] absolute left-[-1.5px] top-[26.5px] rounded-xl bg-white border-2 border-[#eff4ff]" />
      <p className="w-[293.46px] absolute left-[16.77px] top-11 text-base font-bold text-left text-[#6976a0]">
        0 €
      </p>
    </div>
    <div className="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5 p-4 rounded-xl bg-[#eff4ff] border border-[#3679ff]">
      <p className="flex-grow-0 flex-shrink-0 text-base text-left text-[#3679ff]">
        <span className="flex-grow-0 flex-shrink-0 text-base font-bold text-left text-[#3679ff]">
          Vous ne connaissez pas{" "}
        </span>
        <br />
        <span className="flex-grow-0 flex-shrink-0 text-base font-bold text-left text-[#3679ff]">
          votre budget ?{" "}
        </span>
        <br />
        <span className="flex-grow-0 flex-shrink-0 text-base text-left text-[#3679ff]">
          Utiliser notre simulateur ci-dessous.
        </span>
      </p>
    </div>
    <div className="self-stretch flex-grow-0 flex-shrink-0 h-20 relative">
      <p className="absolute left-0 top-0 text-base font-bold text-left text-[#0e215c]">
        Votre salaire mensuel net (avant impôt)
      </p>
      <div className="w-[327px] h-[52px] absolute left-[-1.5px] top-[26.5px] rounded-xl bg-white border-2 border-[#eff4ff]" />
      <p className="w-[293.46px] absolute left-[16.77px] top-11 text-base font-bold text-left text-[#6976a0]">
        0 €
      </p>
    </div>
    <div className="self-stretch flex-grow-0 flex-shrink-0 h-20 relative">
      <p className="absolute left-0 top-0 text-base font-bold text-left text-[#0e215c]">
        Votre apport
      </p>
      <div className="w-[327px] h-[52px] absolute left-[-1.5px] top-[26.5px] rounded-xl bg-white border-2 border-[#eff4ff]" />
      <p className="w-[293.46px] absolute left-[16.77px] top-11 text-base font-bold text-left text-[#6976a0]">
        0 €
      </p>
    </div>
    <div
      className="flex justify-end items-end flex-grow-0 flex-shrink-0 relative gap-2.5 px-10 py-3 rounded-xl"
      style={{ background: "linear-gradient(to bottom, #81a3f9 -0.06%, #3462d8 108.09%)" }}
    >
      <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-white">Valider</p>
    </div>
  </div>
  <div className="flex justify-between items-center w-[167px] absolute left-[14.5px] top-[137.5px] px-[47px] py-2 rounded-xl bg-white border-2 border-[#eff4ff]">
    <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-[#43434a]">Prix</p>
  </div>
</div>



9999999999999999999999999999999999

<div className="w-[375px] h-[812px] relative overflow-hidden bg-[#f9fbff] mb-8 mt-8">
  <img
    src="capture-d’écran-2021-01-27-à-18.28-2.png"
    className="w-[343px] h-[542px] absolute left-[15px] top-[191px] rounded-xl object-none"
  />
  <div className="w-[33px] h-[68px] absolute left-[317px] top-[657px] bg-white/[0.78]" />
  <p className="absolute left-[327px] top-[658px] text-[25px] font-bold text-left text-black">+</p>
  <p className="absolute left-[330px] top-[689px] text-[25px] font-bold text-left text-black">-</p>
  <div className="w-[131px] h-[35.4px]">
    <div className="w-[131px] h-[35.4px]">
      <p className="absolute left-[223px] top-[38px] text-[9px] font-bold text-left text-[#43434a]">
        By
      </p>
      <img
        src="nexity-logo-1.png"
        className="w-4 h-4 absolute left-[236.5px] top-[34.5px] object-cover"
      />
      <svg
        width={97}
        height={36}
        viewBox="0 0 97 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute left-[121.81px] top-[23.81px]"
        preserveAspectRatio="none"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14.7453 23.41L14.7407 23.4179C14.0805 24.5402 13.8662 25.3677 13.8662 25.9474C13.8662 26.5927 14.0388 27.1019 14.3655 27.5488C14.8307 28.1538 15.285 28.5466 15.7103 28.7924C16.4653 29.2088 17.1606 29.6164 17.7941 30.0153C18.1547 30.2285 18.5359 30.4879 18.8538 30.8031C19.1298 31.0769 19.6851 31.7125 19.6851 32.6594C19.6851 33.5732 19.2405 34.4265 18.4037 34.9304C17.7331 35.3341 16.9929 35.4015 16.4661 35.4015C14.4605 35.4015 12.542 34.3234 10.7836 32.816L10.777 32.8103L10.7704 32.8046C10.006 32.138 9.36034 31.4102 8.85982 30.6231C7.82421 31.9126 7.04593 32.8455 6.53465 33.4063C6.11811 33.8775 5.70025 34.3018 5.29206 34.6256C5.08526 34.7897 4.83687 34.9635 4.55443 35.1036C4.28689 35.2362 3.86403 35.4015 3.34275 35.4015C1.95883 35.4015 1.11059 34.4601 0.685061 33.7849L0.645838 33.7226L0.611212 33.6578C0.237761 32.9582 0 32.1812 0 31.3497C0 31.0143 0.0691356 30.6397 0.122125 30.3753C0.186073 30.0562 0.277136 29.6644 0.390847 29.2098C0.618863 28.2982 0.955872 27.0634 1.39802 25.5149C2.26023 22.4684 3.12892 18.7974 4.00234 14.4935C4.86254 10.2548 5.28237 6.47787 5.28237 3.15134C5.28237 2.86118 5.29959 2.54116 5.36008 2.22618C5.41034 1.96454 5.52396 1.51761 5.83869 1.09238C6.53482 0.120287 7.62675 0 8.17117 0C9.01283 0 9.65259 0.391964 10.0607 0.762965C10.4422 1.1098 10.7278 1.5288 10.9462 1.91843C11.4801 2.79235 11.7615 3.76073 11.7615 4.78841C11.7615 8.69519 11.0805 13.4466 9.75071 19.0188C11.3809 16.9172 12.8167 15.2095 14.0557 13.904L14.0606 13.8988L14.0656 13.8936C14.666 13.2698 15.2091 12.7489 15.6786 12.3696C15.9111 12.1817 16.1721 11.9903 16.4479 11.836C16.666 11.714 17.158 11.4594 17.7867 11.4594C18.8431 11.4594 19.6799 11.9596 20.2664 12.5801C20.6926 13.0098 21.2946 13.7706 21.2946 14.8154C21.2946 15.3823 21.0739 15.8188 20.9834 15.9887C20.8632 16.2144 20.719 16.4204 20.5877 16.5925C20.3219 16.9408 19.9674 17.3326 19.5601 17.7511C18.788 18.5441 17.9336 19.4187 16.997 20.3748C16.1995 21.189 15.4473 22.1917 14.7499 23.4021L14.7453 23.41ZM18.7772 13.9969C18.4746 13.6695 18.1444 13.5058 17.7867 13.5058C17.4566 13.5058 16.7138 14.106 15.5582 15.3065C13.677 17.2888 11.2794 20.2884 8.36526 24.3054C7.63601 25.3106 6.87442 26.3796 6.08049 27.5123C5.5928 28.2081 5.09291 28.9279 4.58081 29.6717C4.63476 29.5043 4.68829 29.3375 4.74139 29.1712C5.38174 27.166 5.96006 25.2442 6.47632 23.4057C8.62418 15.757 9.69811 9.55123 9.69811 4.78841C9.69811 4.30726 9.60156 3.8482 9.40846 3.41124C9.38336 3.35446 9.35663 3.29804 9.32828 3.242C9.31293 3.21167 9.29711 3.18145 9.28081 3.15134C9.24357 3.08256 9.20384 3.01435 9.16162 2.94671C8.83147 2.34645 8.50132 2.04633 8.17117 2.04633C7.84102 2.04633 7.62092 2.12818 7.51087 2.29189C7.40083 2.42831 7.3458 2.71479 7.3458 3.15134C7.3458 3.3775 7.34395 3.60543 7.34026 3.83513C7.33988 3.85894 7.33948 3.88278 7.33905 3.90664C7.28063 7.20556 6.84268 10.8691 6.02521 14.8973C5.14481 19.2355 4.26442 22.9598 3.38402 26.0702C2.50363 29.1533 2.06343 30.9132 2.06343 31.3497C2.06343 31.7863 2.18723 32.2365 2.43484 32.7003C2.70997 33.1369 3.0126 33.3551 3.34275 33.3551C3.6729 33.3551 4.22315 32.9186 4.99349 32.0455C5.27125 31.7415 5.64405 31.307 6.11187 30.7418C6.11775 30.7347 6.12366 30.7275 6.12957 30.7204C6.24506 30.5807 6.36628 30.4332 6.49324 30.2779C6.52507 30.2389 6.55726 30.1994 6.58981 30.1595C6.93272 29.7387 7.31562 29.2629 7.7385 28.7321C7.79778 28.6577 7.85784 28.5822 7.91869 28.5057C8.36578 27.9431 8.85529 27.3223 9.38722 26.6432C9.50261 26.4959 9.61999 26.3458 9.73938 26.193V26.6432C9.73938 27.4207 9.90794 28.1665 10.2451 28.8807C10.6414 29.7202 11.2707 30.516 12.133 31.2679C13.0888 32.0873 13.9826 32.6654 14.8144 33.0023C15.1078 33.1211 15.3935 33.2099 15.6714 33.2687C15.6932 33.2733 15.7149 33.2777 15.7365 33.282C15.7575 33.2861 15.7784 33.29 15.7993 33.2937C16.0268 33.3347 16.2491 33.3551 16.4661 33.3551C17.2365 33.3551 17.6217 33.1232 17.6217 32.6594C17.6217 32.4138 17.319 32.1137 16.7138 31.759C16.6325 31.7077 16.5499 31.6561 16.4661 31.6043C16.3865 31.5551 16.3057 31.5056 16.2238 31.4559C16.0605 31.3568 15.8928 31.2569 15.7206 31.1561C15.3937 30.9646 15.0507 30.77 14.6916 30.5721C13.9763 30.1629 13.316 29.5626 12.7107 28.7714C12.1054 27.9528 11.8028 27.0115 11.8028 25.9474C11.8028 24.8833 12.188 23.6965 12.9583 22.3868C13.7287 21.0499 14.5816 19.9039 15.517 18.949C16.4524 17.994 17.3053 17.1209 18.0756 16.3297C18.846 15.5384 19.2311 15.0337 19.2311 14.8154C19.2311 14.5698 19.0798 14.297 18.7772 13.9969ZM16.5849 31.3025C16.5849 31.3025 16.5796 31.3038 16.5676 31.305C16.5787 31.3029 16.5849 31.3025 16.5849 31.3025Z"
          fill="url(#paint0_linear_499_5860)"
        />
        <path
          d="M25.0427 32.6101C24.6187 32.6101 24.2654 32.4934 23.9828 32.2598C23.7159 32.0106 23.5824 31.6603 23.5824 31.2087V22.1926C23.5824 21.741 23.7159 21.3984 23.9828 21.1648C24.2654 20.9313 24.6187 20.8145 25.0427 20.8145C25.4666 20.8145 25.8199 20.9313 26.1026 21.1648C26.3852 21.3984 26.5265 21.741 26.5265 22.1926V31.2087C26.5265 31.6603 26.3852 32.0106 26.1026 32.2598C25.8199 32.4934 25.4666 32.6101 25.0427 32.6101ZM25.0427 18.7356C24.5088 18.7356 24.0849 18.5955 23.7708 18.3152C23.4568 18.0193 23.2998 17.6378 23.2998 17.1707C23.2998 16.7035 23.4568 16.3298 23.7708 16.0495C24.0849 15.7692 24.5088 15.629 25.0427 15.629C25.5608 15.629 25.9769 15.7692 26.291 16.0495C26.6207 16.3298 26.7856 16.7035 26.7856 17.1707C26.7856 17.6378 26.6286 18.0193 26.3145 18.3152C26.0005 18.5955 25.5765 18.7356 25.0427 18.7356Z"
          fill="url(#paint1_linear_499_5860)"
        />
        <path
          d="M35.6784 30.4379C36.4635 30.4846 36.856 30.835 36.856 31.489C36.856 31.8627 36.699 32.1508 36.385 32.3532C36.0866 32.5401 35.6548 32.6179 35.0896 32.5868L34.4536 32.5401C31.8157 32.3532 30.4967 30.9517 30.4967 28.3357V23.2437H29.3191C28.8951 23.2437 28.5654 23.1502 28.3299 22.9634C28.11 22.7765 28.0001 22.504 28.0001 22.1459C28.0001 21.7877 28.11 21.5152 28.3299 21.3283C28.5654 21.1415 28.8951 21.048 29.3191 21.048H30.4967V18.8991C30.4967 18.4787 30.6302 18.1439 30.8971 17.8947C31.1641 17.6456 31.5252 17.521 31.9806 17.521C32.4202 17.521 32.7735 17.6456 33.0405 17.8947C33.3074 18.1439 33.4409 18.4787 33.4409 18.8991V21.048H35.4429C35.8668 21.048 36.1887 21.1415 36.4085 21.3283C36.6441 21.5152 36.7618 21.7877 36.7618 22.1459C36.7618 22.504 36.6441 22.7765 36.4085 22.9634C36.1887 23.1502 35.8668 23.2437 35.4429 23.2437H33.4409V28.5459C33.4409 29.6982 33.9747 30.3133 35.0425 30.3912L35.6784 30.4379Z"
          fill="url(#paint2_linear_499_5860)"
        />
        <path
          d="M45.8721 32.6101C45.4482 32.6101 45.0949 32.4934 44.8122 32.2598C44.5453 32.0106 44.4118 31.6603 44.4118 31.2087V17.2641C44.4118 16.8125 44.5453 16.4699 44.8122 16.2363C45.0949 16.0028 45.4482 15.886 45.8721 15.886C46.2961 15.886 46.6494 16.0028 46.932 16.2363C47.2147 16.4699 47.356 16.8125 47.356 17.2641V31.2087C47.356 31.6603 47.2147 32.0106 46.932 32.2598C46.6494 32.4934 46.2961 32.6101 45.8721 32.6101Z"
          fill="url(#paint3_linear_499_5860)"
        />
        <path
          d="M58.948 29.3401C59.215 29.3401 59.4269 29.4413 59.584 29.6437C59.7567 29.8461 59.843 30.1187 59.843 30.4612C59.843 30.944 59.5525 31.3488 58.9716 31.6758C58.4377 31.9717 57.8332 32.2131 57.158 32.3999C56.4828 32.5712 55.839 32.6569 55.2266 32.6569C53.3738 32.6569 51.9057 32.1274 50.8222 31.0685C49.7388 30.0096 49.1971 28.5615 49.1971 26.724C49.1971 25.5561 49.4326 24.5206 49.9037 23.6174C50.3747 22.7142 51.0342 22.0135 51.8821 21.5152C52.7457 21.0169 53.7193 20.7678 54.8027 20.7678C55.839 20.7678 56.7419 20.9935 57.5113 21.4451C58.2807 21.8967 58.8774 22.5352 59.3013 23.3605C59.7253 24.1858 59.9372 25.159 59.9372 26.2802C59.9372 26.9498 59.6389 27.2846 59.0422 27.2846H52.0941C52.1883 28.359 52.4945 29.1532 53.0127 29.6671C53.5308 30.1654 54.2845 30.4145 55.2738 30.4145C55.7762 30.4145 56.2159 30.3522 56.5927 30.2277C56.9853 30.1031 57.4249 29.9318 57.9117 29.7138C58.3827 29.4646 58.7282 29.3401 58.948 29.3401ZM54.8734 22.8232C54.0726 22.8232 53.4288 23.0724 52.942 23.5707C52.471 24.069 52.1883 24.7853 52.0941 25.7196H57.4171C57.3857 24.7697 57.1501 24.0534 56.7105 23.5707C56.2708 23.0724 55.6585 22.8232 54.8734 22.8232Z"
          fill="url(#paint4_linear_499_5860)"
        />
        <path
          d="M74.1187 20.7678C75.5005 20.7678 76.529 21.157 77.2042 21.9356C77.8794 22.7142 78.217 23.8899 78.217 25.4627V31.2087C78.217 31.6447 78.0835 31.9873 77.8166 32.2364C77.5653 32.4856 77.212 32.6101 76.7567 32.6101C76.3013 32.6101 75.9402 32.4856 75.6732 32.2364C75.4063 31.9873 75.2728 31.6447 75.2728 31.2087V25.6262C75.2728 24.7386 75.1001 24.0923 74.7547 23.6875C74.4249 23.2826 73.8989 23.0802 73.1766 23.0802C72.3287 23.0802 71.6457 23.3449 71.1275 23.8743C70.625 24.4038 70.3738 25.1123 70.3738 25.9999V31.2087C70.3738 31.6447 70.2403 31.9873 69.9734 32.2364C69.7065 32.4856 69.3453 32.6101 68.89 32.6101C68.4346 32.6101 68.0735 32.4856 67.8065 32.2364C67.5553 31.9873 67.4297 31.6447 67.4297 31.2087V22.1692C67.4297 21.7644 67.5632 21.4373 67.8301 21.1882C68.097 20.939 68.4582 20.8145 68.9135 20.8145C69.3218 20.8145 69.6515 20.939 69.9028 21.1882C70.1697 21.4218 70.3032 21.7332 70.3032 22.1225V22.7532C70.6957 22.1147 71.2217 21.6242 71.8812 21.2816C72.5407 20.939 73.2865 20.7678 74.1187 20.7678Z"
          fill="url(#paint5_linear_499_5860)"
        />
        <path
          d="M81.7358 32.6101C81.3118 32.6101 80.9585 32.4934 80.6759 32.2598C80.4089 32.0106 80.2755 31.6603 80.2755 31.2087V22.1926C80.2755 21.741 80.4089 21.3984 80.6759 21.1648C80.9585 20.9313 81.3118 20.8145 81.7358 20.8145C82.1597 20.8145 82.513 20.9313 82.7956 21.1648C83.0783 21.3984 83.2196 21.741 83.2196 22.1926V31.2087C83.2196 31.6603 83.0783 32.0106 82.7956 32.2598C82.513 32.4934 82.1597 32.6101 81.7358 32.6101ZM81.7358 18.7356C81.2019 18.7356 80.7779 18.5955 80.4639 18.3152C80.1499 18.0193 79.9928 17.6378 79.9928 17.1707C79.9928 16.7035 80.1499 16.3298 80.4639 16.0495C80.7779 15.7692 81.2019 15.629 81.7358 15.629C82.2539 15.629 82.67 15.7692 82.9841 16.0495C83.3138 16.3298 83.4787 16.7035 83.4787 17.1707C83.4787 17.6378 83.3217 18.0193 83.0076 18.3152C82.6936 18.5955 82.2696 18.7356 81.7358 18.7356Z"
          fill="url(#paint6_linear_499_5860)"
        />
        <path
          d="M95.4926 15.886C95.9323 15.886 96.2934 16.0105 96.5761 16.2597C96.8587 16.5088 97 16.8358 97 17.2407V31.2087C97 31.6291 96.8665 31.9639 96.5996 32.213C96.3327 32.4622 95.9794 32.5868 95.5397 32.5868C95.1001 32.5868 94.7468 32.4622 94.4798 32.213C94.2129 31.9639 94.0794 31.6291 94.0794 31.2087V30.6247C93.734 31.2632 93.2315 31.7615 92.572 32.1196C91.9283 32.4778 91.1903 32.6568 90.3581 32.6568C89.3688 32.6568 88.4817 32.4077 87.6966 31.9094C86.9272 31.4111 86.3226 30.7104 85.883 29.8072C85.459 28.8885 85.2471 27.8374 85.2471 26.6539C85.2471 25.4704 85.459 24.4349 85.883 23.5473C86.3226 22.6597 86.9272 21.9746 87.6966 21.4918C88.466 21.0091 89.3531 20.7677 90.3581 20.7677C91.1903 20.7677 91.9283 20.939 92.572 21.2816C93.2158 21.6242 93.7104 22.1069 94.0559 22.7298V17.194C94.0559 16.8047 94.1815 16.4933 94.4327 16.2597C94.6997 16.0105 95.053 15.886 95.4926 15.886ZM91.1353 30.3911C92.0774 30.3911 92.7997 30.0719 93.3022 29.4335C93.8204 28.795 94.0794 27.8841 94.0794 26.7006C94.0794 25.5171 93.8204 24.614 93.3022 23.9911C92.7997 23.3527 92.0853 23.0334 91.1589 23.0334C90.2168 23.0334 89.4866 23.3449 88.9684 23.9677C88.4503 24.5906 88.1912 25.486 88.1912 26.6539C88.1912 27.8374 88.4503 28.7561 88.9684 29.4101C89.4866 30.0641 90.2089 30.3911 91.1353 30.3911Z"
          fill="url(#paint7_linear_499_5860)"
        />
        <defs>
          <lineargradient
            id="paint0_linear_499_5860"
            x1="92.364"
            y1="-1.6269"
            x2="73.5427"
            y2="61.5915"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#C399DB" />
            <stop offset={1} stopColor="#5882F7" />
          </lineargradient>
          <lineargradient
            id="paint1_linear_499_5860"
            x1="92.364"
            y1="-1.6269"
            x2="73.5427"
            y2="61.5915"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#C399DB" />
            <stop offset={1} stopColor="#5882F7" />
          </lineargradient>
          <lineargradient
            id="paint2_linear_499_5860"
            x1="92.364"
            y1="-1.6269"
            x2="73.5427"
            y2="61.5915"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#C399DB" />
            <stop offset={1} stopColor="#5882F7" />
          </lineargradient>
          <lineargradient
            id="paint3_linear_499_5860"
            x1="92.364"
            y1="-1.6269"
            x2="73.5427"
            y2="61.5915"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#C399DB" />
            <stop offset={1} stopColor="#5882F7" />
          </lineargradient>
          <lineargradient
            id="paint4_linear_499_5860"
            x1="92.364"
            y1="-1.6269"
            x2="73.5427"
            y2="61.5915"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#C399DB" />
            <stop offset={1} stopColor="#5882F7" />
          </lineargradient>
          <lineargradient
            id="paint5_linear_499_5860"
            x1="92.364"
            y1="-1.6269"
            x2="73.5427"
            y2="61.5915"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#C399DB" />
            <stop offset={1} stopColor="#5882F7" />
          </lineargradient>
          <lineargradient
            id="paint6_linear_499_5860"
            x1="92.364"
            y1="-1.6269"
            x2="73.5427"
            y2="61.5915"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#C399DB" />
            <stop offset={1} stopColor="#5882F7" />
          </lineargradient>
          <lineargradient
            id="paint7_linear_499_5860"
            x1="92.364"
            y1="-1.6269"
            x2="73.5427"
            y2="61.5915"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#C399DB" />
            <stop offset={1} stopColor="#5882F7" />
          </lineargradient>
        </defs>
      </svg>
    </div>
  </div>
  <div className="w-[375px] h-[70px] absolute left-[-2px] top-[741px] overflow-hidden bg-[#fcfcfd]">
    <svg
      width={374}
      height={1}
      viewBox="0 0 374 1"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute left-[-1px] top-0"
      preserveAspectRatio="xMidYMid meet"
    >
      <line x1={-1} y1="0.5" x2={374} y2="0.5" stroke="#EAEFFA" />
    </svg>
    <div className="w-[62px] h-[49px]">
      <svg
        width={32}
        height={32}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8 absolute left-[101.5px] top-[10.5px]"
        preserveAspectRatio="xMidYMid meet"
      >
        <path
          d="M13.3333 22.6667C18.488 22.6667 22.6667 18.488 22.6667 13.3333C22.6667 8.17868 18.488 4 13.3333 4C8.17868 4 4 8.17868 4 13.3333C4 18.488 8.17868 22.6667 13.3333 22.6667Z"
          stroke="#272832"
         strokeWidth={2}
         strokeLinecap="round"
         strokeLinejoin="round"
        />
        <path
          d="M20 20L28 28"
          stroke="#272832"
         strokeWidth={2}
         strokeLinecap="round"
         strokeLinejoin="round"
        />
      </svg>
      <p className="absolute left-[87px] top-[47px] text-xs font-bold text-left text-[#272832]">
        Recherche
      </p>
    </div>
    <div className="w-[43px] h-[49px]">
      <svg
        width={32}
        height={32}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8 absolute left-[24.5px] top-[10.5px]"
        preserveAspectRatio="xMidYMid meet"
      >
        <path
          d="M26.2113 12.9349L16.878 4.76825C16.3753 4.32839 15.6247 4.32839 15.122 4.76825L5.78867 12.9349C5.49932 13.1881 5.33334 13.5539 5.33334 13.9384V25.3333C5.33334 26.0697 5.9303 26.6667 6.66668 26.6667H12C12.7364 26.6667 13.3333 26.0697 13.3333 25.3333V20C13.3333 19.2636 13.9303 18.6667 14.6667 18.6667H17.3333C18.0697 18.6667 18.6667 19.2636 18.6667 20V25.3333C18.6667 26.0697 19.2636 26.6667 20 26.6667H25.3333C26.0697 26.6667 26.6667 26.0697 26.6667 25.3333V13.9384C26.6667 13.5539 26.5007 13.1881 26.2113 12.9349Z"
          stroke="#3679FF"
         strokeWidth={2}
         strokeLinecap="round"
         strokeLinejoin="round"
        />
      </svg>
      <p className="absolute left-5 top-[47px] text-xs font-bold text-left text-[#3679ff]">
        Acceuil
      </p>
    </div>
    <div className="w-[33px] h-[49px]">
      <p className="absolute left-[321px] top-[47px] text-xs font-bold text-left text-[#272832]">
        Menu
      </p>
      <svg
        width={32}
        height={32}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8 absolute left-[321.5px] top-[10.5px]"
        preserveAspectRatio="xMidYMid meet"
      >
        <path
          d="M6.66669 22.6667L25.3334 22.6667"
          stroke="#272832"
         strokeWidth={2}
         strokeLinecap="round"
         strokeLinejoin="round"
        />
        <path
          d="M6.66669 16H25.3334"
          stroke="#272832"
         strokeWidth={2}
         strokeLinecap="round"
         strokeLinejoin="round"
        />
        <path
          d="M6.66669 9.33334L17.3334 9.33334"
          stroke="#272832"
         strokeWidth={2}
         strokeLinecap="round"
         strokeLinejoin="round"
        />
      </svg>
    </div>
    <div className="w-[41px] h-[49px]">
      <p className="absolute left-[173px] top-[47px] text-xs font-bold text-left text-[#272832]">
        Favoris
      </p>
      <svg
        width={32}
        height={32}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8 absolute left-[176.5px] top-[10.5px]"
        preserveAspectRatio="xMidYMid meet"
      >
        <path
          d="M16 26.6667L15.5134 27.5403C15.8159 27.7088 16.1841 27.7088 16.4866 27.5403L16 26.6667ZM16 9.54961L15.0797 9.94073C15.2365 10.3099 15.5989 10.5496 16 10.5496C16.4011 10.5496 16.7635 10.3099 16.9203 9.94073L16 9.54961ZM3 11.9631C3 16.439 6.31031 20.3739 9.33471 23.069C10.8787 24.445 12.4181 25.5591 13.5693 26.3285C14.1459 26.7138 14.6276 27.0143 14.9669 27.2195C15.1367 27.3222 15.271 27.4011 15.364 27.455C15.4105 27.4819 15.4467 27.5026 15.4719 27.5169C15.4844 27.524 15.4942 27.5295 15.5012 27.5335C15.5047 27.5354 15.5074 27.537 15.5095 27.5381C15.5105 27.5387 15.5113 27.5391 15.512 27.5395C15.5123 27.5397 15.5127 27.5399 15.5129 27.54C15.5132 27.5402 15.5134 27.5403 16 26.6667C16.4866 25.793 16.4867 25.7931 16.4869 25.7932C16.4869 25.7932 16.4869 25.7932 16.4869 25.7932C16.4868 25.7932 16.4866 25.793 16.4861 25.7928C16.4853 25.7923 16.4837 25.7914 16.4814 25.7901C16.4768 25.7876 16.4694 25.7834 16.4593 25.7776C16.439 25.7661 16.4078 25.7483 16.3665 25.7243C16.2837 25.6764 16.1602 25.6039 16.0018 25.5081C15.6849 25.3165 15.2291 25.0322 14.6807 24.6657C13.5819 23.9313 12.1213 22.8733 10.6653 21.5759C7.68969 18.9242 5 15.5074 5 11.9631H3ZM16.9203 9.15849C15.4058 5.59457 11.9635 3.9572 8.85702 4.40596C7.2993 4.63099 5.82046 5.38245 4.73395 6.6773C3.64471 7.97541 3 9.75867 3 11.9631H5C5 10.1575 5.52195 8.84965 6.26605 7.96287C7.01287 7.07284 8.03403 6.54561 9.14298 6.38541C11.3699 6.06371 13.9275 7.22966 15.0797 9.94073L16.9203 9.15849ZM27 11.9631C27 15.5074 24.3103 18.9242 21.3347 21.5759C19.8787 22.8733 18.4181 23.9313 17.3193 24.6657C16.7709 25.0322 16.3151 25.3165 15.9982 25.5081C15.8398 25.6039 15.7163 25.6764 15.6335 25.7243C15.5922 25.7483 15.561 25.7661 15.5407 25.7776C15.5306 25.7834 15.5232 25.7876 15.5186 25.7901C15.5163 25.7914 15.5147 25.7923 15.5139 25.7928C15.5134 25.793 15.5132 25.7932 15.5131 25.7932C15.5131 25.7932 15.5131 25.7932 15.5131 25.7932C15.5133 25.7931 15.5134 25.793 16 26.6667C16.4866 27.5403 16.4868 27.5402 16.4871 27.54C16.4873 27.5399 16.4877 27.5397 16.488 27.5395C16.4887 27.5391 16.4895 27.5387 16.4905 27.5381C16.4926 27.537 16.4953 27.5354 16.4988 27.5335C16.5058 27.5295 16.5156 27.524 16.5281 27.5169C16.5533 27.5026 16.5895 27.4819 16.636 27.455C16.729 27.4011 16.8633 27.3222 17.0331 27.2195C17.3724 27.0143 17.8541 26.7138 18.4307 26.3285C19.5819 25.5591 21.1213 24.445 22.6653 23.069C25.6897 20.3739 29 16.439 29 11.9631H27ZM16.9203 9.94073C18.0725 7.22966 20.6301 6.06371 22.857 6.38541C23.966 6.54561 24.9871 7.07284 25.734 7.96287C26.478 8.84965 27 10.1575 27 11.9631H29C29 9.75867 28.3553 7.97541 27.266 6.6773C26.1795 5.38245 24.7007 4.63099 23.143 4.40596C20.0365 3.9572 16.5942 5.59457 15.0797 9.15849L16.9203 9.94073Z"
          fill="#272832"
        />
      </svg>
    </div>
    <div className="w-[59px] h-[49px]">
      <div className="w-[59px] h-[49px]">
        <svg
          width={32}
          height={32}
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8 absolute left-[251.5px] top-[10.5px]"
          preserveAspectRatio="xMidYMid meet"
        >
          <path
            d="M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z"
            stroke="#272832"
           strokeWidth={2}
           strokeLinecap="round"
           strokeLinejoin="round"
          />
          <path
            d="M22.9553 25.7764C21.2463 23.8677 18.7633 22.6667 15.9998 22.6667C13.2362 22.6667 10.7532 23.8677 9.04425 25.7764"
            stroke="#272832"
           strokeWidth={2}
           strokeLinecap="round"
           strokeLinejoin="round"
          />
          <path
            d="M16 18.6667C18.2091 18.6667 20 16.8758 20 14.6667C20 12.4575 18.2091 10.6667 16 10.6667C13.7909 10.6667 12 12.4575 12 14.6667C12 16.8758 13.7909 18.6667 16 18.6667Z"
            stroke="#272832"
           strokeWidth={2}
           strokeLinecap="round"
           strokeLinejoin="round"
          />
        </svg>
        <p className="absolute left-[238px] top-[47px] text-xs font-bold text-left text-[#272832]">
          Mon profil
        </p>
      </div>
    </div>
  </div>
  <div className="flex justify-center items-center w-[283px] absolute left-[44.5px] top-[206.5px] gap-6 p-4 rounded-xl bg-white border-2 border-[#eff4ff]">
    <div className="flex justify-center items-start flex-grow-0 flex-shrink-0 w-4 h-4 overflow-hidden gap-1 p-4 rounded-sm bg-white border-2 border-[#cdd2d8]" />
    <p className="flex-grow w-[211px] text-xs text-left text-[#43434a]">
      Actualiser quand je déplace la carte
    </p>
  </div>
  <div className="flex justify-between items-center w-[167px] absolute left-[14.5px] top-[137.5px] px-[47px] py-2 rounded-xl bg-white border-2 border-[#eff4ff]">
    <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-[#43434a]">Prix</p>
  </div>
  <div className="flex justify-between items-center w-[167px] absolute left-[190.5px] top-[137.5px] px-[47px] py-2 rounded-xl bg-white border-2 border-[#eff4ff]">
    <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-[#43434a]">
      Nb de pièce
    </p>
  </div>
  <div className="w-[343px] h-[55px] absolute left-[15px] top-[75px]">
    <div className="w-[343px] h-[55px] absolute left-[-1.5px] top-[-1.5px] rounded-xl bg-white border-2 border-[#eff4ff]" />
    <p className="w-[264px] absolute left-4 top-4 text-lg font-bold text-left text-[#3679ff]">
      Saint - Denis (93)
    </p>
    <div
      className="w-[39px] h-[39px] absolute left-[295px] top-[7px] rounded-xl"
      style={{ background: "linear-gradient(to bottom, #81a3f9 -0.06%, #3462d8 108.09%)" }}
    />
    <svg
      width={23}
      height={23}
      viewBox="0 0 23 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-[23px] h-[23px] absolute left-[303px] top-[15px]"
      preserveAspectRatio="xMidYMid meet"
    >
      <path
        d="M9.58333 16.2917C13.2882 16.2917 16.2917 13.2882 16.2917 9.58333C16.2917 5.87842 13.2882 2.875 9.58333 2.875C5.87842 2.875 2.875 5.87842 2.875 9.58333C2.875 13.2882 5.87842 16.2917 9.58333 16.2917Z"
        stroke="white"
       strokeWidth={2}
       strokeLinecap="round"
       strokeLinejoin="round"
      />
      <path
        d="M14.375 14.375L20.125 20.125"
        stroke="white"
       strokeWidth={2}
       strokeLinecap="round"
       strokeLinejoin="round"
      />
    </svg>
  </div>
  <div
    className="w-[164px] h-[46px] absolute left-[104px] top-[679px]"
    style={{
      filter:
        "drop-shadow(0px 2px 4px rgba(24,39,75,0.12)) drop-shadow(0px 4px 4px rgba(24,39,75,0.08))",
    }}
  >
    <div className="w-[164px] h-[46px] absolute left-[-1px] top-[-1px] rounded-xl bg-[#191f2c]" />
    <p className="absolute left-[21px] top-[11px] text-lg font-bold text-left text-white">
      Mode liste
    </p>
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6 absolute left-[119px] top-2.5"
      preserveAspectRatio="xMidYMid meet"
    >
      <path
        d="M9 17H19"
        stroke="white"
       strokeWidth={2}
       strokeLinecap="round"
       strokeLinejoin="round"
      />
      <path
        d="M5 17H5.002V17.002H5V17Z"
        stroke="white"
       strokeWidth={2}
       strokeLinecap="round"
       strokeLinejoin="round"
      />
      <path
        d="M9 12H19"
        stroke="white"
       strokeWidth={2}
       strokeLinecap="round"
       strokeLinejoin="round"
      />
      <path
        d="M5 12H5.002V12.002H5V12Z"
        stroke="white"
       strokeWidth={2}
       strokeLinecap="round"
       strokeLinejoin="round"
      />
      <path
        d="M9 7H19"
        stroke="white"
       strokeWidth={2}
       strokeLinecap="round"
       strokeLinejoin="round"
      />
      <path
        d="M5 7H5.002V7.002H5V7Z"
        stroke="white"
       strokeWidth={2}
       strokeLinecap="round"
       strokeLinejoin="round"
      />
    </svg>
  </div>
</div>




1000000000101010101010110100101000

<div className="w-[375px] h-[812px] relative overflow-hidden bg-[#f9fbff] mb-8">
  <div className="w-[287px] h-[30px]">
    <p className="w-[287px] h-[30px] absolute left-4 top-8 text-[28px] font-bold text-left">
      Mon profil
    </p>
  </div>
  <p className="w-[327px] h-[27px] absolute left-4 top-[90px] text-lg font-bold text-left text-[#272832]">
    Mes informations
  </p>
  <svg
    width={80}
    height={80}
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="absolute left-[15px] top-[135px]"
    preserveAspectRatio="none"
  >
    <circle cx={40} cy={40} r={40} fill="url(#paint0_linear_623_5356)" />
    <defs>
      <lineargradient
        id="paint0_linear_623_5356"
        x1="76.1765"
        y1="-3.67647"
        x2="4.85673e-7"
        y2="89.7059"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#C399DB" />
        <stop offset={1} stopColor="#5882F7" />
      </lineargradient>
    </defs>
  </svg>
  <div className="w-[343px] h-[50px] absolute left-[15px] top-[231px] rounded-[10px] bg-white border border-[#3679ff]" />
  <div className="w-[343px] h-[50px] absolute left-[15px] top-[289px] rounded-[10px] bg-white" />
  <div className="w-[343px] h-[50px] absolute left-[15px] top-[347px] rounded-[10px] bg-white" />
  <div className="w-[343px] h-[50px] absolute left-[15px] top-[405px] rounded-[10px] bg-white" />
  <p className="absolute left-8 top-[248px] text-sm font-medium text-left text-[#3679ff]">
    Jean-Louis Vitre
  </p>
  <p className="absolute left-8 top-[306px] text-sm font-medium text-left text-[#43434a]">
    jeanlouisthebest@gmail.com
  </p>
  <p className="absolute left-8 top-[364px] text-sm font-medium text-left text-[#43434a]">
    0798986754
  </p>
  <p className="absolute left-8 top-[422px] text-sm font-medium text-left text-[#43434a]">
    5 rue des chaussettes, 75011 Paris
  </p>
  <div className="w-[343px] h-[50px] absolute left-[15px] top-[463px] rounded-[10px] bg-white" />
  <p className="absolute left-8 top-[480px] text-sm font-medium text-left text-[#43434a]">CDD</p>
  <svg
    width={27}
    height={45}
    viewBox="0 0 27 45"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="absolute left-[41.56px] top-[152.82px]"
    preserveAspectRatio="none"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18.7866 29.5788L18.7808 29.5886C17.9529 30.9801 17.6841 32.006 17.6841 32.7249C17.6841 33.5249 17.9005 34.1563 18.3103 34.7104C18.8937 35.4605 19.4634 35.9475 19.9967 36.2523C20.9436 36.7686 21.8156 37.2739 22.6101 37.7685C23.0623 38.0328 23.5404 38.3545 23.939 38.7453C24.2851 39.0847 24.9816 39.8728 24.9816 41.0468C24.9816 42.1798 24.424 43.2378 23.3745 43.8626C22.5336 44.3632 21.6053 44.4467 20.9447 44.4467C18.4294 44.4467 16.0234 43.11 13.8182 41.241L13.8099 41.234L13.8017 41.2269C12.843 40.4004 12.0333 39.498 11.4056 38.5221C10.1069 40.1209 9.13083 41.2776 8.48964 41.9729C7.96725 42.5571 7.44321 43.0832 6.93131 43.4848C6.67196 43.6882 6.36045 43.9037 6.00624 44.0773C5.67073 44.2418 5.14042 44.4467 4.48669 44.4467C2.75112 44.4467 1.68734 43.2795 1.15369 42.4423L1.1045 42.3651L1.06107 42.2847C0.592731 41.4173 0.294556 40.454 0.294556 39.423C0.294556 39.0071 0.381258 38.5427 0.447713 38.2148C0.527909 37.8192 0.64211 37.3334 0.784716 36.7697C1.07067 35.6395 1.49331 34.1085 2.0478 32.1886C3.1291 28.4114 4.21852 23.8597 5.31388 18.5235C6.39265 13.268 6.91916 8.58506 6.91916 4.46058C6.91916 4.10082 6.94074 3.70404 7.01662 3.31349C7.07964 2.9891 7.22213 2.43496 7.61683 1.90773C8.48984 0.702455 9.85923 0.553314 10.542 0.553314C11.5975 0.553314 12.3998 1.0393 12.9116 1.49929C13.3901 1.92933 13.7483 2.44883 14.0222 2.93192C14.6917 4.01547 15.0446 5.21615 15.0446 6.49034C15.0446 11.3343 14.1905 17.2254 12.5229 24.1342C14.5674 21.5285 16.3679 19.4112 17.9217 17.7926L17.9279 17.7861L17.9342 17.7796C18.6871 17.0063 19.3683 16.3604 19.957 15.89C20.2486 15.6571 20.576 15.4198 20.9219 15.2285C21.1953 15.0772 21.8123 14.7616 22.6008 14.7616C23.9257 14.7616 24.975 15.3818 25.7106 16.151C26.2451 16.6838 27 17.6271 27 18.9226C27 19.6254 26.7232 20.1667 26.6097 20.3773C26.459 20.6571 26.2781 20.9126 26.1134 21.126C25.7802 21.5577 25.3356 22.0436 24.8247 22.5624C23.8565 23.5456 22.785 24.6301 21.6105 25.8156C20.6103 26.825 19.6669 28.0682 18.7923 29.569L18.7866 29.5788ZM23.8429 17.9077C23.4634 17.5017 23.0494 17.2988 22.6008 17.2988C22.1868 17.2988 21.2552 18.043 19.8061 19.5315C17.4468 21.9892 14.4399 25.7084 10.7854 30.689C9.87085 31.9353 8.91574 33.2607 7.92008 34.6651C7.30847 35.5278 6.68155 36.4203 6.03933 37.3425C6.10699 37.135 6.17412 36.9281 6.24071 36.7219C7.04378 34.2357 7.76904 31.8529 8.41649 29.5734C11.1101 20.09 12.4569 12.3956 12.4569 6.49034C12.4569 5.89377 12.3358 5.3246 12.0937 4.78283C12.0622 4.71242 12.0287 4.64247 11.9931 4.57299C11.9739 4.53538 11.954 4.49792 11.9336 4.46058C11.8869 4.3753 11.8371 4.29073 11.7841 4.20687C11.3701 3.46262 10.956 3.0905 10.542 3.0905C10.128 3.0905 9.85193 3.19199 9.71391 3.39497C9.5759 3.56411 9.5069 3.91932 9.5069 4.46058C9.5069 4.74099 9.50458 5.02359 9.49995 5.30839C9.49947 5.33792 9.49896 5.36748 9.49844 5.39705C9.42516 9.48731 8.87593 14.0296 7.85074 19.024C6.74664 24.4029 5.64254 29.0206 4.53844 32.8771C3.43434 36.6998 2.88229 38.8818 2.88229 39.423C2.88229 39.9643 3.03756 40.5225 3.34808 41.0976C3.69311 41.6389 4.07265 41.9095 4.48669 41.9095C4.90073 41.9095 5.59079 41.3682 6.55688 40.2857C6.90521 39.9088 7.37273 39.37 7.95942 38.6692C7.96681 38.6604 7.97421 38.6516 7.98163 38.6427C8.12646 38.4696 8.27848 38.2867 8.4377 38.0941C8.47762 38.0458 8.51799 37.9968 8.55881 37.9473C8.98885 37.4255 9.46904 36.8356 9.99938 36.1775C10.0737 36.0853 10.149 35.9917 10.2253 35.8968C10.786 35.1993 11.3999 34.4296 12.067 33.5875C12.2117 33.4049 12.359 33.2188 12.5087 33.0293V33.5875C12.5087 34.5516 12.7201 35.4763 13.1428 36.3617C13.6399 37.4027 14.4291 38.3893 15.5104 39.3216C16.7091 40.3375 17.8301 41.0543 18.8733 41.472C19.2412 41.6193 19.5995 41.7295 19.9481 41.8024C19.9753 41.8081 20.0025 41.8135 20.0296 41.8188C20.0559 41.8239 20.0822 41.8287 20.1084 41.8334C20.3937 41.8841 20.6725 41.9095 20.9447 41.9095C21.9108 41.9095 22.3938 41.6219 22.3938 41.0468C22.3938 40.7424 22.0143 40.3703 21.2552 39.9305C21.1533 39.8669 21.0497 39.803 20.9447 39.7387C20.8448 39.6777 20.7434 39.6163 20.6407 39.5547C20.436 39.4319 20.2257 39.308 20.0097 39.1829C19.5997 38.9455 19.1696 38.7042 18.7192 38.4589C17.8222 37.9515 16.9941 37.2072 16.235 36.2262C15.4759 35.2113 15.0964 34.0442 15.0964 32.7249C15.0964 31.4055 15.5794 29.934 16.5455 28.3102C17.5116 26.6525 18.5812 25.2317 19.7543 24.0477C20.9274 22.8637 21.997 21.7811 22.9631 20.8001C23.9292 19.819 24.4123 19.1932 24.4123 18.9226C24.4123 18.6181 24.2225 18.2798 23.8429 17.9077ZM21.0936 39.3645C21.0936 39.3645 21.087 39.3661 21.0719 39.3675C21.0858 39.3649 21.0936 39.3645 21.0936 39.3645Z"
      fill="#F9FBFF"
    />
  </svg>
  <svg
    width={24}
    height={41}
    viewBox="0 0 24 41"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="absolute left-[43px] top-[154px]"
    preserveAspectRatio="none"
  >
    <path
      d="M5 15.5L0 36V39.5L2 41L5.5 39L9.5 35L11 37L17 41H20.5L21.5 39.5L20.5 37.5L17 35.5L14.5 31.5L16.5 25.5L21.5 20.5L23.5 17L22.5 15.5L20.5 13.5L18.5 15.5L8.5 25.5L11.5 12V3L10.5 1L9.5 0H7.5L6.5 1L5 15.5Z"
      fill="#F9FBFF"
    />
  </svg>
  <svg
    width={80}
    height={80}
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="absolute left-[15px] top-[135px]"
    preserveAspectRatio="xMidYMid meet"
  >
    <circle cx={40} cy={40} r={40} fill="url(#paint0_linear_623_5360)" />
    <defs>
      <lineargradient
        id="paint0_linear_623_5360"
        x1={40}
        y1="65.5"
        x2={40}
        y2="3.5"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#473D85" />
        <stop offset={1}stopOpacity={0} />
      </lineargradient>
    </defs>
  </svg>
  <p className="absolute left-[31px] top-[182px] text-xs font-medium text-left text-[#f9fbff]">
    Modifier
  </p>
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-6 h-6 absolute left-[43px] top-[157px]"
    preserveAspectRatio="xMidYMid meet"
  >
    <path
      d="M12 16C13.6569 16 15 14.6569 15 13C15 11.3431 13.6569 10 12 10C10.3431 10 9 11.3431 9 13C9 14.6569 10.3431 16 12 16Z"
      stroke="white"
     strokeWidth={2}
     strokeLinecap="round"
     strokeLinejoin="round"
    />
    <path
      d="M20 7H4C3.44772 7 3 7.44772 3 8V18C3 18.5523 3.44772 19 4 19H20C20.5523 19 21 18.5523 21 18V8C21 7.44772 20.5523 7 20 7Z"
      stroke="white"
     strokeWidth={2}
     strokeLinecap="round"
     strokeLinejoin="round"
    />
    <path
      d="M14.2793 4H9.72082C9.29039 4 8.90825 4.27543 8.77214 4.68377L8.4388 5.68377C8.22296 6.3313 8.70493 7 9.38749 7H14.6126C15.2952 7 15.7772 6.3313 15.5613 5.68377L15.228 4.68377C15.0919 4.27543 14.7097 4 14.2793 4Z"
      stroke="white"
     strokeWidth={2}
     strokeLinecap="round"
     strokeLinejoin="round"
    />
  </svg>
  <div
    className="flex justify-between items-center w-[167px] absolute left-[189.5px] top-[84.5px] px-[47px] py-2 rounded-xl border-2 border-[#eff4ff]"
    style={{ background: "linear-gradient(to bottom, #81a3f9 -0.06%, #3462d8 108.09%)" }}
  >
    <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-white">Enregistrer</p>
  </div>
  <div className="w-[375px] h-[70px] absolute left-[-1px] top-[741px] overflow-hidden bg-[#fcfcfd]">
    <svg
      width={375}
      height={1}
      viewBox="0 0 375 1"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute left-[-1px] top-0"
      preserveAspectRatio="xMidYMid meet"
    >
      <line y1="0.5" x2={375} y2="0.5" stroke="#EAEFFA" />
    </svg>
    <div className="w-[62px] h-[49px]">
      <svg
        width={32}
        height={32}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8 absolute left-[101.5px] top-[10.5px]"
        preserveAspectRatio="xMidYMid meet"
      >
        <path
          d="M13.3333 22.6667C18.488 22.6667 22.6667 18.488 22.6667 13.3333C22.6667 8.17868 18.488 4 13.3333 4C8.17868 4 4 8.17868 4 13.3333C4 18.488 8.17868 22.6667 13.3333 22.6667Z"
          stroke="#272832"
         strokeWidth={2}
         strokeLinecap="round"
         strokeLinejoin="round"
        />
        <path
          d="M20 20L28 28"
          stroke="#272832"
         strokeWidth={2}
         strokeLinecap="round"
         strokeLinejoin="round"
        />
      </svg>
      <p className="absolute left-[87px] top-[47px] text-xs font-bold text-left text-[#272832]">
        Recherche
      </p>
    </div>
    <div className="w-[43px] h-[49px]">
      <svg
        width={32}
        height={32}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8 absolute left-[24.5px] top-[10.5px]"
        preserveAspectRatio="xMidYMid meet"
      >
        <path
          d="M26.2114 12.9349L16.878 4.76825C16.3753 4.32839 15.6247 4.32839 15.122 4.76825L5.7887 12.9349C5.49935 13.1881 5.33337 13.5539 5.33337 13.9384V25.3333C5.33337 26.0697 5.93033 26.6667 6.66671 26.6667H12C12.7364 26.6667 13.3334 26.0697 13.3334 25.3333V20C13.3334 19.2636 13.9303 18.6667 14.6667 18.6667H17.3334C18.0698 18.6667 18.6667 19.2636 18.6667 20V25.3333C18.6667 26.0697 19.2637 26.6667 20 26.6667H25.3334C26.0698 26.6667 26.6667 26.0697 26.6667 25.3333V13.9384C26.6667 13.5539 26.5007 13.1881 26.2114 12.9349Z"
          stroke="#272832"
         strokeWidth={2}
         strokeLinecap="round"
         strokeLinejoin="round"
        />
      </svg>
      <p className="absolute left-5 top-[47px] text-xs font-bold text-left text-[#272832]">
        Acceuil
      </p>
    </div>
    <div className="w-[33px] h-[49px]">
      <p className="absolute left-[321px] top-[47px] text-xs font-bold text-left text-[#272832]">
        Menu
      </p>
      <svg
        width={32}
        height={32}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8 absolute left-[321.5px] top-[10.5px]"
        preserveAspectRatio="xMidYMid meet"
      >
        <path
          d="M6.66675 22.6667L25.3334 22.6667"
          stroke="#272832"
         strokeWidth={2}
         strokeLinecap="round"
         strokeLinejoin="round"
        />
        <path
          d="M6.66675 16H25.3334"
          stroke="#272832"
         strokeWidth={2}
         strokeLinecap="round"
         strokeLinejoin="round"
        />
        <path
          d="M6.66675 9.33331L17.3334 9.33331"
          stroke="#272832"
         strokeWidth={2}
         strokeLinecap="round"
         strokeLinejoin="round"
        />
      </svg>
    </div>
    <div className="w-[41px] h-[49px]">
      <p className="absolute left-[173px] top-[47px] text-xs font-bold text-left text-[#272832]">
        Favoris
      </p>
      <svg
        width={32}
        height={32}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8 absolute left-[176.5px] top-[10.5px]"
        preserveAspectRatio="xMidYMid meet"
      >
        <path
          d="M16 26.6666L15.5134 27.5403C15.8159 27.7088 16.1841 27.7088 16.4866 27.5403L16 26.6666ZM16 9.54959L15.0797 9.9407C15.2365 10.3099 15.5989 10.5496 16 10.5496C16.4011 10.5496 16.7635 10.3099 16.9203 9.9407L16 9.54959ZM3 11.9631C3 16.4389 6.31031 20.3739 9.33471 23.069C10.8787 24.4449 12.4181 25.5591 13.5693 26.3285C14.1459 26.7138 14.6276 27.0143 14.9669 27.2195C15.1367 27.3222 15.271 27.4011 15.364 27.455C15.4105 27.4819 15.4467 27.5026 15.4719 27.5169C15.4844 27.524 15.4942 27.5295 15.5012 27.5334C15.5047 27.5354 15.5074 27.5369 15.5095 27.5381C15.5105 27.5387 15.5113 27.5391 15.512 27.5395C15.5123 27.5397 15.5127 27.5399 15.5129 27.54C15.5132 27.5401 15.5134 27.5403 16 26.6666C16.4866 25.793 16.4867 25.7931 16.4869 25.7932C16.4869 25.7932 16.4869 25.7932 16.4869 25.7932C16.4868 25.7931 16.4866 25.793 16.4861 25.7928C16.4853 25.7923 16.4837 25.7914 16.4814 25.7901C16.4768 25.7875 16.4694 25.7834 16.4593 25.7776C16.439 25.7661 16.4078 25.7483 16.3665 25.7243C16.2837 25.6764 16.1602 25.6039 16.0018 25.5081C15.6849 25.3165 15.2291 25.0322 14.6807 24.6656C13.5819 23.9313 12.1213 22.8733 10.6653 21.5758C7.68969 18.9242 5 15.5074 5 11.9631H3ZM16.9203 9.15847C15.4058 5.59455 11.9635 3.95718 8.85702 4.40594C7.2993 4.63097 5.82046 5.38243 4.73395 6.67728C3.64471 7.97539 3 9.75864 3 11.9631H5C5 10.1575 5.52195 8.84963 6.26605 7.96285C7.01287 7.07281 8.03403 6.54559 9.14298 6.38539C11.3699 6.06369 13.9275 7.22964 15.0797 9.9407L16.9203 9.15847ZM27 11.9631C27 15.5074 24.3103 18.9242 21.3347 21.5758C19.8787 22.8733 18.4181 23.9313 17.3193 24.6656C16.7709 25.0322 16.3151 25.3165 15.9982 25.5081C15.8398 25.6039 15.7163 25.6764 15.6335 25.7243C15.5922 25.7483 15.561 25.7661 15.5407 25.7776C15.5306 25.7834 15.5232 25.7875 15.5186 25.7901C15.5163 25.7914 15.5147 25.7923 15.5139 25.7928C15.5134 25.793 15.5132 25.7931 15.5131 25.7932C15.5131 25.7932 15.5131 25.7932 15.5131 25.7932C15.5133 25.7931 15.5134 25.793 16 26.6666C16.4866 27.5403 16.4868 27.5401 16.4871 27.54C16.4873 27.5399 16.4877 27.5397 16.488 27.5395C16.4887 27.5391 16.4895 27.5387 16.4905 27.5381C16.4926 27.5369 16.4953 27.5354 16.4988 27.5334C16.5058 27.5295 16.5156 27.524 16.5281 27.5169C16.5533 27.5026 16.5895 27.4819 16.636 27.455C16.729 27.4011 16.8633 27.3222 17.0331 27.2195C17.3724 27.0143 17.8541 26.7138 18.4307 26.3285C19.5819 25.5591 21.1213 24.4449 22.6653 23.069C25.6897 20.3739 29 16.4389 29 11.9631H27ZM16.9203 9.9407C18.0725 7.22964 20.6301 6.06369 22.857 6.38539C23.966 6.54559 24.9871 7.07281 25.734 7.96285C26.478 8.84963 27 10.1575 27 11.9631H29C29 9.75864 28.3553 7.97539 27.266 6.67728C26.1795 5.38243 24.7007 4.63097 23.143 4.40594C20.0365 3.95718 16.5942 5.59455 15.0797 9.15847L16.9203 9.9407Z"
          fill="#272832"
        />
      </svg>
    </div>
    <div className="w-[59px] h-[49px]">
      <div className="w-[59px] h-[49px]">
        <svg
          width={32}
          height={32}
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8 absolute left-[251.5px] top-[10.5px]"
          preserveAspectRatio="xMidYMid meet"
        >
          <path
            d="M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z"
            stroke="#3679FF"
           strokeWidth={2}
           strokeLinecap="round"
           strokeLinejoin="round"
          />
          <path
            d="M22.9552 25.7764C21.2463 23.8678 18.7632 22.6667 15.9997 22.6667C13.2362 22.6667 10.7531 23.8678 9.04419 25.7764"
            stroke="#3679FF"
           strokeWidth={2}
           strokeLinecap="round"
           strokeLinejoin="round"
          />
          <path
            d="M16 18.6667C18.2091 18.6667 20 16.8758 20 14.6667C20 12.4575 18.2091 10.6667 16 10.6667C13.7909 10.6667 12 12.4575 12 14.6667C12 16.8758 13.7909 18.6667 16 18.6667Z"
            stroke="#3679FF"
           strokeWidth={2}
           strokeLinecap="round"
           strokeLinejoin="round"
          />
        </svg>
        <p className="absolute left-[238px] top-[47px] text-xs font-bold text-left text-[#3679ff]">
          Mon profil
        </p>
      </div>
    </div>
  </div>
</div>




111111111111111111

<div className="w-[375px] h-[812px] relative overflow-hidden bg-[#f9fbff] mt-8 mb-8">
  <div className="w-[287px] h-[30px]">
    <p className="w-[287px] h-[30px] absolute left-4 top-8 text-[28px] font-bold text-left">
      Mon profil
    </p>
  </div>
  <div className="w-[375px] h-[70px] absolute left-[-1px] top-[740px] overflow-hidden bg-[#fcfcfd]">
    <svg
      width={375}
      height={1}
      viewBox="0 0 375 1"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute left-[-1px] top-0"
      preserveAspectRatio="xMidYMid meet"
    >
      <line y1="0.5" x2={375} y2="0.5" stroke="#EAEFFA" />
    </svg>
    <div className="w-[62px] h-[49px]">
      <svg
        width={32}
        height={32}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8 absolute left-[101.5px] top-[10.5px]"
        preserveAspectRatio="xMidYMid meet"
      >
        <path
          d="M13.3333 22.6667C18.488 22.6667 22.6667 18.488 22.6667 13.3333C22.6667 8.17868 18.488 4 13.3333 4C8.17868 4 4 8.17868 4 13.3333C4 18.488 8.17868 22.6667 13.3333 22.6667Z"
          stroke="#272832"
         strokeWidth={2}
         strokeLinecap="round"
         strokeLinejoin="round"
        />
        <path
          d="M20 20L28 28"
          stroke="#272832"
         strokeWidth={2}
         strokeLinecap="round"
         strokeLinejoin="round"
        />
      </svg>
      <p className="absolute left-[87px] top-[47px] text-xs font-bold text-left text-[#272832]">
        Recherche
      </p>
    </div>
    <div className="w-[43px] h-[49px]">
      <svg
        width={32}
        height={32}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8 absolute left-[24.5px] top-[10.5px]"
        preserveAspectRatio="xMidYMid meet"
      >
        <path
          d="M26.2114 12.9349L16.878 4.76825C16.3753 4.32839 15.6247 4.32839 15.122 4.76825L5.7887 12.9349C5.49935 13.1881 5.33337 13.5539 5.33337 13.9384V25.3333C5.33337 26.0697 5.93033 26.6667 6.66671 26.6667H12C12.7364 26.6667 13.3334 26.0697 13.3334 25.3333V20C13.3334 19.2636 13.9303 18.6667 14.6667 18.6667H17.3334C18.0698 18.6667 18.6667 19.2636 18.6667 20V25.3333C18.6667 26.0697 19.2637 26.6667 20 26.6667H25.3334C26.0698 26.6667 26.6667 26.0697 26.6667 25.3333V13.9384C26.6667 13.5539 26.5007 13.1881 26.2114 12.9349Z"
          stroke="#272832"
         strokeWidth={2}
         strokeLinecap="round"
         strokeLinejoin="round"
        />
      </svg>
      <p className="absolute left-5 top-[47px] text-xs font-bold text-left text-[#272832]">
        Acceuil
      </p>
    </div>
    <div className="w-[33px] h-[49px]">
      <p className="absolute left-[321px] top-[47px] text-xs font-bold text-left text-[#272832]">
        Menu
      </p>
      <svg
        width={32}
        height={32}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8 absolute left-[321.5px] top-[10.5px]"
        preserveAspectRatio="xMidYMid meet"
      >
        <path
          d="M6.66663 22.6667L25.3333 22.6667"
          stroke="#272832"
         strokeWidth={2}
         strokeLinecap="round"
         strokeLinejoin="round"
        />
        <path
          d="M6.66663 16H25.3333"
          stroke="#272832"
         strokeWidth={2}
         strokeLinecap="round"
         strokeLinejoin="round"
        />
        <path
          d="M6.66663 9.33331L17.3333 9.33331"
          stroke="#272832"
         strokeWidth={2}
         strokeLinecap="round"
         strokeLinejoin="round"
        />
      </svg>
    </div>
    <div className="w-[41px] h-[49px]">
      <p className="absolute left-[173px] top-[47px] text-xs font-bold text-left text-[#272832]">
        Favoris
      </p>
      <svg
        width={32}
        height={32}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8 absolute left-[176.5px] top-[10.5px]"
        preserveAspectRatio="xMidYMid meet"
      >
        <path
          d="M16 26.6666L15.5134 27.5403C15.8159 27.7088 16.1841 27.7088 16.4866 27.5403L16 26.6666ZM16 9.54959L15.0797 9.9407C15.2365 10.3099 15.5989 10.5496 16 10.5496C16.4011 10.5496 16.7635 10.3099 16.9203 9.9407L16 9.54959ZM3 11.9631C3 16.4389 6.31031 20.3739 9.33471 23.069C10.8787 24.4449 12.4181 25.5591 13.5693 26.3285C14.1459 26.7138 14.6276 27.0143 14.9669 27.2195C15.1367 27.3222 15.271 27.4011 15.364 27.455C15.4105 27.4819 15.4467 27.5026 15.4719 27.5169C15.4844 27.524 15.4942 27.5295 15.5012 27.5334C15.5047 27.5354 15.5074 27.5369 15.5095 27.5381C15.5105 27.5387 15.5113 27.5391 15.512 27.5395C15.5123 27.5397 15.5127 27.5399 15.5129 27.54C15.5132 27.5401 15.5134 27.5403 16 26.6666C16.4866 25.793 16.4867 25.7931 16.4869 25.7932C16.4869 25.7932 16.4869 25.7932 16.4869 25.7932C16.4868 25.7931 16.4866 25.793 16.4861 25.7928C16.4853 25.7923 16.4837 25.7914 16.4814 25.7901C16.4768 25.7875 16.4694 25.7834 16.4593 25.7776C16.439 25.7661 16.4078 25.7483 16.3665 25.7243C16.2837 25.6764 16.1602 25.6039 16.0018 25.5081C15.6849 25.3165 15.2291 25.0322 14.6807 24.6656C13.5819 23.9313 12.1213 22.8733 10.6653 21.5758C7.68969 18.9242 5 15.5074 5 11.9631H3ZM16.9203 9.15847C15.4058 5.59455 11.9635 3.95718 8.85702 4.40594C7.2993 4.63097 5.82046 5.38243 4.73395 6.67728C3.64471 7.97539 3 9.75864 3 11.9631H5C5 10.1575 5.52195 8.84963 6.26605 7.96285C7.01287 7.07281 8.03403 6.54559 9.14298 6.38539C11.3699 6.06369 13.9275 7.22964 15.0797 9.9407L16.9203 9.15847ZM27 11.9631C27 15.5074 24.3103 18.9242 21.3347 21.5758C19.8787 22.8733 18.4181 23.9313 17.3193 24.6656C16.7709 25.0322 16.3151 25.3165 15.9982 25.5081C15.8398 25.6039 15.7163 25.6764 15.6335 25.7243C15.5922 25.7483 15.561 25.7661 15.5407 25.7776C15.5306 25.7834 15.5232 25.7875 15.5186 25.7901C15.5163 25.7914 15.5147 25.7923 15.5139 25.7928C15.5134 25.793 15.5132 25.7931 15.5131 25.7932C15.5131 25.7932 15.5131 25.7932 15.5131 25.7932C15.5133 25.7931 15.5134 25.793 16 26.6666C16.4866 27.5403 16.4868 27.5401 16.4871 27.54C16.4873 27.5399 16.4877 27.5397 16.488 27.5395C16.4887 27.5391 16.4895 27.5387 16.4905 27.5381C16.4926 27.5369 16.4953 27.5354 16.4988 27.5334C16.5058 27.5295 16.5156 27.524 16.5281 27.5169C16.5533 27.5026 16.5895 27.4819 16.636 27.455C16.729 27.4011 16.8633 27.3222 17.0331 27.2195C17.3724 27.0143 17.8541 26.7138 18.4307 26.3285C19.5819 25.5591 21.1213 24.4449 22.6653 23.069C25.6897 20.3739 29 16.4389 29 11.9631H27ZM16.9203 9.9407C18.0725 7.22964 20.6301 6.06369 22.857 6.38539C23.966 6.54559 24.9871 7.07281 25.734 7.96285C26.478 8.84963 27 10.1575 27 11.9631H29C29 9.75864 28.3553 7.97539 27.266 6.67728C26.1795 5.38243 24.7007 4.63097 23.143 4.40594C20.0365 3.95718 16.5942 5.59455 15.0797 9.15847L16.9203 9.9407Z"
          fill="#272832"
        />
      </svg>
    </div>
    <div className="w-[59px] h-[49px]">
      <div className="w-[59px] h-[49px]">
        <svg
          width={32}
          height={32}
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8 absolute left-[251.5px] top-[10.5px]"
          preserveAspectRatio="xMidYMid meet"
        >
          <path
            d="M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z"
            stroke="#3679FF"
           strokeWidth={2}
           strokeLinecap="round"
           strokeLinejoin="round"
          />
          <path
            d="M22.9553 25.7764C21.2464 23.8678 18.7634 22.6667 15.9998 22.6667C13.2363 22.6667 10.7533 23.8678 9.04431 25.7764"
            stroke="#3679FF"
           strokeWidth={2}
           strokeLinecap="round"
           strokeLinejoin="round"
          />
          <path
            d="M16 18.6667C18.2091 18.6667 20 16.8758 20 14.6667C20 12.4575 18.2091 10.6667 16 10.6667C13.7909 10.6667 12 12.4575 12 14.6667C12 16.8758 13.7909 18.6667 16 18.6667Z"
            stroke="#3679FF"
           strokeWidth={2}
           strokeLinecap="round"
           strokeLinejoin="round"
          />
        </svg>
        <p className="absolute left-[238px] top-[47px] text-xs font-bold text-left text-[#3679ff]">
          Mon profil
        </p>
      </div>
    </div>
  </div>
  <p className="w-[327px] h-[27px] absolute left-4 top-[90px] text-lg font-bold text-left text-[#272832]">
    Mes informations
  </p>
  <div className="w-[343px] h-[50px] absolute left-[15px] top-[232px] rounded-[10px] bg-white border border-[#eaeffa]" />
  <div className="w-[343px] h-[50px] absolute left-[15px] top-[290px] rounded-[10px] bg-white border border-[#eaeffa]" />
  <div className="w-[343px] h-[50px] absolute left-[15px] top-[348px] rounded-[10px] bg-white border border-[#eaeffa]" />
  <div className="w-[343px] h-[50px] absolute left-[15px] top-[406px] rounded-[10px] bg-white border border-[#eaeffa]" />
  <p className="absolute left-8 top-[249px] text-sm font-medium text-left text-[#43434a]">
    Jean-Louis Vitre
  </p>
  <p className="absolute left-8 top-[307px] text-sm font-medium text-left text-[#43434a]">
    jeanlouisthebest@gmail.com
  </p>
  <p className="absolute left-8 top-[365px] text-sm font-medium text-left text-[#43434a]">
    0798986754
  </p>
  <p className="absolute left-8 top-[423px] text-sm font-medium text-left text-[#43434a]">
    5 rue des chaussettes, 75011 Paris
  </p>
  <div className="w-[343px] h-[50px] absolute left-[15px] top-[464px] rounded-[10px] bg-white border border-[#eaeffa]" />
  <p className="absolute left-8 top-[481px] text-sm font-medium text-left text-[#43434a]">CDD</p>
  <div className="flex justify-between items-center w-[167px] absolute left-[190.5px] top-[84.5px] px-[47px] py-2 rounded-xl bg-white border-2 border-[#eff4ff]">
    <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-[#43434a]">Modifier</p>
  </div>
  <svg
    width={80}
    height={80}
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-20 h-20"
    preserveAspectRatio="none"
  >
    <circle cx={40} cy={40} r={40} fill="url(#paint0_linear_623_5403)" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M44.7866 46.5788L44.7808 46.5886C43.9529 47.9801 43.6841 49.006 43.6841 49.7249C43.6841 50.5249 43.9005 51.1563 44.3103 51.7104C44.8937 52.4605 45.4634 52.9475 45.9967 53.2523C46.9436 53.7686 47.8156 54.2739 48.6101 54.7685C49.0623 55.0328 49.5404 55.3545 49.939 55.7453C50.2851 56.0847 50.9816 56.8728 50.9816 58.0468C50.9816 59.1798 50.424 60.2378 49.3745 60.8626C48.5336 61.3632 47.6053 61.4467 46.9447 61.4467C44.4294 61.4467 42.0234 60.11 39.8182 58.241L39.8099 58.234L39.8017 58.2269C38.843 57.4004 38.0333 56.498 37.4056 55.5221C36.1069 57.1209 35.1308 58.2776 34.4896 58.9729C33.9672 59.5571 33.4432 60.0832 32.9313 60.4848C32.672 60.6882 32.3605 60.9037 32.0062 61.0773C31.6707 61.2418 31.1404 61.4467 30.4867 61.4467C28.7511 61.4467 27.6873 60.2795 27.1537 59.4423L27.1045 59.3651L27.0611 59.2847C26.5927 58.4173 26.2946 57.454 26.2946 56.423C26.2946 56.0071 26.3813 55.5427 26.4477 55.2148C26.5279 54.8192 26.6421 54.3334 26.7847 53.7697C27.0707 52.6395 27.4933 51.1085 28.0478 49.1886C29.1291 45.4114 30.2185 40.8597 31.3139 35.5235C32.3927 30.268 32.9192 25.5851 32.9192 21.4606C32.9192 21.1008 32.9407 20.704 33.0166 20.3135C33.0796 19.9891 33.2221 19.435 33.6168 18.9077C34.4898 17.7025 35.8592 17.5533 36.542 17.5533C37.5975 17.5533 38.3998 18.0393 38.9116 18.4993C39.3901 18.9293 39.7483 19.4488 40.0222 19.9319C40.6917 21.0155 41.0446 22.2161 41.0446 23.4903C41.0446 28.3343 40.1905 34.2254 38.5229 41.1342C40.5674 38.5285 42.3679 36.4112 43.9217 34.7926L43.9279 34.7861L43.9342 34.7796C44.6871 34.0063 45.3683 33.3604 45.957 32.89C46.2486 32.6571 46.576 32.4198 46.9219 32.2285C47.1953 32.0772 47.8123 31.7616 48.6008 31.7616C49.9257 31.7616 50.975 32.3818 51.7106 33.151C52.2451 33.6838 53 34.6271 53 35.9226C53 36.6254 52.7232 37.1667 52.6097 37.3773C52.459 37.6571 52.2781 37.9126 52.1134 38.126C51.7802 38.5577 51.3356 39.0436 50.8247 39.5624C49.8565 40.5456 48.785 41.6301 47.6105 42.8156C46.6103 43.825 45.6669 45.0682 44.7923 46.569L44.7866 46.5788ZM49.8429 34.9077C49.4634 34.5017 49.0494 34.2988 48.6008 34.2988C48.1868 34.2988 47.2552 35.043 45.8061 36.5315C43.4468 38.9892 40.4399 42.7084 36.7854 47.689C35.8709 48.9353 34.9157 50.2607 33.9201 51.6651C33.3085 52.5278 32.6815 53.4203 32.0393 54.3425C32.107 54.135 32.1741 53.9281 32.2407 53.7219C33.0438 51.2357 33.769 48.8529 34.4165 46.5734C37.1101 37.09 38.4569 29.3956 38.4569 23.4903C38.4569 22.8938 38.3358 22.3246 38.0937 21.7828C38.0622 21.7124 38.0287 21.6425 37.9931 21.573C37.9739 21.5354 37.954 21.4979 37.9336 21.4606C37.8869 21.3753 37.8371 21.2907 37.7841 21.2069C37.3701 20.4626 36.956 20.0905 36.542 20.0905C36.128 20.0905 35.8519 20.192 35.7139 20.395C35.5759 20.5641 35.5069 20.9193 35.5069 21.4606C35.5069 21.741 35.5046 22.0236 35.5 22.3084C35.4995 22.3379 35.499 22.3675 35.4984 22.3971C35.4252 26.4873 34.8759 31.0296 33.8507 36.024C32.7466 41.4029 31.6425 46.0206 30.5384 49.8771C29.4343 53.6998 28.8823 55.8818 28.8823 56.423C28.8823 56.9643 29.0376 57.5225 29.3481 58.0976C29.6931 58.6389 30.0726 58.9095 30.4867 58.9095C30.9007 58.9095 31.5908 58.3682 32.5569 57.2857C32.9052 56.9088 33.3727 56.37 33.9594 55.6692C33.9668 55.6604 33.9742 55.6516 33.9816 55.6427C34.1265 55.4696 34.2785 55.2867 34.4377 55.0941C34.4776 55.0458 34.518 54.9968 34.5588 54.9473C34.9889 54.4255 35.469 53.8356 35.9994 53.1775C36.0737 53.0853 36.149 52.9917 36.2253 52.8968C36.786 52.1993 37.3999 51.4296 38.067 50.5875C38.2117 50.4049 38.359 50.2188 38.5087 50.0293V50.5875C38.5087 51.5516 38.7201 52.4763 39.1428 53.3617C39.6399 54.4027 40.4291 55.3893 41.5104 56.3216C42.7091 57.3375 43.8301 58.0543 44.8733 58.472C45.2412 58.6193 45.5995 58.7295 45.9481 58.8024C45.9753 58.8081 46.0025 58.8135 46.0296 58.8188C46.0559 58.8239 46.0822 58.8287 46.1084 58.8334C46.3937 58.8841 46.6725 58.9095 46.9447 58.9095C47.9108 58.9095 48.3938 58.6219 48.3938 58.0468C48.3938 57.7424 48.0143 57.3703 47.2552 56.9305C47.1533 56.8669 47.0498 56.803 46.9447 56.7387C46.8448 56.6777 46.7434 56.6163 46.6407 56.5547C46.436 56.4319 46.2257 56.308 46.0097 56.1829C45.5997 55.9455 45.1696 55.7042 44.7192 55.4589C43.8222 54.9515 42.9941 54.2072 42.235 53.2262C41.4759 52.2113 41.0964 51.0442 41.0964 49.7249C41.0964 48.4055 41.5794 46.934 42.5455 45.3102C43.5116 43.6525 44.5812 42.2317 45.7543 41.0477C46.9274 39.8637 47.997 38.7811 48.9631 37.8001C49.9292 36.819 50.4123 36.1932 50.4123 35.9226C50.4123 35.6181 50.2225 35.2798 49.8429 34.9077ZM47.0936 56.3645C47.0936 56.3645 47.087 56.3661 47.0719 56.3675C47.0858 56.3649 47.0936 56.3645 47.0936 56.3645Z"
      fill="#F9FBFF"
    />
    <path
      d="M33 34.5L28 55V58.5L30 60L33.5 58L37.5 54L39 56L45 60H48.5L49.5 58.5L48.5 56.5L45 54.5L42.5 50.5L44.5 44.5L49.5 39.5L51.5 36L50.5 34.5L48.5 32.5L46.5 34.5L36.5 44.5L39.5 31V22L38.5 20L37.5 19H35.5L34.5 20L33 34.5Z"
      fill="#F9FBFF"
    />
    <defs>
      <lineargradient
        id="paint0_linear_623_5403"
        x1="76.1765"
        y1="-3.67647"
        x2="4.85673e-7"
        y2="89.7059"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#C399DB" />
        <stop offset={1} stopColor="#5882F7" />
      </lineargradient>
    </defs>
  </svg>
</div>



121212121212121212121212121221212121212212121212121212





<div className="w-[375px] h-[812px] relative overflow-hidden bg-[#f9fbff] mb-8 mt-8">
  <img
    src="static/img/icons/House1.svg"
    className="w-[382px] h-[266px] absolute left-[-6.92px] top-[-5.92px] object-cover"
  />
  <p className="absolute left-4 top-[277px] text-[28px] font-bold text-left">Résidence Bienvivre</p>
  <p className="absolute left-4 top-[313px] text-sm font-medium text-left text-[#6976a0]">
    Buzenval - 92500 Rueil-Malmaison
  </p>
  <p className="absolute left-8 top-[355px] text-lg font-medium text-left text-[#0e215c]">
    du 3 à 4 pièces
  </p>
  <p className="absolute left-8 top-[382px] text-lg font-medium text-left text-[#0e215c]">
    de 61 m² à 75 m²
  </p>
  <p className="w-[200px] h-[23px] absolute left-8 top-[413px] text-lg font-medium text-left text-[#3679ff]">
    à partir de 271 000€
  </p>
  <p className="w-[200px] h-[23px] absolute left-8 top-[440px] text-lg font-medium text-left text-[#3679ff]">
    soit 700€ / mois
  </p>
  <svg
    width={3}
    height={102}
    viewBox="0 0 3 102"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="absolute left-3.5 top-[357px]"
    preserveAspectRatio="xMidYMid meet"
  >
    <line
      x1="1.5"
      y1="6.97778e-8"
      x2="1.5"
      y2={102}
      stroke="url(#paint0_linear_499_5875)"
     strokeWidth={3}
    />
    <defs>
      <lineargradient
        id="paint0_linear_499_5875"
        x1="0.04963"
        y1={51}
        x2="-1.08088"
        y2={51}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.0434107" stopColor="#81A3F9" />
        <stop offset={1} stopColor="#3462D8" />
      </lineargradient>
    </defs>
  </svg>
  <p className="w-[191px] h-2.5 absolute left-[92px] top-[545px] text-sm font-medium text-left text-[#6976a0]">
    ou appeler le 06 65 07 11 66
  </p>
  <div
    className="flex justify-center items-center w-[343px] absolute left-[15px] top-[486px] gap-2.5 px-[120px] py-4 rounded-xl"
    style={{ background: "linear-gradient(to bottom, #81a3f9 -0.06%, #3462d8 108.09%)" }}
  >
    <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-white">
      Être rappelé selon mes dispos
    </p>
  </div>
  <div className="flex justify-end items-center w-[343px] absolute left-[15px] top-[578px] gap-3 p-4 rounded-xl bg-white border border-[#3679ff]">
    <p className="flex-grow w-[275px] text-sm font-bold text-left text-[#4f80ff]">
      3 logement disponible.
    </p>
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
      preserveAspectRatio="xMidYMid meet"
    >
      <path
        d="M20 12C20 16.4183 16.4183 20 12 20V22C17.5228 22 22 17.5228 22 12H20ZM12 20C7.58172 20 4 16.4183 4 12H2C2 17.5228 6.47715 22 12 22V20ZM4 12C4 7.58172 7.58172 4 12 4V2C6.47715 2 2 6.47715 2 12H4ZM12 4C16.4183 4 20 7.58172 20 12H22C22 6.47715 17.5228 2 12 2V4Z"
        fill="#3679FF"
      />
      <path
        d="M12.2929 14.2929C11.9024 14.6834 11.9024 15.3166 12.2929 15.7071C12.6834 16.0976 13.3166 16.0976 13.7071 15.7071L12.2929 14.2929ZM16 12L16.7071 12.7071C16.8946 12.5196 17 12.2652 17 12C17 11.7348 16.8946 11.4804 16.7071 11.2929L16 12ZM13.7071 8.29289C13.3166 7.90237 12.6834 7.90237 12.2929 8.29289C11.9024 8.68342 11.9024 9.31658 12.2929 9.70711L13.7071 8.29289ZM8 11C7.44772 11 7 11.4477 7 12C7 12.5523 7.44772 13 8 13L8 11ZM13.7071 15.7071L16.7071 12.7071L15.2929 11.2929L12.2929 14.2929L13.7071 15.7071ZM16.7071 11.2929L13.7071 8.29289L12.2929 9.70711L15.2929 12.7071L16.7071 11.2929ZM8 13L16 13V11L8 11L8 13Z"
        fill="#3679FF"
      />
    </svg>
  </div>
  <svg
    width={56}
    height={56}
    viewBox="0 0 56 56"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-9 h-9 absolute left-[322px] top-[15px]"
    preserveAspectRatio="none"
  >
    <g filter="url(#filter0_dd_499_5879)">
      <circle cx={28} cy={20} r={18} fill="white" />
    </g>
    <path
      d="M28 28L27.5134 28.8736C27.8159 29.0421 28.1841 29.0421 28.4866 28.8736L28 28ZM28 15.1622L27.0797 15.5533C27.2365 15.9225 27.5989 16.1622 28 16.1622C28.4011 16.1622 28.7635 15.9225 28.9203 15.5533L28 15.1622ZM18 16.9723C18 20.4457 20.5603 23.4617 22.8347 25.4884C24.0037 26.5302 25.1681 27.3728 26.0381 27.9542C26.474 28.2456 26.8385 28.473 27.0958 28.6286C27.2246 28.7064 27.3267 28.7664 27.3977 28.8076C27.4332 28.8281 27.461 28.844 27.4805 28.8551C27.4902 28.8606 27.4979 28.8649 27.5034 28.868C27.5061 28.8696 27.5084 28.8708 27.51 28.8717C27.5109 28.8722 27.5116 28.8726 27.5121 28.8729C27.5124 28.8731 27.5127 28.8733 27.5129 28.8733C27.5132 28.8735 27.5134 28.8736 28 28C28.4866 27.1264 28.4868 27.1265 28.4869 27.1265C28.4869 27.1265 28.487 27.1266 28.487 27.1266C28.4871 27.1266 28.4869 27.1266 28.4867 27.1264C28.4862 27.1261 28.4851 27.1256 28.4836 27.1247C28.4804 27.1229 28.4752 27.12 28.4679 27.1158C28.4533 27.1075 28.4305 27.0945 28.4001 27.0769C28.3393 27.0417 28.2481 26.9881 28.1307 26.9172C27.8959 26.7751 27.5572 26.5639 27.1494 26.2914C26.3319 25.745 25.2463 24.9585 24.1653 23.9953C21.9397 22.012 20 19.5141 20 16.9723H18ZM28.9203 14.7711C27.7391 11.9915 25.0468 10.7046 22.607 11.057C21.3826 11.2339 20.2163 11.8255 19.359 12.8473C18.4989 13.8723 18 15.2691 18 16.9723H20C20 15.668 20.3761 14.7465 20.891 14.1329C21.4087 13.5159 22.1174 13.1485 22.893 13.0365C24.4532 12.8111 26.2609 13.6266 27.0797 15.5533L28.9203 14.7711ZM36 16.9723C36 19.5141 34.0603 22.012 31.8347 23.9953C30.7537 24.9585 29.6681 25.745 28.8506 26.2914C28.4428 26.5639 28.1041 26.7751 27.8693 26.9172C27.7519 26.9881 27.6607 27.0417 27.5999 27.0769C27.5695 27.0945 27.5467 27.1075 27.5321 27.1158C27.5248 27.12 27.5196 27.1229 27.5164 27.1247C27.5149 27.1256 27.5138 27.1261 27.5133 27.1264C27.5131 27.1266 27.5129 27.1266 27.513 27.1266C27.513 27.1266 27.5131 27.1265 27.5131 27.1265C27.5132 27.1265 27.5134 27.1264 28 28C28.4866 28.8736 28.4868 28.8735 28.4871 28.8733C28.4873 28.8733 28.4876 28.8731 28.4879 28.8729C28.4884 28.8726 28.4891 28.8722 28.49 28.8717C28.4916 28.8708 28.4939 28.8696 28.4966 28.868C28.5021 28.8649 28.5098 28.8606 28.5195 28.8551C28.539 28.844 28.5668 28.8281 28.6023 28.8076C28.6733 28.7664 28.7754 28.7064 28.9042 28.6286C29.1615 28.473 29.526 28.2456 29.9619 27.9542C30.8319 27.3728 31.9963 26.5302 33.1653 25.4884C35.4397 23.4617 38 20.4457 38 16.9723H36ZM28.9203 15.5533C29.7391 13.6266 31.5468 12.8111 33.107 13.0365C33.8826 13.1485 34.5913 13.5159 35.109 14.1329C35.6239 14.7465 36 15.668 36 16.9723H38C38 15.2691 37.5011 13.8723 36.641 12.8473C35.7837 11.8255 34.6174 11.2339 33.393 11.057C30.9532 10.7046 28.2609 11.9915 27.0797 14.7711L28.9203 15.5533Z"
      fill="url(#paint0_linear_499_5879)"
    />
    <defs>
      <filter
        id="filter0_dd_499_5879"
        x={0}
        y={0}
        width={56}
        height={56}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feflood floodOpacity={0} result="BackgroundImageFix" />
        <fecolormatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <femorphology
          radius={6}
          operator="erode"
          in="SourceAlpha"
          result="effect1_dropShadow_499_5879"
        />
        <feoffset dy={8} />
        <fegaussianblur stdDeviation={8} />
        <fecolormatrix
          type="matrix"
          values="0 0 0 0 0.0941176 0 0 0 0 0.152941 0 0 0 0 0.294118 0 0 0 0.08 0"
        />
        <feblend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_499_5879" />
        <fecolormatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <femorphology
          radius={6}
          operator="erode"
          in="SourceAlpha"
          result="effect2_dropShadow_499_5879"
        />
        <feoffset dy={6} />
        <fegaussianblur stdDeviation={4} />
        <fecolormatrix
          type="matrix"
          values="0 0 0 0 0.0941176 0 0 0 0 0.152941 0 0 0 0 0.294118 0 0 0 0.12 0"
        />
        <feblend
          mode="normal"
          in2="effect1_dropShadow_499_5879"
          result="effect2_dropShadow_499_5879"
        />
        <feblend
          mode="normal"
          in="SourceGraphic"
          in2="effect2_dropShadow_499_5879"
          result="shape"
        />
      </filter>
      <lineargradient
        id="paint0_linear_499_5879"
        x1={28}
        y1="11.2059"
        x2={28}
        y2="29.2941"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.0434107" stopColor="#81A3F9" />
        <stop offset={1} stopColor="#3462D8" />
      </lineargradient>
    </defs>
  </svg>
  <svg
    width={56}
    height={56}
    viewBox="0 0 56 56"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-9 h-9 absolute left-[278px] top-[15px]"
    preserveAspectRatio="none"
  >
    <g filter="url(#filter0_dd_499_5880)">
      <circle cx={28} cy={20} r={18} fill="white" />
    </g>
    <path
      d="M34 29C35.6569 29 37 27.6569 37 26C37 24.3431 35.6569 23 34 23C32.3431 23 31 24.3431 31 26C31 27.6569 32.3431 29 34 29Z"
      stroke="url(#paint0_linear_499_5880)"
     strokeWidth={2}
     strokeLinecap="round"
     strokeLinejoin="round"
    />
    <path
      d="M25 21.5L31 24.5"
      stroke="url(#paint1_linear_499_5880)"
     strokeWidth={2}
     strokeLinecap="round"
     strokeLinejoin="round"
    />
    <path
      d="M22 23C23.6569 23 25 21.6569 25 20C25 18.3431 23.6569 17 22 17C20.3431 17 19 18.3431 19 20C19 21.6569 20.3431 23 22 23Z"
      stroke="url(#paint2_linear_499_5880)"
     strokeWidth={2}
     strokeLinecap="round"
     strokeLinejoin="round"
    />
    <path
      d="M31 15.5L25 18.5"
      stroke="url(#paint3_linear_499_5880)"
     strokeWidth={2}
     strokeLinecap="round"
     strokeLinejoin="round"
    />
    <path
      d="M34 17C35.6569 17 37 15.6569 37 14C37 12.3431 35.6569 11 34 11C32.3431 11 31 12.3431 31 14C31 15.6569 32.3431 17 34 17Z"
      stroke="url(#paint4_linear_499_5880)"
     strokeWidth={2}
     strokeLinecap="round"
     strokeLinejoin="round"
    />
    <defs>
      <filter
        id="filter0_dd_499_5880"
        x={0}
        y={0}
        width={56}
        height={56}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feflood floodOpacity={0} result="BackgroundImageFix" />
        <fecolormatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <femorphology
          radius={6}
          operator="erode"
          in="SourceAlpha"
          result="effect1_dropShadow_499_5880"
        />
        <feoffset dy={8} />
        <fegaussianblur stdDeviation={8} />
        <fecolormatrix
          type="matrix"
          values="0 0 0 0 0.0941176 0 0 0 0 0.152941 0 0 0 0 0.294118 0 0 0 0.08 0"
        />
        <feblend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_499_5880" />
        <fecolormatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <femorphology
          radius={6}
          operator="erode"
          in="SourceAlpha"
          result="effect2_dropShadow_499_5880"
        />
        <feoffset dy={6} />
        <fegaussianblur stdDeviation={4} />
        <fecolormatrix
          type="matrix"
          values="0 0 0 0 0.0941176 0 0 0 0 0.152941 0 0 0 0 0.294118 0 0 0 0.12 0"
        />
        <feblend
          mode="normal"
          in2="effect1_dropShadow_499_5880"
          result="effect2_dropShadow_499_5880"
        />
        <feblend
          mode="normal"
          in="SourceGraphic"
          in2="effect2_dropShadow_499_5880"
          result="shape"
        />
      </filter>
      <lineargradient
        id="paint0_linear_499_5880"
        x1={34}
        y1="22.7022"
        x2={34}
        y2="29.4853"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.0434107" stopColor="#81A3F9" />
        <stop offset={1} stopColor="#3462D8" />
      </lineargradient>
      <lineargradient
        id="paint1_linear_499_5880"
        x1={28}
        y1="21.3511"
        x2={28}
        y2="24.7426"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.0434107" stopColor="#81A3F9" />
        <stop offset={1} stopColor="#3462D8" />
      </lineargradient>
      <lineargradient
        id="paint2_linear_499_5880"
        x1={22}
        y1="16.7022"
        x2={22}
        y2="23.4853"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.0434107" stopColor="#81A3F9" />
        <stop offset={1} stopColor="#3462D8" />
      </lineargradient>
      <lineargradient
        id="paint3_linear_499_5880"
        x1={28}
        y1="15.3511"
        x2={28}
        y2="18.7426"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.0434107" stopColor="#81A3F9" />
        <stop offset={1} stopColor="#3462D8" />
      </lineargradient>
      <lineargradient
        id="paint4_linear_499_5880"
        x1={34}
        y1="10.7022"
        x2={34}
        y2="17.4853"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.0434107" stopColor="#81A3F9" />
        <stop offset={1} stopColor="#3462D8" />
      </lineargradient>
    </defs>
  </svg>
  <svg
    width={56}
    height={56}
    viewBox="0 0 56 56"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-9 h-9 absolute left-[9px] top-[15px]"
    preserveAspectRatio="none"
  >
    <g filter="url(#filter0_dd_499_5881)">
      <circle cx={28} cy={20} r={18} fill="white" />
    </g>
    <path
      d="M30.2929 27.7071C30.6834 28.0976 31.3166 28.0976 31.7071 27.7071C32.0976 27.3166 32.0976 26.6834 31.7071 26.2929L30.2929 27.7071ZM24 20L23.2929 19.2929C22.9024 19.6834 22.9024 20.3166 23.2929 20.7071L24 20ZM31.7071 13.7071C32.0976 13.3166 32.0976 12.6834 31.7071 12.2929C31.3166 11.9024 30.6834 11.9024 30.2929 12.2929L31.7071 13.7071ZM31.7071 26.2929L24.7071 19.2929L23.2929 20.7071L30.2929 27.7071L31.7071 26.2929ZM24.7071 20.7071L31.7071 13.7071L30.2929 12.2929L23.2929 19.2929L24.7071 20.7071Z"
      fill="url(#paint0_linear_499_5881)"
    />
    <defs>
      <filter
        id="filter0_dd_499_5881"
        x={0}
        y={0}
        width={56}
        height={56}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feflood floodOpacity={0} result="BackgroundImageFix" />
        <fecolormatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <femorphology
          radius={6}
          operator="erode"
          in="SourceAlpha"
          result="effect1_dropShadow_499_5881"
        />
        <feoffset dy={8} />
        <fegaussianblur stdDeviation={8} />
        <fecolormatrix
          type="matrix"
          values="0 0 0 0 0.0941176 0 0 0 0 0.152941 0 0 0 0 0.294118 0 0 0 0.08 0"
        />
        <feblend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_499_5881" />
        <fecolormatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <femorphology
          radius={6}
          operator="erode"
          in="SourceAlpha"
          result="effect2_dropShadow_499_5881"
        />
        <feoffset dy={6} />
        <fegaussianblur stdDeviation={4} />
        <fecolormatrix
          type="matrix"
          values="0 0 0 0 0.0941176 0 0 0 0 0.152941 0 0 0 0 0.294118 0 0 0 0.12 0"
        />
        <feblend
          mode="normal"
          in2="effect1_dropShadow_499_5881"
          result="effect2_dropShadow_499_5881"
        />
        <feblend
          mode="normal"
          in="SourceGraphic"
          in2="effect2_dropShadow_499_5881"
          result="shape"
        />
      </filter>
      <lineargradient
        id="paint0_linear_499_5881"
        x1="27.5"
        y1="12.3051"
        x2="27.5"
        y2="28.1324"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.0434107" stopColor="#81A3F9" />
        <stop offset={1} stopColor="#3462D8" />
      </lineargradient>
    </defs>
  </svg>
  <div
    className="flex flex-col justify-start items-start absolute left-[15px] top-[650px] gap-2 p-6 rounded-xl"
    style={{ background: "linear-gradient(219.21deg, #c399db -0.85%, #5882f7 106.68%)" }}
  >
    <svg
      width={12}
      height={20}
      viewBox="0 0 12 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="flex-grow-0 flex-shrink-0 w-3 h-5 relative"
      preserveAspectRatio="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.30933 13.2255L8.30672 13.2299C7.9347 13.864 7.81395 14.3314 7.81395 14.659C7.81395 15.0235 7.91119 15.3112 8.09532 15.5637C8.35747 15.9055 8.61345 16.1273 8.85311 16.2662C9.2786 16.5015 9.67042 16.7317 10.0274 16.9571C10.2306 17.0775 10.4454 17.2241 10.6245 17.4022C10.7801 17.5568 11.093 17.9159 11.093 18.4509C11.093 18.9671 10.8425 19.4492 10.3709 19.7339C9.99305 19.9619 9.5759 20 9.27907 20C8.14884 20 7.06772 19.391 6.0768 18.5393L6.07307 18.5361L6.06938 18.5329C5.63861 18.1563 5.27477 17.7451 4.99272 17.3005C4.40913 18.029 3.97055 18.556 3.68243 18.8728C3.4477 19.139 3.21223 19.3787 2.9822 19.5617C2.86566 19.6544 2.72569 19.7526 2.56653 19.8317C2.41577 19.9067 2.17747 20 1.88372 20C1.10385 20 0.625845 19.4682 0.386049 19.0867L0.363945 19.0515L0.344433 19.0149C0.133984 18.6197 0 18.1807 0 17.711C0 17.5215 0.0389596 17.3098 0.0688206 17.1605C0.104856 16.9802 0.156173 16.7588 0.220252 16.502C0.348744 15.987 0.538657 15.2894 0.787816 14.4146C1.27369 12.6935 1.76322 10.6195 2.25542 8.18809C2.74016 5.79344 2.97674 3.65967 2.97674 1.78035C2.97674 1.61642 2.98644 1.43563 3.02054 1.25767C3.04885 1.10986 3.11288 0.857371 3.29024 0.61714C3.68253 0.0679559 4.29786 0 4.60465 0C5.07895 0 5.43947 0.221439 5.66945 0.431036C5.88445 0.626979 6.04539 0.863692 6.16846 1.08381C6.46932 1.57753 6.62791 2.12462 6.62791 2.7052C6.62791 4.91233 6.24412 7.59665 5.49476 10.7446C6.41344 9.55732 7.22252 8.59259 7.9207 7.85507L7.9235 7.85211L7.92633 7.84916C8.26465 7.49678 8.57072 7.20248 8.83526 6.98817C8.96627 6.88204 9.11339 6.7739 9.26881 6.68673C9.39168 6.61782 9.66892 6.47399 10.0233 6.47399C10.6186 6.47399 11.0901 6.75658 11.4206 7.10709C11.6608 7.34987 12 7.77969 12 8.36994C12 8.6902 11.8756 8.93682 11.8246 9.0328C11.7569 9.16029 11.6756 9.27671 11.6016 9.37392C11.4519 9.57065 11.2521 9.79204 11.0226 10.0284C10.5875 10.4764 10.106 10.9706 9.57823 11.5107C9.12882 11.9707 8.70492 12.5372 8.31191 13.221L8.30933 13.2255ZM9.346 17.6843C9.346 17.6843 9.34302 17.685 9.33625 17.6857C9.34248 17.6845 9.346 17.6843 9.346 17.6843Z"
        fill="white"
      />
    </svg>
    <p className="flex-grow-0 flex-shrink-0 w-[295px] text-lg font-bold text-left text-white">
      Le mot de Kit le nid.
    </p>
    <p className="flex-grow-0 flex-shrink-0 w-[295px] text-sm font-medium text-left text-white">
      Kit le nid aime bien faire des prouts dans les logements, et ça tombe bien parce que il y a un
      piano livré avec l’appartement ! À vous les gateaux aux chocolats mmmm !
    </p>
  </div>
  <div className="w-[375px] h-[70px] absolute left-[-2px] top-[741px] overflow-hidden bg-white">
    <div className="w-[62px] h-[49px]">
      <svg
        width={32}
        height={32}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8 absolute left-[124.5px] top-[10.5px]"
        preserveAspectRatio="xMidYMid meet"
      >
        <path
          d="M13.3333 22.6667C18.488 22.6667 22.6667 18.488 22.6667 13.3333C22.6667 8.17868 18.488 4 13.3333 4C8.17868 4 4 8.17868 4 13.3333C4 18.488 8.17868 22.6667 13.3333 22.6667Z"
          stroke="#272832"
         strokeWidth={2}
         strokeLinecap="round"
         strokeLinejoin="round"
        />
        <path
          d="M20 20L28 28"
          stroke="#272832"
         strokeWidth={2}
         strokeLinecap="round"
         strokeLinejoin="round"
        />
      </svg>
      <p className="absolute left-[110px] top-[47px] text-xs font-bold text-left text-[#272832]">
        Recherche
      </p>
    </div>
    <div className="w-[62px] h-[49px]">
      <svg
        width={32}
        height={32}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8 absolute left-[227.5px] top-[10.5px]"
        preserveAspectRatio="xMidYMid meet"
      >
        <path
          d="M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z"
          stroke="#272832"
         strokeWidth={2}
         strokeLinecap="round"
         strokeLinejoin="round"
        />
        <path
          d="M22.9553 25.7764C21.2464 23.8677 18.7634 22.6667 15.9998 22.6667C13.2363 22.6667 10.7533 23.8677 9.04431 25.7764"
          stroke="#272832"
         strokeWidth={2}
         strokeLinecap="round"
         strokeLinejoin="round"
        />
        <path
          d="M16 18.6667C18.2091 18.6667 20 16.8758 20 14.6667C20 12.4575 18.2091 10.6667 16 10.6667C13.7909 10.6667 12 12.4575 12 14.6667C12 16.8758 13.7909 18.6667 16 18.6667Z"
          stroke="#272832"
         strokeWidth={2}
         strokeLinecap="round"
         strokeLinejoin="round"
        />
      </svg>
      <p className="absolute left-[213px] top-[47px] text-xs font-bold text-left text-[#272832]">
        Connexion
      </p>
    </div>
    <div className="w-[33px] h-[49px]">
      <p className="absolute left-[316px] top-[47px] text-xs font-bold text-left text-[#272832]">
        Menu
      </p>
      <svg
        width={32}
        height={32}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8 absolute left-[316.5px] top-[10.5px]"
        preserveAspectRatio="xMidYMid meet"
      >
        <path
          d="M6.66663 22.6667L25.3333 22.6667"
          stroke="#272832"
         strokeWidth={2}
         strokeLinecap="round"
         strokeLinejoin="round"
        />
        <path
          d="M6.66663 16H25.3333"
          stroke="#272832"
         strokeWidth={2}
         strokeLinecap="round"
         strokeLinejoin="round"
        />
        <path
          d="M6.66663 9.33334L17.3333 9.33334"
          stroke="#272832"
         strokeWidth={2}
         strokeLinecap="round"
         strokeLinejoin="round"
        />
      </svg>
    </div>
    <svg
      width={374}
      height={1}
      viewBox="0 0 374 1"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute left-[-1px] top-0"
      preserveAspectRatio="xMidYMid meet"
    >
      <line x1={-1} y1="0.5" x2={374} y2="0.5" stroke="#EAEFFA" />
    </svg>
    <div className="w-[43px] h-[49px]">
      <svg
        width={32}
        height={32}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8 absolute left-[30.5px] top-[10.5px]"
        preserveAspectRatio="xMidYMid meet"
      >
        <path
          d="M26.2114 12.9349L16.878 4.76825C16.3753 4.32839 15.6247 4.32839 15.122 4.76825L5.7887 12.9349C5.49935 13.1881 5.33337 13.5539 5.33337 13.9384V25.3333C5.33337 26.0697 5.93033 26.6667 6.66671 26.6667H12C12.7364 26.6667 13.3334 26.0697 13.3334 25.3333V20C13.3334 19.2636 13.9303 18.6667 14.6667 18.6667H17.3334C18.0698 18.6667 18.6667 19.2636 18.6667 20V25.3333C18.6667 26.0697 19.2637 26.6667 20 26.6667H25.3334C26.0698 26.6667 26.6667 26.0697 26.6667 25.3333V13.9384C26.6667 13.5539 26.5007 13.1881 26.2114 12.9349Z"
          stroke="#3679FF"
         strokeWidth={2}
         strokeLinecap="round"
         strokeLinejoin="round"
        />
      </svg>
      <p className="absolute left-[26px] top-[47px] text-xs font-bold text-left text-[#3679ff]">
        Acceuil
      </p>
    </div>
  </div>
  <svg
    width={375}
    height={812}
    viewBox="0 0 375 812"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="absolute left-[-1px] top-[-1px] opacity-30"
    preserveAspectRatio="none"
  >
    <path opacity="0.3" d="M0 0H375V812H0V0Z" fill="#051F52" />
  </svg>
  <div className="flex flex-col justify-center items-center w-[375px] absolute left-[-1px] top-[268px] overflow-hidden gap-4 p-6 rounded-tl-xl rounded-tr-xl bg-white border border-[#eaeffa]">
    <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 w-[343px] relative gap-[18px]">
      <p className="flex-grow-0 flex-shrink-0 text-base font-bold text-center text-[#272832]">
        Partager ce bien avec des proches
      </p>
      <svg
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
        preserveAspectRatio="none"
      >
        <path
          d="M18 18L6 6"
          stroke="#14181F"
         strokeWidth={2}
         strokeLinecap="round"
         strokeLinejoin="round"
        />
        <path
          d="M18 6L6 18"
          stroke="#14181F"
         strokeWidth={2}
         strokeLinecap="round"
         strokeLinejoin="round"
        />
      </svg>
    </div>
    <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 w-[311px] relative gap-6">
      <div className="flex-grow-0 flex-shrink-0 w-[78px] h-[78px]">
        <div className="w-[78px] h-[78px] absolute left-[-0.42px] top-[-0.42px] rounded-[10px] bg-[#c4c4c4]" />
        
      </div>
      <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-center text-[#43434a]">
        Résidence Bienvivre
      </p>
    </div>
    <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 w-[343px] relative gap-2.5 p-4 rounded-xl bg-white border border-[#3679ff]">
      <p className="flex-grow w-[277px] text-sm font-bold text-left text-[#3679ff]">
        Copier le lien
      </p>
      <svg
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
        preserveAspectRatio="none"
      >
        <path
          d="M15 15H20C20.5523 15 21 14.5523 21 14V4C21 3.44772 20.5523 3 20 3L10 3C9.44772 3 9 3.44771 9 4L9 9"
          stroke="#3679FF"
         strokeWidth={2}
         strokeLinecap="round"
         strokeLinejoin="round"
        />
        <path
          d="M4 21L14 21C14.5523 21 15 20.5523 15 20L15 10C15 9.44772 14.5523 9 14 9L4 9C3.44771 9 3 9.44771 3 10L3 20C3 20.5523 3.44771 21 4 21Z"
          stroke="#3679FF"
         strokeWidth={2}
         strokeLinecap="round"
         strokeLinejoin="round"
        />
      </svg>
    </div>
    <div className="flex-grow-0 flex-shrink-0 w-[343px] h-[217px] relative">
      <div
        className="flex justify-center items-center w-[343px] absolute left-[-1px] top-[-1px] gap-3 p-4 rounded-tl-xl rounded-tr-xl bg-white border border-[#3679ff]"
        style={{
          boxShadow: "0px 6px 8px -6px rgba(24,39,75,0.12), 0px 8px 16px -6px rgba(24,39,75,0.08)",
        }}
      >
        <p className="flex-grow w-[275px] text-sm font-bold text-left text-[#4f80ff]">
          Adresse e-mail
        </p>
        <svg
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
          preserveAspectRatio="xMidYMid meet"
        >
          <path
            d="M20 5H4C3.44772 5 3 5.44772 3 6V18C3 18.5523 3.44772 19 4 19H20C20.5523 19 21 18.5523 21 18V6C21 5.44772 20.5523 5 20 5Z"
            stroke="#3679FF"
           strokeWidth={2}
           strokeLinecap="round"
           strokeLinejoin="round"
          />
          <path
            d="M3 6L12.2571 13L21 6"
            stroke="#3679FF"
           strokeWidth={2}
           strokeLinecap="round"
           strokeLinejoin="round"
          />
        </svg>
      </div>
      <div
        className="flex justify-center items-center w-[343px] absolute left-[-1px] top-[54px] gap-3 p-4 bg-white border border-[#3679ff]"
        style={{
          boxShadow: "0px 6px 8px -6px rgba(24,39,75,0.12), 0px 8px 16px -6px rgba(24,39,75,0.08)",
        }}
      >
        <p className="flex-grow w-[275px] text-sm font-bold text-left text-[#4f80ff]">SMS</p>
        <svg
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
          preserveAspectRatio="xMidYMid meet"
        >
          <path
            d="M7.18497 19.605L7.7207 18.7606C7.46683 18.5996 7.15397 18.5613 6.86874 18.6563L7.18497 19.605ZM3 21L2.05132 20.6838C1.93154 21.0431 2.02506 21.4393 2.29289 21.7071C2.56073 21.9749 2.95689 22.0685 3.31623 21.9487L3 21ZM4.39499 16.815L5.34367 17.1313C5.43875 16.846 5.40045 16.5332 5.23938 16.2793L4.39499 16.815ZM12 22C17.5228 22 22 17.5228 22 12H20C20 16.4183 16.4183 20 12 20V22ZM6.64923 20.4494C8.19708 21.4315 10.0337 22 12 22V20C10.4242 20 8.95764 19.5454 7.7207 18.7606L6.64923 20.4494ZM6.86874 18.6563L2.68377 20.0513L3.31623 21.9487L7.5012 20.5537L6.86874 18.6563ZM3.94868 21.3162L5.34367 17.1313L3.44631 16.4988L2.05132 20.6838L3.94868 21.3162ZM2 12C2 13.9663 2.56855 15.8029 3.5506 17.3508L5.23938 16.2793C4.45458 15.0424 4 13.5758 4 12H2ZM12 2C6.47715 2 2 6.47715 2 12H4C4 7.58172 7.58172 4 12 4V2ZM22 12C22 6.47715 17.5228 2 12 2V4C16.4183 4 20 7.58172 20 12H22Z"
            fill="#3679FF"
          />
          <path
            d="M16 12H16.002V12.002H16V12Z"
            stroke="#3679FF"
           strokeWidth={2}
           strokeLinecap="round"
           strokeLinejoin="round"
          />
          <path
            d="M12 12H12.002V12.002H12V12Z"
            stroke="#3679FF"
           strokeWidth={2}
           strokeLinecap="round"
           strokeLinejoin="round"
          />
          <path
            d="M8 12H8.002V12.002H8V12Z"
            stroke="#3679FF"
           strokeWidth={2}
           strokeLinecap="round"
           strokeLinejoin="round"
          />
        </svg>
      </div>
      <div
        className="flex justify-center items-center w-[343px] absolute left-[-1px] top-[107px] gap-3 p-4 bg-white border border-[#3679ff]"
        style={{
          boxShadow: "0px 6px 8px -6px rgba(24,39,75,0.12), 0px 8px 16px -6px rgba(24,39,75,0.08)",
        }}
      >
        <p className="flex-grow w-[275px] text-sm font-bold text-left text-[#4f80ff]">WhatsApp</p>
        <svg
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
          preserveAspectRatio="xMidYMid meet"
        >
          <path
            d="M0 11.52C0 6.0894 0 3.37413 1.68706 1.68706C3.37413 0 6.0894 0 11.52 0H12.48C17.9106 0 20.6258 0 22.3129 1.68706C24 3.37413 24 6.0894 24 11.52V12.48C24 17.9106 24 20.6258 22.3129 22.3129C20.6258 24 17.9106 24 12.48 24H11.52C6.0894 24 3.37413 24 1.68706 22.3129C0 20.6258 0 17.9106 0 12.48V11.52Z"
            fill="#3679FF"
          />
          <path
            d="M8.83231 16.7908L9.05203 16.8994C9.96763 17.4424 10.993 17.6958 12.0184 17.6958C15.2411 17.6958 17.8779 15.0895 17.8779 11.9042C17.8779 10.3839 17.2553 8.89977 16.1567 7.81383C15.058 6.72789 13.5931 6.11256 12.0184 6.11256C8.79572 6.11256 6.15891 8.71878 6.19555 11.9404C6.19555 13.0263 6.52515 14.076 7.07446 14.9809L7.22093 15.1982L6.63503 17.3338L8.83231 16.7908Z"
            fill="#3679FF"
          />
          <path
            d="M16.7792 7.23466C15.5341 5.96777 13.8129 5.28 12.055 5.28C8.31964 5.28 5.31665 8.28438 5.35324 11.9403C5.35324 13.0987 5.68283 14.2208 6.23219 15.2343L5.28 18.6731L8.83231 17.7681C9.82109 18.3111 10.9197 18.5645 12.0184 18.5645C15.7172 18.5645 18.7202 15.5601 18.7202 11.9042C18.7202 10.1305 18.0243 8.46538 16.7792 7.23466ZM12.055 17.4424C11.0662 17.4424 10.0774 17.1891 9.23514 16.6823L9.01543 16.5737L6.89138 17.1166L7.44069 15.0534L7.29421 14.8362C5.68283 12.2662 6.45191 8.86355 9.08867 7.27083C11.7254 5.67817 15.1313 6.43833 16.7426 9.04455C18.354 11.6508 17.5849 15.0172 14.9482 16.6099C14.1058 17.1528 13.0805 17.4424 12.055 17.4424ZM15.2777 13.4245L14.8749 13.2435C14.8749 13.2435 14.289 12.9901 13.9228 12.8091C13.8861 12.8091 13.8495 12.7729 13.8129 12.7729C13.703 12.7729 13.6298 12.8092 13.5565 12.8454C13.5565 12.8454 13.5199 12.8815 13.0072 13.4607C12.9706 13.5331 12.8973 13.5693 12.8241 13.5693H12.7874C12.7509 13.5693 12.6776 13.5331 12.641 13.4969L12.4579 13.4245C12.055 13.2435 11.6888 13.0263 11.3958 12.7368C11.3226 12.6644 11.2127 12.592 11.1395 12.5196C10.8831 12.2662 10.6268 11.9766 10.4437 11.6508L10.407 11.5784C10.3705 11.5422 10.3705 11.506 10.3338 11.4337C10.3338 11.3613 10.3338 11.2889 10.3705 11.2527C10.3705 11.2527 10.5169 11.0717 10.6268 10.9631C10.7 10.8907 10.7366 10.7821 10.8099 10.7097C10.8831 10.6011 10.9198 10.4563 10.8831 10.3477C10.8465 10.1667 10.407 9.18938 10.2972 8.97221C10.2239 8.8636 10.1507 8.82743 10.0409 8.79121H9.63803C9.56474 8.79121 9.49155 8.82743 9.41826 8.82743L9.38161 8.8636C9.30838 8.89982 9.23514 8.97221 9.1619 9.00838C9.08867 9.08082 9.05202 9.15316 8.97878 9.2256C8.72242 9.55138 8.57595 9.94954 8.57595 10.3477C8.57595 10.6373 8.64919 10.9269 8.75907 11.1803L8.79571 11.2889C9.12531 11.9766 9.56473 12.592 10.1507 13.1349L10.2972 13.2797C10.407 13.3883 10.5169 13.4607 10.5902 13.5693C11.3592 14.2209 12.2381 14.6914 13.2269 14.9448C13.3368 14.981 13.4833 14.981 13.5932 15.0172H13.9594C14.1425 15.0172 14.3622 14.9448 14.5087 14.8724C14.6185 14.8 14.6918 14.8 14.765 14.7276L14.8383 14.6552C14.9115 14.5828 14.9848 14.5466 15.058 14.4743C15.1313 14.4019 15.2045 14.3295 15.2411 14.257C15.3144 14.1123 15.351 13.9313 15.3876 13.7503V13.4969C15.3876 13.4969 15.351 13.4607 15.2777 13.4245Z"
            fill="white"
          />
        </svg>
      </div>
      <div
        className="flex justify-center items-center w-[343px] absolute left-[-1px] top-40 gap-3 p-4 rounded-bl-xl rounded-br-xl bg-white border border-[#3679ff]"
        style={{
          boxShadow: "0px 6px 8px -6px rgba(24,39,75,0.12), 0px 8px 16px -6px rgba(24,39,75,0.08)",
        }}
      >
        <p className="flex-grow w-[275px] text-sm font-bold text-left text-[#4f80ff]">Messenger</p>
        <svg
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="flex-grow-0 flex-shrink-0"
          preserveAspectRatio="xMidYMid meet"
        >
          <path
            d="M12 0C5.373 0 0 4.974 0 11.111C0.0147572 12.7965 0.423818 14.4551 1.19445 15.9542C1.96508 17.4533 3.07589 18.7511 4.438 19.744L4.469 19.765V24L8.557 21.758C9.588 22.053 10.772 22.222 11.996 22.222H12C18.627 22.222 24 17.247 24 11.112C24 4.977 18.627 0 12 0ZM13.191 14.963L10.136 11.7L4.173 14.96L10.732 8L13.863 11.259L19.752 8L13.191 14.963Z"
            fill="#3679FF"
          />
        </svg>
      </div>
    </div>
    <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 w-[343px] relative gap-2.5 p-4 rounded-xl bg-white border border-[#3679ff]">
      <p className="flex-grow w-[277px] text-sm font-bold text-left text-[#3679ff]">
        Plus d’options
      </p>
      <svg
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
        preserveAspectRatio="none"
      >
        <path
          d="M17 12C17 11.4477 17.4477 11 18 11C18.5523 11 19 11.4477 19 12C19 12.5523 18.5523 13 18 13C17.4477 13 17 12.5523 17 12Z"
          stroke="#3679FF"
         strokeWidth={2}
         strokeLinecap="round"
         strokeLinejoin="round"
        />
        <path
          d="M11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12Z"
          stroke="#3679FF"
         strokeWidth={2}
         strokeLinecap="round"
         strokeLinejoin="round"
        />
        <path
          d="M5 12C5 11.4477 5.44772 11 6 11C6.55228 11 7 11.4477 7 12C7 12.5523 6.55228 13 6 13C5.44772 13 5 12.5523 5 12Z"
          stroke="#3679FF"
         strokeWidth={2}
         strokeLinecap="round"
         strokeLinejoin="round"
        />
      </svg>
    </div>
  </div>
</div>

131313131313131313131313131313


<div className="w-[375px] h-[667px] relative overflow-hidden bg-white mb-8 mt-8">
  <img
    src="rectangle-256.png"
    className="w-[343px] h-[175px] absolute left-[15px] top-[221px] rounded-xl object-cover"
  />
  <p className="w-[341px] absolute left-[17px] top-[75px] text-[28px] font-bold text-center">
    <span className="w-[341px] text-[28px] font-bold text-center text-[#113eb6]">
      Devenir propriétaire devient plus{" "}
    </span>
    <span className="w-[341px] text-[28px] font-bold text-center text-[#3679ff]">accessible.</span>
  </p>
  <p className="w-[312px] absolute left-[31px] top-[139px] text-base text-center text-[#849cd9]">
    Réalisez votre premier achat immobilier pour seulement 700€ par mois !*
  </p>
  <div className="w-[131px] h-[35px]">
    <div className="w-[131px] h-[35px]">
      <p className="w-3 h-[9.89px] absolute left-[223px] top-[37.84px] text-[9px] font-bold text-left text-[#43434a]">
        By
      </p>
      <img
        src="nexity-logo-1.png"
        className="w-4 h-[15.82px] absolute left-[236.5px] top-[34.38px] object-cover"
      />
      <svg
        width={97}
        height={35}
        viewBox="0 0 97 35"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute left-[121.81px] top-[23.81px]"
        preserveAspectRatio="none"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14.7453 23.1445L14.7407 23.1523C14.0805 24.2619 13.8662 25.08 13.8662 25.6532C13.8662 26.2912 14.0388 26.7946 14.3655 27.2364C14.8307 27.8346 15.285 28.2229 15.7103 28.4659C16.4653 28.8776 17.1606 29.2805 17.7941 29.6749C18.1547 29.8857 18.5359 30.1422 18.8538 30.4538C19.1298 30.7245 19.6851 31.3528 19.6851 32.289C19.6851 33.1924 19.2405 34.0361 18.4037 34.5342C17.7331 34.9334 16.9929 35 16.4661 35C14.4605 35 12.542 33.9342 10.7836 32.4439L10.777 32.4383L10.7704 32.4326C10.006 31.7736 9.36034 31.054 8.85982 30.2758C7.82421 31.5507 7.04593 32.473 6.53465 33.0274C6.11811 33.4933 5.70025 33.9128 5.29206 34.233C5.08526 34.3952 4.83687 34.567 4.55443 34.7055C4.28689 34.8366 3.86403 35 3.34275 35C1.95883 35 1.11059 34.0693 0.685061 33.4017L0.645838 33.3402L0.611212 33.2761C0.237761 32.5844 0 31.8163 0 30.9942C0 30.6626 0.0691356 30.2922 0.122125 30.0308C0.186073 29.7154 0.277136 29.328 0.390847 28.8785C0.618863 27.9773 0.955872 26.7564 1.39802 25.2256C2.26023 22.2136 3.12892 18.5842 4.00234 14.3292C4.86254 10.1385 5.28237 6.40441 5.28237 3.11561C5.28237 2.82873 5.29959 2.51234 5.36008 2.20093C5.41034 1.94226 5.52396 1.5004 5.83869 1.07999C6.53482 0.118923 7.62675 0 8.17117 0C9.01283 0 9.65259 0.387519 10.0607 0.754313C10.4422 1.09721 10.7278 1.51146 10.9462 1.89667C11.4801 2.76068 11.7615 3.71808 11.7615 4.7341C11.7615 8.59658 11.0805 13.2941 9.75071 18.8031C11.3809 16.7253 12.8167 15.037 14.0557 13.7464L14.0606 13.7412L14.0656 13.736C14.666 13.1194 15.2091 12.6043 15.6786 12.2293C15.9111 12.0436 16.1721 11.8543 16.4479 11.7018C16.666 11.5812 17.158 11.3295 17.7867 11.3295C18.8431 11.3295 19.6799 11.824 20.2664 12.4374C20.6926 12.8623 21.2946 13.6144 21.2946 14.6474C21.2946 15.2079 21.0739 15.6394 20.9834 15.8074C20.8632 16.0305 20.719 16.2342 20.5877 16.4044C20.3219 16.7486 19.9674 17.1361 19.5601 17.5498C18.788 18.3338 17.9336 19.1985 16.997 20.1438C16.1995 20.9487 15.4473 21.9401 14.7499 23.1367L14.7453 23.1445ZM18.7772 13.8382C18.4746 13.5145 18.1444 13.3526 17.7867 13.3526C17.4566 13.3526 16.7138 13.946 15.5582 15.1329C13.677 17.0927 11.2794 20.0583 8.36526 24.0298C7.63601 25.0236 6.87442 26.0805 6.08049 27.2003C5.5928 27.8882 5.09291 28.5998 4.58081 29.3353C4.63476 29.1697 4.68829 29.0048 4.74139 28.8404C5.38174 26.8579 5.96006 24.9579 6.47632 23.1403C8.62418 15.5783 9.69811 9.44291 9.69811 4.7341C9.69811 4.25841 9.60156 3.80456 9.40846 3.37256C9.38336 3.31642 9.35663 3.26064 9.32828 3.20523C9.31293 3.17525 9.29711 3.14537 9.28081 3.11561C9.24357 3.04761 9.20384 2.98017 9.16162 2.9133C8.83147 2.31985 8.50132 2.02312 8.17117 2.02312C7.84102 2.02312 7.62092 2.10405 7.51087 2.2659C7.40083 2.40077 7.3458 2.68401 7.3458 3.11561C7.3458 3.3392 7.34395 3.56454 7.34026 3.79164C7.33988 3.81518 7.33948 3.83875 7.33905 3.86234C7.28063 7.12385 6.84268 10.7458 6.02521 14.7283C5.14481 19.0173 4.26442 22.6994 3.38402 25.7746C2.50363 28.8227 2.06343 30.5626 2.06343 30.9942C2.06343 31.4258 2.18723 31.8709 2.43484 32.3295C2.70997 32.7611 3.0126 32.9769 3.34275 32.9769C3.6729 32.9769 4.22315 32.5453 4.99349 31.6821C5.27125 31.3816 5.64405 30.9519 6.11187 30.3931C6.11775 30.3861 6.12366 30.3791 6.12957 30.372C6.24506 30.234 6.36628 30.0881 6.49324 29.9345C6.52507 29.896 6.55726 29.857 6.58981 29.8175C6.93272 29.4014 7.31562 28.931 7.7385 28.4063C7.79778 28.3327 7.85784 28.2581 7.91869 28.1824C8.36578 27.6263 8.85529 27.0125 9.38722 26.341C9.50261 26.1954 9.61999 26.047 9.73938 25.896V26.341C9.73938 27.1098 9.90794 27.8471 10.2451 28.5532C10.6414 29.3832 11.2707 30.1699 12.133 30.9133C13.0888 31.7234 13.9826 32.295 14.8144 32.628C15.1078 32.7455 15.3935 32.8333 15.6714 32.8915C15.6932 32.896 15.7149 32.9004 15.7365 32.9045C15.7575 32.9086 15.7784 32.9125 15.7993 32.9162C16.0268 32.9566 16.2491 32.9769 16.4661 32.9769C17.2365 32.9769 17.6217 32.7476 17.6217 32.289C17.6217 32.0462 17.319 31.7495 16.7138 31.3988C16.6325 31.3481 16.5499 31.2972 16.4661 31.2459C16.3865 31.1972 16.3057 31.1483 16.2238 31.0992C16.0605 31.0012 15.8928 30.9024 15.7206 30.8028C15.3937 30.6135 15.0507 30.421 14.6916 30.2254C13.9763 29.8208 13.316 29.2274 12.7107 28.4451C12.1054 27.6358 11.8028 26.7052 11.8028 25.6532C11.8028 24.6012 12.188 23.4277 12.9583 22.1329C13.7287 20.8112 14.5816 19.6782 15.517 18.7341C16.4524 17.79 17.3053 16.9268 18.0756 16.1445C18.846 15.3622 19.2311 14.8632 19.2311 14.6474C19.2311 14.4046 19.0798 14.1349 18.7772 13.8382ZM16.5849 30.9475C16.5849 30.9475 16.5796 30.9488 16.5676 30.9499C16.5787 30.9479 16.5849 30.9475 16.5849 30.9475Z"
          fill="url(#paint0_linear_499_6411)"
        />
        <path
          d="M25.0427 32.2403C24.6187 32.2403 24.2654 32.1249 23.9828 31.8939C23.7159 31.6476 23.5824 31.3012 23.5824 30.8548V21.9409C23.5824 21.4944 23.7159 21.1558 23.9828 20.9248C24.2654 20.6939 24.6187 20.5784 25.0427 20.5784C25.4666 20.5784 25.8199 20.6939 26.1026 20.9248C26.3852 21.1558 26.5265 21.4944 26.5265 21.9409V30.8548C26.5265 31.3012 26.3852 31.6476 26.1026 31.8939C25.8199 32.1249 25.4666 32.2403 25.0427 32.2403ZM25.0427 18.5232C24.5088 18.5232 24.0849 18.3846 23.7708 18.1075C23.4568 17.815 23.2998 17.4378 23.2998 16.9759C23.2998 16.5141 23.4568 16.1446 23.7708 15.8675C24.0849 15.5904 24.5088 15.4518 25.0427 15.4518C25.5608 15.4518 25.9769 15.5904 26.291 15.8675C26.6207 16.1446 26.7856 16.5141 26.7856 16.9759C26.7856 17.4378 26.6286 17.815 26.3145 18.1075C26.0005 18.3846 25.5765 18.5232 25.0427 18.5232Z"
          fill="url(#paint1_linear_499_6411)"
        />
        <path
          d="M35.6784 30.0927C36.4635 30.1389 36.856 30.4853 36.856 31.1319C36.856 31.5014 36.699 31.7862 36.385 31.9863C36.0866 32.1711 35.6548 32.248 35.0896 32.2173L34.4536 32.1711C31.8157 31.9863 30.4967 30.6007 30.4967 28.0143V22.9801H29.3191C28.8951 22.9801 28.5654 22.8877 28.3299 22.703C28.11 22.5182 28.0001 22.2488 28.0001 21.8947C28.0001 21.5406 28.11 21.2712 28.3299 21.0865C28.5654 20.9017 28.8951 20.8094 29.3191 20.8094H30.4967V18.6848C30.4967 18.2691 30.6302 17.9381 30.8971 17.6918C31.1641 17.4455 31.5252 17.3223 31.9806 17.3223C32.4202 17.3223 32.7735 17.4455 33.0405 17.6918C33.3074 17.9381 33.4409 18.2691 33.4409 18.6848V20.8094H35.4429C35.8668 20.8094 36.1887 20.9017 36.4085 21.0865C36.6441 21.2712 36.7618 21.5406 36.7618 21.8947C36.7618 22.2488 36.6441 22.5182 36.4085 22.703C36.1887 22.8877 35.8668 22.9801 35.4429 22.9801H33.4409V28.2222C33.4409 29.3614 33.9747 29.9695 35.0425 30.0465L35.6784 30.0927Z"
          fill="url(#paint2_linear_499_6411)"
        />
        <path
          d="M45.8721 32.2403C45.4482 32.2403 45.0949 32.1249 44.8122 31.8939C44.5453 31.6476 44.4118 31.3012 44.4118 30.8548V17.0683C44.4118 16.6218 44.5453 16.2831 44.8122 16.0522C45.0949 15.8213 45.4482 15.7058 45.8721 15.7058C46.2961 15.7058 46.6494 15.8213 46.932 16.0522C47.2147 16.2831 47.356 16.6218 47.356 17.0683V30.8548C47.356 31.3012 47.2147 31.6476 46.932 31.8939C46.6494 32.1249 46.2961 32.2403 45.8721 32.2403Z"
          fill="url(#paint3_linear_499_6411)"
        />
        <path
          d="M58.948 29.0073C59.215 29.0073 59.4269 29.1074 59.584 29.3075C59.7567 29.5077 59.843 29.7771 59.843 30.1158C59.843 30.5931 59.5525 30.9933 58.9716 31.3166C58.4377 31.6091 57.8332 31.8478 57.158 32.0325C56.4828 32.2019 55.839 32.2865 55.2266 32.2865C53.3738 32.2865 51.9057 31.7631 50.8222 30.7162C49.7388 29.6693 49.1971 28.2376 49.1971 26.4209C49.1971 25.2663 49.4326 24.2425 49.9037 23.3496C50.3747 22.4566 51.0342 21.7639 51.8821 21.2712C52.7457 20.7786 53.7193 20.5322 54.8027 20.5322C55.839 20.5322 56.7419 20.7555 57.5113 21.2019C58.2807 21.6484 58.8774 22.2796 59.3013 23.0956C59.7253 23.9115 59.9372 24.8737 59.9372 25.9822C59.9372 26.6442 59.6389 26.9752 59.0422 26.9752H52.0941C52.1883 28.0374 52.4945 28.8226 53.0127 29.3306C53.5308 29.8233 54.2845 30.0696 55.2738 30.0696C55.7762 30.0696 56.2159 30.008 56.5927 29.8849C56.9853 29.7617 57.4249 29.5924 57.9117 29.3768C58.3827 29.1305 58.7282 29.0073 58.948 29.0073ZM54.8734 22.5644C54.0726 22.5644 53.4288 22.8107 52.942 23.3034C52.471 23.796 52.1883 24.5042 52.0941 25.4279H57.4171C57.3857 24.4888 57.1501 23.7806 56.7105 23.3034C56.2708 22.8107 55.6585 22.5644 54.8734 22.5644Z"
          fill="url(#paint4_linear_499_6411)"
        />
        <path
          d="M74.1187 20.5322C75.5005 20.5322 76.529 20.9171 77.2042 21.6869C77.8794 22.4566 78.217 23.619 78.217 25.1739V30.8548C78.217 31.2858 78.0835 31.6245 77.8166 31.8709C77.5653 32.1172 77.212 32.2403 76.7567 32.2403C76.3013 32.2403 75.9402 32.1172 75.6732 31.8709C75.4063 31.6245 75.2728 31.2858 75.2728 30.8548V25.3356C75.2728 24.458 75.1001 23.8191 74.7547 23.4189C74.4249 23.0186 73.8989 22.8184 73.1766 22.8184C72.3287 22.8184 71.6457 23.0802 71.1275 23.6036C70.625 24.127 70.3738 24.8275 70.3738 25.705V30.8548C70.3738 31.2858 70.2403 31.6245 69.9734 31.8709C69.7065 32.1172 69.3453 32.2403 68.89 32.2403C68.4346 32.2403 68.0735 32.1172 67.8065 31.8709C67.5553 31.6245 67.4297 31.2858 67.4297 30.8548V21.9178C67.4297 21.5175 67.5632 21.1942 67.8301 20.9479C68.097 20.7016 68.4582 20.5784 68.9135 20.5784C69.3218 20.5784 69.6515 20.7016 69.9028 20.9479C70.1697 21.1788 70.3032 21.4867 70.3032 21.8716V22.4951C70.6957 21.8639 71.2217 21.379 71.8812 21.0403C72.5407 20.7016 73.2865 20.5322 74.1187 20.5322Z"
          fill="url(#paint5_linear_499_6411)"
        />
        <path
          d="M81.7358 32.2403C81.3118 32.2403 80.9585 32.1249 80.6759 31.8939C80.4089 31.6476 80.2755 31.3012 80.2755 30.8548V21.9409C80.2755 21.4944 80.4089 21.1558 80.6759 20.9248C80.9585 20.6939 81.3118 20.5784 81.7358 20.5784C82.1597 20.5784 82.513 20.6939 82.7956 20.9248C83.0783 21.1558 83.2196 21.4944 83.2196 21.9409V30.8548C83.2196 31.3012 83.0783 31.6476 82.7956 31.8939C82.513 32.1249 82.1597 32.2403 81.7358 32.2403ZM81.7358 18.5232C81.2019 18.5232 80.7779 18.3846 80.4639 18.1075C80.1499 17.815 79.9928 17.4378 79.9928 16.9759C79.9928 16.5141 80.1499 16.1446 80.4639 15.8675C80.7779 15.5904 81.2019 15.4518 81.7358 15.4518C82.2539 15.4518 82.67 15.5904 82.9841 15.8675C83.3138 16.1446 83.4787 16.5141 83.4787 16.9759C83.4787 17.4378 83.3217 17.815 83.0076 18.1075C82.6936 18.3846 82.2696 18.5232 81.7358 18.5232Z"
          fill="url(#paint6_linear_499_6411)"
        />
        <path
          d="M95.4926 15.7058C95.9323 15.7058 96.2934 15.829 96.5761 16.0753C96.8587 16.3216 97 16.6449 97 17.0452V30.8548C97 31.2704 96.8665 31.6014 96.5996 31.8477C96.3327 32.0941 95.9794 32.2172 95.5397 32.2172C95.1001 32.2172 94.7468 32.0941 94.4798 31.8477C94.2129 31.6014 94.0794 31.2704 94.0794 30.8548V30.2774C93.734 30.9086 93.2315 31.4013 92.572 31.7554C91.9283 32.1095 91.1903 32.2865 90.3581 32.2865C89.3688 32.2865 88.4817 32.0402 87.6966 31.5475C86.9272 31.0549 86.3226 30.3621 85.883 29.4692C85.459 28.5609 85.2471 27.5217 85.2471 26.3516C85.2471 25.1816 85.459 24.1578 85.883 23.2803C86.3226 22.4027 86.9272 21.7254 87.6966 21.2481C88.466 20.7709 89.3531 20.5322 90.3581 20.5322C91.1903 20.5322 91.9283 20.7016 92.572 21.0403C93.2158 21.379 93.7104 21.8562 94.0559 22.472V16.999C94.0559 16.6141 94.1815 16.3062 94.4327 16.0753C94.6997 15.829 95.053 15.7058 95.4926 15.7058ZM91.1353 30.0465C92.0774 30.0465 92.7997 29.7309 93.3022 29.0997C93.8204 28.4685 94.0794 27.5679 94.0794 26.3978C94.0794 25.2278 93.8204 24.3349 93.3022 23.719C92.7997 23.0878 92.0853 22.7722 91.1589 22.7722C90.2168 22.7722 89.4866 23.0801 88.9684 23.6959C88.4503 24.3118 88.1912 25.197 88.1912 26.3516C88.1912 27.5217 88.4503 28.43 88.9684 29.0766C89.4866 29.7232 90.2089 30.0465 91.1353 30.0465Z"
          fill="url(#paint7_linear_499_6411)"
        />
        <defs>
          <lineargradient
            id="paint0_linear_499_6411"
            x1="92.364"
            y1="-1.60846"
            x2="73.9333"
            y2="61.008"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#C399DB" />
            <stop offset={1} stopColor="#5882F7" />
          </lineargradient>
          <lineargradient
            id="paint1_linear_499_6411"
            x1="92.364"
            y1="-1.60846"
            x2="73.9333"
            y2="61.008"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#C399DB" />
            <stop offset={1} stopColor="#5882F7" />
          </lineargradient>
          <lineargradient
            id="paint2_linear_499_6411"
            x1="92.364"
            y1="-1.60846"
            x2="73.9333"
            y2="61.008"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#C399DB" />
            <stop offset={1} stopColor="#5882F7" />
          </lineargradient>
          <lineargradient
            id="paint3_linear_499_6411"
            x1="92.364"
            y1="-1.60846"
            x2="73.9333"
            y2="61.008"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#C399DB" />
            <stop offset={1} stopColor="#5882F7" />
          </lineargradient>
          <lineargradient
            id="paint4_linear_499_6411"
            x1="92.364"
            y1="-1.60846"
            x2="73.9333"
            y2="61.008"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#C399DB" />
            <stop offset={1} stopColor="#5882F7" />
          </lineargradient>
          <lineargradient
            id="paint5_linear_499_6411"
            x1="92.364"
            y1="-1.60846"
            x2="73.9333"
            y2="61.008"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#C399DB" />
            <stop offset={1} stopColor="#5882F7" />
          </lineargradient>
          <lineargradient
            id="paint6_linear_499_6411"
            x1="92.364"
            y1="-1.60846"
            x2="73.9333"
            y2="61.008"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#C399DB" />
            <stop offset={1} stopColor="#5882F7" />
          </lineargradient>
          <lineargradient
            id="paint7_linear_499_6411"
            x1="92.364"
            y1="-1.60846"
            x2="73.9333"
            y2="61.008"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#C399DB" />
            <stop offset={1} stopColor="#5882F7" />
          </lineargradient>
        </defs>
      </svg>
    </div>
  </div>
  <p className="w-[274px] absolute left-[85px] top-[535px] text-lg font-bold text-left text-[#1a2e6c]">
    <span className="w-[274px] text-lg font-bold text-left text-[#1a2e6c]">
      Des logements dans toute{" "}
    </span>
    <br />
    <span className="w-[274px] text-lg font-bold text-left text-[#1a2e6c]">la France</span>
  </p>
  <p className="w-[274px] absolute left-[85px] top-[585px] text-sm font-medium text-left text-[#849cd9]">
    Plus de 3 000 logements neufs disponibles.
  </p>
  <p className="w-[252px] absolute left-[61px] top-[475px] text-sm font-medium text-center text-[#849cd9]">
    Construire son projet immobilier avec Kit le nid c’est bénéficier :
  </p>
  <p className="w-[343px] absolute left-4 top-[421px] text-lg font-bold text-center text-[#1a2e6c]">
    <span className="w-[343px] text-lg font-bold text-center text-[#1a2e6c]">
      L’achat dans une résidence
    </span>
    <br />
    <span className="w-[343px] text-lg font-bold text-center text-[#1a2e6c]">
      neuve avec Kit le nid
    </span>
  </p>
  <div className="w-[291px] h-[55px] absolute left-[41px] top-[194px]">
    <div className="w-[291px] h-[55px] absolute left-[-1.5px] top-[-1.5px] rounded-[70px] bg-white border-2 border-[#eff4ff]" />
    <p className="w-[223.98px] absolute left-[13.57px] top-4 text-lg font-bold text-left text-[#0e215c]">
      Localisation
    </p>
    <div
      className="w-[39px] h-[39px] absolute left-[243px] top-[7px] rounded-[42px]"
      style={{ background: "linear-gradient(to bottom, #81a3f9 -0.06%, #3462d8 108.09%)" }}
    />
    <svg
      width={23}
      height={23}
      viewBox="0 0 23 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-[23px] h-[23px] absolute left-[251px] top-[15px]"
      preserveAspectRatio="xMidYMid meet"
    >
      <path
        d="M9.58333 16.2917C13.2882 16.2917 16.2917 13.2882 16.2917 9.58333C16.2917 5.87842 13.2882 2.875 9.58333 2.875C5.87842 2.875 2.875 5.87842 2.875 9.58333C2.875 13.2882 5.87842 16.2917 9.58333 16.2917Z"
        stroke="white"
       strokeWidth={2}
       strokeLinecap="round"
       strokeLinejoin="round"
      />
      <path
        d="M14.375 14.375L20.125 20.125"
        stroke="white"
       strokeWidth={2}
       strokeLinecap="round"
       strokeLinejoin="round"
      />
    </svg>
  </div>
  <svg
    width={53}
    height={53}
    viewBox="0 0 53 53"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-[53px] h-[53px] absolute left-[15px] top-[551px]"
    preserveAspectRatio="none"
  >
    <circle cx="26.5" cy="26.5" r="26.5" fill="#DCE6FF" />
    <path
      d="M33.6585 24.7012L26.6585 18.5762C26.2815 18.2463 25.7185 18.2463 25.3415 18.5762L18.3415 24.7012C18.1245 24.8911 18 25.1654 18 25.4538V34C18 34.5523 18.4477 35 19 35H23C23.5523 35 24 34.5523 24 34V30C24 29.4477 24.4477 29 25 29H27C27.5523 29 28 29.4477 28 30V34C28 34.5523 28.4477 35 29 35H33C33.5523 35 34 34.5523 34 34V25.4538C34 25.1654 33.8755 24.8911 33.6585 24.7012Z"
      stroke="#6A7CA8"
     strokeWidth={2}
     strokeLinecap="round"
     strokeLinejoin="round"
    />
  </svg>
  <div className="w-[375px] h-[70px] absolute left-[-1px] top-[598px] overflow-hidden bg-[#fcfcfd]">
    <svg
      width={375}
      height={1}
      viewBox="0 0 375 1"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute left-[-1px] top-0"
      preserveAspectRatio="xMidYMid meet"
    >
      <line y1="0.5" x2={375} y2="0.5" stroke="#EAEFFA" />
    </svg>
    <div className="w-[62px] h-[49px]">
      <svg
        width={32}
        height={32}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8 absolute left-[101.5px] top-[10.5px]"
        preserveAspectRatio="xMidYMid meet"
      >
        <path
          d="M13.3333 22.6667C18.488 22.6667 22.6667 18.488 22.6667 13.3333C22.6667 8.17868 18.488 4 13.3333 4C8.17868 4 4 8.17868 4 13.3333C4 18.488 8.17868 22.6667 13.3333 22.6667Z"
          stroke="#272832"
         strokeWidth={2}
         strokeLinecap="round"
         strokeLinejoin="round"
        />
        <path
          d="M20 20L28 28"
          stroke="#272832"
         strokeWidth={2}
         strokeLinecap="round"
         strokeLinejoin="round"
        />
      </svg>
      <p className="absolute left-[87px] top-[47px] text-xs font-bold text-left text-[#272832]">
        Recherche
      </p>
    </div>
    <div className="w-[43px] h-[49px]">
      <svg
        width={32}
        height={32}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8 absolute left-[24.5px] top-[10.5px]"
        preserveAspectRatio="xMidYMid meet"
      >
        <path
          d="M26.2114 12.9349L16.878 4.76825C16.3753 4.32839 15.6247 4.32839 15.122 4.76825L5.7887 12.9349C5.49935 13.1881 5.33337 13.5539 5.33337 13.9384V25.3333C5.33337 26.0697 5.93033 26.6667 6.66671 26.6667H12C12.7364 26.6667 13.3334 26.0697 13.3334 25.3333V20C13.3334 19.2636 13.9303 18.6667 14.6667 18.6667H17.3334C18.0698 18.6667 18.6667 19.2636 18.6667 20V25.3333C18.6667 26.0697 19.2637 26.6667 20 26.6667H25.3334C26.0698 26.6667 26.6667 26.0697 26.6667 25.3333V13.9384C26.6667 13.5539 26.5007 13.1881 26.2114 12.9349Z"
          stroke="#272832"
         strokeWidth={2}
         strokeLinecap="round"
         strokeLinejoin="round"
        />
      </svg>
      <p className="absolute left-5 top-[47px] text-xs font-bold text-left text-[#272832]">
        Acceuil
      </p>
    </div>
    <div className="w-[33px] h-[49px]">
      <p className="absolute left-[321px] top-[47px] text-xs font-bold text-left text-[#3679ff]">
        Menu
      </p>
      <svg
        width={32}
        height={32}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8 absolute left-[321.5px] top-[10.5px]"
        preserveAspectRatio="none"
      >
        <path
          d="M24 24L8 8"
          stroke="#3679FF"
         strokeWidth={2}
         strokeLinecap="round"
         strokeLinejoin="round"
        />
        <path
          d="M24 8L8 24"
          stroke="#3679FF"
         strokeWidth={2}
         strokeLinecap="round"
         strokeLinejoin="round"
        />
      </svg>
    </div>
    <div className="w-[41px] h-[49px]">
      <p className="absolute left-[173px] top-[47px] text-xs font-bold text-left text-[#272832]">
        Favoris
      </p>
      <svg
        width={32}
        height={32}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8 absolute left-[176.5px] top-[10.5px]"
        preserveAspectRatio="xMidYMid meet"
      >
        <path
          d="M16 26.6667L15.5134 27.5403C15.8159 27.7088 16.1841 27.7088 16.4866 27.5403L16 26.6667ZM16 9.54962L15.0797 9.94073C15.2365 10.3099 15.5989 10.5496 16 10.5496C16.4011 10.5496 16.7635 10.3099 16.9203 9.94073L16 9.54962ZM3 11.9631C3 16.439 6.31031 20.3739 9.33471 23.069C10.8787 24.445 12.4181 25.5591 13.5693 26.3285C14.1459 26.7138 14.6276 27.0143 14.9669 27.2196C15.1367 27.3222 15.271 27.4011 15.364 27.455C15.4105 27.4819 15.4467 27.5026 15.4719 27.5169C15.4844 27.524 15.4942 27.5296 15.5012 27.5335C15.5047 27.5354 15.5074 27.537 15.5095 27.5381C15.5105 27.5387 15.5113 27.5392 15.512 27.5395C15.5123 27.5397 15.5127 27.5399 15.5129 27.54C15.5132 27.5402 15.5134 27.5403 16 26.6667C16.4866 25.793 16.4867 25.7931 16.4869 25.7932C16.4869 25.7932 16.4869 25.7932 16.4869 25.7932C16.4868 25.7932 16.4866 25.793 16.4861 25.7928C16.4853 25.7923 16.4837 25.7914 16.4814 25.7901C16.4768 25.7876 16.4694 25.7834 16.4593 25.7776C16.439 25.7661 16.4078 25.7483 16.3665 25.7243C16.2837 25.6764 16.1602 25.6039 16.0018 25.5081C15.6849 25.3165 15.2291 25.0322 14.6807 24.6657C13.5819 23.9313 12.1213 22.8733 10.6653 21.5759C7.68969 18.9242 5 15.5074 5 11.9631H3ZM16.9203 9.1585C15.4058 5.59458 11.9635 3.95721 8.85702 4.40597C7.2993 4.631 5.82046 5.38246 4.73395 6.67731C3.64471 7.97542 3 9.75868 3 11.9631H5C5 10.1575 5.52195 8.84966 6.26605 7.96288C7.01287 7.07284 8.03403 6.54562 9.14298 6.38542C11.3699 6.06372 13.9275 7.22967 15.0797 9.94073L16.9203 9.1585ZM27 11.9631C27 15.5074 24.3103 18.9242 21.3347 21.5759C19.8787 22.8733 18.4181 23.9313 17.3193 24.6657C16.7709 25.0322 16.3151 25.3165 15.9982 25.5081C15.8398 25.6039 15.7163 25.6764 15.6335 25.7243C15.5922 25.7483 15.561 25.7661 15.5407 25.7776C15.5306 25.7834 15.5232 25.7876 15.5186 25.7901C15.5163 25.7914 15.5147 25.7923 15.5139 25.7928C15.5134 25.793 15.5132 25.7932 15.5131 25.7932C15.5131 25.7932 15.5131 25.7932 15.5131 25.7932C15.5133 25.7931 15.5134 25.793 16 26.6667C16.4866 27.5403 16.4868 27.5402 16.4871 27.54C16.4873 27.5399 16.4877 27.5397 16.488 27.5395C16.4887 27.5392 16.4895 27.5387 16.4905 27.5381C16.4926 27.537 16.4953 27.5354 16.4988 27.5335C16.5058 27.5296 16.5156 27.524 16.5281 27.5169C16.5533 27.5026 16.5895 27.4819 16.636 27.455C16.729 27.4011 16.8633 27.3222 17.0331 27.2196C17.3724 27.0143 17.8541 26.7138 18.4307 26.3285C19.5819 25.5591 21.1213 24.445 22.6653 23.069C25.6897 20.3739 29 16.439 29 11.9631H27ZM16.9203 9.94073C18.0725 7.22967 20.6301 6.06372 22.857 6.38542C23.966 6.54562 24.9871 7.07284 25.734 7.96288C26.478 8.84966 27 10.1575 27 11.9631H29C29 9.75868 28.3553 7.97542 27.266 6.67731C26.1795 5.38246 24.7007 4.631 23.143 4.40597C20.0365 3.95721 16.5942 5.59458 15.0797 9.1585L16.9203 9.94073Z"
          fill="#272832"
        />
      </svg>
    </div>
    <div className="w-[59px] h-[49px]">
      <div className="w-[59px] h-[49px]">
        <svg
          width={32}
          height={32}
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8 absolute left-[251.5px] top-[10.5px]"
          preserveAspectRatio="xMidYMid meet"
        >
          <path
            d="M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z"
            stroke="#272832"
           strokeWidth={2}
           strokeLinecap="round"
           strokeLinejoin="round"
          />
          <path
            d="M22.9553 25.7764C21.2464 23.8678 18.7634 22.6667 15.9998 22.6667C13.2363 22.6667 10.7533 23.8678 9.04431 25.7764"
            stroke="#272832"
           strokeWidth={2}
           strokeLinecap="round"
           strokeLinejoin="round"
          />
          <path
            d="M16 18.6667C18.2091 18.6667 20 16.8758 20 14.6667C20 12.4575 18.2091 10.6667 16 10.6667C13.7909 10.6667 12 12.4575 12 14.6667C12 16.8758 13.7909 18.6667 16 18.6667Z"
            stroke="#272832"
           strokeWidth={2}
           strokeLinecap="round"
           strokeLinejoin="round"
          />
        </svg>
        <p className="absolute left-[238px] top-[47px] text-xs font-bold text-left text-[#272832]">
          Mon profil
        </p>
      </div>
    </div>
  </div>
  <svg
    width={375}
    height={667}
    viewBox="0 0 375 667"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="absolute left-[-1px] top-[-1px] opacity-30"
    preserveAspectRatio="none"
  >
    <path
      opacity="0.3"
      d="M0 0H375V598H307.5C300.873 598 295.5 603.373 295.5 610V655C295.5 661.627 290.127 667 283.5 667H0V0Z"
      fill="#051F52"
    />
  </svg>
  <div className="flex flex-col justify-start items-center w-[375px] absolute left-[-1px] top-[37px] overflow-hidden gap-4 p-6 rounded-tl-xl rounded-tr-xl bg-white border border-[#eaeffa]">
    <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 w-[327px] relative">
      <p className="flex-grow-0 flex-shrink-0 w-[284px] text-base font-bold text-center text-[#272832]">
        Partenaires
      </p>
      <svg
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
        preserveAspectRatio="none"
      >
        <path
          d="M18 18L6 6"
          stroke="#14181F"
         strokeWidth={2}
         strokeLinecap="round"
         strokeLinejoin="round"
        />
        <path
          d="M18 6L6 18"
          stroke="#14181F"
         strokeWidth={2}
         strokeLinecap="round"
         strokeLinejoin="round"
        />
      </svg>
    </div>
    <p className="flex-grow-0 flex-shrink-0 w-[327px] text-sm font-medium text-left text-[#6976a0]">
      Kit le nid vous propose un ensembles d’offres avantageuses pour mieux répondre à vos besoins
      lors de vos études.
    </p>
    <div className="flex-grow-0 flex-shrink-0 w-[343px] h-[147px] relative">
      <div className="w-[343px] h-[147px] absolute left-[-1px] top-[-1px] rounded-xl bg-white border border-[#eaeffa]" />
      <p className="w-[183px] absolute left-36 top-[43px] text-xs font-medium text-left text-[#6976a0]">
        Heyme vous offre l’accès à une mutuelle santé à prix réduit.
      </p>
      <p className="w-[183px] absolute left-36 top-4 text-lg font-bold text-left text-[#3679ff]">
        Mutuelle santé
      </p>
      <img
        src="static/img/LogoHeyme.svg"
        className="w-28 h-[117px] absolute left-[15px] top-[15px] rounded-xl object-none border border-[#eaeffa]"
      />
      <div
        className="flex justify-center items-center w-[183px] absolute left-[143px] top-[88px] gap-2.5 px-10 py-3 rounded-xl"
        style={{ background: "linear-gradient(to bottom, #81a3f9 -0.06%, #3462d8 108.09%)" }}
      >
        <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-white">
          Découvrir Heyme
        </p>
      </div>
    </div>
    <div className="flex-grow-0 flex-shrink-0 w-[343px] h-[147px] relative">
      <div className="w-[343px] h-[147px] absolute left-[-1px] top-[-1px] rounded-xl bg-white border border-[#eaeffa]" />
      <p className="w-[183px] absolute left-36 top-[43px] text-xs font-medium text-left text-[#6976a0]">
        Cautioneo vous offre un garant solide pour votre location.
      </p>
      <p className="w-[183px] absolute left-36 top-4 text-lg font-bold text-left text-[#3679ff]">
        Mutuelle santé
      </p>
      <img
        src="static/img/LogoCautioneo.svg"
        className="w-28 h-[117px] absolute left-[15px] top-[15px] rounded-xl object-none border border-[#eaeffa]"
      />
      <div
        className="flex justify-center items-center w-[183px] absolute left-[143px] top-[88px] gap-2.5 px-10 py-3 rounded-xl"
        style={{ background: "linear-gradient(to bottom, #81a3f9 -0.06%, #3462d8 108.09%)" }}
      >
        <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-white">
          Découvrir Cautioneo
        </p>
      </div>
    </div>
    <div className="flex-grow-0 flex-shrink-0 w-[343px] h-[147px] relative">
      <div className="w-[343px] h-[147px] absolute left-[-1px] top-[-1px] rounded-xl bg-white border border-[#eaeffa]" />
      <p className="w-[183px] absolute left-36 top-[43px] text-xs font-medium text-left text-[#6976a0]">
        Studéa vous offre accès à des résidences étudiantes.
      </p>
      <p className="w-[183px] absolute left-36 top-4 text-lg font-bold text-left text-[#3679ff]">
        Mutuelle santé
      </p>
      <div className="w-28 h-[117px] absolute left-[15px] top-[15px] rounded-xl border border-[#eaeffa]" />
      <div
        className="flex justify-center items-center w-[183px] absolute left-[143px] top-[88px] gap-2.5 px-10 py-3 rounded-xl"
        style={{ background: "linear-gradient(to bottom, #81a3f9 -0.06%, #3462d8 108.09%)" }}
      >
        <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-white">
          Découvrir Studéa
        </p>
      </div>
    </div>
  </div>
  <div className="w-[88px] h-6 absolute left-[43px] top-[559px]">
    <img
      src="static/img/studea.svg"
      className="w-[88px] h-6 absolute left-[-1px] top-[-1px] object-contain"
    />
  </div>
</div>


1414141414414141414141414141414141144141



<div className="w-[375px] h-[812px] relative overflow-hidden bg-[#f9fbff] mb-8 mt-8">
  <div className="w-[131px] h-[35.4px]">
    <div className="w-[131px] h-[35.4px]">
      <p className="absolute left-[223px] top-[39px] text-[9px] font-bold text-left text-[#43434a]">
        By
      </p>
      <img
        src="nexity-logo-1.png"
        className="w-4 h-4 absolute left-[236.5px] top-[35.5px] object-cover"
      />
      <svg
        width={97}
        height={36}
        viewBox="0 0 97 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute left-[121.81px] top-[24.81px]"
        preserveAspectRatio="none"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14.7453 23.41L14.7407 23.4179C14.0805 24.5402 13.8662 25.3677 13.8662 25.9474C13.8662 26.5927 14.0388 27.1019 14.3655 27.5488C14.8307 28.1538 15.285 28.5466 15.7103 28.7924C16.4653 29.2088 17.1606 29.6164 17.7941 30.0153C18.1547 30.2285 18.5359 30.4879 18.8538 30.8031C19.1298 31.0769 19.6851 31.7125 19.6851 32.6594C19.6851 33.5732 19.2405 34.4265 18.4037 34.9304C17.7331 35.3341 16.9929 35.4015 16.4661 35.4015C14.4605 35.4015 12.542 34.3234 10.7836 32.816L10.777 32.8103L10.7704 32.8046C10.006 32.138 9.36034 31.4102 8.85982 30.6231C7.82421 31.9126 7.04593 32.8455 6.53465 33.4063C6.11811 33.8775 5.70025 34.3018 5.29206 34.6256C5.08526 34.7897 4.83687 34.9635 4.55443 35.1036C4.28689 35.2362 3.86403 35.4015 3.34275 35.4015C1.95883 35.4015 1.11059 34.4601 0.685061 33.7849L0.645838 33.7226L0.611212 33.6578C0.237761 32.9582 0 32.1812 0 31.3497C0 31.0143 0.0691356 30.6397 0.122125 30.3753C0.186073 30.0562 0.277136 29.6644 0.390847 29.2098C0.618863 28.2982 0.955872 27.0634 1.39802 25.5149C2.26023 22.4684 3.12892 18.7974 4.00234 14.4935C4.86254 10.2548 5.28237 6.47787 5.28237 3.15134C5.28237 2.86118 5.29959 2.54116 5.36008 2.22618C5.41034 1.96454 5.52396 1.51761 5.83869 1.09238C6.53482 0.120287 7.62675 0 8.17117 0C9.01283 0 9.65259 0.391964 10.0607 0.762965C10.4422 1.1098 10.7278 1.5288 10.9462 1.91843C11.4801 2.79235 11.7615 3.76073 11.7615 4.78841C11.7615 8.69519 11.0805 13.4466 9.75071 19.0188C11.3809 16.9172 12.8167 15.2095 14.0557 13.904L14.0606 13.8988L14.0656 13.8936C14.666 13.2698 15.2091 12.7489 15.6786 12.3696C15.9111 12.1817 16.1721 11.9903 16.4479 11.836C16.666 11.714 17.158 11.4594 17.7867 11.4594C18.8431 11.4594 19.6799 11.9596 20.2664 12.5801C20.6926 13.0098 21.2946 13.7706 21.2946 14.8154C21.2946 15.3823 21.0739 15.8188 20.9834 15.9887C20.8632 16.2144 20.719 16.4204 20.5877 16.5925C20.3219 16.9408 19.9674 17.3326 19.5601 17.7511C18.788 18.5441 17.9336 19.4187 16.997 20.3748C16.1995 21.189 15.4473 22.1917 14.7499 23.4021L14.7453 23.41ZM18.7772 13.9969C18.4746 13.6695 18.1444 13.5058 17.7867 13.5058C17.4566 13.5058 16.7138 14.106 15.5582 15.3065C13.677 17.2888 11.2794 20.2884 8.36526 24.3054C7.63601 25.3106 6.87442 26.3796 6.08049 27.5123C5.5928 28.2081 5.09291 28.9279 4.58081 29.6717C4.63476 29.5043 4.68829 29.3375 4.74139 29.1712C5.38174 27.166 5.96006 25.2442 6.47632 23.4057C8.62418 15.757 9.69811 9.55123 9.69811 4.78841C9.69811 4.30726 9.60156 3.8482 9.40846 3.41124C9.38336 3.35446 9.35663 3.29804 9.32828 3.242C9.31293 3.21167 9.29711 3.18145 9.28081 3.15134C9.24357 3.08256 9.20384 3.01435 9.16162 2.94671C8.83147 2.34645 8.50132 2.04633 8.17117 2.04633C7.84102 2.04633 7.62092 2.12818 7.51087 2.29189C7.40083 2.42831 7.3458 2.71479 7.3458 3.15134C7.3458 3.3775 7.34395 3.60543 7.34026 3.83513C7.33988 3.85894 7.33948 3.88278 7.33905 3.90664C7.28063 7.20556 6.84268 10.8691 6.02521 14.8973C5.14481 19.2355 4.26442 22.9598 3.38402 26.0702C2.50363 29.1533 2.06343 30.9132 2.06343 31.3497C2.06343 31.7863 2.18723 32.2365 2.43484 32.7003C2.70997 33.1369 3.0126 33.3551 3.34275 33.3551C3.6729 33.3551 4.22315 32.9186 4.99349 32.0455C5.27125 31.7415 5.64405 31.307 6.11187 30.7418C6.11775 30.7347 6.12366 30.7275 6.12957 30.7204C6.24506 30.5807 6.36628 30.4332 6.49324 30.2779C6.52507 30.2389 6.55726 30.1994 6.58981 30.1595C6.93272 29.7387 7.31562 29.2629 7.7385 28.7321C7.79778 28.6577 7.85784 28.5822 7.91869 28.5057C8.36578 27.9431 8.85529 27.3223 9.38722 26.6432C9.50261 26.4959 9.61999 26.3458 9.73938 26.193V26.6432C9.73938 27.4207 9.90794 28.1665 10.2451 28.8807C10.6414 29.7202 11.2707 30.516 12.133 31.2679C13.0888 32.0873 13.9826 32.6654 14.8144 33.0023C15.1078 33.1211 15.3935 33.2099 15.6714 33.2687C15.6932 33.2733 15.7149 33.2777 15.7365 33.282C15.7575 33.2861 15.7784 33.29 15.7993 33.2937C16.0268 33.3347 16.2491 33.3551 16.4661 33.3551C17.2365 33.3551 17.6217 33.1232 17.6217 32.6594C17.6217 32.4138 17.319 32.1137 16.7138 31.759C16.6325 31.7077 16.5499 31.6561 16.4661 31.6043C16.3865 31.5551 16.3057 31.5056 16.2238 31.4559C16.0605 31.3568 15.8928 31.2569 15.7206 31.1561C15.3937 30.9646 15.0507 30.77 14.6916 30.5721C13.9763 30.1629 13.316 29.5626 12.7107 28.7714C12.1054 27.9528 11.8028 27.0115 11.8028 25.9474C11.8028 24.8833 12.188 23.6965 12.9583 22.3868C13.7287 21.0499 14.5816 19.9039 15.517 18.949C16.4524 17.994 17.3053 17.1209 18.0756 16.3297C18.846 15.5384 19.2311 15.0337 19.2311 14.8154C19.2311 14.5698 19.0798 14.297 18.7772 13.9969ZM16.5849 31.3025C16.5849 31.3025 16.5796 31.3038 16.5676 31.305C16.5787 31.3029 16.5849 31.3025 16.5849 31.3025Z"
          fill="url(#paint0_linear_499_7335)"
        />
        <path
          d="M25.0427 32.6101C24.6187 32.6101 24.2654 32.4934 23.9828 32.2598C23.7159 32.0106 23.5824 31.6603 23.5824 31.2087V22.1926C23.5824 21.741 23.7159 21.3984 23.9828 21.1648C24.2654 20.9313 24.6187 20.8145 25.0427 20.8145C25.4666 20.8145 25.8199 20.9313 26.1026 21.1648C26.3852 21.3984 26.5265 21.741 26.5265 22.1926V31.2087C26.5265 31.6603 26.3852 32.0106 26.1026 32.2598C25.8199 32.4934 25.4666 32.6101 25.0427 32.6101ZM25.0427 18.7356C24.5088 18.7356 24.0849 18.5955 23.7708 18.3152C23.4568 18.0193 23.2998 17.6378 23.2998 17.1707C23.2998 16.7035 23.4568 16.3298 23.7708 16.0495C24.0849 15.7692 24.5088 15.629 25.0427 15.629C25.5608 15.629 25.9769 15.7692 26.291 16.0495C26.6207 16.3298 26.7856 16.7035 26.7856 17.1707C26.7856 17.6378 26.6286 18.0193 26.3145 18.3152C26.0005 18.5955 25.5765 18.7356 25.0427 18.7356Z"
          fill="url(#paint1_linear_499_7335)"
        />
        <path
          d="M35.6784 30.4379C36.4635 30.4846 36.856 30.835 36.856 31.489C36.856 31.8627 36.699 32.1508 36.385 32.3532C36.0866 32.5401 35.6548 32.6179 35.0896 32.5868L34.4536 32.5401C31.8157 32.3532 30.4967 30.9517 30.4967 28.3357V23.2437H29.3191C28.8951 23.2437 28.5654 23.1502 28.3299 22.9634C28.11 22.7765 28.0001 22.504 28.0001 22.1459C28.0001 21.7877 28.11 21.5152 28.3299 21.3283C28.5654 21.1415 28.8951 21.048 29.3191 21.048H30.4967V18.8991C30.4967 18.4787 30.6302 18.1439 30.8971 17.8947C31.1641 17.6456 31.5252 17.521 31.9806 17.521C32.4202 17.521 32.7735 17.6456 33.0405 17.8947C33.3074 18.1439 33.4409 18.4787 33.4409 18.8991V21.048H35.4429C35.8668 21.048 36.1887 21.1415 36.4085 21.3283C36.6441 21.5152 36.7618 21.7877 36.7618 22.1459C36.7618 22.504 36.6441 22.7765 36.4085 22.9634C36.1887 23.1502 35.8668 23.2437 35.4429 23.2437H33.4409V28.5459C33.4409 29.6982 33.9747 30.3133 35.0425 30.3912L35.6784 30.4379Z"
          fill="url(#paint2_linear_499_7335)"
        />
        <path
          d="M45.8721 32.6101C45.4482 32.6101 45.0949 32.4934 44.8122 32.2598C44.5453 32.0106 44.4118 31.6603 44.4118 31.2087V17.2641C44.4118 16.8125 44.5453 16.4699 44.8122 16.2363C45.0949 16.0028 45.4482 15.886 45.8721 15.886C46.2961 15.886 46.6494 16.0028 46.932 16.2363C47.2147 16.4699 47.356 16.8125 47.356 17.2641V31.2087C47.356 31.6603 47.2147 32.0106 46.932 32.2598C46.6494 32.4934 46.2961 32.6101 45.8721 32.6101Z"
          fill="url(#paint3_linear_499_7335)"
        />
        <path
          d="M58.948 29.3401C59.215 29.3401 59.4269 29.4413 59.584 29.6437C59.7567 29.8461 59.843 30.1187 59.843 30.4612C59.843 30.944 59.5525 31.3488 58.9716 31.6758C58.4377 31.9717 57.8332 32.2131 57.158 32.3999C56.4828 32.5712 55.839 32.6569 55.2266 32.6569C53.3738 32.6569 51.9057 32.1274 50.8222 31.0685C49.7388 30.0096 49.1971 28.5615 49.1971 26.724C49.1971 25.5561 49.4326 24.5206 49.9037 23.6174C50.3747 22.7142 51.0342 22.0135 51.8821 21.5152C52.7457 21.0169 53.7193 20.7678 54.8027 20.7678C55.839 20.7678 56.7419 20.9935 57.5113 21.4451C58.2807 21.8967 58.8774 22.5352 59.3013 23.3605C59.7253 24.1858 59.9372 25.159 59.9372 26.2802C59.9372 26.9498 59.6389 27.2846 59.0422 27.2846H52.0941C52.1883 28.359 52.4945 29.1532 53.0127 29.6671C53.5308 30.1654 54.2845 30.4145 55.2738 30.4145C55.7762 30.4145 56.2159 30.3522 56.5927 30.2277C56.9853 30.1031 57.4249 29.9318 57.9117 29.7138C58.3827 29.4646 58.7282 29.3401 58.948 29.3401ZM54.8734 22.8232C54.0726 22.8232 53.4288 23.0724 52.942 23.5707C52.471 24.069 52.1883 24.7853 52.0941 25.7196H57.4171C57.3857 24.7697 57.1501 24.0534 56.7105 23.5707C56.2708 23.0724 55.6585 22.8232 54.8734 22.8232Z"
          fill="url(#paint4_linear_499_7335)"
        />
        <path
          d="M74.1187 20.7678C75.5005 20.7678 76.529 21.157 77.2042 21.9356C77.8794 22.7142 78.217 23.8899 78.217 25.4627V31.2087C78.217 31.6447 78.0835 31.9873 77.8166 32.2364C77.5653 32.4856 77.212 32.6101 76.7567 32.6101C76.3013 32.6101 75.9402 32.4856 75.6732 32.2364C75.4063 31.9873 75.2728 31.6447 75.2728 31.2087V25.6262C75.2728 24.7386 75.1001 24.0923 74.7547 23.6875C74.4249 23.2826 73.8989 23.0802 73.1766 23.0802C72.3287 23.0802 71.6457 23.3449 71.1275 23.8743C70.625 24.4038 70.3738 25.1123 70.3738 25.9999V31.2087C70.3738 31.6447 70.2403 31.9873 69.9734 32.2364C69.7065 32.4856 69.3453 32.6101 68.89 32.6101C68.4346 32.6101 68.0735 32.4856 67.8065 32.2364C67.5553 31.9873 67.4297 31.6447 67.4297 31.2087V22.1692C67.4297 21.7644 67.5632 21.4373 67.8301 21.1882C68.097 20.939 68.4582 20.8145 68.9135 20.8145C69.3218 20.8145 69.6515 20.939 69.9028 21.1882C70.1697 21.4218 70.3032 21.7332 70.3032 22.1225V22.7532C70.6957 22.1147 71.2217 21.6242 71.8812 21.2816C72.5407 20.939 73.2865 20.7678 74.1187 20.7678Z"
          fill="url(#paint5_linear_499_7335)"
        />
        <path
          d="M81.7358 32.6101C81.3118 32.6101 80.9585 32.4934 80.6759 32.2598C80.4089 32.0106 80.2755 31.6603 80.2755 31.2087V22.1926C80.2755 21.741 80.4089 21.3984 80.6759 21.1648C80.9585 20.9313 81.3118 20.8145 81.7358 20.8145C82.1597 20.8145 82.513 20.9313 82.7956 21.1648C83.0783 21.3984 83.2196 21.741 83.2196 22.1926V31.2087C83.2196 31.6603 83.0783 32.0106 82.7956 32.2598C82.513 32.4934 82.1597 32.6101 81.7358 32.6101ZM81.7358 18.7356C81.2019 18.7356 80.7779 18.5955 80.4639 18.3152C80.1499 18.0193 79.9928 17.6378 79.9928 17.1707C79.9928 16.7035 80.1499 16.3298 80.4639 16.0495C80.7779 15.7692 81.2019 15.629 81.7358 15.629C82.2539 15.629 82.67 15.7692 82.9841 16.0495C83.3138 16.3298 83.4787 16.7035 83.4787 17.1707C83.4787 17.6378 83.3217 18.0193 83.0076 18.3152C82.6936 18.5955 82.2696 18.7356 81.7358 18.7356Z"
          fill="url(#paint6_linear_499_7335)"
        />
        <path
          d="M95.4926 15.886C95.9323 15.886 96.2934 16.0105 96.5761 16.2597C96.8587 16.5088 97 16.8358 97 17.2407V31.2087C97 31.6291 96.8665 31.9639 96.5996 32.213C96.3327 32.4622 95.9794 32.5868 95.5397 32.5868C95.1001 32.5868 94.7468 32.4622 94.4798 32.213C94.2129 31.9639 94.0794 31.6291 94.0794 31.2087V30.6247C93.734 31.2632 93.2315 31.7615 92.572 32.1196C91.9283 32.4778 91.1903 32.6568 90.3581 32.6568C89.3688 32.6568 88.4817 32.4077 87.6966 31.9094C86.9272 31.4111 86.3226 30.7104 85.883 29.8072C85.459 28.8885 85.2471 27.8374 85.2471 26.6539C85.2471 25.4704 85.459 24.4349 85.883 23.5473C86.3226 22.6597 86.9272 21.9746 87.6966 21.4918C88.466 21.0091 89.3531 20.7677 90.3581 20.7677C91.1903 20.7677 91.9283 20.939 92.572 21.2816C93.2158 21.6242 93.7104 22.1069 94.0559 22.7298V17.194C94.0559 16.8047 94.1815 16.4933 94.4327 16.2597C94.6997 16.0105 95.053 15.886 95.4926 15.886ZM91.1353 30.3911C92.0774 30.3911 92.7997 30.0719 93.3022 29.4335C93.8204 28.795 94.0794 27.8841 94.0794 26.7006C94.0794 25.5171 93.8204 24.614 93.3022 23.9911C92.7997 23.3527 92.0853 23.0334 91.1589 23.0334C90.2168 23.0334 89.4866 23.3449 88.9684 23.9677C88.4503 24.5906 88.1912 25.486 88.1912 26.6539C88.1912 27.8374 88.4503 28.7561 88.9684 29.4101C89.4866 30.0641 90.2089 30.3911 91.1353 30.3911Z"
          fill="url(#paint7_linear_499_7335)"
        />
        <defs>
          <lineargradient
            id="paint0_linear_499_7335"
            x1="92.364"
            y1="-1.6269"
            x2="73.5427"
            y2="61.5915"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#C399DB" />
            <stop offset={1} stopColor="#5882F7" />
          </lineargradient>
          <lineargradient
            id="paint1_linear_499_7335"
            x1="92.364"
            y1="-1.6269"
            x2="73.5427"
            y2="61.5915"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#C399DB" />
            <stop offset={1} stopColor="#5882F7" />
          </lineargradient>
          <lineargradient
            id="paint2_linear_499_7335"
            x1="92.364"
            y1="-1.6269"
            x2="73.5427"
            y2="61.5915"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#C399DB" />
            <stop offset={1} stopColor="#5882F7" />
          </lineargradient>
          <lineargradient
            id="paint3_linear_499_7335"
            x1="92.364"
            y1="-1.6269"
            x2="73.5427"
            y2="61.5915"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#C399DB" />
            <stop offset={1} stopColor="#5882F7" />
          </lineargradient>
          <lineargradient
            id="paint4_linear_499_7335"
            x1="92.364"
            y1="-1.6269"
            x2="73.5427"
            y2="61.5915"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#C399DB" />
            <stop offset={1} stopColor="#5882F7" />
          </lineargradient>
          <lineargradient
            id="paint5_linear_499_7335"
            x1="92.364"
            y1="-1.6269"
            x2="73.5427"
            y2="61.5915"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#C399DB" />
            <stop offset={1} stopColor="#5882F7" />
          </lineargradient>
          <lineargradient
            id="paint6_linear_499_7335"
            x1="92.364"
            y1="-1.6269"
            x2="73.5427"
            y2="61.5915"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#C399DB" />
            <stop offset={1} stopColor="#5882F7" />
          </lineargradient>
          <lineargradient
            id="paint7_linear_499_7335"
            x1="92.364"
            y1="-1.6269"
            x2="73.5427"
            y2="61.5915"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#C399DB" />
            <stop offset={1} stopColor="#5882F7" />
          </lineargradient>
        </defs>
      </svg>
    </div>
  </div>
  <div className="w-[375px] h-[812px] absolute left-[-1px] top-[-1px] opacity-30 bg-[#051f52]" />
  <div className="flex flex-col justify-start items-center w-[375px] h-[693px] absolute left-[-1px] top-[118px] overflow-hidden gap-4 p-6 rounded-tl-xl rounded-tr-xl bg-white border border-[#eaeffa]">
    <div className="flex justify-end items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-[90px]">
      <div className="flex-grow-0 flex-shrink-0 w-[108px] h-6 relative">
        <img
          src="static/img/studea.svg"
          className="w-[108px] h-6 absolute left-[-1px] top-[-1px] object-cover"
        />
      </div>
      <svg
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
        preserveAspectRatio="none"
      >
        <path
          d="M18 18L6 6"
          stroke="#14181F"
         strokeWidth={2}
         strokeLinecap="round"
         strokeLinejoin="round"
        />
        <path
          d="M18 6L6 18"
          stroke="#14181F"
         strokeWidth={2}
         strokeLinecap="round"
         strokeLinejoin="round"
        />
      </svg>
    </div>
    <div className="flex-grow-0 flex-shrink-0 w-[343px] h-[55px] relative">
      <div className="w-[343px] h-[55px] absolute left-[-1.5px] top-[-1.5px] rounded-xl bg-white border-2 border-[#eff4ff]" />
      <p className="w-[264px] absolute left-4 top-4 text-lg font-bold text-left text-[#0e215c]">
        Ville
      </p>
      <div className="w-[39px] h-[39px] absolute left-[295px] top-[7px] rounded-xl bg-[#c23d3b]" />
      <svg
        width={23}
        height={23}
        viewBox="0 0 23 23"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-[23px] h-[23px] absolute left-[303px] top-[15px]"
        preserveAspectRatio="xMidYMid meet"
      >
        <path
          d="M9.58333 16.2917C13.2882 16.2917 16.2917 13.2882 16.2917 9.58333C16.2917 5.87842 13.2882 2.875 9.58333 2.875C5.87842 2.875 2.875 5.87842 2.875 9.58333C2.875 13.2882 5.87842 16.2917 9.58333 16.2917Z"
          stroke="white"
         strokeWidth={2}
         strokeLinecap="round"
         strokeLinejoin="round"
        />
        <path
          d="M14.375 14.375L20.125 20.125"
          stroke="white"
         strokeWidth={2}
         strokeLinecap="round"
         strokeLinejoin="round"
        />
      </svg>
    </div>
  </div>
  <img
    src="capture-d’écran-2021-01-27-à-18.28-2.png"
    className="w-[343px] h-[542px] absolute left-[15px] top-[253px] rounded-xl object-none"
  />
  <div className="flex justify-center items-center w-[311px] absolute left-[30.5px] top-[268.5px] gap-6 p-4 rounded-xl bg-white border-2 border-[#eff4ff]">
    <div className="flex justify-center items-start flex-grow-0 flex-shrink-0 w-4 h-4 overflow-hidden gap-1 p-4 rounded-sm bg-white border-2 border-[#cdd2d8]" />
    <p className="flex-grow w-[239px] text-xs text-left text-[#43434a]">
      Actualiser quand je déplace la carte
    </p>
  </div>
  <div
    className="w-[164px] h-[46px] absolute left-[105px] top-[733px]"
    style={{
      filter:
        "drop-shadow(0px 2px 4px rgba(24,39,75,0.12)) drop-shadow(0px 4px 4px rgba(24,39,75,0.08))",
    }}
  >
    <div className="w-[164px] h-[46px] absolute left-[-1px] top-[-1px] rounded-xl bg-[#191f2c]" />
    <p className="absolute left-[21px] top-[11px] text-lg font-bold text-left text-white">
      Mode liste
    </p>
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6 absolute left-[119px] top-2.5"
      preserveAspectRatio="xMidYMid meet"
    >
      <path
        d="M9 17H19"
        stroke="white"
       strokeWidth={2}
       strokeLinecap="round"
       strokeLinejoin="round"
      />
      <path
        d="M5 17H5.002V17.002H5V17Z"
        stroke="white"
       strokeWidth={2}
       strokeLinecap="round"
       strokeLinejoin="round"
      />
      <path
        d="M9 12H19"
        stroke="white"
       strokeWidth={2}
       strokeLinecap="round"
       strokeLinejoin="round"
      />
      <path
        d="M5 12H5.002V12.002H5V12Z"
        stroke="white"
       strokeWidth={2}
       strokeLinecap="round"
       strokeLinejoin="round"
      />
      <path
        d="M9 7H19"
        stroke="white"
       strokeWidth={2}
       strokeLinecap="round"
       strokeLinejoin="round"
      />
      <path
        d="M5 7H5.002V7.002H5V7Z"
        stroke="white"
       strokeWidth={2}
       strokeLinecap="round"
       strokeLinejoin="round"
      />
    </svg>
  </div>
</div>


1515151511515151515151515151511511515151515151515151515151515151



<div className="w-[375px] h-[812px] relative overflow-hidden bg-[#f9fbff] mb-8 mt-8">
  <div className="w-[131px] h-[35.4px]">
    <div className="w-[131px] h-[35.4px]">
      <p className="absolute left-[223px] top-[39px] text-[9px] font-bold text-left text-[#43434a]">
        By
      </p>
      <img
        src="nexity-logo-1.png"
        className="w-4 h-4 absolute left-[236.5px] top-[35.5px] object-cover"
      />
      <svg
        width={97}
        height={36}
        viewBox="0 0 97 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute left-[121.81px] top-[24.81px]"
        preserveAspectRatio="none"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14.7453 23.41L14.7407 23.4179C14.0805 24.5402 13.8662 25.3677 13.8662 25.9474C13.8662 26.5927 14.0388 27.1019 14.3655 27.5488C14.8307 28.1538 15.285 28.5466 15.7103 28.7924C16.4653 29.2088 17.1606 29.6164 17.7941 30.0153C18.1547 30.2285 18.5359 30.4879 18.8538 30.8031C19.1298 31.0769 19.6851 31.7125 19.6851 32.6594C19.6851 33.5732 19.2405 34.4265 18.4037 34.9304C17.7331 35.3341 16.9929 35.4015 16.4661 35.4015C14.4605 35.4015 12.542 34.3234 10.7836 32.816L10.777 32.8103L10.7704 32.8046C10.006 32.138 9.36034 31.4102 8.85982 30.6231C7.82421 31.9126 7.04593 32.8455 6.53465 33.4063C6.11811 33.8775 5.70025 34.3018 5.29206 34.6256C5.08526 34.7897 4.83687 34.9635 4.55443 35.1036C4.28689 35.2362 3.86403 35.4015 3.34275 35.4015C1.95883 35.4015 1.11059 34.4601 0.685061 33.7849L0.645838 33.7226L0.611212 33.6578C0.237761 32.9582 0 32.1812 0 31.3497C0 31.0143 0.0691356 30.6397 0.122125 30.3753C0.186073 30.0562 0.277136 29.6644 0.390847 29.2098C0.618863 28.2982 0.955872 27.0634 1.39802 25.5149C2.26023 22.4684 3.12892 18.7974 4.00234 14.4935C4.86254 10.2548 5.28237 6.47787 5.28237 3.15134C5.28237 2.86118 5.29959 2.54116 5.36008 2.22618C5.41034 1.96454 5.52396 1.51761 5.83869 1.09238C6.53482 0.120287 7.62675 0 8.17117 0C9.01283 0 9.65259 0.391964 10.0607 0.762965C10.4422 1.1098 10.7278 1.5288 10.9462 1.91843C11.4801 2.79235 11.7615 3.76073 11.7615 4.78841C11.7615 8.69519 11.0805 13.4466 9.75071 19.0188C11.3809 16.9172 12.8167 15.2095 14.0557 13.904L14.0606 13.8988L14.0656 13.8936C14.666 13.2698 15.2091 12.7489 15.6786 12.3696C15.9111 12.1817 16.1721 11.9903 16.4479 11.836C16.666 11.714 17.158 11.4594 17.7867 11.4594C18.8431 11.4594 19.6799 11.9596 20.2664 12.5801C20.6926 13.0098 21.2946 13.7706 21.2946 14.8154C21.2946 15.3823 21.0739 15.8188 20.9834 15.9887C20.8632 16.2144 20.719 16.4204 20.5877 16.5925C20.3219 16.9408 19.9674 17.3326 19.5601 17.7511C18.788 18.5441 17.9336 19.4187 16.997 20.3748C16.1995 21.189 15.4473 22.1917 14.7499 23.4021L14.7453 23.41ZM18.7772 13.9969C18.4746 13.6695 18.1444 13.5058 17.7867 13.5058C17.4566 13.5058 16.7138 14.106 15.5582 15.3065C13.677 17.2888 11.2794 20.2884 8.36526 24.3054C7.63601 25.3106 6.87442 26.3796 6.08049 27.5123C5.5928 28.2081 5.09291 28.9279 4.58081 29.6717C4.63476 29.5043 4.68829 29.3375 4.74139 29.1712C5.38174 27.166 5.96006 25.2442 6.47632 23.4057C8.62418 15.757 9.69811 9.55123 9.69811 4.78841C9.69811 4.30726 9.60156 3.8482 9.40846 3.41124C9.38336 3.35446 9.35663 3.29804 9.32828 3.242C9.31293 3.21167 9.29711 3.18145 9.28081 3.15134C9.24357 3.08256 9.20384 3.01435 9.16162 2.94671C8.83147 2.34645 8.50132 2.04633 8.17117 2.04633C7.84102 2.04633 7.62092 2.12818 7.51087 2.29189C7.40083 2.42831 7.3458 2.71479 7.3458 3.15134C7.3458 3.3775 7.34395 3.60543 7.34026 3.83513C7.33988 3.85894 7.33948 3.88278 7.33905 3.90664C7.28063 7.20556 6.84268 10.8691 6.02521 14.8973C5.14481 19.2355 4.26442 22.9598 3.38402 26.0702C2.50363 29.1533 2.06343 30.9132 2.06343 31.3497C2.06343 31.7863 2.18723 32.2365 2.43484 32.7003C2.70997 33.1369 3.0126 33.3551 3.34275 33.3551C3.6729 33.3551 4.22315 32.9186 4.99349 32.0455C5.27125 31.7415 5.64405 31.307 6.11187 30.7418C6.11775 30.7347 6.12366 30.7275 6.12957 30.7204C6.24506 30.5807 6.36628 30.4332 6.49324 30.2779C6.52507 30.2389 6.55726 30.1994 6.58981 30.1595C6.93272 29.7387 7.31562 29.2629 7.7385 28.7321C7.79778 28.6577 7.85784 28.5822 7.91869 28.5057C8.36578 27.9431 8.85529 27.3223 9.38722 26.6432C9.50261 26.4959 9.61999 26.3458 9.73938 26.193V26.6432C9.73938 27.4207 9.90794 28.1665 10.2451 28.8807C10.6414 29.7202 11.2707 30.516 12.133 31.2679C13.0888 32.0873 13.9826 32.6654 14.8144 33.0023C15.1078 33.1211 15.3935 33.2099 15.6714 33.2687C15.6932 33.2733 15.7149 33.2777 15.7365 33.282C15.7575 33.2861 15.7784 33.29 15.7993 33.2937C16.0268 33.3347 16.2491 33.3551 16.4661 33.3551C17.2365 33.3551 17.6217 33.1232 17.6217 32.6594C17.6217 32.4138 17.319 32.1137 16.7138 31.759C16.6325 31.7077 16.5499 31.6561 16.4661 31.6043C16.3865 31.5551 16.3057 31.5056 16.2238 31.4559C16.0605 31.3568 15.8928 31.2569 15.7206 31.1561C15.3937 30.9646 15.0507 30.77 14.6916 30.5721C13.9763 30.1629 13.316 29.5626 12.7107 28.7714C12.1054 27.9528 11.8028 27.0115 11.8028 25.9474C11.8028 24.8833 12.188 23.6965 12.9583 22.3868C13.7287 21.0499 14.5816 19.9039 15.517 18.949C16.4524 17.994 17.3053 17.1209 18.0756 16.3297C18.846 15.5384 19.2311 15.0337 19.2311 14.8154C19.2311 14.5698 19.0798 14.297 18.7772 13.9969ZM16.5849 31.3025C16.5849 31.3025 16.5796 31.3038 16.5676 31.305C16.5787 31.3029 16.5849 31.3025 16.5849 31.3025Z"
          fill="url(#paint0_linear_502_5314)"
        />
        <path
          d="M25.0427 32.6101C24.6187 32.6101 24.2654 32.4934 23.9828 32.2598C23.7159 32.0106 23.5824 31.6603 23.5824 31.2087V22.1926C23.5824 21.741 23.7159 21.3984 23.9828 21.1648C24.2654 20.9313 24.6187 20.8145 25.0427 20.8145C25.4666 20.8145 25.8199 20.9313 26.1026 21.1648C26.3852 21.3984 26.5265 21.741 26.5265 22.1926V31.2087C26.5265 31.6603 26.3852 32.0106 26.1026 32.2598C25.8199 32.4934 25.4666 32.6101 25.0427 32.6101ZM25.0427 18.7356C24.5088 18.7356 24.0849 18.5955 23.7708 18.3152C23.4568 18.0193 23.2998 17.6378 23.2998 17.1707C23.2998 16.7035 23.4568 16.3298 23.7708 16.0495C24.0849 15.7692 24.5088 15.629 25.0427 15.629C25.5608 15.629 25.9769 15.7692 26.291 16.0495C26.6207 16.3298 26.7856 16.7035 26.7856 17.1707C26.7856 17.6378 26.6286 18.0193 26.3145 18.3152C26.0005 18.5955 25.5765 18.7356 25.0427 18.7356Z"
          fill="url(#paint1_linear_502_5314)"
        />
        <path
          d="M35.6784 30.4379C36.4635 30.4846 36.856 30.835 36.856 31.489C36.856 31.8627 36.699 32.1508 36.385 32.3532C36.0866 32.5401 35.6548 32.6179 35.0896 32.5868L34.4536 32.5401C31.8157 32.3532 30.4967 30.9517 30.4967 28.3357V23.2437H29.3191C28.8951 23.2437 28.5654 23.1502 28.3299 22.9634C28.11 22.7765 28.0001 22.504 28.0001 22.1459C28.0001 21.7877 28.11 21.5152 28.3299 21.3283C28.5654 21.1415 28.8951 21.048 29.3191 21.048H30.4967V18.8991C30.4967 18.4787 30.6302 18.1439 30.8971 17.8947C31.1641 17.6456 31.5252 17.521 31.9806 17.521C32.4202 17.521 32.7735 17.6456 33.0405 17.8947C33.3074 18.1439 33.4409 18.4787 33.4409 18.8991V21.048H35.4429C35.8668 21.048 36.1887 21.1415 36.4085 21.3283C36.6441 21.5152 36.7618 21.7877 36.7618 22.1459C36.7618 22.504 36.6441 22.7765 36.4085 22.9634C36.1887 23.1502 35.8668 23.2437 35.4429 23.2437H33.4409V28.5459C33.4409 29.6982 33.9747 30.3133 35.0425 30.3912L35.6784 30.4379Z"
          fill="url(#paint2_linear_502_5314)"
        />
        <path
          d="M45.8721 32.6101C45.4482 32.6101 45.0949 32.4934 44.8122 32.2598C44.5453 32.0106 44.4118 31.6603 44.4118 31.2087V17.2641C44.4118 16.8125 44.5453 16.4699 44.8122 16.2363C45.0949 16.0028 45.4482 15.886 45.8721 15.886C46.2961 15.886 46.6494 16.0028 46.932 16.2363C47.2147 16.4699 47.356 16.8125 47.356 17.2641V31.2087C47.356 31.6603 47.2147 32.0106 46.932 32.2598C46.6494 32.4934 46.2961 32.6101 45.8721 32.6101Z"
          fill="url(#paint3_linear_502_5314)"
        />
        <path
          d="M58.948 29.3401C59.215 29.3401 59.4269 29.4413 59.584 29.6437C59.7567 29.8461 59.843 30.1187 59.843 30.4612C59.843 30.944 59.5525 31.3488 58.9716 31.6758C58.4377 31.9717 57.8332 32.2131 57.158 32.3999C56.4828 32.5712 55.839 32.6569 55.2266 32.6569C53.3738 32.6569 51.9057 32.1274 50.8222 31.0685C49.7388 30.0096 49.1971 28.5615 49.1971 26.724C49.1971 25.5561 49.4326 24.5206 49.9037 23.6174C50.3747 22.7142 51.0342 22.0135 51.8821 21.5152C52.7457 21.0169 53.7193 20.7678 54.8027 20.7678C55.839 20.7678 56.7419 20.9935 57.5113 21.4451C58.2807 21.8967 58.8774 22.5352 59.3013 23.3605C59.7253 24.1858 59.9372 25.159 59.9372 26.2802C59.9372 26.9498 59.6389 27.2846 59.0422 27.2846H52.0941C52.1883 28.359 52.4945 29.1532 53.0127 29.6671C53.5308 30.1654 54.2845 30.4145 55.2738 30.4145C55.7762 30.4145 56.2159 30.3522 56.5927 30.2277C56.9853 30.1031 57.4249 29.9318 57.9117 29.7138C58.3827 29.4646 58.7282 29.3401 58.948 29.3401ZM54.8734 22.8232C54.0726 22.8232 53.4288 23.0724 52.942 23.5707C52.471 24.069 52.1883 24.7853 52.0941 25.7196H57.4171C57.3857 24.7697 57.1501 24.0534 56.7105 23.5707C56.2708 23.0724 55.6585 22.8232 54.8734 22.8232Z"
          fill="url(#paint4_linear_502_5314)"
        />
        <path
          d="M74.1187 20.7678C75.5005 20.7678 76.529 21.157 77.2042 21.9356C77.8794 22.7142 78.217 23.8899 78.217 25.4627V31.2087C78.217 31.6447 78.0835 31.9873 77.8166 32.2364C77.5653 32.4856 77.212 32.6101 76.7567 32.6101C76.3013 32.6101 75.9402 32.4856 75.6732 32.2364C75.4063 31.9873 75.2728 31.6447 75.2728 31.2087V25.6262C75.2728 24.7386 75.1001 24.0923 74.7547 23.6875C74.4249 23.2826 73.8989 23.0802 73.1766 23.0802C72.3287 23.0802 71.6457 23.3449 71.1275 23.8743C70.625 24.4038 70.3738 25.1123 70.3738 25.9999V31.2087C70.3738 31.6447 70.2403 31.9873 69.9734 32.2364C69.7065 32.4856 69.3453 32.6101 68.89 32.6101C68.4346 32.6101 68.0735 32.4856 67.8065 32.2364C67.5553 31.9873 67.4297 31.6447 67.4297 31.2087V22.1692C67.4297 21.7644 67.5632 21.4373 67.8301 21.1882C68.097 20.939 68.4582 20.8145 68.9135 20.8145C69.3218 20.8145 69.6515 20.939 69.9028 21.1882C70.1697 21.4218 70.3032 21.7332 70.3032 22.1225V22.7532C70.6957 22.1147 71.2217 21.6242 71.8812 21.2816C72.5407 20.939 73.2865 20.7678 74.1187 20.7678Z"
          fill="url(#paint5_linear_502_5314)"
        />
        <path
          d="M81.7358 32.6101C81.3118 32.6101 80.9585 32.4934 80.6759 32.2598C80.4089 32.0106 80.2755 31.6603 80.2755 31.2087V22.1926C80.2755 21.741 80.4089 21.3984 80.6759 21.1648C80.9585 20.9313 81.3118 20.8145 81.7358 20.8145C82.1597 20.8145 82.513 20.9313 82.7956 21.1648C83.0783 21.3984 83.2196 21.741 83.2196 22.1926V31.2087C83.2196 31.6603 83.0783 32.0106 82.7956 32.2598C82.513 32.4934 82.1597 32.6101 81.7358 32.6101ZM81.7358 18.7356C81.2019 18.7356 80.7779 18.5955 80.4639 18.3152C80.1499 18.0193 79.9928 17.6378 79.9928 17.1707C79.9928 16.7035 80.1499 16.3298 80.4639 16.0495C80.7779 15.7692 81.2019 15.629 81.7358 15.629C82.2539 15.629 82.67 15.7692 82.9841 16.0495C83.3138 16.3298 83.4787 16.7035 83.4787 17.1707C83.4787 17.6378 83.3217 18.0193 83.0076 18.3152C82.6936 18.5955 82.2696 18.7356 81.7358 18.7356Z"
          fill="url(#paint6_linear_502_5314)"
        />
        <path
          d="M95.4926 15.886C95.9323 15.886 96.2934 16.0105 96.5761 16.2597C96.8587 16.5088 97 16.8358 97 17.2407V31.2087C97 31.6291 96.8665 31.9639 96.5996 32.213C96.3327 32.4622 95.9794 32.5868 95.5397 32.5868C95.1001 32.5868 94.7468 32.4622 94.4798 32.213C94.2129 31.9639 94.0794 31.6291 94.0794 31.2087V30.6247C93.734 31.2632 93.2315 31.7615 92.572 32.1196C91.9283 32.4778 91.1903 32.6568 90.3581 32.6568C89.3688 32.6568 88.4817 32.4077 87.6966 31.9094C86.9272 31.4111 86.3226 30.7104 85.883 29.8072C85.459 28.8885 85.2471 27.8374 85.2471 26.6539C85.2471 25.4704 85.459 24.4349 85.883 23.5473C86.3226 22.6597 86.9272 21.9746 87.6966 21.4918C88.466 21.0091 89.3531 20.7677 90.3581 20.7677C91.1903 20.7677 91.9283 20.939 92.572 21.2816C93.2158 21.6242 93.7104 22.1069 94.0559 22.7298V17.194C94.0559 16.8047 94.1815 16.4933 94.4327 16.2597C94.6997 16.0105 95.053 15.886 95.4926 15.886ZM91.1353 30.3911C92.0774 30.3911 92.7997 30.0719 93.3022 29.4335C93.8204 28.795 94.0794 27.8841 94.0794 26.7006C94.0794 25.5171 93.8204 24.614 93.3022 23.9911C92.7997 23.3527 92.0853 23.0334 91.1589 23.0334C90.2168 23.0334 89.4866 23.3449 88.9684 23.9677C88.4503 24.5906 88.1912 25.486 88.1912 26.6539C88.1912 27.8374 88.4503 28.7561 88.9684 29.4101C89.4866 30.0641 90.2089 30.3911 91.1353 30.3911Z"
          fill="url(#paint7_linear_502_5314)"
        />
        <defs>
          <lineargradient
            id="paint0_linear_502_5314"
            x1="92.364"
            y1="-1.6269"
            x2="73.5427"
            y2="61.5915"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#C399DB" />
            <stop offset={1} stopColor="#5882F7" />
          </lineargradient>
          <lineargradient
            id="paint1_linear_502_5314"
            x1="92.364"
            y1="-1.6269"
            x2="73.5427"
            y2="61.5915"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#C399DB" />
            <stop offset={1} stopColor="#5882F7" />
          </lineargradient>
          <lineargradient
            id="paint2_linear_502_5314"
            x1="92.364"
            y1="-1.6269"
            x2="73.5427"
            y2="61.5915"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#C399DB" />
            <stop offset={1} stopColor="#5882F7" />
          </lineargradient>
          <lineargradient
            id="paint3_linear_502_5314"
            x1="92.364"
            y1="-1.6269"
            x2="73.5427"
            y2="61.5915"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#C399DB" />
            <stop offset={1} stopColor="#5882F7" />
          </lineargradient>
          <lineargradient
            id="paint4_linear_502_5314"
            x1="92.364"
            y1="-1.6269"
            x2="73.5427"
            y2="61.5915"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#C399DB" />
            <stop offset={1} stopColor="#5882F7" />
          </lineargradient>
          <lineargradient
            id="paint5_linear_502_5314"
            x1="92.364"
            y1="-1.6269"
            x2="73.5427"
            y2="61.5915"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#C399DB" />
            <stop offset={1} stopColor="#5882F7" />
          </lineargradient>
          <lineargradient
            id="paint6_linear_502_5314"
            x1="92.364"
            y1="-1.6269"
            x2="73.5427"
            y2="61.5915"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#C399DB" />
            <stop offset={1} stopColor="#5882F7" />
          </lineargradient>
          <lineargradient
            id="paint7_linear_502_5314"
            x1="92.364"
            y1="-1.6269"
            x2="73.5427"
            y2="61.5915"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#C399DB" />
            <stop offset={1} stopColor="#5882F7" />
          </lineargradient>
        </defs>
      </svg>
    </div>
  </div>
  <div className="w-[375px] h-[812px] absolute left-[-1px] top-[-1px] opacity-30 bg-[#051f52]" />
  <div className="flex flex-col justify-center items-center w-[375px] absolute left-[-1px] top-[119px] overflow-hidden gap-4 p-6 rounded-tl-xl rounded-tr-xl bg-white border border-[#eaeffa]">
    <div className="flex justify-end items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-[90px]">
      <div className="flex-grow-0 flex-shrink-0 w-[108px] h-6 relative">
        <img
          src="static/img/studea.svg"
          className="w-[108px] h-6 absolute left-[-1px] top-[-1px] object-cover"
        />
      </div>
      <svg
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
        preserveAspectRatio="none"
      >
        <path
          d="M18 18L6 6"
          stroke="#14181F"
         strokeWidth={2}
         strokeLinecap="round"
         strokeLinejoin="round"
        />
        <path
          d="M18 6L5.99994 18"
          stroke="#14181F"
         strokeWidth={2}
         strokeLinecap="round"
         strokeLinejoin="round"
        />
      </svg>
    </div>
    <div className="flex-grow-0 flex-shrink-0 w-[343px] h-[55px] relative">
      <div className="w-[343px] h-[55px] absolute left-[-1.5px] top-[-1.5px] rounded-xl bg-white border-2 border-[#c23d3b]" />
      <p className="w-[264px] absolute left-4 top-4 text-lg font-bold text-left text-[#0e215c]">
        Saint-Denis (92)
      </p>
      <div className="w-[39px] h-[39px] absolute left-[295px] top-[7px] rounded-xl bg-[#c23d3b]" />
      <svg
        width={23}
        height={23}
        viewBox="0 0 23 23"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-[23px] h-[23px] absolute left-[303px] top-[15px]"
        preserveAspectRatio="xMidYMid meet"
      >
        <path
          d="M9.58333 16.2917C13.2882 16.2917 16.2917 13.2882 16.2917 9.58333C16.2917 5.87842 13.2882 2.875 9.58333 2.875C5.87842 2.875 2.875 5.87842 2.875 9.58333C2.875 13.2882 5.87842 16.2917 9.58333 16.2917Z"
          stroke="white"
         strokeWidth={2}
         strokeLinecap="round"
         strokeLinejoin="round"
        />
        <path
          d="M14.375 14.375L20.125 20.125"
          stroke="white"
         strokeWidth={2}
         strokeLinecap="round"
         strokeLinejoin="round"
        />
      </svg>
    </div>
    <div className="flex-grow-0 flex-shrink-0 w-[343px] h-[141px] relative">
      <div className="w-[343px] h-[141px] absolute left-[-1.5px] top-[-1.5px] rounded-xl bg-white border-2 border-[#eff4ff]" />
      <p className="w-[179px] absolute left-[133px] top-[78px] text-xs font-medium text-left text-[#1a2e6c]">
        de 1 à 3 pièces
      </p>
      <p className="w-[161px] h-[18px] absolute left-[133px] top-4 text-lg font-bold text-left text-[#c23d3b]">
        Titre du bien
      </p>
      <p className="w-[161px] absolute left-[133px] top-[37px] text-xs font-medium text-left text-[#6976a0]">
        <span className="w-[161px] text-xs font-medium text-left text-[#6976a0]">
          92500 Rueil-Malmaison
        </span>
        <br />
        <span className="w-[161px] text-xs font-medium text-left text-[#6976a0]">Buzenval</span>
      </p>
      <p className="w-[61px] absolute left-[133px] top-[94px] text-xs font-medium text-left text-[#6976a0]">
        à partir de
      </p>
      <p className="w-[117px] absolute left-[196px] top-[94px] text-xs font-medium text-left text-[#1a2e6c]">
        230 000€
      </p>
      <p className="absolute left-[133px] top-[110px] text-xs font-medium text-left text-[#6976a0]">
        soit
      </p>
      <p className="w-[68px] absolute left-[158px] top-[110px] text-xs font-medium text-left text-[#1a2e6c]">
        700€ / mois
      </p>
      <div className="w-[109px] h-[109px]">
        <div className="w-[109px] h-[109px] absolute left-[15.58px] top-[15.58px] rounded-[10px] bg-[#c4c4c4]" />
       
      </div>
    </div>
    <div className="flex-grow-0 flex-shrink-0 w-[343px] h-[141px] relative">
      <div className="w-[343px] h-[141px] absolute left-[-1.5px] top-[-1.5px] rounded-xl bg-white border-2 border-[#eff4ff]" />
      <p className="w-[179px] absolute left-[133px] top-[78px] text-xs font-medium text-left text-[#1a2e6c]">
        de 1 à 3 pièces
      </p>
      <p className="w-[161px] h-[18px] absolute left-[133px] top-4 text-lg font-bold text-left text-[#c23d3b]">
        Titre du bien
      </p>
      <p className="w-[161px] absolute left-[133px] top-[37px] text-xs font-medium text-left text-[#6976a0]">
        <span className="w-[161px] text-xs font-medium text-left text-[#6976a0]">
          92500 Rueil-Malmaison
        </span>
        <br />
        <span className="w-[161px] text-xs font-medium text-left text-[#6976a0]">Buzenval</span>
      </p>
      <p className="w-[61px] absolute left-[133px] top-[94px] text-xs font-medium text-left text-[#6976a0]">
        à partir de
      </p>
      <p className="w-[117px] absolute left-[196px] top-[94px] text-xs font-medium text-left text-[#1a2e6c]">
        230 000€
      </p>
      <p className="absolute left-[133px] top-[110px] text-xs font-medium text-left text-[#6976a0]">
        soit
      </p>
      <p className="w-[68px] absolute left-[158px] top-[110px] text-xs font-medium text-left text-[#1a2e6c]">
        700€ / mois
      </p>
      <div className="w-[109px] h-[109px]">
        <div className="w-[109px] h-[109px] absolute left-[15.58px] top-[15.58px] rounded-[10px] bg-[#c4c4c4]" />
       
      </div>
    </div>
    <div className="flex-grow-0 flex-shrink-0 w-[343px] h-[141px] relative">
      <div className="w-[343px] h-[141px] absolute left-[-1.5px] top-[-1.5px] rounded-xl bg-white border-2 border-[#eff4ff]" />
      <p className="w-[179px] absolute left-[133px] top-[78px] text-xs font-medium text-left text-[#1a2e6c]">
        de 1 à 3 pièces
      </p>
      <p className="w-[161px] h-[18px] absolute left-[133px] top-4 text-lg font-bold text-left text-[#c23d3b]">
        Titre du bien
      </p>
      <p className="w-[161px] absolute left-[133px] top-[37px] text-xs font-medium text-left text-[#6976a0]">
        <span className="w-[161px] text-xs font-medium text-left text-[#6976a0]">
          92500 Rueil-Malmaison
        </span>
        <br />
        <span className="w-[161px] text-xs font-medium text-left text-[#6976a0]">Buzenval</span>
      </p>
      <p className="w-[61px] absolute left-[133px] top-[94px] text-xs font-medium text-left text-[#6976a0]">
        à partir de
      </p>
      <p className="w-[117px] absolute left-[196px] top-[94px] text-xs font-medium text-left text-[#1a2e6c]">
        230 000€
      </p>
      <p className="absolute left-[133px] top-[110px] text-xs font-medium text-left text-[#6976a0]">
        soit
      </p>
      <p className="w-[68px] absolute left-[158px] top-[110px] text-xs font-medium text-left text-[#1a2e6c]">
        700€ / mois
      </p>
      <div className="w-[109px] h-[109px]">
        <div className="w-[109px] h-[109px] absolute left-[15.58px] top-[15.58px] rounded-[10px] bg-[#c4c4c4]" />
       
      </div>
    </div>
    <div className="flex-grow-0 flex-shrink-0 w-[343px] h-[141px] relative">
      <div className="w-[343px] h-[141px] absolute left-[-1.5px] top-[-1.5px] rounded-xl bg-white border-2 border-[#eff4ff]" />
      <p className="w-[179px] absolute left-[133px] top-[78px] text-xs font-medium text-left text-[#1a2e6c]">
        de 1 à 3 pièces
      </p>
      <p className="w-[161px] h-[18px] absolute left-[133px] top-4 text-lg font-bold text-left text-[#c23d3b]">
        Titre du bien
      </p>
      <p className="w-[161px] absolute left-[133px] top-[37px] text-xs font-medium text-left text-[#6976a0]">
        <span className="w-[161px] text-xs font-medium text-left text-[#6976a0]">
          92500 Rueil-Malmaison
        </span>
        <br />
        <span className="w-[161px] text-xs font-medium text-left text-[#6976a0]">Buzenval</span>
      </p>
      <p className="w-[61px] absolute left-[133px] top-[94px] text-xs font-medium text-left text-[#6976a0]">
        à partir de
      </p>
      <p className="w-[117px] absolute left-[196px] top-[94px] text-xs font-medium text-left text-[#1a2e6c]">
        230 000€
      </p>
      <p className="absolute left-[133px] top-[110px] text-xs font-medium text-left text-[#6976a0]">
        soit
      </p>
      <p className="w-[68px] absolute left-[158px] top-[110px] text-xs font-medium text-left text-[#1a2e6c]">
        700€ / mois
      </p>
      <div className="w-[109px] h-[109px]">
        <div className="w-[109px] h-[109px] absolute left-[15.58px] top-[15.58px] rounded-[10px] bg-[#c4c4c4]" />
       
      </div>
    </div>
  </div>
  <div className="w-[164px] h-[46px] absolute left-[104px] top-[733px]">
    <div className="w-[164px] h-[46px] absolute left-[-1px] top-[-1px] rounded-xl bg-[#191f2c]" />
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6 absolute left-[123px] top-2.5"
      preserveAspectRatio="xMidYMid meet"
    >
      <path
        d="M15 6L21 3V18L15 21V6Z"
        stroke="white"
       strokeWidth={2}
       strokeLinecap="round"
       strokeLinejoin="round"
      />
      <path
        d="M9 18L15 21V6L9 3V18Z"
        stroke="white"
       strokeWidth={2}
       strokeLinecap="round"
       strokeLinejoin="round"
      />
      <path
        d="M3 6L9 3V18L3 21V6Z"
        stroke="white"
       strokeWidth={2}
       strokeLinecap="round"
       strokeLinejoin="round"
      />
    </svg>
    <p className="absolute left-4 top-[11px] text-lg font-bold text-left text-white">Mode carte</p>
  </div>
</div>



Landing Page PC



<div className="w-[1480px] h-[1930px] relative overflow-hidden bg-[#f9fbff] mb-8 mt-8">
  <div className="w-[344px] h-[46px]">
    <div className="w-[163.32px] h-[46px]">
      <div className="w-[163.32px] h-[46px] absolute left-[1123px] top-[-418px] rounded-[55px] bg-white border-2 border-[#4f80ff]" />
      <p className="w-[115.69px] h-[23.7px] absolute left-[1147.48px] top-[-405.5px] text-base font-bold text-center text-[#4f80ff]">
        Se connecter
      </p>
    </div>
    <div className="w-[162.3px] h-[46px]">
      <div
        className="w-[162.3px] h-[46px] absolute left-[1305.2px] top-[-417.5px] rounded-[55px] bg-[#4f80ff]"
        style={{ boxShadow: "0px 10px 44px -5px rgba(14,108,218,0.35)" }}
      />
      <p className="w-[74.52px] h-[23px] absolute left-[1349.59px] top-[-405.5px] text-base font-bold text-center text-white">
        S’inscrire
      </p>
    </div>
  </div>
  <img
    src="static/img/icons/House1.svg"
    className="w-[515px] h-[460px] absolute left-[846.42px] top-[135.42px] rounded-[20px] object-cover"
  />
  <p className="w-[426px] absolute left-[108px] top-80 text-xl text-left text-[#849cd9]">
    <span className="w-[426px] text-xl text-left text-[#849cd9]">Réalisez votre </span>
    <span className="w-[426px] text-xl font-bold text-left text-[#849cd9]">
      premier achat immobilier
    </span>
    <span className="w-[426px] text-xl text-left text-[#849cd9]"> pour seulement </span>
    <span className="w-[426px] text-xl font-bold text-left text-[#849cd9]">699 €/mois !(1)</span>
  </p>
  <div className="w-[936px] h-[97px] absolute left-[106.5px] top-[398.5px] rounded-[20px] bg-white" />
  <div className="w-[1251px] h-[298px] absolute left-[109.5px] top-[1389.5px] rounded-[20px] bg-white" />
  <div className="flex justify-center items-center w-[213px] h-14 absolute left-[172px] top-[1570px] gap-2.5 px-[103px] py-[9px] rounded-xl bg-white border border-[#3679ff]">
    <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-[#3679ff]">
      Télécharger notre guide
    </p>
  </div>
  <div
    className="flex justify-center items-center w-[295px] absolute left-[1140px] top-[23px] gap-2.5 px-[120px] py-4 rounded-xl"
    style={{ background: "linear-gradient(to bottom, #81a3f9 -0.06%, #3462d8 108.09%)" }}
  >
    <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-white">
      Connexion / Inscription
    </p>
  </div>
  <div className="w-[150px] h-12">
    <p className="absolute left-[152px] top-[451px] text-base font-semibold text-left text-[#8c97b6]">
      Où cherchez-vous ?
    </p>
    <p className="absolute left-[152px] top-[425px] text-base font-bold text-left text-[#4f80ff]">
      Localisation
    </p>
  </div>
  <div className="w-[278px] h-12">
    <p className="absolute left-[365px] top-[451px] text-base font-semibold text-left text-[#8c97b6]">
      Combien de pièces souhaitez-vous ?
    </p>
    <p className="absolute left-[365px] top-[425px] text-base font-bold text-left text-[#4f80ff]">
      Nombre de pièces{" "}
    </p>
  </div>
  <div className="w-[179px] h-12">
    <p className="absolute left-[735px] top-[451px] text-base font-semibold text-left text-[#8c97b6]">
      Quel est votre budget ?
    </p>
    <p className="absolute left-[735px] top-[425px] text-base font-bold text-left text-[#4f80ff]">
      Budget
    </p>
  </div>
  <svg
    width={1}
    height={49}
    viewBox="0 0 1 49"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="absolute left-[332px] top-[423px]"
    preserveAspectRatio="xMidYMid meet"
  >
    <line x1="0.5" y1="2.18557e-8" x2="0.499998" y2={49} stroke="url(#paint0_linear_1215_5710)" />
    <defs>
      <lineargradient
        id="paint0_linear_1215_5710"
        x1="-0.00000107093"
        y1="24.5"
        x2={-1}
        y2="24.5"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#3563DC" />
        <stop offset="0.0434107" stopColor="#3E6FEF" />
        <stop offset="0.940497" stopColor="#3062E3" />
        <stop offset={1} stopColor="#154AD2" />
      </lineargradient>
    </defs>
  </svg>
  <svg
    width={1}
    height={49}
    viewBox="0 0 1 49"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="absolute left-[711px] top-[423px]"
    preserveAspectRatio="xMidYMid meet"
  >
    <line x1="0.5" y1="2.18557e-8" x2="0.499998" y2={49} stroke="url(#paint0_linear_1215_5711)" />
    <defs>
      <lineargradient
        id="paint0_linear_1215_5711"
        x1="-0.00000107093"
        y1="24.5"
        x2={-1}
        y2="24.5"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#3563DC" />
        <stop offset="0.0434107" stopColor="#3E6FEF" />
        <stop offset="0.940497" stopColor="#3062E3" />
        <stop offset={1} stopColor="#154AD2" />
      </lineargradient>
    </defs>
  </svg>
  <p className="absolute left-[1050px] top-[35px] text-xl font-bold text-center text-[#113eb6]">
    Blog
  </p>
  <p className="absolute left-[824px] top-[35px] text-xl font-bold text-center text-[#113eb6]">
    Qui sommes-nous ?
  </p>
  <div className="w-[72px] h-[37px]">
    <p className="absolute left-[720px] top-[35px] text-xl font-bold text-center text-[#113eb6]">
      Accueil
    </p>
    <svg
      width={30}
      height={3}
      viewBox="0 0 30 3"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute left-[739.5px] top-[70.5px]"
      preserveAspectRatio="xMidYMid meet"
    >
      <line y1="1.5" x2={30} y2="1.5" stroke="#113EB6"strokeWidth={3} />
    </svg>
  </div>
  <p className="w-[489px] absolute left-[166px] top-[1136px] text-lg font-semibold text-left text-black">
    <br />
  </p>
  <div className="w-[300px] h-[198px]">
    <p className="w-[253px] absolute left-[109px] top-[727px] text-xl font-bold text-center text-[#0e215c]">
      Des logements dans toute la France
    </p>
    <p className="w-[300px] absolute left-[86px] top-[787px] text-lg text-center text-[#849cd9]">
      Accéder à notre carte avec plus de 2 500 logements neufs disponibles.
    </p>
    <svg
      width={53}
      height={53}
      viewBox="0 0 53 53"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-[53px] h-[53px] absolute left-[208.5px] top-[657.5px]"
      preserveAspectRatio="none"
    >
      <circle cx="26.5" cy="26.5" r="26.5" fill="#DCE6FF" />
      <path
        d="M33.6585 24.701L26.6585 18.576C26.2815 18.2461 25.7185 18.2461 25.3415 18.576L18.3415 24.701C18.1245 24.8909 18 25.1653 18 25.4536V33.9998C18 34.5521 18.4477 34.9998 19 34.9998H23C23.5523 34.9998 24 34.5521 24 33.9998V29.9998C24 29.4476 24.4477 28.9998 25 28.9998H27C27.5523 28.9998 28 29.4476 28 29.9998V33.9998C28 34.5521 28.4477 34.9998 29 34.9998H33C33.5523 34.9998 34 34.5521 34 33.9998V25.4536C34 25.1653 33.8755 24.8909 33.6585 24.701Z"
        stroke="#6A7CA8"
       strokeWidth={2}
       strokeLinecap="round"
       strokeLinejoin="round"
      />
    </svg>
  </div>
  <div className="w-[300px] h-[221px]">
    <p className="w-[300px] absolute left-[1082px] top-[787px] text-lg text-center text-[#849cd9]">
      Une même personne pour vous accompagner, de la recherche de votre appartement jusqu’à votre
      emménagement.{" "}
    </p>
    <p className="w-[189px] absolute left-[1137px] top-[727px] text-xl font-bold text-center text-[#0e215c]">
      Un unique conseiller dédié
    </p>
    <svg
      width={53}
      height={53}
      viewBox="0 0 53 53"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-[53px] h-[53px] absolute left-[1204.5px] top-[657.5px]"
      preserveAspectRatio="none"
    >
      <circle cx="26.5" cy="26.5" r="26.5" fill="#F5EAF9" />
      <path
        d="M21 35C21 33.3431 23.2386 32 26 32C28.7614 32 31 33.3431 31 35"
        stroke="#B985CC"
       strokeWidth={2}
       strokeLinecap="round"
       strokeLinejoin="round"
      />
      <path
        d="M32 29.2495C33.7659 29.7124 35 30.7697 35 31.9999"
        stroke="#B985CC"
       strokeWidth={2}
       strokeLinecap="round"
       strokeLinejoin="round"
      />
      <path
        d="M20 29.2495C18.2341 29.7124 17 30.7697 17 31.9999"
        stroke="#B985CC"
       strokeWidth={2}
       strokeLinecap="round"
       strokeLinejoin="round"
      />
      <path
        d="M26 29C27.6569 29 29 27.6569 29 26C29 24.3431 27.6569 23 26 23C24.3431 23 23 24.3431 23 26C23 27.6569 24.3431 29 26 29Z"
        stroke="#B985CC"
       strokeWidth={2}
       strokeLinecap="round"
       strokeLinejoin="round"
      />
      <path
        d="M32 25.2361C32.6137 24.6868 33 23.8885 33 23C33 21.3431 31.6569 20 30 20C29.2316 20 28.5308 20.2889 28 20.7639"
        stroke="#B985CC"
       strokeWidth={2}
       strokeLinecap="round"
       strokeLinejoin="round"
      />
      <path
        d="M20 25.2361C19.3863 24.6868 19 23.8885 19 23C19 21.3431 20.3431 20 22 20C22.7684 20 23.4692 20.2889 24 20.7639"
        stroke="#B985CC"
       strokeWidth={2}
       strokeLinecap="round"
       strokeLinejoin="round"
      />
    </svg>
  </div>
  <div className="w-[300px] h-[152px]">
    <p className="w-[300px] absolute left-[418px] top-[787px] text-lg text-center text-[#849cd9]">
      Prêt à Taux Zéro - TVA 5,5 %
    </p>
    <p className="w-[262px] absolute left-[437px] top-[727px] text-xl font-bold text-center text-[#0e215c]">
      Des aides pour votre premier achat{" "}
    </p>
    <svg
      width={53}
      height={53}
      viewBox="0 0 53 53"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-[53px] h-[53px] absolute left-[540.5px] top-[657.5px]"
      preserveAspectRatio="none"
    >
      <circle cx="26.5" cy="26.5" r="26.5" fill="#EDF8F0" />
      <path
        d="M29 21L35 18V33L29 36V21Z"
        stroke="#93C8A2"
       strokeWidth={2}
       strokeLinecap="round"
       strokeLinejoin="round"
      />
      <path
        d="M23 33L29 36V21L23 18V33Z"
        stroke="#93C8A2"
       strokeWidth={2}
       strokeLinecap="round"
       strokeLinejoin="round"
      />
      <path
        d="M17 21L23 18V33L17 36V21Z"
        stroke="#93C8A2"
       strokeWidth={2}
       strokeLinecap="round"
       strokeLinejoin="round"
      />
    </svg>
  </div>
  <p className="w-[1243px] absolute left-[119px] top-[1731px] text-lg font-light text-left text-[#98aad7]">
    <span className="w-[1243px] text-lg font-light text-left text-[#98aad7]">
      (1) Mensualités données à titre indicatif uniquement et non contractuelles, pour l’achat d’un
      appartement de 187.000 €, sur une base de durée de 25 ans, à un taux d’intérêt fixe moyen
      constaté sur le marché de 1.4%, hors frais, hors assurance et avec un apport personnel de
      7.500€.{" "}
    </span>
    <br />
    <span className="w-[1243px] text-lg font-light text-left text-[#98aad7]">
      Pour être éligible au PTZ : il doit s’agir de votre premier achat en résidence principale et
      votre revenu fiscal de référence sur l’année 2 ans avant la réservation de l’appartement doit
      être inférieur à 37 000 €
    </span>
    <br />
    <br />
  </p>
  <p className="w-[742px] absolute left-[108px] top-[236px] text-[28px] text-left text-[#113eb6]">
    <span className="w-[742px] text-[28px] text-left text-[#113eb6]">
      Etudiants, Jeunes Actifs.
    </span>
    <br />
    <span className="w-[742px] text-[28px] font-bold text-left text-[#113eb6]">
      La première Offre Jeune pour devenir propriétaire{" "}
    </span>
  </p>
  <p className="absolute left-[105px] top-[1039px] text-[28px] font-bold text-left text-[#0e215c]">
    Nos services partenaires pour les étudiants
  </p>
  <p className="w-[534px] absolute left-[105px] top-[1089px] text-lg text-left text-[#849cd9]">
    <span className="w-[534px] text-lg text-left text-[#849cd9]">Kit le nid vous propose un </span>
    <span className="w-[534px] text-lg font-bold text-left text-[#849cd9]">
      ensemble d’offres avantageuses
    </span>
    <span className="w-[534px] text-lg text-left text-[#849cd9]">
      {" "}
      pour mieux répondre à vos besoins lors de vos études :{" "}
    </span>
    <br />
    <span className="w-[534px] text-lg text-left text-[#849cd9]">
      une location en résidence étudiante
    </span>
    <br />
    <span className="w-[534px] text-lg text-left text-[#849cd9]">une mutuelle santé</span>
    <br />
    <span className="w-[534px] text-lg text-left text-[#849cd9]">un garant solide pour vous</span>
    <br />
  </p>
  <svg
    width={64}
    height={64}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-16 h-16"
    preserveAspectRatio="xMidYMid meet"
  >
    <rect
      x="7.68018"
      y="7.68018"
      width="49.92"
      height="49.92"
      rx="15.36"
      fill="url(#paint0_linear_1215_5775)"
    />
    <path
      d="M30.1868 38.7734C34.929 38.7734 38.7734 34.929 38.7734 30.1868C38.7734 25.4445 34.929 21.6001 30.1868 21.6001C25.4445 21.6001 21.6001 25.4445 21.6001 30.1868C21.6001 34.929 25.4445 38.7734 30.1868 38.7734Z"
      stroke="white"
     strokeWidth="2.56"
     strokeLinecap="round"
     strokeLinejoin="round"
    />
    <path
      d="M36.3198 36.3198L43.6798 43.6798"
      stroke="white"
     strokeWidth="2.56"
     strokeLinecap="round"
     strokeLinejoin="round"
    />
    <defs>
      <lineargradient
        id="paint0_linear_1215_5775"
        x1="32.6402"
        y1="5.20253"
        x2="32.6402"
        y2="61.6378"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.0434107" stopColor="#81A3F9" />
        <stop offset={1} stopColor="#3462D8" />
      </lineargradient>
    </defs>
  </svg>
  <div className="w-[162px] h-[65px]">
    <svg
      width={119}
      height={44}
      viewBox="0 0 119 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute left-[29.77px] top-[17.77px]"
      preserveAspectRatio="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.0896 28.7195L18.0839 28.7292C17.274 30.1061 17.0111 31.1212 17.0111 31.8324C17.0111 32.6241 17.2228 33.2487 17.6237 33.797C18.1944 34.5392 18.7517 35.0211 19.2734 35.3227C20.1997 35.8335 21.0527 36.3335 21.8299 36.8229C22.2723 37.0844 22.7399 37.4027 23.1299 37.7894C23.4685 38.1252 24.1498 38.905 24.1498 40.0667C24.1498 41.1877 23.6044 42.2345 22.5777 42.8527C21.7551 43.348 20.847 43.4307 20.2007 43.4307C17.7402 43.4307 15.3866 42.1081 13.2293 40.2588L13.2212 40.2518L13.2132 40.2448C12.2754 39.4271 11.4833 38.5341 10.8693 37.5686C9.59877 39.1505 8.64397 40.295 8.01674 40.983C7.50572 41.561 6.99308 42.0816 6.49232 42.4789C6.23861 42.6802 5.93389 42.8934 5.58739 43.0652C5.25918 43.2279 4.74041 43.4307 4.1009 43.4307C2.4031 43.4307 1.36248 42.2757 0.840436 41.4474L0.792317 41.371L0.749837 41.2915C0.291686 40.4333 0 39.48 0 38.46C0 38.0485 0.0848159 37.5889 0.149824 37.2645C0.228275 36.8731 0.339991 36.3924 0.479493 35.8346C0.759224 34.7163 1.17267 33.2014 1.71509 31.3018C2.77286 27.5644 3.83857 23.0607 4.91009 17.7807C5.96539 12.5806 6.48044 7.94708 6.48044 3.86608C6.48044 3.5101 6.50155 3.11751 6.57577 2.73108C6.63742 2.41011 6.77682 1.86181 7.16293 1.34014C8.01694 0.147568 9.35653 0 10.0244 0C11.057 0 11.8418 0.480863 12.3425 0.936009C12.8106 1.36151 13.1609 1.87554 13.4289 2.35353C14.0839 3.42566 14.4291 4.61368 14.4291 5.87444C14.4291 10.6673 13.5936 16.4964 11.9622 23.3323C13.9622 20.754 15.7236 18.6591 17.2435 17.0575L17.2496 17.0511L17.2558 17.0447C17.9923 16.2795 18.6586 15.6404 19.2346 15.175C19.5198 14.9446 19.84 14.7097 20.1784 14.5205C20.4459 14.3708 21.0495 14.0585 21.8208 14.0585C23.1169 14.0585 24.1433 14.6721 24.8629 15.4333C25.3858 15.9605 26.1243 16.8938 26.1243 18.1756C26.1243 18.8711 25.8535 19.4066 25.7425 19.615C25.595 19.8919 25.4181 20.1447 25.257 20.3558C24.931 20.783 24.4961 21.2637 23.9964 21.7771C23.0492 22.7499 22.001 23.8229 20.852 24.9959C19.8737 25.9947 18.9508 27.2249 18.0952 28.7098L18.0896 28.7195ZM23.0359 17.1714C22.6647 16.7698 22.2596 16.5689 21.8208 16.5689C21.4158 16.5689 20.5045 17.3053 19.0869 18.7781C16.779 21.2099 13.8376 24.8899 10.2625 29.818C9.36789 31.0512 8.43357 32.3626 7.45958 33.7522C6.86127 34.6058 6.248 35.4888 5.61975 36.4014C5.68594 36.196 5.75161 35.9913 5.81675 35.7873C6.60235 33.3274 7.31182 30.9696 7.94518 28.7142C10.5802 19.3307 11.8977 11.7175 11.8977 5.87444C11.8977 5.28416 11.7792 4.72099 11.5423 4.18493C11.5115 4.11526 11.4788 4.04605 11.444 3.9773C11.4251 3.94009 11.4057 3.90302 11.3857 3.86608C11.34 3.7817 11.2913 3.69802 11.2395 3.61504C10.8345 2.87864 10.4295 2.51044 10.0244 2.51044C9.6194 2.51044 9.34938 2.61086 9.21437 2.8117C9.07936 2.97906 9.01186 3.33052 9.01186 3.86608C9.01186 4.14353 9.00959 4.42315 9.00506 4.70495C9.00459 4.73417 9.0041 4.76341 9.00358 4.79268C8.93191 8.83981 8.39463 13.3343 7.39175 18.276C6.31168 23.5982 5.2316 28.1672 4.15153 31.983C3.07146 35.7654 2.53142 37.9244 2.53142 38.46C2.53142 38.9955 2.68331 39.5478 2.98708 40.1169C3.3246 40.6524 3.69587 40.9202 4.1009 40.9202C4.50593 40.9202 5.18097 40.3846 6.12604 39.3135C6.4668 38.9406 6.92414 38.4075 7.49806 37.7141C7.50529 37.7054 7.51253 37.6967 7.51978 37.6879C7.66147 37.5166 7.81018 37.3356 7.96593 37.145C8.00498 37.0972 8.04447 37.0488 8.08441 36.9998C8.50509 36.4835 8.97483 35.8998 9.49363 35.2487C9.56635 35.1574 9.64003 35.0648 9.71468 34.9709C10.2632 34.2808 10.8637 33.5191 11.5163 32.686C11.6578 32.5052 11.8018 32.3211 11.9483 32.1337V32.686C11.9483 33.6398 12.1551 34.5548 12.5687 35.4309C13.0549 36.4609 13.8269 37.4371 14.8848 38.3596C16.0574 39.3648 17.1539 40.074 18.1744 40.4873C18.5343 40.6331 18.8848 40.7421 19.2258 40.8142C19.2525 40.8198 19.2791 40.8253 19.3056 40.8305C19.3313 40.8355 19.357 40.8403 19.3826 40.8449C19.6618 40.8951 19.9345 40.9202 20.2007 40.9202C21.1458 40.9202 21.6183 40.6357 21.6183 40.0667C21.6183 39.7654 21.2471 39.3972 20.5045 38.9621C20.4048 38.8991 20.3035 38.8359 20.2007 38.7723C20.103 38.7119 20.0039 38.6512 19.9034 38.5902C19.7031 38.4687 19.4974 38.3461 19.2861 38.2224C18.885 37.9875 18.4642 37.7487 18.0237 37.506C17.1462 37.0039 16.3361 36.2675 15.5936 35.2968C14.851 34.2926 14.4797 33.1378 14.4797 31.8324C14.4797 30.527 14.9523 29.0709 15.8973 27.4642C16.8424 25.8241 17.8887 24.4182 19.0363 23.2467C20.1839 22.0752 21.2302 21.004 22.1752 20.0333C23.1203 19.0626 23.5928 18.4434 23.5928 18.1756C23.5928 17.8744 23.4072 17.5396 23.0359 17.1714ZM20.3464 38.402C20.3464 38.402 20.34 38.4036 20.3252 38.405C20.3388 38.4025 20.3464 38.402 20.3464 38.402Z"
        fill="url(#paint0_linear_1215_5681)"
      />
      <path
        d="M30.7225 40.0063C30.2023 40.0063 29.7689 39.863 29.4222 39.5764C29.0947 39.2708 28.931 38.8409 28.931 38.2869V27.2259C28.931 26.6719 29.0947 26.2517 29.4222 25.9651C29.7689 25.6786 30.2023 25.5353 30.7225 25.5353C31.2426 25.5353 31.676 25.6786 32.0227 25.9651C32.3695 26.2517 32.5428 26.6719 32.5428 27.2259V38.2869C32.5428 38.8409 32.3695 39.2708 32.0227 39.5764C31.676 39.863 31.2426 40.0063 30.7225 40.0063ZM30.7225 22.9849C30.0675 22.9849 29.5474 22.813 29.1621 22.4691C28.7769 22.1062 28.5842 21.6381 28.5842 21.065C28.5842 20.4919 28.7769 20.0334 29.1621 19.6896C29.5474 19.3457 30.0675 19.1738 30.7225 19.1738C31.3581 19.1738 31.8686 19.3457 32.2539 19.6896C32.6584 20.0334 32.8607 20.4919 32.8607 21.065C32.8607 21.6381 32.668 22.1062 32.2828 22.4691C31.8975 22.813 31.3774 22.9849 30.7225 22.9849Z"
        fill="url(#paint1_linear_1215_5681)"
      />
      <path
        d="M43.7704 37.3413C44.7336 37.3986 45.2151 37.8285 45.2151 38.6308C45.2151 39.0893 45.0225 39.4427 44.6372 39.6911C44.2712 39.9203 43.7415 40.0158 43.048 39.9776L42.2679 39.9203C39.0316 39.6911 37.4135 37.9717 37.4135 34.7623V28.5154H35.9688C35.4487 28.5154 35.0441 28.4008 34.7552 28.1716C34.4855 27.9423 34.3507 27.608 34.3507 27.1686C34.3507 26.7292 34.4855 26.3949 34.7552 26.1657C35.0441 25.9364 35.4487 25.8218 35.9688 25.8218H37.4135V23.1855C37.4135 22.6697 37.5773 22.259 37.9047 21.9533C38.2322 21.6477 38.6753 21.4949 39.2339 21.4949C39.7733 21.4949 40.2067 21.6477 40.5342 21.9533C40.8616 22.259 41.0254 22.6697 41.0254 23.1855V25.8218H43.4815C44.0016 25.8218 44.3965 25.9364 44.6661 26.1657C44.9551 26.3949 45.0996 26.7292 45.0996 27.1686C45.0996 27.608 44.9551 27.9423 44.6661 28.1716C44.3965 28.4008 44.0016 28.5154 43.4815 28.5154H41.0254V35.0202C41.0254 36.4339 41.6803 37.1885 42.9902 37.284L43.7704 37.3413Z"
        fill="url(#paint2_linear_1215_5681)"
      />
      <path
        d="M56.2761 40.0063C55.756 40.0063 55.3226 39.863 54.9758 39.5764C54.6484 39.2708 54.4846 38.8409 54.4846 38.2869V21.1796C54.4846 20.6256 54.6484 20.2054 54.9758 19.9188C55.3226 19.6323 55.756 19.489 56.2761 19.489C56.7962 19.489 57.2296 19.6323 57.5764 19.9188C57.9231 20.2054 58.0965 20.6256 58.0965 21.1796V38.2869C58.0965 38.8409 57.9231 39.2708 57.5764 39.5764C57.2296 39.863 56.7962 40.0063 56.2761 40.0063Z"
        fill="url(#paint3_linear_1215_5681)"
      />
      <path
        d="M72.3177 35.9945C72.6451 35.9945 72.9052 36.1187 73.0978 36.367C73.3097 36.6154 73.4157 36.9497 73.4157 37.37C73.4157 37.9622 73.0593 38.4589 72.3466 38.8601C71.6916 39.223 70.95 39.5191 70.1217 39.7484C69.2933 39.9585 68.5035 40.0636 67.7523 40.0636C65.4792 40.0636 63.6781 39.4141 62.3489 38.115C61.0198 36.816 60.3552 35.0393 60.3552 32.7851C60.3552 31.3523 60.6441 30.0819 61.222 28.9739C61.7999 27.8659 62.609 27.0063 63.6492 26.3949C64.7087 25.7836 65.903 25.478 67.2322 25.478C68.5035 25.478 69.6112 25.755 70.5551 26.309C71.499 26.863 72.231 27.6462 72.7511 28.6587C73.2712 29.6712 73.5313 30.8652 73.5313 32.2407C73.5313 33.0621 73.1653 33.4728 72.4333 33.4728H63.9093C64.0248 34.791 64.4005 35.7653 65.0362 36.3957C65.6719 37.007 66.5965 37.3127 67.8101 37.3127C68.4265 37.3127 68.9659 37.2362 69.4282 37.0834C69.9098 36.9306 70.4491 36.7204 71.0463 36.453C71.6242 36.1473 72.048 35.9945 72.3177 35.9945ZM67.3189 27.9996C66.3364 27.9996 65.5466 28.3053 64.9495 28.9166C64.3716 29.5279 64.0248 30.4067 63.9093 31.5529H70.4395C70.401 30.3876 70.112 29.5088 69.5727 28.9166C69.0333 28.3053 68.282 27.9996 67.3189 27.9996Z"
        fill="url(#paint4_linear_1215_5681)"
      />
      <path
        d="M90.9292 25.478C92.6243 25.478 93.8861 25.9556 94.7144 26.9107C95.5427 27.8659 95.9569 29.3082 95.9569 31.2377V38.2869C95.9569 38.8218 95.7931 39.2421 95.4657 39.5478C95.1575 39.8534 94.724 40.0063 94.1654 40.0063C93.6068 40.0063 93.1637 39.8534 92.8362 39.5478C92.5088 39.2421 92.345 38.8218 92.345 38.2869V31.4383C92.345 30.3494 92.1331 29.5566 91.7093 29.0599C91.3048 28.5632 90.6595 28.3149 89.7734 28.3149C88.7332 28.3149 87.8952 28.6396 87.2595 29.2891C86.6431 29.9387 86.3349 30.8079 86.3349 31.8968V38.2869C86.3349 38.8218 86.1712 39.2421 85.8437 39.5478C85.5162 39.8534 85.0731 40.0063 84.5145 40.0063C83.9559 40.0063 83.5128 39.8534 83.1853 39.5478C82.8771 39.2421 82.723 38.8218 82.723 38.2869V27.1973C82.723 26.7006 82.8868 26.2994 83.2142 25.9938C83.5417 25.6881 83.9848 25.5353 84.5434 25.5353C85.0442 25.5353 85.4488 25.6881 85.757 25.9938C86.0845 26.2803 86.2482 26.6624 86.2482 27.14V27.9137C86.7298 27.1304 87.3751 26.5287 88.1842 26.1084C88.9932 25.6881 89.9082 25.478 90.9292 25.478Z"
        fill="url(#paint5_linear_1215_5681)"
      />
      <path
        d="M100.274 40.0063C99.7536 40.0063 99.3202 39.863 98.9735 39.5764C98.646 39.2708 98.4823 38.8409 98.4823 38.2869V27.2259C98.4823 26.6719 98.646 26.2517 98.9735 25.9651C99.3202 25.6786 99.7536 25.5353 100.274 25.5353C100.794 25.5353 101.227 25.6786 101.574 25.9651C101.921 26.2517 102.094 26.6719 102.094 27.2259V38.2869C102.094 38.8409 101.921 39.2708 101.574 39.5764C101.227 39.863 100.794 40.0063 100.274 40.0063ZM100.274 22.9849C99.6188 22.9849 99.0987 22.813 98.7134 22.4691C98.3282 22.1062 98.1355 21.6381 98.1355 21.065C98.1355 20.4919 98.3282 20.0334 98.7134 19.6896C99.0987 19.3457 99.6188 19.1738 100.274 19.1738C100.909 19.1738 101.42 19.3457 101.805 19.6896C102.21 20.0334 102.412 20.4919 102.412 21.065C102.412 21.6381 102.219 22.1062 101.834 22.4691C101.449 22.813 100.929 22.9849 100.274 22.9849Z"
        fill="url(#paint6_linear_1215_5681)"
      />
      <path
        d="M117.151 19.489C117.69 19.489 118.133 19.6418 118.48 19.9474C118.827 20.2531 119 20.6543 119 21.151V38.2869C119 38.8027 118.836 39.2134 118.509 39.5191C118.181 39.8248 117.748 39.9776 117.209 39.9776C116.669 39.9776 116.236 39.8248 115.908 39.5191C115.581 39.2134 115.417 38.8027 115.417 38.2869V37.5705C114.993 38.3538 114.377 38.9651 113.568 39.4045C112.778 39.8439 111.873 40.0636 110.852 40.0636C109.638 40.0636 108.55 39.7579 107.587 39.1466C106.643 38.5353 105.901 37.6756 105.362 36.5676C104.841 35.4405 104.581 34.151 104.581 32.6991C104.581 31.2472 104.841 29.9768 105.362 28.8879C105.901 27.799 106.643 26.9585 107.587 26.3663C108.53 25.774 109.619 25.4779 110.852 25.4779C111.873 25.4779 112.778 25.6881 113.568 26.1084C114.358 26.5286 114.964 27.1209 115.388 27.885V21.0937C115.388 20.6161 115.542 20.234 115.85 19.9474C116.178 19.6418 116.611 19.489 117.151 19.489ZM111.805 37.284C112.961 37.284 113.847 36.8924 114.464 36.1091C115.099 35.3259 115.417 34.2083 115.417 32.7564C115.417 31.3045 115.099 30.1965 114.464 29.4324C113.847 28.6491 112.971 28.2575 111.834 28.2575C110.678 28.2575 109.783 28.6396 109.147 29.4037C108.511 30.1679 108.193 31.2663 108.193 32.6991C108.193 34.151 108.511 35.2781 109.147 36.0805C109.783 36.8828 110.669 37.284 111.805 37.284Z"
        fill="url(#paint7_linear_1215_5681)"
      />
      <defs>
        <lineargradient
          id="paint0_linear_1215_5681"
          x1="0.168196"
          y1="10.8598"
          x2="46.6731"
          y2="56.4553"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#CC95DF" />
          <stop offset={1} stopColor="#4F80FF" />
        </lineargradient>
        <lineargradient
          id="paint1_linear_1215_5681"
          x1="0.168196"
          y1="10.8598"
          x2="46.6731"
          y2="56.4553"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#CC95DF" />
          <stop offset={1} stopColor="#4F80FF" />
        </lineargradient>
        <lineargradient
          id="paint2_linear_1215_5681"
          x1="0.168196"
          y1="10.8598"
          x2="46.6731"
          y2="56.4553"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#CC95DF" />
          <stop offset={1} stopColor="#4F80FF" />
        </lineargradient>
        <lineargradient
          id="paint3_linear_1215_5681"
          x1="0.168196"
          y1="10.8598"
          x2="46.6731"
          y2="56.4553"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#CC95DF" />
          <stop offset={1} stopColor="#4F80FF" />
        </lineargradient>
        <lineargradient
          id="paint4_linear_1215_5681"
          x1="0.168196"
          y1="10.8598"
          x2="46.6731"
          y2="56.4553"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#CC95DF" />
          <stop offset={1} stopColor="#4F80FF" />
        </lineargradient>
        <lineargradient
          id="paint5_linear_1215_5681"
          x1="0.168196"
          y1="10.8598"
          x2="46.6731"
          y2="56.4553"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#CC95DF" />
          <stop offset={1} stopColor="#4F80FF" />
        </lineargradient>
        <lineargradient
          id="paint6_linear_1215_5681"
          x1="0.168196"
          y1="10.8598"
          x2="46.6731"
          y2="56.4553"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#CC95DF" />
          <stop offset={1} stopColor="#4F80FF" />
        </lineargradient>
        <lineargradient
          id="paint7_linear_1215_5681"
          x1="0.168196"
          y1="10.8598"
          x2="46.6731"
          y2="56.4553"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#CC95DF" />
          <stop offset={1} stopColor="#4F80FF" />
        </lineargradient>
      </defs>
    </svg>
    <svg
      width={23}
      height={18}
      viewBox="0 0 23 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute left-[126.5px] top-[62.5px]"
      preserveAspectRatio="none"
    >
      <path
        d="M5.96 14.28C5.06667 14.28 4.38 14.1267 3.9 13.82C3.42 13.5133 3.06667 13.1733 2.84 12.8H2.48V14H0V0H2.52V5.22H2.88C3.02667 4.98 3.22 4.75333 3.46 4.54C3.71333 4.32667 4.04 4.15333 4.44 4.02C4.85333 3.87333 5.36 3.8 5.96 3.8C6.76 3.8 7.5 4 8.18 4.4C8.86 4.78667 9.40667 5.36 9.82 6.12C10.2333 6.88 10.44 7.8 10.44 8.88V9.2C10.44 10.28 10.2333 11.2 9.82 11.96C9.40667 12.72 8.86 13.3 8.18 13.7C7.5 14.0867 6.76 14.28 5.96 14.28ZM5.2 12.08C5.97333 12.08 6.62 11.8333 7.14 11.34C7.66 10.8333 7.92 10.1 7.92 9.14V8.94C7.92 7.98 7.66 7.25333 7.14 6.76C6.63333 6.25333 5.98667 6 5.2 6C4.42667 6 3.78 6.25333 3.26 6.76C2.74 7.25333 2.48 7.98 2.48 8.94V9.14C2.48 10.1 2.74 10.8333 3.26 11.34C3.78 11.8333 4.42667 12.08 5.2 12.08Z"
        fill="#849CD9"
      />
      <path
        d="M13.8339 18V15.8H19.2339C19.6072 15.8 19.7939 15.6 19.7939 15.2V12.7H19.4339C19.3272 12.9267 19.1606 13.1533 18.9339 13.38C18.7072 13.6067 18.4006 13.7933 18.0139 13.94C17.6272 14.0867 17.1339 14.16 16.5339 14.16C15.7606 14.16 15.0806 13.9867 14.4939 13.64C13.9206 13.28 13.4739 12.7867 13.1539 12.16C12.8339 11.5333 12.6739 10.8133 12.6739 10V4.08H15.1939V9.8C15.1939 10.5467 15.3739 11.1067 15.7339 11.48C16.1072 11.8533 16.6339 12.04 17.3139 12.04C18.0872 12.04 18.6872 11.7867 19.1139 11.28C19.5406 10.76 19.7539 10.04 19.7539 9.12V4.08H22.2739V15.76C22.2739 16.44 22.0739 16.98 21.6739 17.38C21.2739 17.7933 20.7406 18 20.0739 18H13.8339Z"
        fill="#849CD9"
      />
    </svg>
    <img
      src="image-98.png"
      className="w-[38px] h-[38px] absolute left-[153.86px] top-[44.86px] object-cover"
    />
  </div>
  <div className="w-[631px] h-[387.03px]">
    <div className="w-[166.34px] h-[166.34px] absolute left-[838.79px] top-[1096.25px] rounded-[11.09px] bg-[#ebf0f9]" />
    <div className="w-[166.34px] h-[166.34px] absolute left-[1192.55px] top-[988.69px] rounded-[11.09px] bg-[#ebf0f9]" />
    <div className="w-[75.41px] h-[75.41px] absolute left-[1110.48px] top-[1251.51px] rounded-[11.09px] bg-[#edf8f0]" />
    <div className="w-[75.41px] h-[75.41px] absolute left-[1081.65px] top-[939.89px] rounded-[11.09px] bg-[#fef2d5]" />
    <div className="w-[75.41px] h-[75.41px] absolute left-[727.89px] top-[1141.72px] rounded-[11.09px] bg-[#f5eaf9] border-[2.22px] border-[#f5eaf9]/10" />
    <div className="w-[166.34px] h-[166.34px]">
      <div className="w-[166.34px] h-[166.34px] absolute left-[908.65px] top-[1160.57px] rounded-[11.09px] bg-white" />
      <div className="w-[131.27px] h-[59.43px]">
        <img
          src="static/img/LogoCautioneo.svg"
          className="w-[104.24px] h-[17.74px] absolute left-[940.3px] top-[1214.4px] object-cover"
        />
        <div className="w-[131.27px] h-[32.82px]">
          <div className="w-[131.27px] h-[32.82px] absolute left-[926.92px] top-[1240.95px] rounded-[8.13px] bg-[#4842e3]/10" />
          <p className="w-[104.55px] h-[22.07px] absolute left-[940.28px] top-[1247.34px] text-[16.26403045654297px] font-bold text-center text-[#4842e3]">
            3 mois offerts
          </p>
        </div>
      </div>
    </div>
    <div className="w-[166.34px] h-[166.34px]">
      <div className="w-[166.34px] h-[166.34px] absolute left-[1110.48px] top-[1050.79px] rounded-[11.09px] bg-white" />
      <div className="w-[123.9px] h-[81.89px]">
        <img
          src="static/img/LogoHeyme.svg"
          className="w-[123.9px] h-[41.51px] absolute left-[1132.15px] top-[1093.52px] object-cover"
        />
        <div className="w-[92.97px] h-[40.05px]">
          <div className="w-[92.97px] h-[40.05px] absolute left-[1147.51px] top-[1135.16px] rounded-[10.01px] bg-[#ff3a3d]/10" />
          <p className="w-[52.92px] h-[27.18px] absolute left-[1166.82px] top-[1143.02px] text-[20.025270462036133px] font-bold text-center text-[#ff3a3d]">
            -15%
          </p>
        </div>
      </div>
    </div>
  </div>
  <div className="w-[300px] h-[195px]">
    <p className="w-[300px] absolute left-[750px] top-[761px] text-lg text-center text-[#849cd9]">
      Télécharger gratuitement les plans des appartements et les plaquettes de présentation de nos
      résidences.
    </p>
    <p className="absolute left-[798px] top-[727px] text-xl font-bold text-center text-[#0e215c]">
      Accès libre aux plans
    </p>
    <svg
      width={53}
      height={53}
      viewBox="0 0 53 53"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-[53px] h-[53px] absolute left-[872.5px] top-[657.5px]"
      preserveAspectRatio="none"
    >
      <circle cx="26.5" cy="26.5" r="26.5" fill="#FEF2D5" />
      <path
        d="M30 18H22C21.4477 18 21 18.4477 21 19V35C21 35.5523 21.4477 36 22 36H30C30.5523 36 31 35.5523 31 35V19C31 18.4477 30.5523 18 30 18Z"
        stroke="#DCC07E"
       strokeWidth={2}
       strokeLinecap="round"
       strokeLinejoin="round"
      />
      <path
        d="M26 33H26.002V33.002H26V33Z"
        stroke="#DCC07E"
       strokeWidth={2}
       strokeLinecap="round"
       strokeLinejoin="round"
      />
    </svg>
  </div>
  <p className="w-[488px] absolute left-[173px] top-[1501px] text-lg text-left text-[#849cd9]">
    N’attendez pas d’avoir 30 ans pour devenir propriétaire ! Découvrez comment avec notre guide
    gratuit.
  </p>
  <p className="w-[567px] absolute left-[173px] top-[1453px] text-[28px] font-bold text-left text-[#113eb6]">
    Découvrez notre guide du premier achat.
  </p>
  <div>
    <img
      src="static/img/GuideA.svg"
      className="w-[233.63px] h-[205px] absolute left-[1070.5px] top-[1450.5px] rounded-[10px] object-cover border border-[#f0f3fc]"
    />
   
  </div>
</div>


Landing Page BP

<div className="w-[1480px] h-[1469px] relative overflow-hidden bg-[#f9fbff] mt-8 mb-8">
  <div className="w-[344px] h-[46px]">
    <div className="w-[163.32px] h-[46px]">
      <div className="w-[163.32px] h-[46px] absolute left-[1135px] top-[-408px] rounded-[55px] bg-white border-2 border-[#4f80ff]" />
      <p className="w-[115.69px] h-[23.7px] absolute left-[1159.48px] top-[-395.5px] text-base font-bold text-center text-[#4f80ff]">
        Se connecter
      </p>
    </div>
    <div className="w-[162.3px] h-[46px]">
      <div
        className="w-[162.3px] h-[46px] absolute left-[1317.2px] top-[-407.5px] rounded-[55px] bg-[#4f80ff]"
        style={{ boxShadow: "0px 10px 44px -5px rgba(14,108,218,0.35)" }}
      />
      <p className="w-[74.52px] h-[23px] absolute left-[1361.59px] top-[-395.5px] text-base font-bold text-center text-white">
        S’inscrire
      </p>
    </div>
  </div>
  <img
    src="image-87.jpeg"
    className="w-[515px] h-[460px] absolute left-[852.42px] top-[145.42px] rounded-[20px] object-cover"
  />
  <p className="w-[426px] absolute left-[114px] top-[330px] text-xl text-left text-[#849cd9]">
    <span className="w-[426px] text-xl text-left text-[#849cd9]">Réalisez votre </span>
    <span className="w-[426px] text-xl font-bold text-left text-[#849cd9]">
      premier achat immobilier
    </span>
    <span className="w-[426px] text-xl text-left text-[#849cd9]"> pour seulement </span>
    <span className="w-[426px] text-xl font-bold text-left text-[#849cd9]">699 €/mois !(1)</span>
  </p>
  <div className="w-[936px] h-[97px] absolute left-[112.5px] top-[408.5px] rounded-[20px] bg-white" />
  <div className="w-[1251px] h-[298px] absolute left-[115.5px] top-[949.5px] rounded-[20px] bg-white" />
  <div className="flex justify-center items-center w-[213px] h-14 absolute left-[178px] top-[1130px] gap-2.5 px-[103px] py-[9px] rounded-xl bg-white border border-[#3679ff]">
    <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-[#3679ff]">
      Télécharger notre guide
    </p>
  </div>
  <div className="w-[150px] h-12">
    <p className="absolute left-[158px] top-[461px] text-base font-semibold text-left text-[#8c97b6]">
      Où cherchez-vous ?
    </p>
    <p className="absolute left-[158px] top-[435px] text-base font-bold text-left text-[#4f80ff]">
      Localisation
    </p>
  </div>
  <div className="w-[278px] h-12">
    <p className="absolute left-[371px] top-[461px] text-base font-semibold text-left text-[#8c97b6]">
      Combien de pièces souhaitez-vous ?
    </p>
    <p className="absolute left-[371px] top-[435px] text-base font-bold text-left text-[#4f80ff]">
      Nombre de pièces{" "}
    </p>
  </div>
  <div className="w-[179px] h-12">
    <p className="absolute left-[741px] top-[461px] text-base font-semibold text-left text-[#8c97b6]">
      Quel est votre budget ?
    </p>
    <p className="absolute left-[741px] top-[435px] text-base font-bold text-left text-[#4f80ff]">
      Budget
    </p>
  </div>
  <svg
    width={1}
    height={49}
    viewBox="0 0 1 49"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="absolute left-[338px] top-[433px]"
    preserveAspectRatio="xMidYMid meet"
  >
    <line x1="0.5" y1="2.18557e-8" x2="0.499998" y2={49} stroke="url(#paint0_linear_1215_6254)" />
    <defs>
      <lineargradient
        id="paint0_linear_1215_6254"
        x1="-0.00000107093"
        y1="24.5"
        x2={-1}
        y2="24.5"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#3563DC" />
        <stop offset="0.0434107" stopColor="#3E6FEF" />
        <stop offset="0.940497" stopColor="#3062E3" />
        <stop offset={1} stopColor="#154AD2" />
      </lineargradient>
    </defs>
  </svg>
  <svg
    width={1}
    height={49}
    viewBox="0 0 1 49"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="absolute left-[717px] top-[433px]"
    preserveAspectRatio="xMidYMid meet"
  >
    <line x1="0.5" y1="2.18557e-8" x2="0.499998" y2={49} stroke="url(#paint0_linear_1215_6255)" />
    <defs>
      <lineargradient
        id="paint0_linear_1215_6255"
        x1="-0.00000107093"
        y1="24.5"
        x2={-1}
        y2="24.5"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#3563DC" />
        <stop offset="0.0434107" stopColor="#3E6FEF" />
        <stop offset="0.940497" stopColor="#3062E3" />
        <stop offset={1} stopColor="#154AD2" />
      </lineargradient>
    </defs>
  </svg>
  <div className="w-[300px] h-[198px]">
    <p className="w-[253px] absolute left-[115px] top-[737px] text-xl font-bold text-center text-[#0e215c]">
      Des logements dans toute la France
    </p>
    <p className="w-[300px] absolute left-[92px] top-[797px] text-lg text-center text-[#849cd9]">
      Accéder à notre carte avec plus de 2 500 logements neufs disponibles.
    </p>
    <svg
      width={53}
      height={53}
      viewBox="0 0 53 53"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-[53px] h-[53px] absolute left-[214.5px] top-[667.5px]"
      preserveAspectRatio="none"
    >
      <circle cx="26.5" cy="26.5" r="26.5" fill="#DCE6FF" />
      <path
        d="M33.6585 24.701L26.6585 18.576C26.2815 18.2461 25.7185 18.2461 25.3415 18.576L18.3415 24.701C18.1245 24.8909 18 25.1653 18 25.4536V33.9998C18 34.5521 18.4477 34.9998 19 34.9998H23C23.5523 34.9998 24 34.5521 24 33.9998V29.9998C24 29.4476 24.4477 28.9998 25 28.9998H27C27.5523 28.9998 28 29.4476 28 29.9998V33.9998C28 34.5521 28.4477 34.9998 29 34.9998H33C33.5523 34.9998 34 34.5521 34 33.9998V25.4536C34 25.1653 33.8755 24.8909 33.6585 24.701Z"
        stroke="#6A7CA8"
       strokeWidth={2}
       strokeLinecap="round"
       strokeLinejoin="round"
       
      />
    </svg>
  </div>
  <div className="w-[300px] h-[221px]">
    <p className="w-[300px] absolute left-[1088px] top-[797px] text-lg text-center text-[#849cd9]">
      Une même personne pour vous accompagner, de la recherche de votre appartement jusqu’à votre
      emménagement.{" "}
    </p>
    <p className="w-[189px] absolute left-[1143px] top-[737px] text-xl font-bold text-center text-[#0e215c]">
      Un unique conseiller dédié
    </p>
    <svg
      width={53}
      height={53}
      viewBox="0 0 53 53"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-[53px] h-[53px] absolute left-[1210.5px] top-[667.5px]"
      preserveAspectRatio="none"
    >
      <circle cx="26.5" cy="26.5" r="26.5" fill="#F5EAF9" />
      <path
        d="M21 35C21 33.3431 23.2386 32 26 32C28.7614 32 31 33.3431 31 35"
        stroke="#B985CC"
       strokeWidth={2}
       strokeLinecap="round"
       strokeLinejoin="round"
      />
      <path
        d="M32 29.2495C33.7659 29.7124 35 30.7697 35 31.9999"
        stroke="#B985CC"
       strokeWidth={2}
       strokeLinecap="round"
       strokeLinejoin="round"
      />
      <path
        d="M20 29.2495C18.2341 29.7124 17 30.7697 17 31.9999"
        stroke="#B985CC"
       strokeWidth={2}
       strokeLinecap="round"
       strokeLinejoin="round"
      />
      <path
        d="M26 29C27.6569 29 29 27.6569 29 26C29 24.3431 27.6569 23 26 23C24.3431 23 23 24.3431 23 26C23 27.6569 24.3431 29 26 29Z"
        stroke="#B985CC"
       strokeWidth={2}
       strokeLinecap="round"
       strokeLinejoin="round"
      />
      <path
        d="M32 25.2361C32.6137 24.6868 33 23.8885 33 23C33 21.3431 31.6569 20 30 20C29.2316 20 28.5308 20.2889 28 20.7639"
        stroke="#B985CC"
       strokeWidth={2}
       strokeLinecap="round"
       strokeLinejoin="round"
      />
      <path
        d="M20 25.2361C19.3863 24.6868 19 23.8885 19 23C19 21.3431 20.3431 20 22 20C22.7684 20 23.4692 20.2889 24 20.7639"
        stroke="#B985CC"
       strokeWidth={2}
       strokeLinecap="round"
       strokeLinejoin="round"
      />
    </svg>
  </div>
  <div className="w-[300px] h-[221px]">
    <p className="w-[300px] absolute left-[424px] top-[797px] text-lg text-center text-[#849cd9]">
      <span className="w-[300px] text-lg text-center text-[#849cd9]">
        Prêt à Taux Zéro - TVA 5,5 %
      </span>
      <br />
      <span className="w-[300px] text-lg text-center text-[#849cd9]">
        Un partenariat exclusif avec{" "}
      </span>
      <br />
      <span className="w-[300px] text-lg text-center text-[#849cd9]">La Banque Postale </span>
      <br />
      <span className="w-[300px] text-lg text-center text-[#849cd9]">pour votre prêt.</span>
    </p>
    <p className="w-[262px] absolute left-[443px] top-[737px] text-xl font-bold text-center text-[#0e215c]">
      Des aides pour votre premier achat{" "}
    </p>
    <svg
      width={53}
      height={53}
      viewBox="0 0 53 53"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-[53px] h-[53px] absolute left-[546.5px] top-[667.5px]"
      preserveAspectRatio="none"
    >
      <circle cx="26.5" cy="26.5" r="26.5" fill="#EDF8F0" />
      <path
        d="M29 21L35 18V33L29 36V21Z"
        stroke="#93C8A2"
       strokeWidth={2}
       strokeLinecap="round"
       strokeLinejoin="round"
      />
      <path
        d="M23 33L29 36V21L23 18V33Z"
        stroke="#93C8A2"
       strokeWidth={2}
       strokeLinecap="round"
       strokeLinejoin="round"
      />
      <path
        d="M17 21L23 18V33L17 36V21Z"
        stroke="#93C8A2"
       strokeWidth={2}
       strokeLinecap="round"
       strokeLinejoin="round"
      />
    </svg>
  </div>
  <p className="w-[1243px] absolute left-[125px] top-[1291px] text-lg font-light text-left text-[#98aad7]">
    <span className="w-[1243px] text-lg font-light text-left text-[#98aad7]">
      (1) Mensualités données à titre indicatif uniquement et non contractuelles, pour l’achat d’un
      appartement de 187.000 €, sur une base de durée de 25 ans, à un taux d’intérêt fixe moyen
      constaté sur le marché de 1.4%, hors frais, hors assurance et avec un apport personnel de
      7.500€.{" "}
    </span>
    <br />
    <span className="w-[1243px] text-lg font-light text-left text-[#98aad7]">
      Pour être éligible au PTZ : il doit s’agir de votre premier achat en résidence principale et
      votre revenu fiscal de référence sur l’année 2 ans avant la réservation de l’appartement doit
      être inférieur à 37 000 €
    </span>
    <br />
    <br />
    <span className="w-[1243px] text-lg font-light text-left text-[#98aad7]"> </span>
  </p>
  <p className="w-[742px] absolute left-[114px] top-[246px] text-[28px] text-left text-[#113eb6]">
    <span className="w-[742px] text-[28px] font-bold text-left text-[#113eb6]">
      Kit le nid &amp; La Banque Postale
    </span>
    <span className="w-[742px] text-[28px] text-left text-[#113eb6]"> </span>
    <br />
    <span className="w-[742px] text-[28px] text-left text-[#113eb6]">
      s’associent pour vous aider à devenir propriétaire
    </span>
  </p>
  <svg
    width={64}
    height={64}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-16 h-16"
    preserveAspectRatio="xMidYMid meet"
  >
    <rect
      x="7.68018"
      y="7.68018"
      width="49.92"
      height="49.92"
      rx="15.36"
      fill="url(#paint0_linear_1215_6279)"
    />
    <path
      d="M30.1868 38.7734C34.929 38.7734 38.7734 34.929 38.7734 30.1868C38.7734 25.4445 34.929 21.6001 30.1868 21.6001C25.4445 21.6001 21.6001 25.4445 21.6001 30.1868C21.6001 34.929 25.4445 38.7734 30.1868 38.7734Z"
      stroke="white"
     strokeWidth="2.56"
     strokeLinecap="round"
     strokeLinejoin="round"
    />
    <path
      d="M36.3198 36.3198L43.6798 43.6798"
      stroke="white"
     strokeWidth="2.56"
     strokeLinecap="round"
     strokeLinejoin="round"
    />
    <defs>
      <lineargradient
        id="paint0_linear_1215_6279"
        x1="32.6402"
        y1="5.20253"
        x2="32.6402"
        y2="61.6378"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.0434107" stopColor="#81A3F9" />
        <stop offset={1} stopColor="#3462D8" />
      </lineargradient>
    </defs>
  </svg>
  <div className="w-[162px] h-[65px]">
    <svg
      width={119}
      height={44}
      viewBox="0 0 119 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute left-[41.77px] top-[27.77px]"
      preserveAspectRatio="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.0896 28.7195L18.0839 28.7292C17.274 30.1061 17.0111 31.1212 17.0111 31.8324C17.0111 32.6241 17.2228 33.2487 17.6237 33.797C18.1944 34.5392 18.7517 35.0211 19.2734 35.3227C20.1997 35.8335 21.0527 36.3335 21.8299 36.8229C22.2723 37.0844 22.7399 37.4027 23.1299 37.7894C23.4685 38.1252 24.1498 38.905 24.1498 40.0667C24.1498 41.1877 23.6044 42.2345 22.5777 42.8527C21.7551 43.348 20.847 43.4307 20.2007 43.4307C17.7402 43.4307 15.3866 42.1081 13.2293 40.2588L13.2212 40.2518L13.2132 40.2448C12.2754 39.4271 11.4833 38.5341 10.8693 37.5686C9.59877 39.1505 8.64397 40.295 8.01674 40.983C7.50572 41.561 6.99308 42.0816 6.49232 42.4789C6.23861 42.6802 5.93389 42.8934 5.58739 43.0652C5.25918 43.2279 4.74041 43.4307 4.1009 43.4307C2.4031 43.4307 1.36248 42.2757 0.840436 41.4474L0.792317 41.371L0.749837 41.2915C0.291686 40.4333 0 39.48 0 38.46C0 38.0485 0.0848159 37.5889 0.149824 37.2645C0.228275 36.8731 0.339991 36.3924 0.479493 35.8346C0.759224 34.7163 1.17267 33.2014 1.71509 31.3018C2.77286 27.5644 3.83857 23.0607 4.91009 17.7807C5.96539 12.5806 6.48044 7.94708 6.48044 3.86608C6.48044 3.5101 6.50155 3.11751 6.57577 2.73108C6.63742 2.41011 6.77682 1.86181 7.16293 1.34014C8.01694 0.147568 9.35653 0 10.0244 0C11.057 0 11.8418 0.480863 12.3425 0.936009C12.8106 1.36151 13.1609 1.87554 13.4289 2.35353C14.0839 3.42566 14.4291 4.61368 14.4291 5.87444C14.4291 10.6673 13.5936 16.4964 11.9622 23.3323C13.9622 20.754 15.7236 18.6591 17.2435 17.0575L17.2496 17.0511L17.2558 17.0447C17.9923 16.2795 18.6586 15.6404 19.2346 15.175C19.5198 14.9446 19.84 14.7097 20.1784 14.5205C20.4459 14.3708 21.0495 14.0585 21.8208 14.0585C23.1169 14.0585 24.1433 14.6721 24.8629 15.4333C25.3858 15.9605 26.1243 16.8938 26.1243 18.1756C26.1243 18.8711 25.8535 19.4066 25.7425 19.615C25.595 19.8919 25.4181 20.1447 25.257 20.3558C24.931 20.783 24.4961 21.2637 23.9964 21.7771C23.0492 22.7499 22.001 23.8229 20.852 24.9959C19.8737 25.9947 18.9508 27.2249 18.0952 28.7098L18.0896 28.7195ZM23.0359 17.1714C22.6647 16.7698 22.2596 16.5689 21.8208 16.5689C21.4158 16.5689 20.5045 17.3053 19.0869 18.7781C16.779 21.2099 13.8376 24.8899 10.2625 29.818C9.36789 31.0512 8.43357 32.3626 7.45958 33.7522C6.86127 34.6058 6.248 35.4888 5.61975 36.4014C5.68594 36.196 5.75161 35.9913 5.81675 35.7873C6.60235 33.3274 7.31182 30.9696 7.94518 28.7142C10.5802 19.3307 11.8977 11.7175 11.8977 5.87444C11.8977 5.28416 11.7792 4.72099 11.5423 4.18493C11.5115 4.11526 11.4788 4.04605 11.444 3.9773C11.4251 3.94009 11.4057 3.90302 11.3857 3.86608C11.34 3.7817 11.2913 3.69802 11.2395 3.61504C10.8345 2.87864 10.4295 2.51044 10.0244 2.51044C9.6194 2.51044 9.34938 2.61086 9.21437 2.8117C9.07936 2.97906 9.01186 3.33052 9.01186 3.86608C9.01186 4.14353 9.00959 4.42315 9.00506 4.70495C9.00459 4.73417 9.0041 4.76341 9.00358 4.79268C8.93191 8.83981 8.39463 13.3343 7.39175 18.276C6.31168 23.5982 5.2316 28.1672 4.15153 31.983C3.07146 35.7654 2.53142 37.9244 2.53142 38.46C2.53142 38.9955 2.68331 39.5478 2.98708 40.1169C3.3246 40.6524 3.69587 40.9202 4.1009 40.9202C4.50593 40.9202 5.18097 40.3846 6.12604 39.3135C6.4668 38.9406 6.92414 38.4075 7.49806 37.7141C7.50529 37.7054 7.51253 37.6967 7.51978 37.6879C7.66147 37.5166 7.81018 37.3356 7.96593 37.145C8.00498 37.0972 8.04447 37.0488 8.08441 36.9998C8.50509 36.4835 8.97483 35.8998 9.49363 35.2487C9.56635 35.1574 9.64003 35.0648 9.71468 34.9709C10.2632 34.2808 10.8637 33.5191 11.5163 32.686C11.6578 32.5052 11.8018 32.3211 11.9483 32.1337V32.686C11.9483 33.6398 12.1551 34.5548 12.5687 35.4309C13.0549 36.4609 13.8269 37.4371 14.8848 38.3596C16.0574 39.3648 17.1539 40.074 18.1744 40.4873C18.5343 40.6331 18.8848 40.7421 19.2258 40.8142C19.2525 40.8198 19.2791 40.8253 19.3056 40.8305C19.3313 40.8355 19.357 40.8403 19.3826 40.8449C19.6618 40.8951 19.9345 40.9202 20.2007 40.9202C21.1458 40.9202 21.6183 40.6357 21.6183 40.0667C21.6183 39.7654 21.2471 39.3972 20.5045 38.9621C20.4048 38.8991 20.3035 38.8359 20.2007 38.7723C20.103 38.7119 20.0039 38.6512 19.9034 38.5902C19.7031 38.4687 19.4974 38.3461 19.2861 38.2224C18.885 37.9875 18.4642 37.7487 18.0237 37.506C17.1462 37.0039 16.3361 36.2675 15.5936 35.2968C14.851 34.2926 14.4797 33.1378 14.4797 31.8324C14.4797 30.527 14.9523 29.0709 15.8973 27.4642C16.8424 25.8241 17.8887 24.4182 19.0363 23.2467C20.1839 22.0752 21.2302 21.004 22.1752 20.0333C23.1203 19.0626 23.5928 18.4434 23.5928 18.1756C23.5928 17.8744 23.4072 17.5396 23.0359 17.1714ZM20.3464 38.402C20.3464 38.402 20.34 38.4036 20.3252 38.405C20.3388 38.4025 20.3464 38.402 20.3464 38.402Z"
        fill="url(#paint0_linear_1215_6285)"
      />
      <path
        d="M30.7225 40.0063C30.2023 40.0063 29.7689 39.863 29.4222 39.5764C29.0947 39.2708 28.931 38.8409 28.931 38.2869V27.2259C28.931 26.6719 29.0947 26.2517 29.4222 25.9651C29.7689 25.6786 30.2023 25.5353 30.7225 25.5353C31.2426 25.5353 31.676 25.6786 32.0227 25.9651C32.3695 26.2517 32.5428 26.6719 32.5428 27.2259V38.2869C32.5428 38.8409 32.3695 39.2708 32.0227 39.5764C31.676 39.863 31.2426 40.0063 30.7225 40.0063ZM30.7225 22.9849C30.0675 22.9849 29.5474 22.813 29.1621 22.4691C28.7769 22.1062 28.5842 21.6381 28.5842 21.065C28.5842 20.4919 28.7769 20.0334 29.1621 19.6896C29.5474 19.3457 30.0675 19.1738 30.7225 19.1738C31.3581 19.1738 31.8686 19.3457 32.2539 19.6896C32.6584 20.0334 32.8607 20.4919 32.8607 21.065C32.8607 21.6381 32.668 22.1062 32.2828 22.4691C31.8975 22.813 31.3774 22.9849 30.7225 22.9849Z"
        fill="url(#paint1_linear_1215_6285)"
      />
      <path
        d="M43.7704 37.3413C44.7336 37.3986 45.2151 37.8285 45.2151 38.6308C45.2151 39.0893 45.0225 39.4427 44.6372 39.6911C44.2712 39.9203 43.7415 40.0158 43.048 39.9776L42.2679 39.9203C39.0316 39.6911 37.4135 37.9717 37.4135 34.7623V28.5154H35.9688C35.4487 28.5154 35.0441 28.4008 34.7552 28.1716C34.4855 27.9423 34.3507 27.608 34.3507 27.1686C34.3507 26.7292 34.4855 26.3949 34.7552 26.1657C35.0441 25.9364 35.4487 25.8218 35.9688 25.8218H37.4135V23.1855C37.4135 22.6697 37.5773 22.259 37.9047 21.9533C38.2322 21.6477 38.6753 21.4949 39.2339 21.4949C39.7733 21.4949 40.2067 21.6477 40.5342 21.9533C40.8616 22.259 41.0254 22.6697 41.0254 23.1855V25.8218H43.4815C44.0016 25.8218 44.3965 25.9364 44.6661 26.1657C44.9551 26.3949 45.0996 26.7292 45.0996 27.1686C45.0996 27.608 44.9551 27.9423 44.6661 28.1716C44.3965 28.4008 44.0016 28.5154 43.4815 28.5154H41.0254V35.0202C41.0254 36.4339 41.6803 37.1885 42.9902 37.284L43.7704 37.3413Z"
        fill="url(#paint2_linear_1215_6285)"
      />
      <path
        d="M56.2761 40.0063C55.756 40.0063 55.3226 39.863 54.9758 39.5764C54.6484 39.2708 54.4846 38.8409 54.4846 38.2869V21.1796C54.4846 20.6256 54.6484 20.2054 54.9758 19.9188C55.3226 19.6323 55.756 19.489 56.2761 19.489C56.7962 19.489 57.2296 19.6323 57.5764 19.9188C57.9231 20.2054 58.0965 20.6256 58.0965 21.1796V38.2869C58.0965 38.8409 57.9231 39.2708 57.5764 39.5764C57.2296 39.863 56.7962 40.0063 56.2761 40.0063Z"
        fill="url(#paint3_linear_1215_6285)"
      />
      <path
        d="M72.3177 35.9945C72.6451 35.9945 72.9052 36.1187 73.0978 36.367C73.3097 36.6154 73.4157 36.9497 73.4157 37.37C73.4157 37.9622 73.0593 38.4589 72.3466 38.8601C71.6916 39.223 70.95 39.5191 70.1217 39.7484C69.2933 39.9585 68.5035 40.0636 67.7523 40.0636C65.4792 40.0636 63.6781 39.4141 62.3489 38.115C61.0198 36.816 60.3552 35.0393 60.3552 32.7851C60.3552 31.3523 60.6441 30.0819 61.222 28.9739C61.7999 27.8659 62.609 27.0063 63.6492 26.3949C64.7087 25.7836 65.903 25.478 67.2322 25.478C68.5035 25.478 69.6112 25.755 70.5551 26.309C71.499 26.863 72.231 27.6462 72.7511 28.6587C73.2712 29.6712 73.5313 30.8652 73.5313 32.2407C73.5313 33.0621 73.1653 33.4728 72.4333 33.4728H63.9093C64.0248 34.791 64.4005 35.7653 65.0362 36.3957C65.6719 37.007 66.5965 37.3127 67.8101 37.3127C68.4265 37.3127 68.9659 37.2362 69.4282 37.0834C69.9098 36.9306 70.4491 36.7204 71.0463 36.453C71.6242 36.1473 72.048 35.9945 72.3177 35.9945ZM67.3189 27.9996C66.3364 27.9996 65.5466 28.3053 64.9495 28.9166C64.3716 29.5279 64.0248 30.4067 63.9093 31.5529H70.4395C70.401 30.3876 70.112 29.5088 69.5727 28.9166C69.0333 28.3053 68.282 27.9996 67.3189 27.9996Z"
        fill="url(#paint4_linear_1215_6285)"
      />
      <path
        d="M90.9292 25.478C92.6243 25.478 93.8861 25.9556 94.7144 26.9107C95.5427 27.8659 95.9569 29.3082 95.9569 31.2377V38.2869C95.9569 38.8218 95.7931 39.2421 95.4657 39.5478C95.1575 39.8534 94.724 40.0063 94.1654 40.0063C93.6068 40.0063 93.1637 39.8534 92.8362 39.5478C92.5088 39.2421 92.345 38.8218 92.345 38.2869V31.4383C92.345 30.3494 92.1331 29.5566 91.7093 29.0599C91.3048 28.5632 90.6595 28.3149 89.7734 28.3149C88.7332 28.3149 87.8952 28.6396 87.2595 29.2891C86.6431 29.9387 86.3349 30.8079 86.3349 31.8968V38.2869C86.3349 38.8218 86.1712 39.2421 85.8437 39.5478C85.5162 39.8534 85.0731 40.0063 84.5145 40.0063C83.9559 40.0063 83.5128 39.8534 83.1853 39.5478C82.8771 39.2421 82.723 38.8218 82.723 38.2869V27.1973C82.723 26.7006 82.8868 26.2994 83.2142 25.9938C83.5417 25.6881 83.9848 25.5353 84.5434 25.5353C85.0442 25.5353 85.4488 25.6881 85.757 25.9938C86.0845 26.2803 86.2482 26.6624 86.2482 27.14V27.9137C86.7298 27.1304 87.3751 26.5287 88.1842 26.1084C88.9932 25.6881 89.9082 25.478 90.9292 25.478Z"
        fill="url(#paint5_linear_1215_6285)"
      />
      <path
        d="M100.274 40.0063C99.7536 40.0063 99.3202 39.863 98.9735 39.5764C98.646 39.2708 98.4823 38.8409 98.4823 38.2869V27.2259C98.4823 26.6719 98.646 26.2517 98.9735 25.9651C99.3202 25.6786 99.7536 25.5353 100.274 25.5353C100.794 25.5353 101.227 25.6786 101.574 25.9651C101.921 26.2517 102.094 26.6719 102.094 27.2259V38.2869C102.094 38.8409 101.921 39.2708 101.574 39.5764C101.227 39.863 100.794 40.0063 100.274 40.0063ZM100.274 22.9849C99.6188 22.9849 99.0987 22.813 98.7134 22.4691C98.3282 22.1062 98.1355 21.6381 98.1355 21.065C98.1355 20.4919 98.3282 20.0334 98.7134 19.6896C99.0987 19.3457 99.6188 19.1738 100.274 19.1738C100.909 19.1738 101.42 19.3457 101.805 19.6896C102.21 20.0334 102.412 20.4919 102.412 21.065C102.412 21.6381 102.219 22.1062 101.834 22.4691C101.449 22.813 100.929 22.9849 100.274 22.9849Z"
        fill="url(#paint6_linear_1215_6285)"
      />
      <path
        d="M117.151 19.489C117.69 19.489 118.133 19.6418 118.48 19.9474C118.827 20.2531 119 20.6543 119 21.151V38.2869C119 38.8027 118.836 39.2134 118.509 39.5191C118.181 39.8248 117.748 39.9776 117.209 39.9776C116.669 39.9776 116.236 39.8248 115.908 39.5191C115.581 39.2134 115.417 38.8027 115.417 38.2869V37.5705C114.993 38.3538 114.377 38.9651 113.568 39.4045C112.778 39.8439 111.873 40.0636 110.852 40.0636C109.638 40.0636 108.55 39.7579 107.587 39.1466C106.643 38.5353 105.901 37.6756 105.362 36.5676C104.841 35.4405 104.581 34.151 104.581 32.6991C104.581 31.2472 104.841 29.9768 105.362 28.8879C105.901 27.799 106.643 26.9585 107.587 26.3663C108.53 25.774 109.619 25.4779 110.852 25.4779C111.873 25.4779 112.778 25.6881 113.568 26.1084C114.358 26.5286 114.964 27.1209 115.388 27.885V21.0937C115.388 20.6161 115.542 20.234 115.85 19.9474C116.178 19.6418 116.611 19.489 117.151 19.489ZM111.805 37.284C112.961 37.284 113.847 36.8924 114.464 36.1091C115.099 35.3259 115.417 34.2083 115.417 32.7564C115.417 31.3045 115.099 30.1965 114.464 29.4324C113.847 28.6491 112.971 28.2575 111.834 28.2575C110.678 28.2575 109.783 28.6396 109.147 29.4037C108.511 30.1679 108.193 31.2663 108.193 32.6991C108.193 34.151 108.511 35.2781 109.147 36.0805C109.783 36.8828 110.669 37.284 111.805 37.284Z"
        fill="url(#paint7_linear_1215_6285)"
      />
      <defs>
        <lineargradient
          id="paint0_linear_1215_6285"
          x1="0.168196"
          y1="10.8598"
          x2="46.6731"
          y2="56.4553"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#CC95DF" />
          <stop offset={1} stopColor="#4F80FF" />
        </lineargradient>
        <lineargradient
          id="paint1_linear_1215_6285"
          x1="0.168196"
          y1="10.8598"
          x2="46.6731"
          y2="56.4553"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#CC95DF" />
          <stop offset={1} stopColor="#4F80FF" />
        </lineargradient>
        <lineargradient
          id="paint2_linear_1215_6285"
          x1="0.168196"
          y1="10.8598"
          x2="46.6731"
          y2="56.4553"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#CC95DF" />
          <stop offset={1} stopColor="#4F80FF" />
        </lineargradient>
        <lineargradient
          id="paint3_linear_1215_6285"
          x1="0.168196"
          y1="10.8598"
          x2="46.6731"
          y2="56.4553"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#CC95DF" />
          <stop offset={1} stopColor="#4F80FF" />
        </lineargradient>
        <lineargradient
          id="paint4_linear_1215_6285"
          x1="0.168196"
          y1="10.8598"
          x2="46.6731"
          y2="56.4553"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#CC95DF" />
          <stop offset={1} stopColor="#4F80FF" />
        </lineargradient>
        <lineargradient
          id="paint5_linear_1215_6285"
          x1="0.168196"
          y1="10.8598"
          x2="46.6731"
          y2="56.4553"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#CC95DF" />
          <stop offset={1} stopColor="#4F80FF" />
        </lineargradient>
        <lineargradient
          id="paint6_linear_1215_6285"
          x1="0.168196"
          y1="10.8598"
          x2="46.6731"
          y2="56.4553"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#CC95DF" />
          <stop offset={1} stopColor="#4F80FF" />
        </lineargradient>
        <lineargradient
          id="paint7_linear_1215_6285"
          x1="0.168196"
          y1="10.8598"
          x2="46.6731"
          y2="56.4553"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#CC95DF" />
          <stop offset={1} stopColor="#4F80FF" />
        </lineargradient>
      </defs>
    </svg>
    <svg
      width={23}
      height={18}
      viewBox="0 0 23 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute left-[138.5px] top-[72.5px]"
      preserveAspectRatio="none"
    >
      <path
        d="M5.96 14.28C5.06667 14.28 4.38 14.1267 3.9 13.82C3.42 13.5133 3.06667 13.1733 2.84 12.8H2.48V14H0V0H2.52V5.22H2.88C3.02667 4.98 3.22 4.75333 3.46 4.54C3.71333 4.32667 4.04 4.15333 4.44 4.02C4.85333 3.87333 5.36 3.8 5.96 3.8C6.76 3.8 7.5 4 8.18 4.4C8.86 4.78667 9.40667 5.36 9.82 6.12C10.2333 6.88 10.44 7.8 10.44 8.88V9.2C10.44 10.28 10.2333 11.2 9.82 11.96C9.40667 12.72 8.86 13.3 8.18 13.7C7.5 14.0867 6.76 14.28 5.96 14.28ZM5.2 12.08C5.97333 12.08 6.62 11.8333 7.14 11.34C7.66 10.8333 7.92 10.1 7.92 9.14V8.94C7.92 7.98 7.66 7.25333 7.14 6.76C6.63333 6.25333 5.98667 6 5.2 6C4.42667 6 3.78 6.25333 3.26 6.76C2.74 7.25333 2.48 7.98 2.48 8.94V9.14C2.48 10.1 2.74 10.8333 3.26 11.34C3.78 11.8333 4.42667 12.08 5.2 12.08Z"
        fill="#849CD9"
      />
      <path
        d="M13.8339 18V15.8H19.2339C19.6072 15.8 19.7939 15.6 19.7939 15.2V12.7H19.4339C19.3272 12.9267 19.1606 13.1533 18.9339 13.38C18.7072 13.6067 18.4006 13.7933 18.0139 13.94C17.6272 14.0867 17.1339 14.16 16.5339 14.16C15.7606 14.16 15.0806 13.9867 14.4939 13.64C13.9206 13.28 13.4739 12.7867 13.1539 12.16C12.8339 11.5333 12.6739 10.8133 12.6739 10V4.08H15.1939V9.8C15.1939 10.5467 15.3739 11.1067 15.7339 11.48C16.1072 11.8533 16.6339 12.04 17.3139 12.04C18.0872 12.04 18.6872 11.7867 19.1139 11.28C19.5406 10.76 19.7539 10.04 19.7539 9.12V4.08H22.2739V15.76C22.2739 16.44 22.0739 16.98 21.6739 17.38C21.2739 17.7933 20.7406 18 20.0739 18H13.8339Z"
        fill="#849CD9"
      />
    </svg>
    <img
      src="image-98.png"
      className="w-[38px] h-[38px] absolute left-[165.86px] top-[54.86px] object-cover"
    />
  </div>
  <div className="w-[300px] h-[195px]">
    <p className="w-[300px] absolute left-[756px] top-[771px] text-lg text-center text-[#849cd9]">
      Télécharger gratuitement les plans des appartements et les plaquettes de présentation de nos
      résidences.
    </p>
    <p className="absolute left-[804px] top-[737px] text-xl font-bold text-center text-[#0e215c]">
      Accès libre aux plans
    </p>
    <svg
      width={53}
      height={53}
      viewBox="0 0 53 53"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-[53px] h-[53px] absolute left-[878.5px] top-[667.5px]"
      preserveAspectRatio="none"
    >
      <circle cx="26.5" cy="26.5" r="26.5" fill="#FEF2D5" />
      <path
        d="M30 18H22C21.4477 18 21 18.4477 21 19V35C21 35.5523 21.4477 36 22 36H30C30.5523 36 31 35.5523 31 35V19C31 18.4477 30.5523 18 30 18Z"
        stroke="#DCC07E"
       strokeWidth={2}
       strokeLinecap="round"
       strokeLinejoin="round"
      />
      <path
        d="M26 33H26.002V33.002H26V33Z"
        stroke="#DCC07E"
       strokeWidth={2}
       strokeLinecap="round"
       strokeLinejoin="round"
      />
    </svg>
  </div>
  <p className="w-[488px] absolute left-[179px] top-[1061px] text-lg text-left text-[#849cd9]">
    N’attendez pas d’avoir 30 ans pour devenir propriétaire ! Découvrez comment avec notre guide
    gratuit.
  </p>
  <p className="w-[567px] absolute left-[179px] top-[1013px] text-[28px] font-bold text-left text-[#113eb6]">
    Découvrez notre guide du premier achat.
  </p>
  <div className="w-[233.63px] h-[205px]">
    
    <img
      src="static/img/GuideA.svg"
      className="w-[233px] h-[205px] absolute left-[990.5px] top-[997.5px] rounded-[10px] object-cover"
    />
  </div>
  <div
    className="flex justify-center items-center w-[295px] absolute left-[1152px] top-[33px] gap-2.5 px-[120px] py-4 rounded-xl"
    style={{ background: "linear-gradient(to bottom, #81a3f9 -0.06%, #3462d8 108.09%)" }}
  >
    <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-white">
      Connexion / Inscription
    </p>
  </div>
  <p className="absolute left-[1062px] top-[45px] text-xl font-bold text-center text-[#113eb6]">
    Blog
  </p>
  <p className="absolute left-[836px] top-[45px] text-xl font-bold text-center text-[#113eb6]">
    Qui sommes-nous ?
  </p>
  <div className="w-[72px] h-[37px]">
    <p className="absolute left-[732px] top-[45px] text-xl font-bold text-center text-[#113eb6]">
      Accueil
    </p>
    <svg
      width={30}
      height={3}
      viewBox="0 0 30 3"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute left-[751.5px] top-[80.5px]"
      preserveAspectRatio="xMidYMid meet"
    >
      <line y1="1.5" x2={30} y2="1.5" stroke="#113EB6"strokeWidth={3} />
    </svg>
  </div>
  <svg
    width={43}
    height={43}
    viewBox="0 0 43 43"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="absolute left-[529px] top-[242px]"
    preserveAspectRatio="xMidYMid meet"
  >
    <circle cx="21.5" cy="21.5" r="21.5" fill="#FF0000" />
  </svg>
  <svg
    width={43}
    height={43}
    viewBox="0 0 43 43"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="absolute left-[648px] top-[862px]"
    preserveAspectRatio="xMidYMid meet"
  >
    <circle cx="21.5" cy="21.5" r="21.5" fill="#FF0000" />
  </svg>
</div>






Landing Page Studea





<div className="w-[1480px] h-[1703px] relative overflow-hidden bg-[#f9fbff] mb-8 mt-8">
  <div className="w-[344px] h-[46px]">
    <div className="w-[163.32px] h-[46px]">
      <div className="w-[163.32px] h-[46px] absolute left-[1135px] top-[-408px] rounded-[55px] bg-white border-2 border-[#4f80ff]" />
      <p className="w-[115.69px] h-[23.7px] absolute left-[1159.48px] top-[-395.5px] text-base font-bold text-center text-[#4f80ff]">
        Se connecter
      </p>
    </div>
    <div className="w-[162.3px] h-[46px]">
      <div
        className="w-[162.3px] h-[46px] absolute left-[1317.2px] top-[-407.5px] rounded-[55px] bg-[#4f80ff]"
        style={{ boxShadow: "0px 10px 44px -5px rgba(14,108,218,0.35)" }}
      />
      <p className="w-[74.52px] h-[23px] absolute left-[1361.59px] top-[-395.5px] text-base font-bold text-center text-white">
        S’inscrire
      </p>
    </div>
  </div>
  <img
    src="static/img/icons/House1.svg"
    className="w-[515px] h-[460px] absolute left-[852.42px] top-[145.42px] rounded-[20px] object-cover"
  />
  <p className="w-[426px] absolute left-[114px] top-[330px] text-xl text-left text-[#849cd9]">
    <span className="w-[426px] text-xl text-left text-[#849cd9]">Réalisez votre </span>
    <span className="w-[426px] text-xl font-bold text-left text-[#849cd9]">
      premier achat immobilier
    </span>
    <span className="w-[426px] text-xl text-left text-[#849cd9]"> pour seulement </span>
    <span className="w-[426px] text-xl font-bold text-left text-[#849cd9]">685 €/mois !(1)</span>
  </p>
  <div className="w-[936px] h-[97px] absolute left-[112.5px] top-[408.5px] rounded-[20px] bg-white" />
  <div className="w-[1251px] h-[298px] absolute left-[115.5px] top-[949.5px] rounded-[20px] bg-white" />
  <div className="flex justify-center items-center w-[213px] h-14 absolute left-[178px] top-[1130px] gap-2.5 px-[103px] py-[9px] rounded-xl bg-white border border-[#3679ff]">
    <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-[#3679ff]">
      Télécharger notre guide
    </p>
  </div>
  <div className="w-[150px] h-12">
    <p className="absolute left-[158px] top-[461px] text-base font-semibold text-left text-[#8c97b6]">
      Où cherchez-vous ?
    </p>
    <p className="absolute left-[158px] top-[435px] text-base font-bold text-left text-[#4f80ff]">
      Localisation
    </p>
  </div>
  <div className="w-[278px] h-12">
    <p className="absolute left-[371px] top-[461px] text-base font-semibold text-left text-[#8c97b6]">
      Combien de pièces souhaitez-vous ?
    </p>
    <p className="absolute left-[371px] top-[435px] text-base font-bold text-left text-[#4f80ff]">
      Nombre de pièces{" "}
    </p>
  </div>
  <div className="w-[179px] h-12">
    <p className="absolute left-[741px] top-[461px] text-base font-semibold text-left text-[#8c97b6]">
      Quel est votre budget ?
    </p>
    <p className="absolute left-[741px] top-[435px] text-base font-bold text-left text-[#4f80ff]">
      Budget
    </p>
  </div>
  <svg
    width={1}
    height={49}
    viewBox="0 0 1 49"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="absolute left-[338px] top-[433px]"
    preserveAspectRatio="xMidYMid meet"
  >
    <line x1="0.5" y1="2.18557e-8" x2="0.499998" y2={49} stroke="url(#paint0_linear_1215_6375)" />
    <defs>
      <lineargradient
        id="paint0_linear_1215_6375"
        x1="-0.00000107093"
        y1="24.5"
        x2={-1}
        y2="24.5"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#3563DC" />
        <stop offset="0.0434107" stopColor="#3E6FEF" />
        <stop offset="0.940497" stopColor="#3062E3" />
        <stop offset={1} stopColor="#154AD2" />
      </lineargradient>
    </defs>
  </svg>
  <svg
    width={1}
    height={49}
    viewBox="0 0 1 49"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="absolute left-[717px] top-[433px]"
    preserveAspectRatio="xMidYMid meet"
  >
    <line x1="0.5" y1="2.18557e-8" x2="0.499998" y2={49} stroke="url(#paint0_linear_1215_6376)" />
    <defs>
      <lineargradient
        id="paint0_linear_1215_6376"
        x1="-0.00000107093"
        y1="24.5"
        x2={-1}
        y2="24.5"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#3563DC" />
        <stop offset="0.0434107" stopColor="#3E6FEF" />
        <stop offset="0.940497" stopColor="#3062E3" />
        <stop offset={1} stopColor="#154AD2" />
      </lineargradient>
    </defs>
  </svg>
  <div className="w-[300px] h-[198px]">
    <p className="w-[253px] absolute left-[115px] top-[737px] text-xl font-bold text-center text-[#0e215c]">
      Des logements dans toute la France
    </p>
    <p className="w-[300px] absolute left-[92px] top-[797px] text-lg text-center text-[#849cd9]">
      Accéder à notre carte avec plus de 2 500 logements neufs disponibles.
    </p>
    <svg
      width={53}
      height={53}
      viewBox="0 0 53 53"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-[53px] h-[53px] absolute left-[214.5px] top-[667.5px]"
      preserveAspectRatio="none"
    >
      <circle cx="26.5" cy="26.5" r="26.5" fill="#DCE6FF" />
      <path
        d="M33.6585 24.701L26.6585 18.576C26.2815 18.2461 25.7185 18.2461 25.3415 18.576L18.3415 24.701C18.1245 24.8909 18 25.1653 18 25.4536V33.9998C18 34.5521 18.4477 34.9998 19 34.9998H23C23.5523 34.9998 24 34.5521 24 33.9998V29.9998C24 29.4476 24.4477 28.9998 25 28.9998H27C27.5523 28.9998 28 29.4476 28 29.9998V33.9998C28 34.5521 28.4477 34.9998 29 34.9998H33C33.5523 34.9998 34 34.5521 34 33.9998V25.4536C34 25.1653 33.8755 24.8909 33.6585 24.701Z"
        stroke="#6A7CA8"
       strokeWidth={2}
       strokeLinecap="round"
       strokeLinejoin="round"
      />
    </svg>
  </div>
  <div className="w-[300px] h-[221px]">
    <p className="w-[300px] absolute left-[1088px] top-[797px] text-lg text-center text-[#849cd9]">
      Une même personne pour vous accompagner, de la recherche de votre appartement jusqu’à votre
      emménagement.{" "}
    </p>
    <p className="w-[189px] absolute left-[1143px] top-[737px] text-xl font-bold text-center text-[#0e215c]">
      Un unique conseiller dédié
    </p>
    <svg
      width={53}
      height={53}
      viewBox="0 0 53 53"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-[53px] h-[53px] absolute left-[1210.5px] top-[667.5px]"
      preserveAspectRatio="none"
    >
      <circle cx="26.5" cy="26.5" r="26.5" fill="#F5EAF9" />
      <path
        d="M21 35C21 33.3431 23.2386 32 26 32C28.7614 32 31 33.3431 31 35"
        stroke="#B985CC"
       strokeWidth={2}
       strokeLinecap="round"
       strokeLinejoin="round"
      />
      <path
        d="M32 29.2495C33.7659 29.7124 35 30.7697 35 31.9999"
        stroke="#B985CC"
       strokeWidth={2}
       strokeLinecap="round"
       strokeLinejoin="round"
      />
      <path
        d="M20 29.2495C18.2341 29.7124 17 30.7697 17 31.9999"
        stroke="#B985CC"
       strokeWidth={2}
       strokeLinecap="round"
       strokeLinejoin="round"
      />
      <path
        d="M26 29C27.6569 29 29 27.6569 29 26C29 24.3431 27.6569 23 26 23C24.3431 23 23 24.3431 23 26C23 27.6569 24.3431 29 26 29Z"
        stroke="#B985CC"
       strokeWidth={2}
       strokeLinecap="round"
       strokeLinejoin="round"
      />
      <path
        d="M32 25.2361C32.6137 24.6868 33 23.8885 33 23C33 21.3431 31.6569 20 30 20C29.2316 20 28.5308 20.2889 28 20.7639"
        stroke="#B985CC"
       strokeWidth={2}
       strokeLinecap="round"
       strokeLinejoin="round"
      />
      <path
        d="M20 25.2361C19.3863 24.6868 19 23.8885 19 23C19 21.3431 20.3431 20 22 20C22.7684 20 23.4692 20.2889 24 20.7639"
        stroke="#B985CC"
       strokeWidth={2}
       strokeLinecap="round"
       strokeLinejoin="round"
      />
    </svg>
  </div>
  <div className="w-[300px] h-[198px]">
    <p className="w-[300px] absolute left-[424px] top-[797px] text-lg text-center text-[#849cd9]">
      <span className="w-[300px] text-lg text-center text-[#849cd9]">
        Prêt à Taux Zéro - TVA 5,5 %
      </span>
      <br />
      <span className="w-[300px] text-lg text-center text-[#849cd9]">
        Des remises(2) sur 100% des logements Nexity.
      </span>
    </p>
    <p className="w-[262px] absolute left-[443px] top-[737px] text-xl font-bold text-center text-[#0e215c]">
      Des aides pour votre premier achat{" "}
    </p>
    <svg
      width={53}
      height={53}
      viewBox="0 0 53 53"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-[53px] h-[53px] absolute left-[546.5px] top-[667.5px]"
      preserveAspectRatio="none"
    >
      <circle cx="26.5" cy="26.5" r="26.5" fill="#EDF8F0" />
      <path
        d="M29 21L35 18V33L29 36V21Z"
        stroke="#93C8A2"
       strokeWidth={2}
       strokeLinecap="round"
       strokeLinejoin="round"
      />
      <path
        d="M23 33L29 36V21L23 18V33Z"
        stroke="#93C8A2"
       strokeWidth={2}
       strokeLinecap="round"
       strokeLinejoin="round"
      />
      <path
        d="M17 21L23 18V33L17 36V21Z"
        stroke="#93C8A2"
       strokeWidth={2}
       strokeLinecap="round"
       strokeLinejoin="round"
      />
    </svg>
  </div>
  <p className="w-[1243px] absolute left-[125px] top-[1291px] text-lg font-light text-left text-[#98aad7]">
    <span className="w-[1243px] text-lg font-light text-left text-[#98aad7]">
      (1) Mensualité donnée à titre indicatif uniquement et non contractuelle, pour l’achat d’un
      appartement de respectivement 187.000 € (avec une remise de 4 200 €) et de 235 000 (avec une
      remise de 4 950 €), sur une base de durée de 25 ans, à un taux d’intérêt fixe moyen constaté
      sur le marché de 1.4%, hors frais, hors assurance et avec un apport personnel de 7.500€. Le
      résultat ne tient pas compte des différentes options fiscales éligibles.
    </span>
    <br />
    <span className="w-[1243px] text-lg font-light text-left text-[#98aad7]">
      Pour être éligible au PTZ : il doit s’agir de votre premier achat en résidence principale et
      votre revenu fiscal de référence sur l’année 2 ans avant la réservation de l’appartement doit
      être inférieur à 37 000 € pour une personne seul et 51 800 € pour deux
    </span>
    <br />
    <br />
    <span className="w-[1243px] text-lg font-light text-left text-[#98aad7]">
      (2) Offre ouverte à tous les locataires et anciens locataires de Nexity Studéa, et ce jusqu’à
      12 mois après la date d’échéance de leur bail, dans la limite d’une seule fois par bien
      acquis. Cette offre se traduira par une réduction correspondant à une somme, estimée,
      équivalente aux frais d’actes d’acquisition ou à la moitié de ces derniers (hors frais de
      financement et de garanties, notamment frais d’hypothèques, frais de cautionnement Crédit
      Logement, hors frais de règlement de copropriété ou cahier des charges, et hors frais de
      traduction) devant être versés par le réservataire au jour de la signature de l’acte
      authentique de vente. Réduction de prix soumise à la signature d’un acte authentique de vente,
      dans les délais stipulés au contrat de réservation. Cette somme, estimée à l’aide du barème
      rapide des notaires, est définitivement et forfaitairement arrêtée le jour de la signature du
      contrat de réservation.{" "}
    </span>
    <br />
  </p>
  <p className="w-[742px] absolute left-[114px] top-[246px] text-[28px] text-left text-[#113eb6]">
    <span className="w-[742px] text-[28px] font-bold text-left text-[#113eb6]">Studéa </span>
    <span className="w-[742px] text-[28px] text-left text-[#113eb6]">s’associe avec </span>
    <span className="w-[742px] text-[28px] font-bold text-left text-[#113eb6]">Kit le nid</span>
    <span className="w-[742px] text-[28px] text-left text-[#113eb6]"> afin d’aider </span>
    <br />
    <span className="w-[742px] text-[28px] text-left text-[#113eb6]">
      ses jeunes locataires à devenir propriétaires !
    </span>
  </p>
  <svg
    width={64}
    height={64}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-16 h-16"
    preserveAspectRatio="xMidYMid meet"
  >
    <rect
      x="7.68018"
      y="7.68018"
      width="49.92"
      height="49.92"
      rx="15.36"
      fill="url(#paint0_linear_1215_6397)"
    />
    <path
      d="M30.1868 38.7734C34.929 38.7734 38.7734 34.929 38.7734 30.1868C38.7734 25.4445 34.929 21.6001 30.1868 21.6001C25.4445 21.6001 21.6001 25.4445 21.6001 30.1868C21.6001 34.929 25.4445 38.7734 30.1868 38.7734Z"
      stroke="white"
     strokeWidth="2.56"
     strokeLinecap="round"
     strokeLinejoin="round"
    />
    <path
      d="M36.3198 36.3198L43.6798 43.6798"
      stroke="white"
     strokeWidth="2.56"
     strokeLinecap="round"
     strokeLinejoin="round"
    />
    <defs>
      <lineargradient
        id="paint0_linear_1215_6397"
        x1="32.6402"
        y1="5.20253"
        x2="32.6402"
        y2="61.6378"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.0434107" stopColor="#81A3F9" />
        <stop offset={1} stopColor="#3462D8" />
      </lineargradient>
    </defs>
  </svg>
  <div className="w-[162px] h-[65px]">
    <svg
      width={119}
      height={44}
      viewBox="0 0 119 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute left-[41.77px] top-[27.77px]"
      preserveAspectRatio="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.0896 28.7195L18.0839 28.7292C17.274 30.1061 17.0111 31.1212 17.0111 31.8324C17.0111 32.6241 17.2228 33.2487 17.6237 33.797C18.1944 34.5392 18.7517 35.0211 19.2734 35.3227C20.1997 35.8335 21.0527 36.3335 21.8299 36.8229C22.2723 37.0844 22.7399 37.4027 23.1299 37.7894C23.4685 38.1252 24.1498 38.905 24.1498 40.0667C24.1498 41.1877 23.6044 42.2345 22.5777 42.8527C21.7551 43.348 20.847 43.4307 20.2007 43.4307C17.7402 43.4307 15.3866 42.1081 13.2293 40.2588L13.2212 40.2518L13.2132 40.2448C12.2754 39.4271 11.4833 38.5341 10.8693 37.5686C9.59877 39.1505 8.64397 40.295 8.01674 40.983C7.50572 41.561 6.99308 42.0816 6.49232 42.4789C6.23861 42.6802 5.93389 42.8934 5.58739 43.0652C5.25918 43.2279 4.74041 43.4307 4.1009 43.4307C2.4031 43.4307 1.36248 42.2757 0.840436 41.4474L0.792317 41.371L0.749837 41.2915C0.291686 40.4333 0 39.48 0 38.46C0 38.0485 0.0848159 37.5889 0.149824 37.2645C0.228275 36.8731 0.339991 36.3924 0.479493 35.8346C0.759224 34.7163 1.17267 33.2014 1.71509 31.3018C2.77286 27.5644 3.83857 23.0607 4.91009 17.7807C5.96539 12.5806 6.48044 7.94708 6.48044 3.86608C6.48044 3.5101 6.50155 3.11751 6.57577 2.73108C6.63742 2.41011 6.77682 1.86181 7.16293 1.34014C8.01694 0.147568 9.35653 0 10.0244 0C11.057 0 11.8418 0.480863 12.3425 0.936009C12.8106 1.36151 13.1609 1.87554 13.4289 2.35353C14.0839 3.42566 14.4291 4.61368 14.4291 5.87444C14.4291 10.6673 13.5936 16.4964 11.9622 23.3323C13.9622 20.754 15.7236 18.6591 17.2435 17.0575L17.2496 17.0511L17.2558 17.0447C17.9923 16.2795 18.6586 15.6404 19.2346 15.175C19.5198 14.9446 19.84 14.7097 20.1784 14.5205C20.4459 14.3708 21.0495 14.0585 21.8208 14.0585C23.1169 14.0585 24.1433 14.6721 24.8629 15.4333C25.3858 15.9605 26.1243 16.8938 26.1243 18.1756C26.1243 18.8711 25.8535 19.4066 25.7425 19.615C25.595 19.8919 25.4181 20.1447 25.257 20.3558C24.931 20.783 24.4961 21.2637 23.9964 21.7771C23.0492 22.7499 22.001 23.8229 20.852 24.9959C19.8737 25.9947 18.9508 27.2249 18.0952 28.7098L18.0896 28.7195ZM23.0359 17.1714C22.6647 16.7698 22.2596 16.5689 21.8208 16.5689C21.4158 16.5689 20.5045 17.3053 19.0869 18.7781C16.779 21.2099 13.8376 24.8899 10.2625 29.818C9.36789 31.0512 8.43357 32.3626 7.45958 33.7522C6.86127 34.6058 6.248 35.4888 5.61975 36.4014C5.68594 36.196 5.75161 35.9913 5.81675 35.7873C6.60235 33.3274 7.31182 30.9696 7.94518 28.7142C10.5802 19.3307 11.8977 11.7175 11.8977 5.87444C11.8977 5.28416 11.7792 4.72099 11.5423 4.18493C11.5115 4.11526 11.4788 4.04605 11.444 3.9773C11.4251 3.94009 11.4057 3.90302 11.3857 3.86608C11.34 3.7817 11.2913 3.69802 11.2395 3.61504C10.8345 2.87864 10.4295 2.51044 10.0244 2.51044C9.6194 2.51044 9.34938 2.61086 9.21437 2.8117C9.07936 2.97906 9.01186 3.33052 9.01186 3.86608C9.01186 4.14353 9.00959 4.42315 9.00506 4.70495C9.00459 4.73417 9.0041 4.76341 9.00358 4.79268C8.93191 8.83981 8.39463 13.3343 7.39175 18.276C6.31168 23.5982 5.2316 28.1672 4.15153 31.983C3.07146 35.7654 2.53142 37.9244 2.53142 38.46C2.53142 38.9955 2.68331 39.5478 2.98708 40.1169C3.3246 40.6524 3.69587 40.9202 4.1009 40.9202C4.50593 40.9202 5.18097 40.3846 6.12604 39.3135C6.4668 38.9406 6.92414 38.4075 7.49806 37.7141C7.50529 37.7054 7.51253 37.6967 7.51978 37.6879C7.66147 37.5166 7.81018 37.3356 7.96593 37.145C8.00498 37.0972 8.04447 37.0488 8.08441 36.9998C8.50509 36.4835 8.97483 35.8998 9.49363 35.2487C9.56635 35.1574 9.64003 35.0648 9.71468 34.9709C10.2632 34.2808 10.8637 33.5191 11.5163 32.686C11.6578 32.5052 11.8018 32.3211 11.9483 32.1337V32.686C11.9483 33.6398 12.1551 34.5548 12.5687 35.4309C13.0549 36.4609 13.8269 37.4371 14.8848 38.3596C16.0574 39.3648 17.1539 40.074 18.1744 40.4873C18.5343 40.6331 18.8848 40.7421 19.2258 40.8142C19.2525 40.8198 19.2791 40.8253 19.3056 40.8305C19.3313 40.8355 19.357 40.8403 19.3826 40.8449C19.6618 40.8951 19.9345 40.9202 20.2007 40.9202C21.1458 40.9202 21.6183 40.6357 21.6183 40.0667C21.6183 39.7654 21.2471 39.3972 20.5045 38.9621C20.4048 38.8991 20.3035 38.8359 20.2007 38.7723C20.103 38.7119 20.0039 38.6512 19.9034 38.5902C19.7031 38.4687 19.4974 38.3461 19.2861 38.2224C18.885 37.9875 18.4642 37.7487 18.0237 37.506C17.1462 37.0039 16.3361 36.2675 15.5936 35.2968C14.851 34.2926 14.4797 33.1378 14.4797 31.8324C14.4797 30.527 14.9523 29.0709 15.8973 27.4642C16.8424 25.8241 17.8887 24.4182 19.0363 23.2467C20.1839 22.0752 21.2302 21.004 22.1752 20.0333C23.1203 19.0626 23.5928 18.4434 23.5928 18.1756C23.5928 17.8744 23.4072 17.5396 23.0359 17.1714ZM20.3464 38.402C20.3464 38.402 20.34 38.4036 20.3252 38.405C20.3388 38.4025 20.3464 38.402 20.3464 38.402Z"
        fill="url(#paint0_linear_1215_6403)"
      />
      <path
        d="M30.7225 40.0063C30.2023 40.0063 29.7689 39.863 29.4222 39.5764C29.0947 39.2708 28.931 38.8409 28.931 38.2869V27.2259C28.931 26.6719 29.0947 26.2517 29.4222 25.9651C29.7689 25.6786 30.2023 25.5353 30.7225 25.5353C31.2426 25.5353 31.676 25.6786 32.0227 25.9651C32.3695 26.2517 32.5428 26.6719 32.5428 27.2259V38.2869C32.5428 38.8409 32.3695 39.2708 32.0227 39.5764C31.676 39.863 31.2426 40.0063 30.7225 40.0063ZM30.7225 22.9849C30.0675 22.9849 29.5474 22.813 29.1621 22.4691C28.7769 22.1062 28.5842 21.6381 28.5842 21.065C28.5842 20.4919 28.7769 20.0334 29.1621 19.6896C29.5474 19.3457 30.0675 19.1738 30.7225 19.1738C31.3581 19.1738 31.8686 19.3457 32.2539 19.6896C32.6584 20.0334 32.8607 20.4919 32.8607 21.065C32.8607 21.6381 32.668 22.1062 32.2828 22.4691C31.8975 22.813 31.3774 22.9849 30.7225 22.9849Z"
        fill="url(#paint1_linear_1215_6403)"
      />
      <path
        d="M43.7704 37.3413C44.7336 37.3986 45.2151 37.8285 45.2151 38.6308C45.2151 39.0893 45.0225 39.4427 44.6372 39.6911C44.2712 39.9203 43.7415 40.0158 43.048 39.9776L42.2679 39.9203C39.0316 39.6911 37.4135 37.9717 37.4135 34.7623V28.5154H35.9688C35.4487 28.5154 35.0441 28.4008 34.7552 28.1716C34.4855 27.9423 34.3507 27.608 34.3507 27.1686C34.3507 26.7292 34.4855 26.3949 34.7552 26.1657C35.0441 25.9364 35.4487 25.8218 35.9688 25.8218H37.4135V23.1855C37.4135 22.6697 37.5773 22.259 37.9047 21.9533C38.2322 21.6477 38.6753 21.4949 39.2339 21.4949C39.7733 21.4949 40.2067 21.6477 40.5342 21.9533C40.8616 22.259 41.0254 22.6697 41.0254 23.1855V25.8218H43.4815C44.0016 25.8218 44.3965 25.9364 44.6661 26.1657C44.9551 26.3949 45.0996 26.7292 45.0996 27.1686C45.0996 27.608 44.9551 27.9423 44.6661 28.1716C44.3965 28.4008 44.0016 28.5154 43.4815 28.5154H41.0254V35.0202C41.0254 36.4339 41.6803 37.1885 42.9902 37.284L43.7704 37.3413Z"
        fill="url(#paint2_linear_1215_6403)"
      />
      <path
        d="M56.2761 40.0063C55.756 40.0063 55.3226 39.863 54.9758 39.5764C54.6484 39.2708 54.4846 38.8409 54.4846 38.2869V21.1796C54.4846 20.6256 54.6484 20.2054 54.9758 19.9188C55.3226 19.6323 55.756 19.489 56.2761 19.489C56.7962 19.489 57.2296 19.6323 57.5764 19.9188C57.9231 20.2054 58.0965 20.6256 58.0965 21.1796V38.2869C58.0965 38.8409 57.9231 39.2708 57.5764 39.5764C57.2296 39.863 56.7962 40.0063 56.2761 40.0063Z"
        fill="url(#paint3_linear_1215_6403)"
      />
      <path
        d="M72.3177 35.9945C72.6451 35.9945 72.9052 36.1187 73.0978 36.367C73.3097 36.6154 73.4157 36.9497 73.4157 37.37C73.4157 37.9622 73.0593 38.4589 72.3466 38.8601C71.6916 39.223 70.95 39.5191 70.1217 39.7484C69.2933 39.9585 68.5035 40.0636 67.7523 40.0636C65.4792 40.0636 63.6781 39.4141 62.3489 38.115C61.0198 36.816 60.3552 35.0393 60.3552 32.7851C60.3552 31.3523 60.6441 30.0819 61.222 28.9739C61.7999 27.8659 62.609 27.0063 63.6492 26.3949C64.7087 25.7836 65.903 25.478 67.2322 25.478C68.5035 25.478 69.6112 25.755 70.5551 26.309C71.499 26.863 72.231 27.6462 72.7511 28.6587C73.2712 29.6712 73.5313 30.8652 73.5313 32.2407C73.5313 33.0621 73.1653 33.4728 72.4333 33.4728H63.9093C64.0248 34.791 64.4005 35.7653 65.0362 36.3957C65.6719 37.007 66.5965 37.3127 67.8101 37.3127C68.4265 37.3127 68.9659 37.2362 69.4282 37.0834C69.9098 36.9306 70.4491 36.7204 71.0463 36.453C71.6242 36.1473 72.048 35.9945 72.3177 35.9945ZM67.3189 27.9996C66.3364 27.9996 65.5466 28.3053 64.9495 28.9166C64.3716 29.5279 64.0248 30.4067 63.9093 31.5529H70.4395C70.401 30.3876 70.112 29.5088 69.5727 28.9166C69.0333 28.3053 68.282 27.9996 67.3189 27.9996Z"
        fill="url(#paint4_linear_1215_6403)"
      />
      <path
        d="M90.9292 25.478C92.6243 25.478 93.8861 25.9556 94.7144 26.9107C95.5427 27.8659 95.9569 29.3082 95.9569 31.2377V38.2869C95.9569 38.8218 95.7931 39.2421 95.4657 39.5478C95.1575 39.8534 94.724 40.0063 94.1654 40.0063C93.6068 40.0063 93.1637 39.8534 92.8362 39.5478C92.5088 39.2421 92.345 38.8218 92.345 38.2869V31.4383C92.345 30.3494 92.1331 29.5566 91.7093 29.0599C91.3048 28.5632 90.6595 28.3149 89.7734 28.3149C88.7332 28.3149 87.8952 28.6396 87.2595 29.2891C86.6431 29.9387 86.3349 30.8079 86.3349 31.8968V38.2869C86.3349 38.8218 86.1712 39.2421 85.8437 39.5478C85.5162 39.8534 85.0731 40.0063 84.5145 40.0063C83.9559 40.0063 83.5128 39.8534 83.1853 39.5478C82.8771 39.2421 82.723 38.8218 82.723 38.2869V27.1973C82.723 26.7006 82.8868 26.2994 83.2142 25.9938C83.5417 25.6881 83.9848 25.5353 84.5434 25.5353C85.0442 25.5353 85.4488 25.6881 85.757 25.9938C86.0845 26.2803 86.2482 26.6624 86.2482 27.14V27.9137C86.7298 27.1304 87.3751 26.5287 88.1842 26.1084C88.9932 25.6881 89.9082 25.478 90.9292 25.478Z"
        fill="url(#paint5_linear_1215_6403)"
      />
      <path
        d="M100.274 40.0063C99.7536 40.0063 99.3202 39.863 98.9735 39.5764C98.646 39.2708 98.4823 38.8409 98.4823 38.2869V27.2259C98.4823 26.6719 98.646 26.2517 98.9735 25.9651C99.3202 25.6786 99.7536 25.5353 100.274 25.5353C100.794 25.5353 101.227 25.6786 101.574 25.9651C101.921 26.2517 102.094 26.6719 102.094 27.2259V38.2869C102.094 38.8409 101.921 39.2708 101.574 39.5764C101.227 39.863 100.794 40.0063 100.274 40.0063ZM100.274 22.9849C99.6188 22.9849 99.0987 22.813 98.7134 22.4691C98.3282 22.1062 98.1355 21.6381 98.1355 21.065C98.1355 20.4919 98.3282 20.0334 98.7134 19.6896C99.0987 19.3457 99.6188 19.1738 100.274 19.1738C100.909 19.1738 101.42 19.3457 101.805 19.6896C102.21 20.0334 102.412 20.4919 102.412 21.065C102.412 21.6381 102.219 22.1062 101.834 22.4691C101.449 22.813 100.929 22.9849 100.274 22.9849Z"
        fill="url(#paint6_linear_1215_6403)"
      />
      <path
        d="M117.151 19.489C117.69 19.489 118.133 19.6418 118.48 19.9474C118.827 20.2531 119 20.6543 119 21.151V38.2869C119 38.8027 118.836 39.2134 118.509 39.5191C118.181 39.8248 117.748 39.9776 117.209 39.9776C116.669 39.9776 116.236 39.8248 115.908 39.5191C115.581 39.2134 115.417 38.8027 115.417 38.2869V37.5705C114.993 38.3538 114.377 38.9651 113.568 39.4045C112.778 39.8439 111.873 40.0636 110.852 40.0636C109.638 40.0636 108.55 39.7579 107.587 39.1466C106.643 38.5353 105.901 37.6756 105.362 36.5676C104.841 35.4405 104.581 34.151 104.581 32.6991C104.581 31.2472 104.841 29.9768 105.362 28.8879C105.901 27.799 106.643 26.9585 107.587 26.3663C108.53 25.774 109.619 25.4779 110.852 25.4779C111.873 25.4779 112.778 25.6881 113.568 26.1084C114.358 26.5286 114.964 27.1209 115.388 27.885V21.0937C115.388 20.6161 115.542 20.234 115.85 19.9474C116.178 19.6418 116.611 19.489 117.151 19.489ZM111.805 37.284C112.961 37.284 113.847 36.8924 114.464 36.1091C115.099 35.3259 115.417 34.2083 115.417 32.7564C115.417 31.3045 115.099 30.1965 114.464 29.4324C113.847 28.6491 112.971 28.2575 111.834 28.2575C110.678 28.2575 109.783 28.6396 109.147 29.4037C108.511 30.1679 108.193 31.2663 108.193 32.6991C108.193 34.151 108.511 35.2781 109.147 36.0805C109.783 36.8828 110.669 37.284 111.805 37.284Z"
        fill="url(#paint7_linear_1215_6403)"
      />
      <defs>
        <lineargradient
          id="paint0_linear_1215_6403"
          x1="0.168196"
          y1="10.8598"
          x2="46.6731"
          y2="56.4553"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#CC95DF" />
          <stop offset={1} stopColor="#4F80FF" />
        </lineargradient>
        <lineargradient
          id="paint1_linear_1215_6403"
          x1="0.168196"
          y1="10.8598"
          x2="46.6731"
          y2="56.4553"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#CC95DF" />
          <stop offset={1} stopColor="#4F80FF" />
        </lineargradient>
        <lineargradient
          id="paint2_linear_1215_6403"
          x1="0.168196"
          y1="10.8598"
          x2="46.6731"
          y2="56.4553"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#CC95DF" />
          <stop offset={1} stopColor="#4F80FF" />
        </lineargradient>
        <lineargradient
          id="paint3_linear_1215_6403"
          x1="0.168196"
          y1="10.8598"
          x2="46.6731"
          y2="56.4553"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#CC95DF" />
          <stop offset={1} stopColor="#4F80FF" />
        </lineargradient>
        <lineargradient
          id="paint4_linear_1215_6403"
          x1="0.168196"
          y1="10.8598"
          x2="46.6731"
          y2="56.4553"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#CC95DF" />
          <stop offset={1} stopColor="#4F80FF" />
        </lineargradient>
        <lineargradient
          id="paint5_linear_1215_6403"
          x1="0.168196"
          y1="10.8598"
          x2="46.6731"
          y2="56.4553"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#CC95DF" />
          <stop offset={1} stopColor="#4F80FF" />
        </lineargradient>
        <lineargradient
          id="paint6_linear_1215_6403"
          x1="0.168196"
          y1="10.8598"
          x2="46.6731"
          y2="56.4553"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#CC95DF" />
          <stop offset={1} stopColor="#4F80FF" />
        </lineargradient>
        <lineargradient
          id="paint7_linear_1215_6403"
          x1="0.168196"
          y1="10.8598"
          x2="46.6731"
          y2="56.4553"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#CC95DF" />
          <stop offset={1} stopColor="#4F80FF" />
        </lineargradient>
      </defs>
    </svg>
    <svg
      width={23}
      height={18}
      viewBox="0 0 23 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute left-[138.5px] top-[72.5px]"
      preserveAspectRatio="none"
    >
      <path
        d="M5.96 14.28C5.06667 14.28 4.38 14.1267 3.9 13.82C3.42 13.5133 3.06667 13.1733 2.84 12.8H2.48V14H0V0H2.52V5.22H2.88C3.02667 4.98 3.22 4.75333 3.46 4.54C3.71333 4.32667 4.04 4.15333 4.44 4.02C4.85333 3.87333 5.36 3.8 5.96 3.8C6.76 3.8 7.5 4 8.18 4.4C8.86 4.78667 9.40667 5.36 9.82 6.12C10.2333 6.88 10.44 7.8 10.44 8.88V9.2C10.44 10.28 10.2333 11.2 9.82 11.96C9.40667 12.72 8.86 13.3 8.18 13.7C7.5 14.0867 6.76 14.28 5.96 14.28ZM5.2 12.08C5.97333 12.08 6.62 11.8333 7.14 11.34C7.66 10.8333 7.92 10.1 7.92 9.14V8.94C7.92 7.98 7.66 7.25333 7.14 6.76C6.63333 6.25333 5.98667 6 5.2 6C4.42667 6 3.78 6.25333 3.26 6.76C2.74 7.25333 2.48 7.98 2.48 8.94V9.14C2.48 10.1 2.74 10.8333 3.26 11.34C3.78 11.8333 4.42667 12.08 5.2 12.08Z"
        fill="#849CD9"
      />
      <path
        d="M13.8339 18V15.8H19.2339C19.6072 15.8 19.7939 15.6 19.7939 15.2V12.7H19.4339C19.3272 12.9267 19.1606 13.1533 18.9339 13.38C18.7072 13.6067 18.4006 13.7933 18.0139 13.94C17.6272 14.0867 17.1339 14.16 16.5339 14.16C15.7606 14.16 15.0806 13.9867 14.4939 13.64C13.9206 13.28 13.4739 12.7867 13.1539 12.16C12.8339 11.5333 12.6739 10.8133 12.6739 10V4.08H15.1939V9.8C15.1939 10.5467 15.3739 11.1067 15.7339 11.48C16.1072 11.8533 16.6339 12.04 17.3139 12.04C18.0872 12.04 18.6872 11.7867 19.1139 11.28C19.5406 10.76 19.7539 10.04 19.7539 9.12V4.08H22.2739V15.76C22.2739 16.44 22.0739 16.98 21.6739 17.38C21.2739 17.7933 20.7406 18 20.0739 18H13.8339Z"
        fill="#849CD9"
      />
    </svg>
    <img
      src="image-98.png"
      className="w-[38px] h-[38px] absolute left-[165.86px] top-[54.86px] object-cover"
    />
  </div>
  <div className="w-[300px] h-[195px]">
    <p className="w-[300px] absolute left-[756px] top-[771px] text-lg text-center text-[#849cd9]">
      Télécharger gratuitement les plans des appartements et les plaquettes de présentation de nos
      résidences.
    </p>
    <p className="absolute left-[804px] top-[737px] text-xl font-bold text-center text-[#0e215c]">
      Accès libre aux plans
    </p>
    <svg
      width={53}
      height={53}
      viewBox="0 0 53 53"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-[53px] h-[53px] absolute left-[878.5px] top-[667.5px]"
      preserveAspectRatio="none"
    >
      <circle cx="26.5" cy="26.5" r="26.5" fill="#FEF2D5" />
      <path
        d="M30 18H22C21.4477 18 21 18.4477 21 19V35C21 35.5523 21.4477 36 22 36H30C30.5523 36 31 35.5523 31 35V19C31 18.4477 30.5523 18 30 18Z"
        stroke="#DCC07E"
       strokeWidth={2}
       strokeLinecap="round"
       strokeLinejoin="round"
      />
      <path
        d="M26 33H26.002V33.002H26V33Z"
        stroke="#DCC07E"
       strokeWidth={2}
       strokeLinecap="round"
       strokeLinejoin="round"
      />
    </svg>
  </div>
  <p className="w-[488px] absolute left-[179px] top-[1061px] text-lg text-left text-[#849cd9]">
    N’attendez pas d’avoir 30 ans pour devenir propriétaire ! Découvrez comment avec notre guide
    gratuit.
  </p>
  <p className="w-[567px] absolute left-[179px] top-[1013px] text-[28px] font-bold text-left text-[#113eb6]">
    Découvrez notre guide du premier achat.
  </p>
  <div className="w-[233.63px] h-[205px]">
    
    <img
      src="static/img/GuideA.svg"
      className="w-[233] h-[205px] absolute left-[990.5px] top-[997.5px] rounded-[10px] object-cover"
    />
  </div>
  <div
    className="flex justify-center items-center w-[295px] absolute left-[1152px] top-[33px] gap-2.5 px-[120px] py-4 rounded-xl"
    style={{ background: "linear-gradient(to bottom, #81a3f9 -0.06%, #3462d8 108.09%)" }}
  >
    <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-white">
      Connexion / Inscription
    </p>
  </div>
  <p className="absolute left-[1062px] top-[45px] text-xl font-bold text-center text-[#113eb6]">
    Blog
  </p>
  <p className="absolute left-[836px] top-[45px] text-xl font-bold text-center text-[#113eb6]">
    Qui sommes-nous ?
  </p>
  <div className="w-[72px] h-[37px]">
    <p className="absolute left-[732px] top-[45px] text-xl font-bold text-center text-[#113eb6]">
      Accueil
    </p>
    <svg
      width={30}
      height={3}
      viewBox="0 0 30 3"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute left-[751.5px] top-[80.5px]"
      preserveAspectRatio="xMidYMid meet"
    >
      <line y1="1.5" x2={30} y2="1.5" stroke="#113EB6"strokeWidth={3} />
    </svg>
  </div>
  <svg
    width={43}
    height={43}
    viewBox="0 0 43 43"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="absolute left-[509px] top-[352px]"
    preserveAspectRatio="xMidYMid meet"
  >
    <circle cx="21.5" cy="21.5" r="21.5" fill="#FF0000" />
  </svg>
  <svg
    width={43}
    height={43}
    viewBox="0 0 43 43"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="absolute left-[688px] top-[253px]"
    preserveAspectRatio="xMidYMid meet"
  >
    <circle cx="21.5" cy="21.5" r="21.5" fill="#FF0000" />
  </svg>
  <svg
    width={43}
    height={43}
    viewBox="0 0 43 43"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="absolute left-[70px] top-[1426px]"
    preserveAspectRatio="xMidYMid meet"
  >
    <circle cx="21.5" cy="21.5" r="21.5" fill="#FF0000" />
  </svg>
  <svg
    width={43}
    height={43}
    viewBox="0 0 43 43"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="absolute left-[648px] top-[857px]"
    preserveAspectRatio="xMidYMid meet"
  >
    <circle cx="21.5" cy="21.5" r="21.5" fill="#FF0000" />
  </svg>
</div>




  
 </>
  )
}
