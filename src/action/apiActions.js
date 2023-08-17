import axios from 'axios';
import * as types from './type';
import { API_URLS } from '../config/apiConfig';
let countries = null
export const fetchCountries = (selectedCountry) => {
    return (dispatch) => {
        axios.get(`${API_URLS.getCountries}?ur_negara=${selectedCountry}`)
            .then(response => {
                dispatch({
                    type: types.SET_SELECTED_COUNTRY,
                    payload: response.data.data[0].ur_negara

                });
                countries = response.data.data[0].kd_negara
            })
            .catch(error => {
                console.error('Error fetching countries:', error);
            });

    };
};


export const fetchPorts = (selectedPort) => {

    console.log("ini yang dibawa dari form" + countries)
    return (dispatch) => {
        axios.get(`${API_URLS.getPorts}?kd_negara=${countries}&ur_pelabuhan=${selectedPort}`)
            .then(response => {
                dispatch({
                    type: types.SET_SELECTED_PORT,
                    payload: response.data.data[0].ur_pelabuhan
                });
            })
            .catch(error => {
                console.error('Error fetching ports:', error);
            });
    };
};

export const fetchBarang = (barang) => {
    return (dispatch) => {
        axios.get(`${API_URLS.getBarang}?hs_code=${barang}`)
            .then(response => {
                const respMapping = response.data.data[0].hs_code_format + " " + response.data.data[0].uraian_id + " - " + response.data.data[0].sub_header;
                dispatch({
                    type: types.SET_BARANG_RESPONSE,
                    payload: respMapping
                });
            })
            .catch(error => {
                console.error('Error fetching barang:', error);
            });
    };
};

export const fetchTarif = (barang, harga) => {
    return (dispatch) => {
        axios.get(`${API_URLS.getTarif}?hs_code=${barang}`)
            .then(response => {
                const tarifBeaMasuk = response.data.data[0].bm;
                const countTarifBeaMasuk = harga * tarifBeaMasuk / 100;

                dispatch({
                    type: types.SET_TARIF_BEAMASUK,
                    payload: tarifBeaMasuk
                });

                dispatch({
                    type: types.SET_TOTAL,
                    payload: countTarifBeaMasuk
                });
            })
            .catch(error => {
                console.error('Error fetching tarif:', error);
            });
    };
};





