# ✅ Checklist de Implementación - Baldosas AR MVP

## 🚀 PASO CRÍTICO PRIMERO: Compilar Targets

### ⚠️ SIN ESTE PASO EL PROYECTO NO FUNCIONARÁ

- [ ] Ve a: https://hiukim.github.io/mind-ar-js-doc/tools/compile
- [ ] Sube `baldosa3.jpg` y `baldosa4.jpg`
- [ ] Haz clic en "Start" y espera 1-2 minutos
- [ ] Descarga `targets.mind`
- [ ] Coloca `targets.mind` en la carpeta `/targets/`

---

## 📂 Setup Inicial

- [ ] Verifica que todos los archivos estén en su lugar:
  ```
  baldosas-ar-mvp/
  ├── index.html              ✅
  ├── test-images.html        ✅
  ├── utils.js                ✅
  ├── README.md               ✅
  ├── GUIA-MODELOS-3D.md      ✅
  ├── targets/
  │   ├── baldosa3.jpg        ✅
  │   ├── baldosa4.jpg        ✅
  │   └── targets.mind        ⚠️ DEBES GENERAR
  └── assets/
      └── (vacío por ahora)   ✅
  ```

---

## 🌐 Configurar Servidor Local

### Opción A: Python
- [ ] Abre terminal en la carpeta del proyecto
- [ ] Ejecuta: `python -m http.server 8080`
- [ ] Abre: `http://localhost:8080`

### Opción B: Node.js
- [ ] Abre terminal en la carpeta del proyecto
- [ ] Ejecuta: `npx http-server -p 8080`
- [ ] Abre: `http://localhost:8080`

### Opción C: VS Code
- [ ] Instala extensión "Live Server"
- [ ] Click derecho en `index.html` > "Open with Live Server"

---

## 📱 Testing Básico (Desktop)

- [ ] Abre `test-images.html` en el navegador
- [ ] Verifica que se ven las dos imágenes de baldosas
- [ ] Opcional: Imprime o descarga las imágenes

---

## 📱 Testing en Móvil

### Preparación:
- [ ] Asegúrate que el servidor local esté corriendo
- [ ] Encuentra tu IP local:
  - **Windows**: `ipconfig`
  - **Mac/Linux**: `ifconfig`
- [ ] Anota tu IP (ej: `192.168.1.100`)

### En tu móvil:
- [ ] Conéctate a la misma WiFi que tu computadora
- [ ] Abre el navegador móvil
- [ ] Navega a: `http://TU-IP:8080` (ej: `http://192.168.1.100:8080`)
- [ ] Acepta permisos de cámara ✅
- [ ] Acepta permisos de ubicación ✅

### Probar AR:
- [ ] Apunta la cámara a una imagen impresa de baldosa
- [ ] O apunta a `test-images.html` abierto en otra pantalla
- [ ] Deberías ver el contenido AR aparecer
- [ ] El panel informativo debería mostrarse arriba

---

## 🗺️ Configurar Coordenadas Reales

- [ ] Abre `index.html`
- [ ] Busca el objeto `baldosasDB` (línea ~75)
- [ ] Reemplaza las coordenadas de ejemplo con las reales:
  ```javascript
  0: {
    // ...
    lat: -34.xxxx,  // ← Coordenada real
    lng: -58.xxxx   // ← Coordenada real
  }
  ```
- [ ] Guarda los cambios
- [ ] Recarga la página

---

## 🎨 Personalizar Contenido AR

### Para cambiar el texto que aparece:
- [ ] Abre `index.html`
- [ ] Busca `<a-entity mindar-image-target="targetIndex: 0">`
- [ ] Modifica los elementos `<a-text>`
- [ ] Cambia `value`, `color`, `position`, etc.

### Para agregar imágenes:
- [ ] Coloca tu imagen en `/assets/`
- [ ] Agrega en `<a-assets>`:
  ```html
  <img id="mi-imagen" src="./assets/mi-imagen.jpg" />
  ```
- [ ] Usa en el target:
  ```html
  <a-image src="#mi-imagen" width="0.8" height="0.6"></a-image>
  ```

---

## 🐛 Troubleshooting

### ❌ "Failed to load target"
- [ ] ¿Existe el archivo `targets.mind`?
- [ ] ¿Estás usando un servidor HTTP (no `file://`)?
- [ ] Verifica en la consola del navegador (F12)

### ❌ Cámara no funciona
- [ ] ¿Diste permisos de cámara?
- [ ] ¿Estás en HTTPS o localhost?
- [ ] Intenta en otro navegador (Chrome/Safari)

### ❌ AR no aparece
- [ ] ¿La imagen está bien iluminada?
- [ ] ¿Estás mostrando la imagen completa?
- [ ] ¿Es la misma imagen que compilaste?
- [ ] Mantén la cámara estable 2-3 segundos

### ❌ Geolocalización no funciona
- [ ] ¿Diste permisos de ubicación?
- [ ] ¿Estás en HTTPS? (o localhost)
- [ ] Intenta recargar la página

---

## 📊 Siguiente Nivel

Una vez que el MVP funcione:

### Corto plazo:
- [ ] Agregar más baldosas (repetir proceso de compilación)
- [ ] Mejorar diseño visual del contenido AR
- [ ] Agregar imágenes históricas
- [ ] Implementar validación de proximidad

### Mediano plazo:
- [ ] Leer `GUIA-MODELOS-3D.md` y agregar modelos 3D
- [ ] Agregar audio/video
- [ ] Crear base de datos con más información
- [ ] Deploy a hosting (Netlify, Vercel, GitHub Pages)

### Largo plazo:
- [ ] Backend para administrar baldosas
- [ ] App nativa (React Native + ViroReact)
- [ ] Integración con APIs de Abuelas de Plaza de Mayo
- [ ] Gamificación (logros por baldosas encontradas)

---

## 🎯 Criterios de Éxito del MVP

✅ **El MVP está completo cuando:**
1. Puedes detectar las 2 baldosas con la cámara
2. Aparece contenido AR con información
3. Se muestra la ubicación del usuario
4. El panel informativo funciona correctamente
5. La experiencia es fluida en móviles

---

## 📞 Soporte

Si algo no funciona:
1. Revisa la consola del navegador (F12)
2. Verifica este checklist de nuevo
3. Consulta `README.md` para más detalles
4. Revisa la documentación de MindAR: https://hiukim.github.io/mind-ar-js-doc/

---

## 🎉 ¡Éxito!

Cuando todo funcione, habrás creado una experiencia de AR significativa que:
- ✨ Honra la memoria de los desaparecidos
- 📍 Contextualiza la historia en el espacio público
- 🔮 Usa tecnología moderna para educación
- 💛 Contribuye a la memoria colectiva

---

**¡Mucha suerte con tu proyecto! Es hermoso y muy importante.** 🇦🇷
