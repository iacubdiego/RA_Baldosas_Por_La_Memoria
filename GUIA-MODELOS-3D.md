# 🎨 Guía: Agregar Modelos 3D al Proyecto

## Paso de Texto a Modelos 3D

Actualmente el proyecto muestra **texto en AR**. Para el producto final, querrás mostrar **modelos 3D** con información más rica.

---

## 📦 Opción 1: Usar Modelos 3D Simples (RECOMENDADO PARA MVP)

### Geometrías básicas de A-Frame

```html
<!-- Ejemplo: Cilindro conmemorativo -->
<a-entity mindar-image-target="targetIndex: 0">
  <!-- Base circular -->
  <a-cylinder 
    position="0 0 0" 
    radius="0.3" 
    height="0.05"
    color="#8B0000">
  </a-cylinder>
  
  <!-- Columna -->
  <a-cylinder 
    position="0 0.3 0" 
    radius="0.25" 
    height="0.5"
    color="#C41E3A"
    metalness="0.5"
    roughness="0.5">
  </a-cylinder>
  
  <!-- Placa con nombre -->
  <a-plane 
    position="0 0.3 0.26" 
    width="0.4" 
    height="0.2"
    color="#FFFFFF"
    opacity="0.9">
  </a-plane>
  
  <a-text 
    value="Nélida Beatriz Ardito\n13/10/1976" 
    position="0 0.3 0.27"
    align="center"
    color="#000000"
    width="0.35">
  </a-text>
  
  <!-- Luz para destacar -->
  <a-light type="point" color="#FFD700" intensity="0.5" position="0 0.8 0"></a-light>
</a-entity>
```

### Ventajas:
- ✅ No requiere archivos externos
- ✅ Carga rápida
- ✅ Fácil de modificar
- ✅ Funciona en todos los dispositivos

---

## 🎭 Opción 2: Modelos 3D Personalizados

### Formatos soportados:
- **GLTF/GLB** (Recomendado) - Optimizado para web
- **OBJ** - Universal pero más pesado

### Dónde conseguir modelos:

