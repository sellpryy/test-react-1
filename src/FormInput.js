import './FormInput.css';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCountries, fetchPorts, fetchBarang, fetchTarif } from './action/apiActions';


const FormInput = () => {
    const dispatch = useDispatch();
    const selectedCountry = useSelector(state => state.api.selectedCountry);
    const selectedPort = useSelector(state => state.api.selectedPort);
    const barangResponse = useSelector(state => state.api.barangResponse);
    const tarifBeaMasuk = useSelector(state => state.api.tarifBeaMasuk);
    const total = useSelector(state => state.api.total);
    const [barang, setBarang] = useState('');
    const [harga, setHarga] = useState('');


    const handleCountryChange = (e) => {
        const selectedCountry = e.target.value;
        dispatch(fetchCountries(selectedCountry));
         
    };
    const handlePortChange = (e) => {
        const selectedPort = e.target.value;
        if (selectedPort.length >= 3) {
            dispatch(fetchPorts(selectedPort));
        }

    };
    const handleBarangChange = (e) => {
        const selectedBarang = e.target.value;
        setBarang(selectedBarang);
        dispatch(fetchBarang(selectedBarang));
        dispatch(fetchTarif(selectedBarang, harga));
    };

    const handlehargaChange = (e) => {
        const selectedHarga = e.target.value;
        setHarga(selectedHarga);
        dispatch(fetchTarif(barang, selectedHarga));
    };


    return (
        <div className="container">
            <div>
                <label className="label">Negara:</label>
                <input
                    className="input-field"
                    type="text"
                    value={selectedCountry}
                    onChange={handleCountryChange}
                />
                {/* Render list of countries */}
            </div>
            <div>
                <label className="label">Pelabuhan:</label>
                <input
                    className="input-field"
                    type="text"
                    value={selectedPort}
                    onChange={handlePortChange}
                />
            </div>
            <div>
                <label className="label">Barang:</label>
                <input
                    className="input-field"
                    type="text"
                    value={barang}
                    onChange={handleBarangChange}
                />
                <textarea
                    className="input-field"
                    rows="4"
                    cols="50"
                    value={barangResponse}
                    placeholder="Enter your text here"
                />
            </div>
            <div>
                <label className="label">Harga:</label>
                <input
                    className="input-field"
                    type="number"
                    value={harga}
                    onChange={handlehargaChange}
                />
            </div>
            <div>
                <label className="label">Tarif Bea Masuk:</label>
                <input
                    className="input-field"
                    type="text"
                    value={tarifBeaMasuk + "%"}
                    readOnly
                />
                <input
                    className="input-field"
                    type="text"
                    value={total}
                    readOnly
                />
            </div>
        </div>
    );
};

export default FormInput