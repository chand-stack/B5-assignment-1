# How Does TypeScript Help in Improving Code Quality and Project Maintainability?

TypeScript is a **superset of JavaScript**, meaning it builds on top of JavaScript by adding powerful features most importantly, **static type checking**. But what's the actual difference between JavaScript and TypeScript?

In **JavaScript**, we simply write code and see the result in the browser. However, errors are often only caught at **runtime**, which can be risky especially for large or complex projects. That’s where **TypeScript becomes a blessing** for developers.


With TypeScript, we **explicitly define types** for:

<div style="display: flex; justify-content: space-between; align-items: center;">
    <div style="flex: 1;">
        <ul>
            <li>Variables</li>
            <li>Object properties</li>
            <li>Function parameters and return types</li>
        </ul>
    </div>
    <img src="https://cdn3d.iconscout.com/3d/free/thumb/free-typescript-3d-icon-download-in-png-blend-fbx-gltf-file-formats--microsoft-logo-angular-language-javascript-static-type-coding-lang-pack-logos-icons-7577992.png?f=webp" width="150" height="150" />
</div>

At first, this may feel like extra work, but it **catches errors early during development**, before the code is even run. This saves time and prevents bugs from reaching production.

When working on team projects, it can be confusing to understand the purpose of certain variables or functions. **TypeScript makes collaboration easier** by:

- Making code more readable and self documenting
- Showing function and variable types clearly
- Reducing misunderstandings and errors

For large scale applications, a small bug can create **major issues down the line**. TypeScript contributes to **project maintainability** by allowing developers to catch issues early during the build process. This reduces the risk of bugs appearing in production and makes refactoring safer.

But does TypeScript run in the browser? The answer is **no**. TypeScript doesn't run directly in the browser it is first compiled into **JavaScript**, which then runs as usual in the browser. In other words, TypeScript enhances the development process, while still delivering standard JavaScript code for browsers to execute.


## Code Example

### Type Safety in TypeScript

```ts
// TypeScript Example
function greet(name: string): string {
  return `Hello, ${name.toUpperCase()}`;
}

console.log(greet("Chand")); //  Works
console.log(greet());        //  Error: Expected 1 argument, but got 0.
```
## Conclusion

In summary, TypeScript offers numerous benefits for developers, particularly when working with large scale applications or in teams:

- **Static type checking** catches errors early, improving code quality.
- **Readability and documentation** are enhanced by clear type definitions.
- **Maintainability** is better, with fewer bugs creeping into production.

While TypeScript code doesn't run directly in browsers, it compiles down to standard JavaScript, making it compatible with all browsers. By adopting TypeScript, developers can enhance both the quality and maintainability of their projects.


# Difference Between any, unknown, and never Types in TypeScript

In TypeScript, `any`, `unknown`, and `never` are type checking handlers like other primitive types. Each of these types serves a specific purpose in managing how values are handled at compile time.

---

## `any` Type

If we want to declare a variable that can hold **any type of value** like a number, string, boolean, or even an object—we can use the `any` type. This tells TypeScript to **bypass type checking**, effectively opting out of TypeScript’s type safety.

```ts
let data: any;

data = 5;
data = "Hello";
data = true;
data = { name: "Chand" };
```

## `unknown` Type

In TypeScript, `unknown` is a top type that is safer than any. Unlike any, you can't use a value of type `unknown` without first performing type checks. This enforces type safety and prevents accidental misuse.

```ts
let value: unknown = "Hello, TypeScript!";

// Type checking is required before using the value
if (typeof value === "string") {
  console.log(value.toUpperCase()); // Safe to use after type narrowing
} else {
  console.log("Not a string!");
}
```

## `never` Type

In TypeScript, the `never` type represents a function that never returns a value. It’s commonly used for functions that throw exceptions or terminate the program. It indicates that a function will never return normally and is particularly useful for catching programming errors or marking unreachable code paths.

```ts
function throwError(message: string): never {
  throw new Error(message); // This function never returns
}

function infiniteLoop(): never {
  while (true) {} // Infinite loop, never ends
}
```



