import axios from 'axios';

export const getAllCustomers= ()=>{
    return  axios.get('http://localhost:6080/api/customers');
}

export const getOneCustomer= (id)=>{
    return  axios.get('http://localhost:6080/api/customers/'+id);
}

export const saveCustomer= (customer)=>{
    return  axios.post('http://localhost:6080/api/customers/',customer);
}

export const updateCustomer= (customer,id)=>{
    return  axios.put('http://localhost:6080/api/customers/'+id,customer);
}

export const deleteCustomer= (id)=>{
    return  axios.delete('http://localhost:6080/api/customers/'+id);
}

