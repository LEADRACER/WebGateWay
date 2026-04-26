import { createContext, useContext, useState, useCallback } from 'react'
import { useBuilds } from '../hooks/useBuilds'

const BuildContext = createContext()

export const useBuildContext = () => {
  const context = useContext(BuildContext)
  if (!context) {
    throw new Error('useBuildContext must be used within BuildProvider')
  }
  return context
}

export const BuildProvider = ({ children }) => {
  const {
    builds,
    loading,
    error,
    refetch,
    createBuild,
    updateBuild,
    deleteBuild,
  } = useBuilds()

  const [selectedBuild, setSelectedBuild] = useState(null)
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false)
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)

  const selectBuild = useCallback((build) => {
    setSelectedBuild(build)
  }, [])

  const deselectBuild = useCallback(() => {
    setSelectedBuild(null)
  }, [])

  const openCreateModal = useCallback(() => {
    setIsCreateModalOpen(true)
  }, [])

  const closeCreateModal = useCallback(() => {
    setIsCreateModalOpen(false)
  }, [])

  const openEditModal = useCallback((build) => {
    setSelectedBuild(build)
    setIsEditModalOpen(true)
  }, [])

  const closeEditModal = useCallback(() => {
    setIsEditModalOpen(false)
    setSelectedBuild(null)
  }, [])

  const handleCreateBuild = useCallback(async (buildData) => {
    const result = await createBuild(buildData)
    if (result.success) {
      closeCreateModal()
    }
    return result
  }, [createBuild, closeCreateModal])

  const handleUpdateBuild = useCallback(async (id, buildData) => {
    const result = await updateBuild(id, buildData)
    if (result.success) {
      closeEditModal()
    }
    return result
  }, [updateBuild, closeEditModal])

  const value = {
    builds,
    loading,
    error,
    selectedBuild,
    isCreateModalOpen,
    isEditModalOpen,
    selectBuild,
    deselectBuild,
    openCreateModal,
    closeCreateModal,
    openEditModal,
    closeEditModal,
    createBuild: handleCreateBuild,
    updateBuild: handleUpdateBuild,
    deleteBuild,
    refetch,
  }

  return (
    <BuildContext.Provider value={value}>
      {children}
    </BuildContext.Provider>
  )
}
