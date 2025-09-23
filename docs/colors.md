# Sistema de Cores - Seguro Play Car

## 🎨 Paleta Principal

### Cores Base
- **Preto**: `#000000` - Cor principal para textos e elementos de destaque
- **Vermelho Sangue**: `#dc2626` - Cor de marca e ações principais
- **Branco**: `#ffffff` - Backgrounds e textos em fundos escuros

## 📊 Classes Tailwind Disponíveis

### 1. Primary (Vermelho Sangue)
```css
bg-primary-500    /* Vermelho sangue principal */
bg-primary-600    /* Vermelho sangue escuro */
bg-primary-50     /* Vermelho sangue muito claro */
text-primary-500  /* Texto vermelho sangue */
border-primary-500 /* Borda vermelho sangue */
```

### 2. Neutral (Preto ao Branco)
```css
bg-neutral-0      /* Branco puro */
bg-neutral-1000   /* Preto puro */
bg-neutral-100    /* Cinza muito claro */
bg-neutral-900    /* Cinza muito escuro */
text-neutral-1000 /* Texto preto */
text-neutral-0    /* Texto branco */
```

### 3. Cores Semânticas
```css
/* Sucesso */
bg-success-light  /* Verde claro */
bg-success        /* Verde padrão */
bg-success-dark   /* Verde escuro */

/* Aviso */
bg-warning-light  /* Laranja claro */
bg-warning        /* Laranja padrão */
bg-warning-dark   /* Laranja escuro */

/* Erro */
bg-error-light    /* Vermelho claro */
bg-error          /* Vermelho padrão (sangue) */
bg-error-dark     /* Vermelho escuro */

/* Informação */
bg-info-light     /* Azul claro */
bg-info           /* Azul padrão */
bg-info-dark      /* Azul escuro */
```

### 4. Aliases Semânticos
```css
/* Backgrounds */
bg-background-primary    /* Branco */
bg-background-dark       /* Preto */
bg-background-accent     /* Vermelho claro */

/* Textos */
text-text-primary        /* Preto */
text-text-inverse        /* Branco */
text-text-accent         /* Vermelho sangue */

/* Bordas */
border-border-light      /* Cinza claro */
border-border-accent     /* Vermelho sangue */

/* Accent */
bg-accent-primary        /* Vermelho sangue */
bg-accent-light          /* Vermelho muito claro */
bg-accent-dark           /* Vermelho escuro */
```

## 🎯 Exemplos de Uso

### Botão Principal
```html
<button class="bg-primary-500 hover:bg-primary-600 text-neutral-0 px-6 py-3 rounded-lg font-semibold transition-colors">
  Ação Principal
</button>
```

### Card com Tema Escuro
```html
<div class="bg-neutral-1000 text-neutral-0 p-6 rounded-lg border border-primary-500">
  <h3 class="text-primary-500 font-bold mb-2">Título</h3>
  <p class="text-neutral-200">Conteúdo do card...</p>
</div>
```

### Alert de Erro
```html
<div class="bg-error-light border border-error text-error-dark p-4 rounded-md">
  <p class="font-semibold">Erro!</p>
  <p>Mensagem de erro aqui.</p>
</div>
```

### Gradiente de Marca
```html
<div class="bg-gradient-to-r from-neutral-1000 via-primary-500 to-neutral-1000 text-neutral-0 p-8">
  Gradiente da marca
</div>
```

## 🛠️ Sombras Personalizadas
```css
shadow-accent     /* Sombra com cor de marca */
shadow-accent-lg  /* Sombra grande com cor de marca */
shadow-dark       /* Sombra escura */
```

## 🎬 Animações
```css
animate-fade-in   /* Fade in suave */
animate-slide-up  /* Deslizar para cima */
```