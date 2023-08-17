import * as types from "../action/type";

const initialState = {
    countries: [],
    selectedCountry: null,
    selectedPort: null,
    selectedBarang: null,
    barangResponse: "",
    harga: null,
    tarifBeaMasuk: "",
    total: null,
};

const apiReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_SELECTED_COUNTRY:
            return {
                ...state,
                selectedCountry: action.payload
            };
        case types.SET_SELECTED_PORT:
            return {
                ...state,
                selectedPort: action.payload
            };

        case types.SET_BARANG:
            return {
                ...state,
                selectedBarang: action.payload
            };
        case types.SET_BARANG_RESPONSE:
            return {
                ...state,
                barangResponse: action.payload
            };
        case types.SET_HARGA:
            return {
                ...state,
                harga: action.payload
            };
        case types.SET_TARIF_BEAMASUK:
            return {
                ...state,
                tarifBeaMasuk: action.payload
            };
        case types.SET_TOTAL:
            return {
                ...state,
                total: action.payload
            };
        default:
            return state;
    }
};

export default apiReducer;
