# 🇦🇷 Baldosas por la Memoria - AR Experience

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/TU-USUARIO/baldosas-ar)

Experiencia de realidad aumentada para honrar la memoria de los detenidos-desaparecidos durante la dictadura cívico-militar argentina (1976-1983).

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


## 🧪 Testing Local

### Opción 1: Python
```bash
python -m http.server 8080
# Abre: http://localhost:8080
```


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
