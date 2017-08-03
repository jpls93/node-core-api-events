# node-core-api-events

## Motivation
### What the f made you want to study this API?
See https://github.com/expressjs/express/blob/master/lib/express.js

### Error Handling
To guard against crashing the Node.js process for `error` events:
Register a listener(function) to `process`'s `uncaughtException` event.

#### The Node.js process crashes and burns
```
myEmitter.emit('error', new Error('Crash and burn!'));
```

#### The Node.js will carry on
```
process.on('uncaughtException', () => console.error('BOOM'))
myEmitter.emit('error', new Error('Carry on, will carry on...')); //=> Won't crash
```
