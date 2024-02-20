const { requestWithHistory } = require('../chatGptApi');
const { delimiter } = require('../constants');
const { generalPrompt, shippingPrompt } = require('../prompts');

const shipping = async (cleanedUserMessage, sessionId) => {
  const messages = [
    {
      role: 'system',
      content: `${generalPrompt}
${shippingPrompt}`
    },
    { role: 'user', content: `${delimiter}${cleanedUserMessage}${delimiter}` }
  ];
  return await requestWithHistory(messages, sessionId);
};

module.exports = shipping;
