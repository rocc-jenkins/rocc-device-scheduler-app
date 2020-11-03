/// <reference types="react" />

// App consumes components from app2, and declares its types
declare module "app2/Button" {
  const Button: React.ComponentType;

  export default Button;
}
