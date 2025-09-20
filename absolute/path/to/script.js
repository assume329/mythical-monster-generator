// 在script.js文件中添加一个测试函数，在控制台运行查看图片路径
function testImagePaths() {
    console.log('检查图片路径...');
    for (const key in mythicalCreatures) {
        console.log(key + ': ' + mythicalCreatures[key].image);
    }
}

        // 图片加载测试函数
        window.testImageLoading = function() {
            console.log('开始测试图片加载...');
            const testImg = new Image();
            const firstCreature = Object.values(mythicalCreatures)[0];
            const imagePath = firstCreature.image;
            
            console.log('测试图片路径:', imagePath);
            
            testImg.onload = function() {
                console.log('✓ 图片加载成功！问题可能是浏览器安全限制。');
                alert('图片路径正确！请使用本地服务器访问以解决浏览器安全限制问题。');
            };
            
            testImg.onerror = function() {
                console.log('✗ 图片加载失败，请检查路径或文件是否存在。');
                alert('图片加载失败，请检查images文件夹中的图片文件是否存在且文件名正确。');
            };
            
            testImg.src = imagePath;
        };
        
        // 提供一个临时解决方案（直接修改图片加载逻辑）
        function showResultWithBase64(result) {
            monsterTitle.textContent = result.name;
            appearanceText.textContent = result.appearance;
            storyText.textContent = result.story;
            
            // 尝试直接加载本地图片
            monsterImage.src = result.image;
            monsterImage.alt = result.name;
            
            // 如果加载失败，直接使用备用图片（可以看到效果）
            monsterImage.onerror = function() {
                console.log('本地图片加载失败，使用备用图片');
                this.src = result.fallbackImage;
                this.onerror = null;
            };
            
            // 淡入动画
            resultSection.style.opacity = '0';
            setTimeout(() => {
                resultSection.style.transition = 'opacity 0.5s ease';
                resultSection.style.opacity = '1';
            }, 50);
        }
        
        // 替换原有的showResult函数调用
        const originalShowResult = window.showResult;
        window.showResult = showResultWithBase64;