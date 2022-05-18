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
    Recherce 
       <div className="relative p-4">
         <div>
           <img src='../static/img/logo.png'/>
         </div>
           <div className='flex items-center border-2 rounded-3xl py-2 shadow-sm bg-white'>
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
     
         <div className='flex mt-3 space-x-1'>
           <button className="bg-white border-2 border-gray-200 rounded-xl w-40 mx-4 h-9">
             Prix
           </button>
           <button className="bg-white border-2 rounded-xl w-40 border-gray-200">
             Nb de pièce     
           </button>
        </div>
       </div>     
    Recherche Studea 
       <div className="relative p-4">
         <div>
           <img src='../static/img/logo.png'/>
         </div>
           <div className='flex items-center border-2 rounded-xl py-2 shadow-sm bg-white border-_rougeStudea'>
             <input type='text' placeholder='Ville'
             className='pl-5 bg-transparent outline-none flex-grow'/>
             <svg
                   width="23"
                   height="23"
                   viewBox="0 0 23 23"
                   fill="none"
                   xmlns="http://www.w3.org/2000/svg"
                   className=" w-8 h-8 p-2 cursor-pointer inline-flex mx-2 bg-_rougeStudea rounded-lg"
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
            
            <div className=" w-_164 h-_46 relative">
               <div className=" w-_164 h-_39 -left-0.5 -top-0.5 rounded-xl bg-_switchButton flex flex-row my-96 mx-36">
                        <div>
                        <svg
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-6 h-6 absolute left-_123 top-2.5 mx-32"
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
                        </svg></div>
                       <div>
                      <p className="left-4 top-3 text-sm font-bold text-white text-center p-2 mx-4">Mode carte</p>
                    </div>
            </div>
            </div>
         
       </div>  

    









  
  Landing Page mobile


  <div>
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



  
<div className=' text-_grisBleu font-thin text-sm mt-32'>
(1) Mensualités données à titre indicatif uniquement et non contractuelles, pour l’achat d’un appartement de 187.000 €, sur une base de durée de 25 ans, à un taux d’intérêt fixe moyen constaté sur le marché de 1.4%, hors frais, hors assurance et avec un apport personnel de 7.500€. 
Pour être éligible au PTZ : il doit s’agir de votre premier achat en résidence principale et votre revenu fiscal de référence sur l’année 2 ans avant la réservation de l’appartement doit être inférieur à 37 000 €
</div>


</div>

  <div className=' bg-yellow-700 w-screen '>
  
  

    <div className='flex flex-row justify-between'>
          <div className='my-8 mx-4 top'>
              <p className="w-_341 text-xl font-light text-_titre">
              Etudiants, Jeunes Actifs. 
              </p>
              <p className=' font-semibold text-_titre text-2xl'>
              La première Offre Jeune pour devenir propriétaire 
              </p>
              <p className=" w-_312 text-base text-center text-indigo-300">
                Réalisez votre premier achat immobilier pour seulement 700€ par moisdd!*
              </p>
          </div>
              <div className='justify-end flex'>
                <img src="../static/img/icons/House1.svg" className=" object-cover w-_515 h-_460 mx-2" />
              </div>
      </div>

    <div className=' flex flex-row mb-32 bg-blue-800 justify-between'>
      <div className='flex flex-row-reverse items-start mx-4 w-_388 h-_198'>
              <div className='  '>
              <p className="text-_bleuMarine font-_spaceGrotesk text-xl font-bold">
                  Des logements dans toute la France
              </p>
              <p className=" text-_grisBleu font-_spaceGrotesk bg-white ">
              Accéder à notre carte avec plus de 2 500 logements neufs disponibles.  </p>
              </div>
            <div className=''>
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

      <div className='flex flex-row-reverse items-start mx-4  lg:w-_388 lg:h-_198'>
      <div className='mx-4'>
      <p className=" text-_bleuMarine font-_spaceGrotesk text-xl font-bold">Accès libre aux plans</p>
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

    <div className='flex flex-row-reverse items-start mx-4 mb-4 lg:w-_388 lg:h-_198'>
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


      <div className='flex flex-row-reverse items-start mx-4 mb-12 lg:w-_388 lg:h-_198'>
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
</div>

