import axios from 'axios';


const ApiBusca = axios.create({
    baseURL: "https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/WebSearchAPI",
    headers: {'x-rapidapi-key': 'aec654201dmsh5c9f461abe6a604p19428cjsn4f9340eb7089', 'x-rapidapi-host': 'contextualwebsearch-websearch-v1.p.rapidapi.com'},
});

export default ApiBusca;
