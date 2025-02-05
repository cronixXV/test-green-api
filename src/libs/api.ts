export const sendMessage = async (
  idInstance: string,
  apiTokenInstance: string,
  message: string
) => {
  const url = `https://api.green-api.com/waInstance${idInstance}/sendMessage/${apiTokenInstance}`;
  const payload = {
    chatId: "79049550505@c.us",
    message: message,
  };

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error("Ошибка при отправке сообщения.");
  }

  return response;
};

// const createChatId = (phoneNumber: string): string => {
//   return `${phoneNumber}@c.us`; // Формируем chatId
// };

// export const sendMessage = async (
//   idInstance: string,
//   apiTokenInstance: string,
//   phoneNumber: string,
//   message: string
// ) => {
//   const chatId = createChatId(phoneNumber);
//   const url = `https://api.green-api.com/waInstance${idInstance}/sendMessage/${apiTokenInstance}`;
//   const payload = { chatId, message };

//   const response = await fetch(url, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(payload),
//   });

//   if (!response.ok) {
//     throw new Error("Ошибка при отправке сообщения.");
//   }

//   return response;
// };