<div className='bg-white flex w-1/2'>
  <div className=' bg-green-700'>
        <p className=" text-2xl font-semibold text-_bleuMarine mx-4">Nos services partenaires pour les étudiants</p>
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
        </div></div>

        <div className="relative bg-yellow-200" style={{height: "487.03px"}}>
            <div className="w-40 h-40 absolute bg-indigo-50  rounded-xl" style={{left: "110.90px", top: "260.36px"}}/>
            <div className="w-40 h-40 absolute bg-indigo-50  rounded-xl" style={{left: "200.66px", top: "48.79px"}}/>
            <div className="w-20 h-20 absolute bg-green-50  rounded-xl" style={{left: "382.59px", top: "311.62px"}}/>
            <div className="w-20 h-20 absolute bg-yellow-100  rounded-xl" style={{left: "370.76px" ,top: "0px"}}/>
            <div className="w-20 h-20 absolute bg-purple-100  rounded-xl border-purple-100 border-opacity-10" style={{left: "0px", top: "201.83px"}}/>
            <div className="w-40 h-40 absolute" style={{left: "180.76px" ,top: "320.68px"}}>
                <div className="flex items-center justify-center flex-1 h-full px-4 py-14 bg-white rounded-xl">
                    <div className="inline-flex flex-col space-y-2 items-center justify-end flex-1 h-full">
                        <img className="w-28 h-4" src="../static/img/LogoCautioneo.svg"/>
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
                        <img className="w-full h-1/2" src="../static/img/LogoHeyme.svg"/>
                        <div className="w-3/4 h-10">
                            <div className="flex items-center justify-center flex-1 h-full px-5 py-1.5 bg-red-500 bg-opacity-10 rounded-xl">
                                <p className="flex-1 h-full text-base font-bold text-center text-red-500">-15%</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
   </div>



<div className="flex flex-row justify-between items-start relative gap-2 p-16 rounded-xl bg-white border border-_bordureBleu mt-5 mb-5 mx-28">
    
    <div>
      <p className="flex-grow-0 flex-shrink-0 w-72 text-lg font-bold text-left text-_titre">
          Découverz notre guide du premier achat.
        </p>
        <p className="self-stretch flex-grow-0 flex-shrink-0 w-72 text-sm font-medium text-left text-_grisBleu">
          Kit le nid et La Banque Postale s’unissent pour t’aider à voler de tes propres ailes.
        </p>
        <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2.5 px-10 py-3 rounded-xl border border-_aPropos mt-6">
      <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-_aPropos">
        Télécharger notre guide
      </p>
    </div>
      </div>
    

    <div>
      <img src='../static/img/GuideA.svg'/>
    </div>
   
  </div>



  
<div className=' text-_grisBleu font-thin text-sm mt-10 -mb-10'>
(1) Mensualités données à titre indicatif uniquement et non contractuelles, pour l’achat d’un appartement de 187.000 €, sur une base de durée de 25 ans, à un taux d’intérêt fixe moyen constaté sur le marché de 1.4%, hors frais, hors assurance et avec un apport personnel de 7.500€. 
Pour être éligible au PTZ : il doit s’agir de votre premier achat en résidence principale et votre revenu fiscal de référence sur l’année 2 ans avant la réservation de l’appartement doit être inférieur à 37 000 €
</div>


</div>






connexion/inscription

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
        src="../static/img/icons/House1.svg"
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
    src="../static/img/icons/House1.svg"
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
          color-interpolation-filters="sRGB"
        >
          <feflood flood-opacity={0} result="BackgroundImageFix" />
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
            <stop offset={1} stopColor="#E2425C" stop-opacity={0} />
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
            <stop offset={1} stopColor="#6A45BE" stop-opacity={0} />
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
        <g clip-path="url(#clip0_1654_4082)">
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
        <g clip-path="url(#clip0_1654_4090)">
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
</div>;

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
      <img
        src="ralph-ravi-kayden-2d4laqalbda-unsplash.jpeg"
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
          color-interpolation-filters="sRGB"
        >
          <feflood flood-opacity={0} result="BackgroundImageFix" />
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
</div>;

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
</div>;

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
</div>;

Bien Studea

<div className="w-[1480px] h-[1999px] relative overflow-hidden bg-[#f9fbff]">
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
          stroke-miterlimit={10}
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
</div>;


Recherche bien


<div
  className="w-[375px] h-[812px] relative overflow-hidden"
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
          color-interpolation-filters="sRGB"
        >
          <feflood flood-opacity={0} result="BackgroundImageFix" />
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
          color-interpolation-filters="sRGB"
        >
          <feflood flood-opacity={0} result="BackgroundImageFix" />
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
</div>;


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
</div>;
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
</div>;

Connexion Mobile

<div className="w-[375px] h-[812px] relative overflow-hidden bg-[#f9fbff] mt-8">
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
        color-interpolation-filters="sRGB"
      >
        <feflood flood-opacity={0} result="BackgroundImageFix" />
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
        color-interpolation-filters="sRGB"
      >
        <feflood flood-opacity={0} result="BackgroundImageFix" />
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
        color-interpolation-filters="sRGB"
      >
        <feflood flood-opacity={0} result="BackgroundImageFix" />
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
            <stop offset={1} stopColor="#E2425C" stop-opacity={0} />
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
            <stop offset={1} stopColor="#6A45BE" stop-opacity={0} />
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
        <g clip-path="url(#clip0_1654_4040)">
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
        <g clip-path="url(#clip0_1654_4048)">
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
</div>;

  
         </>
  )
}
