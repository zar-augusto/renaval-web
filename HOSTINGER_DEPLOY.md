# 🚀 Guía de Despliegue en Hostinger – ReNaval

El sitio web de **ReNaval** ha sido preparado y empaquetado para funcionar al 100% en los servidores de **Hostinger** (planes Web Hosting, WordPress Hosting o Cloud Hosting con cPanel/hPanel).

---

## 📦 Archivo listo para subir
Ya se generó el paquete de despliegue en la raíz del proyecto:
- **`hostinger-public_html.zip`** (contiene todo el código compilado, imágenes, estilos, `.htaccess`, robots, sitemap y página 404).

---

## 🛠️ Método 1: Subida directa por Administrador de Archivos de Hostinger (Recomendado - 2 minutos)

1. **Ingresa a Hostinger**:
   - Inicia sesión en [https://hpanel.hostinger.com](https://hpanel.hostinger.com).
2. **Accede a tu sitio web**:
   - Ve a **Sitios Web** &rarr; Selecciona tu dominio (ej. `renaval.com`) &rarr; Clic en **Administrar**.
3. **Abre el Administrador de Archivos**:
   - En el menú lateral o en la barra de búsqueda, abre **Administrador de Archivos** (*File Manager*).
   - Haz clic en la carpeta **`public_html`**.
4. **Limpia archivos por defecto (si los hay)**:
   - Si existe un archivo `default.php` o una página de bienvenida de Hostinger, bórralo.
5. **Sube el archivo ZIP**:
   - Haz clic en el icono de **Subir** (flecha hacia arriba en la barra superior).
   - Selecciona el archivo **`hostinger-public_html.zip`** ubicado en tu carpeta `renaval-web/`.
6. **Descomprime el ZIP**:
   - Haz clic derecho sobre `hostinger-public_html.zip` dentro de Hostinger &rarr; **Extraer** (*Extract*).
   - Elige extraer directamente en `/public_html`.
   - Una vez extraído, puedes eliminar el archivo `.zip` para ahorrar espacio.
7. **¡Listo!** Abre tu dominio en el navegador y el sitio estará completamente activo.

---

## 🔄 Método 2: Despliegue mediante Git en hPanel (Opcional)

Si prefieres automatizar las actualizaciones desde GitHub:
1. En hPanel ve a **Avanzado** &rarr; **Git**.
2. Conecta el repositorio: `https://github.com/zar-augusto/renaval-web.git`
3. Rama: `main`
4. Directorio de instalación: `/public_html`
5. Comando de despliegue o subida: Astro compila de forma estática en `dist/`, por lo que el Método 1 es el más directo para hosting compartido.

---

## 🔒 Certificado SSL y HTTPS

- En hPanel ve a **Seguridad** &rarr; **SSL**.
- Asegúrate de que el certificado **Let's Encrypt** (gratuito e ilimitado en Hostinger) esté activo para `renaval.com` y `www.renaval.com`.
- El archivo `.htaccess` incluido redirigirá automáticamente todo el tráfico inseguro (HTTP) hacia HTTPS.

---

## 📩 Formulario de Cotizaciones en Hostinger

- El formulario no requiere que Hostinger tenga Node.js instalado.
- Funciona 100% de manera estática y segura desde el navegador, enviando los datos directamente a **`gerencia@renaval.com`**.
- La primera vez que envíes una prueba, revisa la bandeja de `gerencia@renaval.com` para confirmar el correo inicial de activación de FormSubmit.

---

## ⚙️ Para volver a generar el paquete en el futuro:
Si realizas cambios en el código y deseas crear un nuevo ZIP para Hostinger, ejecuta en la terminal:
```bash
npm run package:hostinger
```
Esto reconstruirá el sitio y actualizará automáticamente `hostinger-public_html.zip`.
