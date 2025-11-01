## 🌐 Configurar Servidor Local

### Opción A: Python
- [ ] Abre terminal en la carpeta del proyecto
- [ ] Ejecuta: `python -m http.server 8080`
- [ ] Abre: `http://localhost:8080`


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

---

## 🎯 Criterios de Éxito del MVP

✅ **El MVP está completo cuando:**
1. Puedes detectar las baldosas con la cámara
2. Aparece contenido AR con información
3. Se muestra la ubicación del usuario
4. El panel informativo funciona correctamente
5. La experiencia es fluida en móviles

---
