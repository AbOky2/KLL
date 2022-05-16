import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
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
           <img src='./static/img/logo.png'/>
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
           <img src='./static/img/logo.png'/>
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
                <img className="w-28 h-4" src="https://via.placeholder.com/104.2425308227539x17.743410110473633"/>
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
                <img className="w-full h-1/2" src="https://via.placeholder.com/123.89794158935547x41.50580596923828"/>
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
                <img src="static/img/icons/House1.svg" className=" object-cover w-_515 h-_460 mx-2" />
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
      <img src='static/img/GuideA.svg'/>
    </div>
   
  </div>



  
<div className=' text-_grisBleu font-thin text-sm mt-10 -mb-10'>
(1) Mensualités données à titre indicatif uniquement et non contractuelles, pour l’achat d’un appartement de 187.000 €, sur une base de durée de 25 ans, à un taux d’intérêt fixe moyen constaté sur le marché de 1.4%, hors frais, hors assurance et avec un apport personnel de 7.500€. 
Pour être éligible au PTZ : il doit s’agir de votre premier achat en résidence principale et votre revenu fiscal de référence sur l’année 2 ans avant la réservation de l’appartement doit être inférieur à 37 000 €
</div>


</div>
  
         </>
  )
}
