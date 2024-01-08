/**
 * @description Simple data store to maintain state of conversation thread
 */
const store = {};

const initConversation = (conversationId) => {
  if (!store[conversationId]) {
    store[conversationId] = {
      conversation: [],
      attributes: {}
    };
  }
};

/**
 *
 * @param {*} conversationId
 * @param {*} message
 * @param {('system'|'user'|'assistant')} role
 */
const addMessage = (conversationId, message, role = 'assistant') => {
  if (!conversationId || !message) throw Error('conversationId, message are required');

  initConversation(conversationId);

  const messageObject = { role, content: message };
  store[conversationId].conversation.push(messageObject);
};

const getConversation = (conversationId) => store[conversationId].conversation;

const getLatestConversation = (conversationId) => {
  // Check if the array has at least three elements
  if (store[conversationId].conversation.length < 3) {
    return store[conversationId].conversation; // Return the entire array if it has less than three elements
  }

  // Use slice to get the last three items
  return store[conversationId].conversation.slice(-3);
};

const saveAttribute = (conversationId, attributeId, attributeValue) => {
  if (!conversationId || !attributeId || !attributeValue)
    throw Error('conversationId, attributeId, attributeValue are required');

  initConversation(conversationId);
  store[conversationId].attributes[attributeId] = attributeValue;
};

const getAttribute = (conversationId, attributeId) => store[conversationId].attributes[attributeId];