export const sendMessage = async (
  idInstance: string,
  apiTokenInstance: string,
  message: string,
  chatId: string
) => {
  const url = `https://api.green-api.com/waInstance${idInstance}/sendMessage/${apiTokenInstance}`;
  const payload = {
    chatId: chatId + "@c.us",
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
