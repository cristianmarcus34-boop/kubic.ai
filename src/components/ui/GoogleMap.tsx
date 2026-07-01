'use client'

import { GoogleMap, LoadScript } from '@react-google-maps/api'
import { useEffect, useRef, useState } from 'react'

const mapContainerStyle = {
    width: '100%',
    height: '300px',
}

// 📍 TUS COORDENADAS
const center = {
    lat: -34.776396,
    lng: -58.292202,
}

// ✅ TU MAP ID
const MAP_ID = '40f853c6cf8e593d7952aae9'

const options = {
    disableDefaultUI: true,
    zoomControl: true,
    mapId: MAP_ID,
}

interface GoogleMapProps {
    apiKey: string
}

export default function GoogleMapComponent({ apiKey }: GoogleMapProps) {
    const mapRef = useRef<google.maps.Map | null>(null)
    const markerRef = useRef<google.maps.marker.AdvancedMarkerElement | null>(null)
    const [mapLoaded, setMapLoaded] = useState(false)

    const onLoad = (map: google.maps.Map) => {
        mapRef.current = map
        setMapLoaded(true)
    }

    useEffect(() => {
        if (!mapLoaded || !mapRef.current) return

        let isMounted = true

        const initMarker = async () => {
            try {
                // Importar la librería de marcadores
                const { AdvancedMarkerElement } = (await google.maps.importLibrary('marker')) as google.maps.MarkerLibrary

                if (!isMounted) return

                // Crear el marcador
                const marker = new AdvancedMarkerElement({
                    map: mapRef.current,
                    position: center,
                    title: 'Kubic.ai - Nuestra ubicación',
                })

                markerRef.current = marker
            } catch (error) {
                console.error('Error al crear el marcador avanzado:', error)
                // Fallback: si falla, intentar con Marker tradicional
                try {
                    const { Marker } = await google.maps.importLibrary('marker') as google.maps.MarkerLibrary
                    if (isMounted && mapRef.current) {
                        const fallbackMarker = new Marker({
                            map: mapRef.current,
                            position: center,
                            title: 'Kubic.ai - Nuestra ubicación',
                        })
                        markerRef.current = fallbackMarker as any
                    }
                } catch (fallbackError) {
                    console.error('Error al crear el marcador de respaldo:', fallbackError)
                }
            }
        }

        initMarker()

        return () => {
            isMounted = false
            if (markerRef.current) {
                markerRef.current.map = null
                markerRef.current = null
            }
        }
    }, [mapLoaded])

    return (
        <LoadScript googleMapsApiKey={apiKey}>
            <GoogleMap
                mapContainerStyle={mapContainerStyle}
                center={center}
                zoom={15}
                options={options}
                onLoad={onLoad}
            />
        </LoadScript>
    )
}