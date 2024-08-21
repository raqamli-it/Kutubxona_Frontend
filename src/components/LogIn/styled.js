import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;
  height: 100vh; 
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #e0eafc 0%, #cfdef3 100%);
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 350px;
  max-width: 500px; /* Formani cheklangan kenglikka ega qilish */
  padding: 20px;
  background: #fff; /* Formaning orqa fon rangi */
  border-radius: 12px; /* Burchaklarni yumshatish */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Yengil soya berish */
  border: 1px solid #ddd; /* Ramka rangi */
  transition: box-shadow 0.3s ease, transform 0.3s ease; /* Yuzaga chiqish effektlari */
  
  &:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3); /* Hover holatidagi soya */
    transform: translateY(-5px); /* Hover holatidagi ko'tarilish */
  }
`;

export const User = styled.input`
  padding: 12px;
  margin-bottom: 15px; /* Elementlar orasida bo'shliq */
  border: 1px solid #ddd; /* Ramka rangi */
  border-radius: 6px; /* Burchaklarni yumshatish */
  font-size: 16px;
  outline: none; /* Fokusi holatida ko'rinadigan standart ramkani olib tashlash */
  transition: border-color 0.3s ease, box-shadow 0.3s ease; /* O'zgarish animatsiyasi */

  &:focus {
    border-color: #007bff; /* Fokusi holatidagi ramka rangi */
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5); /* Fokusi holatida soya */
  }
`;

export const Passwords = styled.input`
  padding: 12px;
  margin-bottom: 20px; /* Elementlar orasida bo'shliq */
  border: 1px solid #ddd; /* Ramka rangi */
  border-radius: 6px; /* Burchaklarni yumshatish */
  font-size: 16px;
  outline: none; /* Fokusi holatida ko'rinadigan standart ramkani olib tashlash */
  transition: border-color 0.3s ease, box-shadow 0.3s ease; /* O'zgarish animatsiyasi */

  &:focus {
    border-color: #007bff; /* Fokusi holatidagi ramka rangi */
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5); /* Fokusi holatida soya */
  }
`;

export const Button = styled.button`
  padding: 12px;
  background-color: #007bff; /* Tugma orqa fon rangi */
  color: white; /* Matn rangi */
  border: none;
  border-radius: 6px; /* Burchaklarni yumshatish */
  font-size: 16px;
  cursor: pointer; /* Kursorni qo'lga o'zgartirish */
  transition: background-color 0.3s ease, transform 0.3s ease; /* O'zgarish animatsiyasi */
  
  &:hover {
    background-color: #0056b3; /* Hover holatidagi orqa fon rangi */
    transform: scale(1.05); /* Hover holatida kattalashish */
  }
`;

export const Error = styled.p`
  color: #d9534f; /* Xato xabari rangi */
  font-size: 14px;
  margin-bottom: 20px;
  text-align: center; /* Xato xabarini markazlashtirish */
`;
