# Projeto de Estudo - React com useContext

Este projeto foi criado como um estudo para explorar o uso do **useContext** no React, juntamente com outras tecnologias modernas do ecossistema.

## 🛠 Tecnologias Utilizadas

- **React** com **Vite** 🚀
- **TypeScript**
- **Axios** (para requisições HTTP)
- **Styled-Components** (para estilização)
- **React-Router-DOM** (para navegação entre páginas)
- **Hooks**:
  - `useState`
  - `useContext`
  - `useEffect`
- **Git** (para versionamento do código)

## 📂 Estrutura do Projeto

```
📦 meu-projeto
 ┣ 📂 src
 ┃ ┣ 📂 assets
 ┃ ┣ 📂 components
 ┃ ┣ 📂 context
 ┃ ┣ 📂 pages
 ┃ ┣ 📂 services
 ┃ ┣ 📜 App.tsx
 ┃ ┣ 📜 main.tsx
 ┣ 📜 package.json
 ┣ 📜 tsconfig.json
 ┣ 📜 vite.config.ts
 ┗ 📜 README.md
```

## ⚙️ Instalação e Execução

1. Clone o repositório:
   ```sh
   git clone https://github.com/seu-usuario/nome-do-repositorio.git
   ```
2. Acesse o diretório do projeto:
   ```sh
   cd nome-do-repositorio
   ```
3. Instale as dependências:
   ```sh
   npm install
   ```
4. Execute o projeto:
   ```sh
   npm run dev
   ```

## 🧑‍💻 Uso do useContext

O projeto implementa o `useContext` para gerenciar estados globais. Exemplo de criação e uso do contexto:

```tsx
import { createContext, useContext, useState, ReactNode } from "react";

interface AppContextType {
  theme: string;
  toggleTheme: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <AppContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error("useAppContext must be used within AppProvider");
  return context;
};
```

## 🚀 Funcionalidades Implementadas

✅ Consumo de API com Axios  
✅ Estado global com useContext  
✅ Estilização dinâmica com Styled-Components  
✅ Navegação entre páginas com React-Router-DOM  

## 📌 Melhorias Futuras

- Implementar testes com **Jest** e **React Testing Library**
- Melhorar a acessibilidade (A11Y)
- Adicionar suporte a temas dinâmicos
- Refatorar código para utilizar **Zustand** ou **Redux** em casos mais complexos

## 📄 Licença

Este projeto é apenas para fins de estudo e não possui uma licença específica.

---

Caso tenha sugestões ou melhorias, sinta-se à vontade para contribuir! 🚀

