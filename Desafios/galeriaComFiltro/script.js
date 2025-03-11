function filterImages(category) {
    document.querySelectorAll('.galeria img').forEach(img => {
        if (category === 'all') {
            img.classList.remove('hidden');
        } else {
            img.classList.toggle('hidden', !img.classList.contains(category));
        }
    });
}