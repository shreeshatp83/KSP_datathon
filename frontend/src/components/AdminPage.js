import React from 'react';

const NamesList = () => {
    const names = [
        "B P BASAVARAJ",
        "BASAVARADHYA.S.B",
        "BANDIWADDAR C B",
        "V.V.SALAGUNDI",
        "MANJUNATH M.P.",
        "VINODKUMAR M",
        "Babu",
        "HANMANTH REDDY",
        "SYED SWALEHA",
        "SYED ABDUL RAHAMAN",
        "KALANDAR A B",
        "B.M.KAMBAR",
        "SHABANABANU SHABULSAHEB DODAMANI",
        "A K GANI",
        "G.S Nagaraj",
        "Yogambaram K",
        "S R BHAJANTRI",
        "Basagoud S Nerli",
        "KRISHNA NAIK.L",
        "KULKARNI B N",
        "MOHAMED SALEEM B",
        "A M DODAMANE",
        "D SANTOSH KUMAR",
        "MUKAPPA N C",
        "JANDI SAB SALIM NAIKWADI",
        "SARALADEVI.D",
        "SHRESHAIL K YALASANG",
        "SHIVASHANKARA B",
        "Nanjunda Swamy M",
        "KIRAN GAJANAN SHET GAJANAN",
        "NANJUNDA SWAMY N G",
        "SHAIR UR REHAMAN",
        "CHANDRAKANTH CHAYA N",
        "SHEVU.S",
        "SHIVASHANKAR",
        "BABURAO.J.",
        "SWAMY Y M",
        "REVANSIDAPPA",
        "MAMATHA.A",
        "PRASANNA KUMAR B S ADISHESHAIAH",
        "GANGAHAHANUMAIAH M",
        "POOVAPPA B D",
        "REVATHI",
        "K.K.THYAGARAJ",
        "MARUTHI B",
        "VINOD UMESH TAMSE",
        "ANANDKUMAR.R.N",
        "THIPPESWAMY.B",
        "HEMANTH KUMAR",
        "RAMESHA.D",
        "H.M.MAROL",
        "Nagojirao C",
        "S.B.BIRADAR",
        "S N HALCHARI",
        "CHANDRAMAPPA",
        "KISHAN RAMAIAH PANCHAKATTIMATH",
        "NAGARAJA H N",
        "PRABHULING",
        "VEERABHADRA SWAMY",
        "NANJUNDA SAMY T N",
        "KIRAN C",
        "KOTESH.M",
        "JAYAPRAKASH N R",
        "SYED.GOUSE",
        "S B SHINDHE",
        "KHALANDAR SHARIFF.A.",
        "U S BANASODE",
        "VIRUPAKSHIAH D.M.",
        "NINGAPPA HANUMANTHAPPA DOLE",
        "R SRINIVASA",
        "KRISHNA MURTHY H",
        "LAVA HANAMANTAPPA TIRUMALE",
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
            {names.map((name, index) => (
                <div key={index} className="bg-blue-200 rounded-lg shadow-md p-4 border border-blue-400">
                    {name}
                </div>
            ))}
        </div>
    );
};

const AdminPage = () => {
    return (
        <div className="container mx-auto">
            <h1 className="text-3xl font-bold text-center my-4">Names List</h1>
            <a href='http://localhost:3000/profile/23'>

            <NamesList />
            </a>
        </div>
    );
};

export default AdminPage;
