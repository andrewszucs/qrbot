'use strict'

const test = require('tape')
const createSendText = require('./')

test(`sendText`, nest => {
  

  const sendMessage = (recipientId, message) => Promise.resolve({ recipientId, message })
  const sendText = createSendText(sendMessage)

  nest.test(`sendText: calls sendMessage with the correct args`, async assert => {
    
    const recipientId = 1
    const message = {
      text: 'hello world',
      quick_replies: {
        content_type: 'location'
      },
      metadata: 'METADATA'
    }
    const expected = {
      recipientId,
      message
    }
    const actual = await sendText(recipientId, message.text, {
      quick_replies: {
        content_type: 'location'
      },
      metadata: 'METADATA'
    })
    assert.deepEqual(actual, expected)
    assert.end()
  })
})