# Array Join with Custom Separator
Join Array with Custom Separator and last Separator

## Installation

```
npm i --save array-join-custom-separator
```

## Usage

To use it, just import it into your application

```typescript
import { ArrayJoinWithCustomSeparator } from 'array-join-custom-separator'; // import
const input = ['apple', 'banana', 'orange'];
ArrayJoinWithCustomSeparator(input);

}

```

To set a custom separator:

```typescript
import { ArrayJoinWithCustomSeparator } from 'array-join-custom-separator'; // import
const input = ['apple', 'banana', 'orange'];
ArrayJoinWithCustomSeparator(input, " - ");

}

```

To set a custom separator and last separator:

```typescript
import { ArrayJoinWithCustomSeparator } from 'array-join-custom-separator'; // import
const input = ['apple', 'banana', 'orange'];
ArrayJoinWithCustomSeparator(input, " - ", " and ");

}

```