#### Gratis:
- **Sketchfab** (https://sketchfab.com) - Muchos modelos CC
- **Poly Pizza** (https://poly.pizza) - Modelos low-poly
- **Free3D** (https://free3d.com)

#### Crear propios:
- **Blender** (gratis, open source)
- **Tinkercad** (online, gratis)

### Ejemplo de uso:

```html
<a-scene>
  <a-assets>
    <!-- Cargar modelo GLTF -->
    <a-asset-item id="monumento" src="./assets/models/monumento.gltf"></a-asset-item>
  </a-assets>

  <a-entity mindar-image-target="targetIndex: 0">
    <a-gltf-model 
      src="#monumento"
      position="0 0 0"
      scale="0.5 0.5 0.5"
      rotation="0 0 0"
      animation="property: rotation; to: 0 360 0; loop: true; dur: 10000; easing: linear">
    </a-gltf-model>
  </a-entity>
</a-scene>
```

---

## 🎬 Opción 3: Contenido Multimedia Interactivo

### Video en AR

```html
<a-entity mindar-image-target="targetIndex: 0">
  <!-- Video flotante -->
  <a-video 
    src="./assets/videos/testimonio.mp4"
    width="1.6" 
    height="0.9"
    position="0 0.5 0">
  </a-video>
  
  <!-- Marco -->
  <a-plane 
    width="1.7" 
    height="1"
    position="0 0.5 0"
    color="#000000"
    opacity="0.2">
  </a-plane>
</a-entity>
```

### Galería de fotos 3D

```html
<a-entity mindar-image-target="targetIndex: 0">
  <!-- Foto 1 -->
  <a-image 
    src="./assets/fotos/foto1.jpg"
    width="0.5" 
    height="0.7"
    position="-0.3 0.5 0"
    rotation="0 15 0">
  </a-image>
  
  <!-- Foto 2 -->
  <a-image 
    src="./assets/fotos/foto2.jpg"
    width="0.5" 
    height="0.7"
    position="0 0.5 0">
  </a-image>
  
  <!-- Foto 3 -->
  <a-image 
    src="./assets/fotos/foto3.jpg"
    width="0.5" 
    height="0.7"
    position="0.3 0.5 0"
    rotation="0 -15 0">
  </a-image>
</a-entity>
```

### Audio ambiental

```html
<a-entity mindar-image-target="targetIndex: 0">
  <a-entity 
    sound="src: ./assets/audio/testimonio.mp3; autoplay: true; loop: false"
    position="0 0 0">
  </a-entity>
  
  <!-- Indicador visual de audio -->
  <a-sphere 
    position="0 0.5 0"
    radius="0.1"
    color="#FFD700"
    animation="property: scale; to: 1.2 1.2 1.2; dir: alternate; loop: true; dur: 1000">
  </a-sphere>
</a-entity>
```

---

## 🎨 Ejemplo Completo: Monumento 3D Interactivo

```html
<a-entity mindar-image-target="targetIndex: 0">
  <!-- Pedestal -->
  <a-box 
    position="0 0 0"
    width="0.8" 
    height="0.1" 
    depth="0.8"
    color="#4A4A4A">
  </a-box>
  
  <!-- Columna central -->
  <a-cylinder 
    position="0 0.4 0"
    radius="0.15"
    height="0.7"
    color="#8B0000"
    metalness="0.3"
    roughness="0.7">
  </a-cylinder>
  
  <!-- Esfera luminosa superior -->
  <a-sphere 
    position="0 0.85 0"
    radius="0.12"
    color="#FFD700"
    metalness="1"
    roughness="0"
    animation="property: rotation; to: 0 360 0; loop: true; dur: 4000"
    animation__glow="property: components.material.material.emissiveIntensity; from: 0.2; to: 1; dir: alternate; loop: true; dur: 2000">
  </a-sphere>
  
  <!-- Placas con nombres (4 lados) -->
  <a-plane 
    position="0 0.4 0.16"
    width="0.28" 
    height="0.5"
    color="#FFFFFF"
    opacity="0.95">
  </a-plane>
  <a-text 
    value="Nélida Beatriz\nArdito\n\n13/10/1976" 
    position="0 0.4 0.17"
    align="center"
    color="#000000"
    width="0.25"
    wrap-count="15">
  </a-text>
  
  <!-- Repetir para otros 3 lados rotados 90°, 180°, 270° -->
  
  <!-- Luz ambiental -->
  <a-light type="point" color="#FFD700" intensity="1.5" position="0 1 0"></a-light>
  
  <!-- Partículas flotantes (efecto memoria) -->
  <a-entity 
    particle-system="preset: snow; particleCount: 20; color: #FFD700,#FFFFFF; size: 0.5"
    position="0 0.5 0">
  </a-entity>
  
  <!-- Audio de fondo -->
  <a-entity 
    sound="src: ./assets/audio/ambiente.mp3; autoplay: true; loop: true; volume: 0.3">
  </a-entity>
  
  <!-- Botón interactivo (tap para más info) -->
  <a-box 
    position="0 0.1 0.5"
    width="0.3" 
    height="0.1" 
    depth="0.05"
    color="#4CAF50"
    class="clickable"
    event-set__click="scale: 1.1 1.1 1.1"
    event-set__clickend="scale: 1 1 1">
  </a-box>
  <a-text 
    value="MÁS INFO" 
    position="0 0.1 0.53"
    align="center"
    color="#FFFFFF"
    width="0.25">
  </a-text>
</a-entity>

<!-- JavaScript para interactividad -->
<script>
  document.querySelector('.clickable').addEventListener('click', () => {
    alert('Abriendo biografía completa...');
    // Aquí podrías abrir un modal con más información
  });
</script>
```

---

## 🎯 Recomendación para el Proyecto Final

### MVP (Actual):
1. Texto simple con información básica ✅

### Fase 2 (Corto plazo):
2. Geometrías básicas (cilindros, planos, esferas)
3. Imágenes históricas flotantes

### Fase 3 (Mediano plazo):
4. Modelos 3D simbólicos (monumento, llama, pañuelo)
5. Audio testimonial
6. Animaciones suaves

### Fase 4 (Largo plazo):
7. Modelos 3D realistas personalizados
8. Videos testimoniales
9. Experiencias interactivas complejas

---

## 📐 Consejos de Performance

### Optimización de modelos 3D:

```javascript
// En el HTML, config de la escena:
<a-scene 
  mindar-image="..."
  renderer="antialias: false; precision: medium"
  vr-mode-ui="enabled: false">
```

### Lazy loading de assets pesados:

```javascript
// Cargar modelos solo cuando se detecta la baldosa
document.querySelector('[mindar-image-target]').addEventListener('targetFound', () => {
  const model = document.createElement('a-gltf-model');
  model.setAttribute('src', './assets/models/monumento.gltf');
  this.appendChild(model);
});
```

### Límites recomendados:
- **Modelos 3D**: < 1MB por modelo
- **Texturas**: 512x512px o 1024x1024px máximo
- **Polígonos**: < 10,000 triángulos por modelo
- **Audio**: MP3 a 128kbps
- **Video**: 720p máximo, H.264

---

## 🔗 Recursos Útiles

- **A-Frame Docs**: https://aframe.io/docs/
- **Convertidor GLTF**: https://www.khronos.org/gltf/
- **Optimizador GLTF**: https://gltf.report/
- **Biblioteca de componentes**: https://www.npmjs.com/search?q=aframe-component

---

¡Tu proyecto está listo para evolucionar! 🚀
