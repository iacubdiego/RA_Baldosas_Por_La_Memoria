# 🇦🇷 Baldosas por la Memoria - AR Experience

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/TU-USUARIO/baldosas-ar)

Experiencia de realidad aumentada para honrar la memoria de los detenidos-desaparecidos durante la dictadura cívico-militar argentina (1976-1983).

## 🎯 Demo Rápido

**[Ver Demo en Vivo](#)** ← (Actualiza este link después del deploy)

## ⚡ Inicio Rápido

### 📱 Cómo Usar la App:

1. **Abre la app** en tu móvil (requiere cámara)
2. **Acepta permisos** de cámara y ubicación
3. **Escanea una baldosa**:
   - Opción A: Imprime las imágenes de prueba desde `/test-images.html`
   - Opción B: Ve a una baldosa real en Buenos Aires
4. **Observa** el contenido AR aparecer sobre la baldosa

### 🖼️ ¿Qué Escanear?

Este MVP reconoce **2 baldosas específicas**:

#### Baldosa 3: Nélida Ardito y Martha Brea
- Roja con mosaicos coloridos distribuidos
- Texto: "Aquí trabajaron Militantes Populares"

#### Baldosa 4: Roberto Fernando Tortora  
- Roja con borde de mosaicos tipo marco
- Fecha destacada: "27-04-77"

**📸 Ver imágenes:** Abre `/test-images.html` en la app

---

## 🚀 Deploy en Vercel

### Método 1: Deploy Automático (Recomendado)

1. **Fork este repositorio** en tu GitHub
2. Ve a [vercel.com](https://vercel.com)
3. Click en **"New Project"**
4. Importa tu repositorio
5. ⚠️ **ANTES de Deploy**: Lee la sección **"Paso Crítico"** abajo
6. Click en **"Deploy"**

### Método 2: Vercel CLI

```bash
npm i -g vercel
vercel --prod
```

### ⚠️ PASO CRÍTICO: Compilar Targets

**El proyecto NO funcionará sin este paso:**

1. Ve a: https://hiukim.github.io/mind-ar-js-doc/tools/compile
2. Sube los archivos:
   - `targets/baldosa3.jpg`
   - `targets/baldosa4.jpg`
3. Espera 1-2 minutos mientras compila
4. Descarga `targets.mind`
5. **ANTES de hacer commit/push**:
   - Coloca `targets.mind` en la carpeta `/targets/`
   - Haz commit y push

```bash
# Después de generar targets.mind:
git add targets/targets.mind
git commit -m "Add compiled targets"
git push
```

---

## 🧪 Testing Local

### Opción 1: Python
```bash
python -m http.server 8080
# Abre: http://localhost:8080
```

### Opción 2: Node.js
```bash
npx http-server -p 8080
# Abre: http://localhost:8080
```

### Testing en Móvil (Local)
1. Encuentra tu IP: `ipconfig` (Windows) o `ifconfig` (Mac/Linux)
2. Abre en móvil: `http://TU-IP:8080`
3. Acepta permisos de cámara y ubicación

---

## 📱 ¿Qué Verás en AR?

### Cuando escanees Baldosa 3:
```
┌─────────────────────────────┐
│  Aquí trabajaron            │
│  Militantes Populares       │
│                             │
│  Nélida Beatriz Ardito      │
│  Martha Maria Brea          │
│                             │
│  Detenidas desaparecidas    │
│  por el Terrorismo de Estado│
└─────────────────────────────┘
```
**+ Panel informativo en la parte superior de la pantalla**

### Cuando escanees Baldosa 4:
```
┌─────────────────────────────┐
│  Aquí vivió                 │
│  Roberto Fernando Tortora   │
│                             │
│       27-04-77              │
│                             │
│  Secuestrado junto a        │
│  Adriana Namio de Carlipparro│
│  Militante Popular          │
│  Detenido Desaparecido      │
└─────────────────────────────┘
```
**+ Panel informativo en la parte superior de la pantalla**

---

## 🗺️ Estructura del Proyecto

```
baldosas-ar/
├── index.html              # App AR principal
├── test-images.html        # Imágenes de prueba
├── utils.js                # Utilidades JS
├── vercel.json            # Config Vercel
├── .gitignore             # Git ignore
├── targets/
│   ├── baldosa3.jpg       # Target 1
│   ├── baldosa4.jpg       # Target 2
│   └── targets.mind       # ⚠️ Archivo compilado (DEBES GENERAR)
└── assets/                # Recursos (vacío por ahora)
```

---

## 🎨 Características Actuales

✅ Reconocimiento de 2 baldosas específicas  
✅ Contenido AR con información histórica  
✅ Geolocalización del usuario  
✅ Panel informativo al detectar baldosas  
✅ Funciona en Android e iOS (navegador)  
✅ No requiere instalar apps  
✅ Deploy en Vercel con HTTPS  

---

## 🔧 Tecnologías

- **A-Frame 1.4.2** - Framework WebXR
- **MindAR 1.2.5** - Image tracking
- **Vanilla JS** - Sin dependencias
- **Vercel** - Hosting con HTTPS

---

## 📐 Requisitos

### Dispositivos:
- 📱 Smartphone moderno (últimos 3 años)
- 📱 Android 8+ o iOS 13+
- 📷 Cámara de al menos 8MP

### Navegadores:
- ✅ Chrome (Android)
- ✅ Safari (iOS)
- ⚠️ Firefox (puede tener problemas)

### Condiciones:
- ☀️ Buena iluminación
- 📡 Conexión a internet
- ✅ Permisos de cámara y ubicación

---

## 🐛 Troubleshooting

### ❌ "Failed to load target"
- Verifica que `targets.mind` existe en `/targets/`
- Verifica que hiciste commit del archivo
- Espera unos minutos después del deploy

### ❌ Cámara no funciona
- Verifica que diste permisos
- Asegúrate de estar en HTTPS (Vercel lo hace automático)
- Prueba en Chrome (Android) o Safari (iOS)

### ❌ AR no aparece
- Mejora la iluminación
- Mantén la imagen completa en cuadro
- Mantén la cámara estable 2-3 segundos
- Verifica que sea la imagen correcta

---

## 🙏 Agradecimientos

A las Abuelas y Madres de Plaza de Mayo por su incansable búsqueda.  
A Barrios x Memoria y Justicia por mantener viva la memoria.  
A todos los que luchan para que **Nunca Más** se repita.

**Memoria, Verdad y Justicia** 💛  
**30.000 Presentes** 🕯️

---

Hecho con 💛 para honrar la memoria - Noviembre 2025
