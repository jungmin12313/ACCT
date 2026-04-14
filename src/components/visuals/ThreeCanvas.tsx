"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    
    // Scene Setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x1e201c, 0.035);
    
    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.z = 13;
    
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);
    
    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);
    
    const dirLight = new THREE.DirectionalLight(0xfffde6, 1.0);
    dirLight.position.set(10, 15, 10);
    scene.add(dirLight);
    
    const mintLight = new THREE.PointLight(0x92dc73, 1.5, 20);
    mintLight.position.set(-5, 2, 5);
    scene.add(mintLight);
    
    const limeLight = new THREE.PointLight(0xe8e4ba, 1.0, 20);
    limeLight.position.set(5, -2, 2);
    scene.add(limeLight);
    
    // Grids
    const gridHelperBottom = new THREE.GridHelper(60, 30, 0x444b41, 0x444b41);
    gridHelperBottom.position.y = -8;
    (gridHelperBottom.material as THREE.Material).opacity = 0.2;
    (gridHelperBottom.material as THREE.Material).transparent = true;
    scene.add(gridHelperBottom);
    
    const gridHelperBack = new THREE.GridHelper(60, 30, 0x444b41, 0x444b41);
    gridHelperBack.position.y = 8;
    gridHelperBack.position.z = -12;
    gridHelperBack.rotation.x = Math.PI / 2;
    (gridHelperBack.material as THREE.Material).opacity = 0.1;
    (gridHelperBack.material as THREE.Material).transparent = true;
    scene.add(gridHelperBack);
    
    // Calculator Group
    const calcGroup = new THREE.Group();
    calcGroup.scale.set(1.55, 1.55, 1.55);
    calcGroup.position.set(0, 0.3, -2);
    
    const bodyGeom = new THREE.BoxGeometry(3.6, 5.4, 0.6);
    const bodyMat = new THREE.MeshStandardMaterial({ 
        color: 0xe8e4ba, 
        roughness: 0.3, 
        metalness: 0.1 
    });
    const body = new THREE.Mesh(bodyGeom, bodyMat);
    
    const edgesGeom = new THREE.EdgesGeometry(bodyGeom);
    const edgesMat = new THREE.LineBasicMaterial({ color: 0xc8c397, linewidth: 2, transparent: true, opacity: 0.8 });
    const bodyEdges = new THREE.LineSegments(edgesGeom, edgesMat);
    body.add(bodyEdges);
    
    const frameGeom = new THREE.BoxGeometry(3.0, 1.2, 0.65);
    const frameMat = new THREE.MeshStandardMaterial({ color: 0x1a1c18, roughness: 0.8 });
    const frame = new THREE.Mesh(frameGeom, frameMat);
    frame.position.set(0, 1.6, 0);
    
    // Screen Texture
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 256;
    const ctx = canvas.getContext('2d')!;
    
    ctx.fillStyle = '#182015';
    ctx.fillRect(0, 0, 512, 256);
    
    ctx.strokeStyle = 'rgba(146, 220, 115, 0.08)';
    ctx.lineWidth = 2;
    for(let i=0; i<512; i+=16) {
        ctx.beginPath(); ctx.moveTo(i, 0); ctx.lineTo(i, 256); ctx.stroke();
    }
    for(let i=0; i<256; i+=16) {
        ctx.beginPath(); ctx.moveTo(0, i); ctx.lineTo(512, i); ctx.stroke();
    }
    
    ctx.font = 'bold 120px "JetBrains Mono", monospace';
    ctx.fillStyle = '#92dc73';
    ctx.textAlign = 'right';
    ctx.textBaseline = 'middle';
    ctx.shadowColor = '#92dc73';
    ctx.shadowBlur = 25;
    ctx.fillText('PASS', 480, 138);
    
    const screenTex = new THREE.CanvasTexture(canvas);
    const screenGeom = new THREE.PlaneGeometry(2.8, 1.0);
    const screenMat = new THREE.MeshBasicMaterial({ map: screenTex });
    const screen = new THREE.Mesh(screenGeom, screenMat);
    screen.position.set(0, 1.6, 0.33);
    
    const screenGlow = new THREE.PointLight(0x92dc73, 1.0, 4);
    screenGlow.position.set(0, 1.6, 0.5);
    calcGroup.add(screenGlow);
    
    // Buttons
    const btnGroup = new THREE.Group();
    const btnMatNormal = new THREE.MeshStandardMaterial({ color: 0xf5f5f5, roughness: 0.3, metalness: 0.05 });
    const btnMatAccent = new THREE.MeshStandardMaterial({ color: 0x92dc73, roughness: 0.3, metalness: 0.05 });
    const btnMatHighlight = new THREE.MeshStandardMaterial({ color: 0x92dc73, roughness: 0.3, metalness: 0.05 });
    const btnMatDark = new THREE.MeshStandardMaterial({ color: 0x242424, roughness: 0.4, metalness: 0.1 });
    
    const startX = -1.05;
    const startY = 0.5;
    const gapX = 0.7;
    const gapY = 0.6;
    
    for(let row=0; row<5; row++) {
        for(let col=0; col<4; col++) {
            if (row === 4 && col === 3) continue; 
            
            let mat = btnMatNormal;
            if (col === 3) mat = btnMatAccent;
            if (row === 0 && col < 3) mat = btnMatDark;
            if (row === 4 && col === 2) mat = btnMatHighlight;
            
            let w = 0.55;
            let h = 0.4;
            let x = startX + col*gapX;
            
            if (row === 4 && col === 0) {
                w = 1.25;
                x = startX + gapX/2;
            } else if (row === 4 && col === 1) {
                continue; 
            } else if (row === 4 && col === 2) {
                x = startX + 2*gapX;
            }
            
            const g = new THREE.BoxGeometry(w, h, 0.15);
            const b = new THREE.Mesh(g, mat);
            b.position.set(x, startY - row*gapY, 0.35);
            
            const edgeG = new THREE.EdgesGeometry(g);
            let eColor = 0x000000;
            let eOpacity = 0.1;
            if(mat === btnMatDark) { eColor = 0xffffff; eOpacity = 0.05; }
            else if(mat === btnMatAccent || mat === btnMatHighlight) { eColor = 0x4a7536; eOpacity = 0.3; }
            
            const edgeM = new THREE.LineBasicMaterial({ color: eColor, transparent: true, opacity: eOpacity });
            const lines = new THREE.LineSegments(edgeG, edgeM);
            b.add(lines);
            
            btnGroup.add(b);
        }
    }
    
    calcGroup.add(body);
    calcGroup.add(frame);
    calcGroup.add(screen);
    calcGroup.add(btnGroup);
    scene.add(calcGroup);
    
    // Particles / Symbols
    const particles: THREE.Sprite[] = [];
    const symbols = [
        'Dr', 'Cr', '=',
        'Σ', 'Δ', '%',
        '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
        'A=L+E', 'R-E', 'EBITDA',
        'TAX', 'CFO', 'NAV',
        'IRR', 'NPV', 'WACC'
    ];
    
    const symbolCount = (sym: string) => {
        if(sym.length > 1) return 5;
        if(['Σ', 'Δ', 'Dr', 'Cr'].includes(sym)) return 4;
        if(['=', '+', '%'].includes(sym)) return 3;
        return 2;
    };
    
    symbols.forEach((sym) => {
        for(let i=0; i < symbolCount(sym); i++) {
            const symCanvas = document.createElement('canvas');
            symCanvas.width = 128;
            symCanvas.height = 128;
            const cx = symCanvas.getContext('2d')!;
            cx.font = 'bold 72px "JetBrains Mono", monospace';
            
            const rand = Math.random();
            let pColor = '#444b41'; 
            if(rand > 0.8) pColor = '#92dc73'; 
            else if(rand > 0.6) pColor = '#e8e4ba'; 
            
            cx.fillStyle = pColor;
            cx.textAlign = 'center';
            cx.textBaseline = 'middle';
            cx.shadowColor = pColor;
            cx.shadowBlur = rand > 0.8 ? 15 : 0;
            cx.fillText(sym, 64, 64);
            
            const tex = new THREE.CanvasTexture(symCanvas);
            const mat = new THREE.SpriteMaterial({ map: tex, transparent: true, opacity: 0.4 + Math.random()*0.5 });
            const sprite = new THREE.Sprite(mat);
            
            const radius = 5 + Math.random() * 16;
            const angle = Math.random() * Math.PI * 2;
            const yOffset = (Math.random() - 0.5) * 24; 
            
            sprite.position.set(
                radius * Math.cos(angle),
                yOffset,
                radius * Math.sin(angle)
            );
            
            const baseScale = sym.length > 1 ? 1.2 : 0.7;
            const scaleModifier = baseScale + Math.random() * 0.6;
            sprite.scale.set(scaleModifier, scaleModifier, scaleModifier);
            
            sprite.userData = {
                baseRadius: radius,
                angle: angle,
                speed: (Math.random() > 0.5 ? 1 : -1) * (0.001 + Math.random() * 0.003),
                yOffset: yOffset,
                bobSpeed: 0.5 + Math.random() * 1.5
            };
            
            scene.add(sprite);
            particles.push(sprite);
        }
    });
    
    // Animation Logic
    const mouse2D = new THREE.Vector2(0, 0);
    const mousePos = new THREE.Vector3(0, 0, 0);
    const targetMousePos = new THREE.Vector3(0, 0, 0);
    const plane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);
    const raycaster = new THREE.Raycaster();
    
    let scrollY = 0;
    
    const handleScroll = () => {
        scrollY = window.scrollY;
    };

    const handleMouseMove = (e: MouseEvent) => {
        mouse2D.x = (e.clientX / window.innerWidth) * 2 - 1;
        mouse2D.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    
    const handleResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);
    
    const clock = new THREE.Clock();
    let animationId: number;
    
    function animate() {
        animationId = requestAnimationFrame(animate);
        const time = clock.getElapsedTime();
        
        raycaster.setFromCamera(mouse2D, camera);
        const intersect = raycaster.ray.intersectPlane(plane, targetMousePos);
        if(intersect) {
            mousePos.lerp(targetMousePos, 0.1);
        }
        
        const scrollOffset = scrollY * 0.0015;
        
        calcGroup.rotation.y += 0.0025;
        calcGroup.rotation.x = Math.sin(time * 0.5) * 0.08;
        calcGroup.rotation.z = Math.cos(time * 0.5) * 0.04;
        calcGroup.position.y = 0.3 + Math.sin(time * 1.2) * 0.3 + scrollOffset;
        
        particles.forEach(p => {
            p.userData.angle += p.userData.speed;
            
            const r = p.userData.baseRadius;
            const tX = r * Math.cos(p.userData.angle);
            const tZ = r * Math.sin(p.userData.angle);
            const tY = p.userData.yOffset + Math.sin(time * p.userData.bobSpeed) * 0.5 + scrollOffset;
            
            const idealPos = new THREE.Vector3(tX, tY, tZ);
            
            const dist = p.position.distanceTo(mousePos);
            const repelRadius = 8;
            if (dist < repelRadius) {
                const pushForce = (repelRadius - dist) * 0.4;
                const pushDir = p.position.clone().sub(mousePos).normalize();
                idealPos.add(pushDir.multiplyScalar(pushForce));
            }
            
            p.position.lerp(idealPos, 0.04);
        });
        
        camera.position.x += (mouse2D.x * 1.5 - camera.position.x) * 0.05;
        camera.position.y += (mouse2D.y * 1.5 - camera.position.y) * 0.05;
        camera.lookAt(0, scrollOffset * 0.5, 0);
        
        renderer.render(scene, camera);
    }
    
    animate();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
      renderer.dispose();
      // Additional cleanup if needed
    };
  }, []);

  return <div ref={containerRef} className="fixed inset-0 z-0 pointer-events-none" />;
}
