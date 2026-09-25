Project Name: DevStack

description: A React-based technology stack builder where users can explore technologies and create their own stack.

Technologies:
1.React
2.TypeScript
3.Tailwind CSS
4.React Toastify

Features:
1.Browse different technologies
2.Add and remove technologies from your stack
3.Remove all selected technologies at once

1. What is JSX?
   JSX lets us write HTML-like code inside JavaScript to create React UI.

2. Props vs State
   Props pass data from parent to child. State stores changing data inside a component.

3. What does useState do?
   It manages changing data. I used it to store selected technologies.

4. What does useEffect do?
   It handles side effects like data fetching. I didn't use it; I used use() with Suspense.

5. Why use key in .map()?
   key helps React identify each list item.

6. What is conditional rendering?
   Showing UI based on a condition.
   //{stack.length === 0 && <p>Your stack is empty.</p>}//
7. How does parent-child data passing work?
   The parent passes data through props. The child can send data back by calling a function received through props.
