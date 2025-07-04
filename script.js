 // Shopping cart functionality
        let cartCount = 0;
        const cartElement = document.querySelector('.cart-count');

        function addToCart() {
            cartCount++;
            cartElement.textContent = cartCount;
            cartElement.style.transform = 'scale(1.2)';
            setTimeout(() => {
                cartElement.style.transform = 'scale(1)';
            }, 200);
        }

        function scrollToDeals() {
            document.getElementById('deals').scrollIntoView({ 
                behavior: 'smooth' 
            });
        }

        function selectCategory(category) {
            alert(`Browsing ${category} category - This would redirect to ${category} products page`);
        }

        function viewProduct(product) {
            if (confirm(`Add ${product} to cart?`)) {
                addToCart();
                alert('Product added to cart!');
            }
        }

        // Search functionality
        document.querySelector('.search-input').addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                const searchTerm = this.value;
                if (searchTerm) {
                    alert(`Searching for: ${searchTerm}`);
                }
            }
        });

        document.querySelector('.search-button').addEventListener('click', function() {
            const searchTerm = document.querySelector('.search-input').value;
            if (searchTerm) {
                alert(`Searching for: ${searchTerm}`);
            }
        });

        // Add smooth scrolling and animations
        document.addEventListener('DOMContentLoaded', function() {
            // Animate elements on scroll
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };

            const observer = new IntersectionObserver(function(entries) {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }
                });
            }, observerOptions);

            // Observe all cards
            document.querySelectorAll('.category-card, .deal-card').forEach(card => {
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                card.style.transition = 'all 0.6s ease';
                observer.observe(card);
            });
        });

        // Header link interactions
        document.querySelectorAll('.header-link').forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                if (this.textContent.includes('sign in')) {
                    alert('Sign in functionality - This would open login modal');
                } else if (this.textContent.includes('Orders')) {
                    alert('Your orders - This would show order history');
                }
            });
        });

        // Navigation interactions
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const text = this.textContent.trim();
                if (text === "Today's Deals") {
                    scrollToDeals();
                } else {
                    alert(`Navigating to ${text} section`);
                }
            });
        });